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
    component: ComponentCreator('/gef-docs/', 'b41'),
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
        path: '/gef-docs/26.10.0',
        component: ComponentCreator('/gef-docs/26.10.0', 'bb8'),
        routes: [
          {
            path: '/gef-docs/26.10.0',
            component: ComponentCreator('/gef-docs/26.10.0', '19e'),
            routes: [
              {
                path: '/gef-docs/26.10.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/26.10.0/code-recipe/gef-jdbc/', '3da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/26.10.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/26.10.0/code-recipe/gef-report/', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/26.10.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/26.10.0/code-recipe/gef-ria/', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/26.4.0',
        component: ComponentCreator('/gef-docs/26.4.0', '628'),
        routes: [
          {
            path: '/gef-docs/26.4.0',
            component: ComponentCreator('/gef-docs/26.4.0', '71d'),
            routes: [
              {
                path: '/gef-docs/26.4.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/26.4.0/code-recipe/gef-jdbc/', 'e1b'),
                exact: true
              },
              {
                path: '/gef-docs/26.4.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/26.4.0/code-recipe/gef-report/', '247'),
                exact: true
              },
              {
                path: '/gef-docs/26.4.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/26.4.0/code-recipe/gef-ria/', '7de'),
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
        component: ComponentCreator('/gef-docs/next', 'ab0'),
        routes: [
          {
            path: '/gef-docs/next',
            component: ComponentCreator('/gef-docs/next', '5a5'),
            routes: [
              {
                path: '/gef-docs/next/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/next/code-recipe/gef-jdbc/', 'a1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/next/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/next/code-recipe/gef-report/', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/next/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/next/code-recipe/gef-ria/', '040'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/',
        component: ComponentCreator('/gef-docs/', '5c1'),
        routes: [
          {
            path: '/gef-docs/',
            component: ComponentCreator('/gef-docs/', 'f18'),
            routes: [
              {
                path: '/gef-docs/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-jdbc/', '66a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-report/', 'ad5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-ria/', 'dde'),
                exact: true,
                sidebar: "tutorialSidebar"
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
