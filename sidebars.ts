import dipApiSidebar from "./docs/dip-api/sidebar"; // Importiere die generierte Sidebar

const sidebars = {
  userManualSidebar: [
    {
      type: "doc",
      id: "user-manual/overview",
      label: "Overview",
    },
    {
      type: "category",
      label: "Getting Started",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Tutorials",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "user-manual/getting-started/tutorials/user-tutorial-1",
              label: "Tutorial 1",
            },
            {
              type: "doc",
              id: "user-manual/getting-started/tutorials/user-tutorial-2",
              label: "Tutorial 2",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Administration",
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "user-manual/administration/adm-configuration",
          label: "Configuration",
        },
        {
          type: "doc",
          id: "user-manual/administration/adm-installation",
          label: "Installation",
        },
      ],
    },
  ],

  developersSidebar: [
    {
      type: "doc",
      id: "developer-documentation/dev-overview",
      label: "Overview",
    },
    {
      type: "category",
      label: "Deployment",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "developer-documentation/dev-deployment/dev-deploy-intro",
          label: "Deployment Introduction",
        },
      ],
    },
    {
      type: "category",
      label: "Technical",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "developer-documentation/dev-technical/dev-architecture",
          label: "Architecture",
        },
      ],
    },
    {
      type: "category",
      label: "API Documentation",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "developer-documentation/api-documentation/dev-api-intro",
          label: "API Introduction",
        },
        {
          type: "doc",
          id: "developer-documentation/api-documentation/dev-api-endpoints",
          label: "API Endpoints",
        },
        {
          type: "category",
          label: "API Reference",
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "category",
              label: "DIP API Documentation",
              collapsible: true,
              collapsed: true,
              items: dipApiSidebar, // 🚀 OpenAPI Docs werden hier automatisch eingebunden!
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
