import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Redocusaurus from "redocusaurus";
import path from "path";

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
        path: "en",
        label: "English",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      de: {
        htmlLang: "de-DE",
        path: "de",
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
    [
      "redocusaurus",
      {
        config: path.join(__dirname, "redocly.yaml"),
        // Plugin Options for loading OpenAPI files
        openapi: {
          path: "openapi",
          routeBasePath: "/apis/",
        },
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          // {
          //   // Redocusaurus will automatically bundle your spec into a single file during the build
          //   spec: 'openapi/index.yaml',
          //   route: '/api/',
          // },
          // You can also pass it a OpenAPI spec URL
          {
            id: "dip-remote",
            spec: "https://nightly.nimbit.de/dip/api-json",
            route: "/apis/dip/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  themeConfig: {

    algolia: {
      // The application ID provided by Algolia
      appId: 'YW66QXP0SL',

      // Public API key: it is safe to commit it
      apiKey: '5adc7bceb43e099eaffc1bacb8b62f2d',

      indexName: 'nimbit',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
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
          to: "/docs/ai/getting-started/Introduction",
          label: "AI",
          position: "left",
          sidebarId: "aiSidebar",
        },
        {
          label: "Apis",
          position: "left",
          items: [
            {
              label: "DIP - Data Integration Pipeline",
              to: "/apis/dip",
            },
          ],
        }, // New AI menu item
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Tutorial",
        },

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
      copyright: `Copyright © ${new Date().getFullYear()} NimBit GmbH.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
