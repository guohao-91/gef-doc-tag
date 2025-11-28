import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useCallback } from 'react';



function GefHomepage() {
  const {siteConfig} = useDocusaurusContext();


  const handleClassClick = useCallback((event) => {


    const targetElement = event.target.closest('.tab');
    if (targetElement) {

      const tabs = document.querySelectorAll('.tab');
      const tabContents = document.querySelectorAll('.tab-content');

      // Initialize tabs - set Overview tab as active by default
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      const tabId = targetElement.id;
      document.getElementById(tabId)?.classList.add('active');
      const contentId = tabId.replace('-tab', '-content');
      document.getElementById(contentId)?.classList.add('active');
    }

  }, []);


  return (
      <header >

        <div className="content-wrapper">
          {/*<aside>*/}
          
          {/*  <div className="projects-nav">*/}
          {/*    <ul className="project-list">*/}
          {/*      <li><img title="gefIcon" src="/gef-docs/img/gef_icon.png" style={{width:'250px', marginLeft:'-30px'}}></img></li>*/}
          {/*      <li className="active">*/}
          {/*        <div style={{display: 'flex'}}><a href="#">25.9.0</a>*/}
          {/*          <div className="version-status current" style={{margin:'10px 0px 10px 0px' }}>CURRENT</div>*/}
          {/*        </div>*/}
          {/*      </li>*/}
          {/*      <li><a href="#">24.4.0</a>*/}
          {/*        <div style={{display: 'flex'}}><a href="#">24.4.0</a>*/}
          {/*          <div className="version-status current" style={{margin:'10px 0px 10px 0px' }}>CURRENT</div>*/}
          {/*        </div></li>*/}
          {/*      <li><a href="#">3.21.0.0</a></li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</aside>*/}
          <main>
            <div className="project-header">
              <div className="project-title">
                <img title="gefIcon" src="/gef-docs/img/gef_icon.png" style={{width:'250px', marginLeft:'-30px'}}></img>
                  <h1>GreenEARTH Framework </h1>
              </div>
            </div>

            <div className="tabs" onClick={handleClassClick}>
              <div className="tab active" id="overview-tab">インストールガイド</div>
              <div className="tab" id="learn-tab">コンセプトガイド</div>
              <div className="tab" id="api-tab">API Doc</div>
            </div>

            <div className="tab-content active" id="overview-content">
              <section className="documentation">
                <div className="version-table">
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/install-guide/gef-installation-guide-smart-client" className="doc-link">GreenEARTH
                      Smart Client Framework Installation Guide 24.4.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/install-guide/gef-develop-installation-guide-rich" className="doc-link">GreenEARTH
                      Framework Develop Environment Installation Guide (Rich) 24.4.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/install-guide/gef-develop-installation-guide-web" className="doc-link">GreenEARTH
                      Framework Develop Environment Installation Guide (Web) 24.4.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/install-guide/gef-installation-guide-apache-tomcat-oracle" className="doc-link">GreenEARTH
                     Framework Installation Guide (Apache・Tomcat・Oracle) 24.4.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/install-guide/gef-installation-guide-apache-wildfly-mysql" className="doc-link">GreenEARTH
                     Framework Installation Guide (Apache・WildFly・MySQL)  24.4.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/install-guide/gef-installation-guide-ohs-weblogic-oracle" className="doc-link">GreenEARTH
                      Framework Installation Guide (OHS・WebLogic・Oracle) 24.4.0</a></div>
                  </div>
                </div>
              </section>
            </div>

            <div className="tab-content" id="learn-content">
              <section className="documentation">
                <div className="version-table">
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/concept-guide/gef-core"  className="doc-link">GreenEARTH
                      Core Framework Concept Guide 3.21.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/concept-guide/gef-dataAccess" className="doc-link">GreenEARTH
                      Data Access Framework Concept Guide 3.21.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/concept-guide/gef-jdbc" className="doc-link">GreenEARTH
                      JDBC Framework Concept Guide 3.21.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/concept-guide/gef-MVC" className="doc-link">GreenEARTH
                      MVC Framework Concept Guide 3.21.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/concept-guide/gef-RIA" className="doc-link">GreenEARTH
                      RIA Client Framework Concept Guide 3.21.0</a></div>
                  </div>
                  <div className="version-row">
                    <div className="version-docs"><a href="/gef-docs/3.21.0/concept-guide/gef-freeQueryExport" className="doc-link">GreenEARTH
                      Free Query Export Concept Guide 3.21.0</a></div>
                  </div>
                </div>
              </section>
            </div>

            <div className="tab-content" id="api-content">
              <section className="documentation">
                <div className="version-table">
                  <div className="version-row">
                    <div className="version-docsR">
                      <a href="/gef-docs/gef-api?module=core&version=321" className="doc-link">GreenEARTH Core Framework API Doc 25.9</a>
                    </div>
                  </div>
                  <div className="version-row">
                    <div className="version-docsR">
                      <a href="/gef-docs/gef-api?module=auth&version=321" className="doc-link">GreenEARTH Auth Framework API Doc 25.9</a>
                    </div>
                  </div>
                  <div className="version-row">
                    <div className="version-docsR">
                      <a href="/gef-docs/gef-api?module=mvc&version=321" className="doc-link">GreenEARTH MVC Framework API Doc 25.9</a>
                    </div>
                  </div>
                  <div className="version-row">
                    <div className="version-docsR">
                      <a href="/gef-docs/gef-api?module=jdbc&version=321" className="doc-link">GreenEARTH JDBC Framework API Doc 25.9</a>
                    </div>
                  </div>
                  <div className="version-row">
                    <div className="version-docsR">
                      <a href="/gef-docs/gef-api?module=ri&version=321" className="doc-link">GreenEARTH RIA Framework API Doc 25.9</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

          </main>
        </div>
      </header>
  );
}

export default function Home321(): ReactNode {
  return (
        <GefHomepage />
  );
}
