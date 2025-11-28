import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useActiveDocContext, useDocsPreferredVersion} from "@docusaurus/plugin-content-docs/client";

import Home321 from './HomePage_v321'; 
import Home249 from './HomePage_v244';
import {useHomepageVersion} from "@site/src/ts/useHomepageVersion"; 

const VERSION_COMPONENT_MAP: Record<string, React.FC<any>> = {
    '24.4.0': Home249,
    '3.21.0': Home321,
    'current': Home249,
};

const DEFAULT_HOME_COMPONENT = Home249;
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handler = () => {
        setRefreshKey(prev => prev + 1);
    };
    window.addEventListener('docusaurus:version-preference-changed', handler);
    return () => {
      window.removeEventListener('docusaurus:version-preference-changed', handler);
    };
  }, []);

  const { currentVersionName } = useHomepageVersion();
  const { currentVersionName: initialVersionName } = useHomepageVersion();
  const [versionToDisplay, setVersionToDisplay] = useState(initialVersionName);
  
  useEffect(() => {
      const handler = (e) => {
          setVersionToDisplay(e.detail);
      };
      window.addEventListener('docusaurus:version-preference-changed', handler);
      setVersionToDisplay(initialVersionName);
      return () => {
        window.removeEventListener('docusaurus:version-preference-changed', handler);
      };
  }, [initialVersionName]); 
  
  const CurrentHomeComponent = useMemo(() => {
      if (versionToDisplay && VERSION_COMPONENT_MAP[versionToDisplay]) {
          return VERSION_COMPONENT_MAP[versionToDisplay];
      }
      return DEFAULT_HOME_COMPONENT;
  }, [versionToDisplay]); 

  return (
      <Layout
          title={`${siteConfig.title}`}
          description="Description will go into a meta tag in <head />">
        <main>
            <CurrentHomeComponent />
        </main>
      </Layout>
  );
}