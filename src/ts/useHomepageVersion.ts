import {
  useDocsPreferredVersion,
  useVersions,
  type GlobalVersion,
} from '@docusaurus/plugin-content-docs/client';
import { useMemo } from 'react';

const DOCS_PLUGIN_ID = 'default';

export function useHomepageVersion(): { currentVersionName: string | null; allVersions: GlobalVersion[] } {
  
  let preferredVersionName: string | null = null;
  let allVersions: GlobalVersion[] = [];
  
  try {
      const preferredVersion = useDocsPreferredVersion(DOCS_PLUGIN_ID);
      preferredVersionName = preferredVersion?.preferredVersionName ?? null;
      
  } catch (e) {
  }
  
  try {
    allVersions = useVersions(DOCS_PLUGIN_ID);
  } catch (e) {
  }

  const currentVersionName = useMemo(() => {
    if (preferredVersionName) {
      return preferredVersionName;
    }
    if (allVersions.length > 0) {
      return allVersions[0].name; 
    }
    
    return '24.4.0';
  }, [preferredVersionName, allVersions]);
  return { currentVersionName, allVersions };
}