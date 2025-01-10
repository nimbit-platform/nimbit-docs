import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "NimBit Documentation",
  tagline: "Learn how NimBit build it's IoT solution.",
  favicon: "img/favicon-cpars.ico",

  // Set the production url of your site here
  url: "https://cparsinnovationlab.bitbucket.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/nimbit",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Nimbit GmbH", // Usually your GitHub org/user name.
  projectName: "nimbit-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
        path: 'en',
        label: "English",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      de: {
        htmlLang: "de-DE",
        path: 'de',
        label: "Deutsch",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://cparsinnovationlab.bitbucket.io/nimbit",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://cparsinnovationlab.bitbucket.io/nimbit",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "Logo",
        src: "img/nimbit.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Tutorial",
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/ai', label: 'AI', position: 'left'},  // New AI menu item
        {
          to: "/docs/databases/Introduction",
          label: "Databases",
          position: "right",
        },
        {
          href: "https://bitbucket.org/cparsinnovationlab/nimbit-docs",
          label: "Bitbucket",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "C.PARS Portal",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Cpars Innovation Lab",
              href: "https://bitbucket.org/cparsinnovationlab/nimbit-docs",
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
