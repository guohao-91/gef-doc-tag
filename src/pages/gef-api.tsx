import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import {useLocation} from "@docusaurus/router";

const MODULE_MAP: Record<string, string> = {
  'auth': 'gef-auth',
  'core': 'gef-core',
  'em': 'gef-em',
  'ex': 'gef-ex',
  'fqe-core': 'gef-gef-fqe-core',
  'fqe-ria': 'gef-gef-fqe-ria',
  'jdbc': 'gef-jdbc',
  'mvc': 'gef-mvc',
  'report': 'gef-report',
  'ria': 'gef-ria',
  'spa': 'gef-spa',
  'spa-security': 'gef-spa-security',
  'xrmi': 'gef-xrmi',
};
const VER_MAP: Record<string, string> = {
  '244': '/current',
  '321': '/3.21.0',
  'default': '/current', 
};
const NOT_FOUND_IFRAME_SRC = '/gef-docs/404-iframe.html';
const MAGIC_API_STRING = '<meta name="generator" content="javadoc/PackageIndexWriter">';

function ApiReferencePage() {
    
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const moduleName = queryParams.get('module'); 
  const verName = queryParams.get('version'); 
  
  const MODULE_DOCS_URL = moduleName && MODULE_MAP[moduleName] 
    ? MODULE_MAP[moduleName] 
    : MODULE_MAP['default'];
  
    
  const VER_DOCS_URL = verName && VER_MAP[verName] 
    ? VER_MAP[verName] 
    : VER_MAP['default'];
  
    
  const API_DOCS_URL = '/gef-docs/api' + VER_DOCS_URL + '/' + MODULE_DOCS_URL + '/index.html'
    
  console.log("API_DOCS_URL" + API_DOCS_URL)
    
  const [isClient, setIsClient] = useState(false);
    const [iframeSrc, setIframeSrc] = useState('');
    
  
  useEffect(() => {
      setIsClient(true);
      
    if (API_DOCS_URL === NOT_FOUND_IFRAME_SRC) {
      setIframeSrc(NOT_FOUND_IFRAME_SRC);
      return;
    }

    fetch(API_DOCS_URL)
      .then(async response => {
          if (!response.ok) {
              setIframeSrc(NOT_FOUND_IFRAME_SRC);
          }
          const text = await response.text();
          if (text.includes(MAGIC_API_STRING)) {
              setIframeSrc(API_DOCS_URL);
          } else {
              setIframeSrc(NOT_FOUND_IFRAME_SRC);
          }
          console.log("API_DOCS_URL" + API_DOCS_URL)
          
      })
      .catch(error => {
        setIframeSrc(NOT_FOUND_IFRAME_SRC);
      });
  }, [API_DOCS_URL]);
  
  if (!isClient || iframeSrc === '') {
        return (
            <Layout title="API Reference" description="Embedded API Documentation">
                <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>
            </Layout>
        );
    }
    
  return (
    <Layout
      title="API Reference"
      description="Embedded API Documentation"
    >
      <div className="api-wrapper">
        <iframe
          key={iframeSrc}
          src={iframeSrc}
          style={{
            width: '100%',
            height: 'calc(100vh - 100px)',
            border: 'none',
            display: 'block',
          }}
          title="Static API Documentation"
          loading="lazy"
        >
            <span value={API_DOCS_URL}>{API_DOCS_URL}</span>
        </iframe>
      </div>
    </Layout>
  );
}

export default ApiReferencePage;