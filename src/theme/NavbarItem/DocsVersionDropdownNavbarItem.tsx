import React, {type ReactNode, useMemo, useState} from 'react';
import {
  useVersions,
  useActiveDocContext,
  useDocsVersionCandidates,
  useDocsPreferredVersion,
} from '@docusaurus/plugin-content-docs/client';
import {translate} from '@docusaurus/Translate';
import {useHistory, useLocation} from '@docusaurus/router';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import type {
  Props,
  PropVersions,
  PropVersionItem,
} from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import type {LinkLikeNavbarItemProps} from '@theme/NavbarItem';

declare module '@theme/NavbarItem' {
  interface LinkLikeNavbarItemProps {
    label: string | ReactNode; 
  }
}

import type {
  GlobalVersion,
  GlobalDoc,
  ActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';

type VersionItem = {
  version: GlobalVersion;
  label: string;
};

function getVersionItems(
  versions: GlobalVersion[],
  configs?: PropVersions,
): VersionItem[] {
  if (configs) {
    // Collect all the versions we have
    const versionMap = new Map<string, GlobalVersion>(
      versions.map((version) => [version.name, version]),
    );

    const toVersionItem = (
      name: string,
      config?: PropVersionItem,
    ): VersionItem => {
      const version = versionMap.get(name);
      if (!version) {
        throw new Error(`No docs version exist for name '${name}', please verify your 'docsVersionDropdown' navbar item versions config.
Available version names:\n- ${versions.map((v) => `${v.name}`).join('\n- ')}`);
      }
      return {version, label: config?.label ?? version.label};
    };

    if (Array.isArray(configs)) {
      return configs.map((name) => toVersionItem(name, undefined));
    } else {
      return Object.entries(configs).map(([name, config]) =>
        toVersionItem(name, config),
      );
    }
  } else {
    return versions.map((version) => ({version, label: version.label}));
  }
}

function useVersionItems({
  docsPluginId,
  configs,
}: {
  docsPluginId: Props['docsPluginId'];
  configs: Props['versions'];
}): VersionItem[] {
  const versions = useVersions(docsPluginId);
  return getVersionItems(versions, configs);
}

function getVersionMainDoc(version: GlobalVersion): GlobalDoc {
  return version.docs.find((doc) => doc.id === version.mainDocId)!;
}

function getVersionTargetDoc(
  version: GlobalVersion,
  activeDocContext: ActiveDocContext,
): GlobalDoc {
  // We try to link to the same doc, in another version
  // When not possible, fallback to the "main doc" of the version
  return (
    activeDocContext.alternateDocVersions[version.name] ??
    getVersionMainDoc(version)
  );
}

// The version item to use for the "dropdown button"
function useDisplayedVersionItem({
  docsPluginId,
  versionItems,
}: {
  docsPluginId: Props['docsPluginId'];
  versionItems: VersionItem[];
}): VersionItem {
  // The order of the candidates matters!
  const candidates = useDocsVersionCandidates(docsPluginId);
  const candidateItems = candidates
    .map((candidate) => versionItems.find((vi) => vi.version === candidate))
    .filter((vi) => vi !== undefined);
  return candidateItems[0] ?? versionItems[0]!;
}

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  versions: configs,
  ...props
}: Props): ReactNode {
  const {search, hash} = useLocation();
  const activeDocContext = useActiveDocContext(docsPluginId);
  const {savePreferredVersionName} = useDocsPreferredVersion(docsPluginId);
  const versionItems = useVersionItems({docsPluginId, configs});
  
  const [intentVersionName, setIntentVersionName] = useState<string | null>(null);
  
  const displayedVersionItem = useDisplayedVersionItem({
    docsPluginId,
    versionItems,
  });

  const intentVersionItem = intentVersionName 
    ? versionItems.find(vi => vi.version.name === intentVersionName)
    : null;

  const finalDisplayedItem = intentVersionItem ?? displayedVersionItem;
  const history = useHistory();
  const allVersions = useVersions(docsPluginId);
  const latestVersionName = allVersions[1]?.name;


  function versionItemToLink({
    version,
    label,
  }: VersionItem): LinkLikeNavbarItemProps {
    const targetDoc = getVersionTargetDoc(version, activeDocContext);
    const isDocPage = !!activeDocContext.activeDoc;
    let modifiedLabel: string | ReactNode = label;
    const isLatest = version.name === latestVersionName;
    
    if (isLatest) {
        modifiedLabel = (
            <span style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                {label}
                <img
                    src="/gef-docs/img/version-current.png"
                    alt="Current Version"
                    style={{height: '22px'}}
                />
            </span>
        );
    }
    
    return {
      label: modifiedLabel,
      // preserve ?search#hash suffix on version switches
      to: `${targetDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      // onClick: () => savePreferredVersionName(version.name),
      onClick: (e) => {
        savePreferredVersionName(version.name);

        if (!isDocPage) {
          e.preventDefault();
            const dropdownItem = (e.target as HTMLElement).closest('.dropdown');
            
            if (dropdownItem) {
                dropdownItem.classList.remove('dropdown--open');
                const toggleButton = dropdownItem.querySelector('.navbar__link');
                if (toggleButton) {
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
                const HOVERABLE_CLASS = 'dropdown--hoverable';
                if (dropdownItem.classList.contains(HOVERABLE_CLASS)) {
                    dropdownItem.classList.remove(HOVERABLE_CLASS);
                    setTimeout(() => {
                        if (dropdownItem.isConnected) {
                            dropdownItem.classList.add(HOVERABLE_CLASS);
                        }
                    }, 100); 
                }
            }
            
            window.dispatchEvent(
                new CustomEvent('docusaurus:version-preference-changed', {
                    detail: version.name
                })
            );
            
          setIntentVersionName(version.name);
            
        } else {
            setIntentVersionName(null);
        }
      },
    } as LinkLikeNavbarItemProps;
  }

  const items: LinkLikeNavbarItemProps[] = [
    ...dropdownItemsBefore,
    ...versionItems.map(versionItemToLink),
    ...dropdownItemsAfter,
  ];

  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description:
            'The label for the navbar versions dropdown on mobile view',
        })
      : finalDisplayedItem.label;

  const isLatestDisplayed = finalDisplayedItem.version.name === latestVersionName;

    const finalDropdownLabel = isLatestDisplayed && !mobile
        ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {finalDisplayedItem.label}
                <img 
                    src="/gef-docs/img/version-current.png"
                    alt="Current Version" 
                    style={{ height: '22px' }} 
                />
                <span style={{ 
                    borderTop: '0.4em solid currentColor',
                    borderLeft: '0.4em solid transparent',
                    borderRight: '0.4em solid transparent',
                    borderBottom: '0', 
                    content: '""', 
                    display: 'inline-block',
                    marginLeft: '0.3em',
                    lineHeight: 1, 
                }} />
            </span>
          )
        : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {dropdownLabel}
                <span style={{ 
                    borderTop: '0.4em solid currentColor',
                    borderLeft: '0.4em solid transparent',
                    borderRight: '0.4em solid transparent',
                    borderBottom: '0', 
                    content: '""', 
                    display: 'inline-block',
                    marginLeft: '0.3em',
                    lineHeight: 1, 
                }} />
            </span>
          ); // 否?使用原始的 dropdownLabel
  
  
const {pathname} = useLocation(); // 引入 useLocation
  const isDocPage = !!activeDocContext.activeDoc;
  // const dropdownTo =
  //   mobile && items.length > 1
  //     ? undefined
  //     : getVersionTargetDoc(finalDisplayedItem.version, activeDocContext)
  //         .path;
const dropdownTo = useMemo(() => {
    if (isDocPage && !mobile && items.length > 1) {
      return getVersionTargetDoc(finalDisplayedItem.version, activeDocContext).path;
    }
    return undefined;
  }, [isDocPage, mobile, items.length, finalDisplayedItem.version, activeDocContext, pathname]);
    
  // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown
  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={finalDropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }
  
  return (
        <DropdownNavbarItem
          {...props}
          mobile={mobile}
          label={finalDropdownLabel}
          to={dropdownTo}
          items={items}
          isActive={dropdownActiveClassDisabled ? () => false : undefined}
        />
  );
}
