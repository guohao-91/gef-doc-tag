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
    component: ComponentCreator('/gef-docs/', 'bd7'),
    routes: [
      {
        path: '/gef-docs/24.4.0',
        component: ComponentCreator('/gef-docs/24.4.0', 'd6d'),
        routes: [
          {
            path: '/gef-docs/24.4.0',
            component: ComponentCreator('/gef-docs/24.4.0', 'a48'),
            routes: [
              {
                path: '/gef-docs/24.4.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/24.4.0/code-recipe/gef-jdbc/', '5fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/24.4.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/24.4.0/code-recipe/gef-report/', 'b32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/24.4.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/24.4.0/code-recipe/gef-ria/', '9f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/25.9.0',
        component: ComponentCreator('/gef-docs/25.9.0', '1e3'),
        routes: [
          {
            path: '/gef-docs/25.9.0',
            component: ComponentCreator('/gef-docs/25.9.0', '786'),
            routes: [
              {
                path: '/gef-docs/25.9.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/25.9.0/code-recipe/gef-jdbc/', '4ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/25.9.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/25.9.0/code-recipe/gef-report/', 'aa7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/25.9.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/25.9.0/code-recipe/gef-ria/', 'c2b'),
                exact: true,
                sidebar: "tutorialSidebar"
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
        component: ComponentCreator('/gef-docs/26.4.0', '45b'),
        routes: [
          {
            path: '/gef-docs/26.4.0',
            component: ComponentCreator('/gef-docs/26.4.0', 'bd5'),
            routes: [
              {
                path: '/gef-docs/26.4.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/26.4.0/code-recipe/gef-jdbc/', '255'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/26.4.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/26.4.0/code-recipe/gef-report/', '0f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/26.4.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/26.4.0/code-recipe/gef-ria/', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/27.2.0',
        component: ComponentCreator('/gef-docs/27.2.0', '187'),
        routes: [
          {
            path: '/gef-docs/27.2.0',
            component: ComponentCreator('/gef-docs/27.2.0', 'd1c'),
            routes: [
              {
                path: '/gef-docs/27.2.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/27.2.0/code-recipe/gef-jdbc/', '4e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/27.2.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/27.2.0/code-recipe/gef-report/', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/27.2.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/27.2.0/code-recipe/gef-ria/', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/28.2.0',
        component: ComponentCreator('/gef-docs/28.2.0', '0c7'),
        routes: [
          {
            path: '/gef-docs/28.2.0',
            component: ComponentCreator('/gef-docs/28.2.0', '7c9'),
            routes: [
              {
                path: '/gef-docs/28.2.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/28.2.0/code-recipe/gef-jdbc/', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/28.2.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/28.2.0/code-recipe/gef-report/', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/28.2.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/28.2.0/code-recipe/gef-ria/', '768'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/gef-docs/3.21.0',
        component: ComponentCreator('/gef-docs/3.21.0', '30e'),
        routes: [
          {
            path: '/gef-docs/3.21.0',
            component: ComponentCreator('/gef-docs/3.21.0', '7b5'),
            routes: [
              {
                path: '/gef-docs/3.21.0/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/3.21.0/code-recipe/gef-jdbc/', '6bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/3.21.0/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/3.21.0/code-recipe/gef-report/', 'a07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/3.21.0/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/3.21.0/code-recipe/gef-ria/', '34e'),
                exact: true,
                sidebar: "tutorialSidebar"
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
        component: ComponentCreator('/gef-docs/', '42e'),
        routes: [
          {
            path: '/gef-docs/',
            component: ComponentCreator('/gef-docs/', '34d'),
            routes: [
              {
                path: '/gef-docs/code-recipe/gef-jdbc/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-jdbc/', 'bfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/code-recipe/gef-report/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-report/', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/gef-docs/code-recipe/gef-ria/',
                component: ComponentCreator('/gef-docs/code-recipe/gef-ria/', 'd5e'),
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
