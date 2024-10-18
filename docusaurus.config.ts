import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NimBit Documentation',
  tagline: 'Learn how NimBit build it\'s IoT solution.',
  favicon: 'img/favicon-cpars.ico',

  // Set the production url of your site here
  url: 'https://cparsinnovationlab.bitbucket.io',
  baseUrl: '/nimbit',

  organizationName: 'C.PARS GmbH', // Usually your GitHub org/user name.
  projectName: 'nimbit-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://cparsinnovationlab.bitbucket.io/nimbit',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://cparsinnovationlab.bitbucket.io/nimbit',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DOCS',
      logo: {
        alt: 'C.PARS Logo',
        src: 'img/cpars-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/ai', label: 'AI', position: 'left'},  // New AI menu item
        {
          href: 'https://bitbucket.org/cparsinnovationlab/nimbit-docs',
          label: 'Bitbucket',
          position: 'right',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'C.PARS Portal',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Cpars Innovation Lab',
              href: 'https://bitbucket.org/cparsinnovationlab/nimbit-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NimBit GmbH. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
