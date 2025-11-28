import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'GreenEARTH Framework ドキュメント',
  tagline: 'Dinosaurs are cool', 
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  baseUrl: '/gef-docs/',

  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // path: 'reference',
          routeBasePath: '',
          sidebarPath: './sidebars.ts',
          versions: {
            '24.4.0': {
                label: '24.4.0',
                badge:false,
            },
            '3.21.0': {
                label: '3.21.0',
                badge:false,
                // banner:'none'
            },
          },
        },
        theme: {
          customCss: './static/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    breadcrumbs: {
      showHomeIcon: true,
      homeIcon: {
        className: 'custom - home - icon' 
      }
    },
    navbar: {
      title: 'GreenEARTH Framework ドキュメント',
      logo: {
        src: 'img/gef_icon.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          versions: {
            '24.4.0': {label: '24.4.0'},
            '3.21.0': {label: '3.21.0'},
          },
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java','properties'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
