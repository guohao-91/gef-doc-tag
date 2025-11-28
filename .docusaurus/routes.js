import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gef-docs/gef-api',
    component: ComponentCreator('/gef-docs/gef-api', '061'),
    exact: true
  },
  {
    path: '/gef-docs/HomePage_v244',
    component: ComponentCreator('/gef-docs/HomePage_v244', 'fcf'),
    exact: true
  },
  {
    path: '/gef-docs/HomePage_v321',
    component: ComponentCreator('/gef-docs/HomePage_v321', '182'),
    exact: true
  },
  {
    path: '/gef-docs/',
    component: ComponentCreator('/gef-docs/', '3a8'),
    exact: true
  },
  {
    path: '/gef-docs/',
    component: ComponentCreator('/gef-docs/', 'aa8'),
    routes: [
      {
        path: '/gef-docs/24.4.0',
        component: ComponentCreator('/gef-docs/24.4.0', '1aa'),
        routes: [
          {
            path: '/gef-docs/24.4.0',
            component: ComponentCreator('/gef-docs/24.4.0', '031'),
            routes: [
              {
                path: '/gef-docs/24.4.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/24.4.0/code-recipe/gef-jdbc/', '93c'),
                exact: true,
                sidebar: "codeRecipeJdbcSidebar"
              },
              {
                path: '/gef-docs/24.4.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/24.4.0/code-recipe/gef-report/', '793'),
                exact: true,
                sidebar: "codeRecipeReportSidebar"
              },
              {
                path: '/gef-docs/24.4.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/24.4.0/code-recipe/gef-ria/', '35f'),
                exact: true,
                sidebar: "codeRecipeRoaSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/25.9.0',
        component: ComponentCreator('/gef-docs/25.9.0', 'f78'),
        routes: [
          {
            path: '/gef-docs/25.9.0',
            component: ComponentCreator('/gef-docs/25.9.0', '2a6'),
            routes: [
              {
                path: '/gef-docs/25.9.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/25.9.0/code-recipe/gef-jdbc/', 'b37'),
                exact: true
              },
              {
                path: '/gef-docs/25.9.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/25.9.0/code-recipe/gef-report/', '403'),
                exact: true
              },
              {
                path: '/gef-docs/25.9.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/25.9.0/code-recipe/gef-ria/', 'e02'),
                exact: true
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/3.21.0',
        component: ComponentCreator('/gef-docs/3.21.0', 'ca9'),
        routes: [
          {
            path: '/gef-docs/3.21.0',
            component: ComponentCreator('/gef-docs/3.21.0', 'da9'),
            routes: [
              {
                path: '/gef-docs/3.21.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/3.21.0/code-recipe/gef-jdbc/', 'fb3'),
                exact: true,
                sidebar: "codeRecipeJdbcSidebar"
              },
              {
                path: '/gef-docs/3.21.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/3.21.0/code-recipe/gef-report/', '15d'),
                exact: true,
                sidebar: "codeRecipeReportSidebar"
              },
              {
                path: '/gef-docs/3.21.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/3.21.0/code-recipe/gef-ria/', '0ad'),
                exact: true,
                sidebar: "codeRecipeRoaSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/next',
        component: ComponentCreator('/gef-docs/next', '47e'),
        routes: [
          {
            path: '/gef-docs/next',
            component: ComponentCreator('/gef-docs/next', '056'),
            routes: [
              {
                path: '/gef-docs/next/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/next/code-recipe/gef-jdbc/', '896'),
                exact: true
              },
              {
                path: '/gef-docs/next/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/next/code-recipe/gef-report/', '131'),
                exact: true
              },
              {
                path: '/gef-docs/next/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/next/code-recipe/gef-ria/', 'dc1'),
                exact: true
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/',
        component: ComponentCreator('/gef-docs/', '652'),
        routes: [
          {
            path: '/gef-docs/',
            component: ComponentCreator('/gef-docs/', '61c'),
            routes: [
              {
                path: '/gef-docs/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-jdbc/', '94b'),
                exact: true
              },
              {
                path: '/gef-docs/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-report/', '38f'),
                exact: true
              },
              {
                path: '/gef-docs/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-ria/', 'fb9'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
