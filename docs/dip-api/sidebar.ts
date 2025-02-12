import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "dip-api/nimbit-data-ingestion-pipeline",
    },
    {
      type: "category",
      label: "Message Formatters",
      items: [
        {
          type: "doc",
          id: "dip-api/message-formatter-controller-create-message-formatter",
          label: "MessageFormatterController_createMessageFormatter",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "dip-api/message-formatter-controller-find-message-formatters",
          label: "MessageFormatterController_findMessageFormatters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dip-api/message-formatter-controller-find-active-message-formatters",
          label: "MessageFormatterController_findActiveMessageFormatters",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dip-api/message-formatter-controller-find-message-formatter-by-id",
          label: "MessageFormatterController_findMessageFormatterById",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data Input",
      items: [
        {
          type: "doc",
          id: "dip-api/data-input-controller-post-data",
          label: "DataInputController_postData",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
