import React, { useMemo } from "react";
import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import { customCss } from "./customCss";

/** Code sample clients to offer: curl, Python (requests) and Node.js (fetch). Everything else is hidden. */
const hiddenClients = {
  c: true,
  clojure: true,
  csharp: true,
  dart: true,
  fsharp: true,
  go: true,
  http: true,
  java: true,
  js: true,
  julia: true,
  kotlin: true,
  objc: true,
  ocaml: true,
  php: true,
  powershell: true,
  r: true,
  ruby: true,
  rust: true,
  swift: true,
  shell: ["libcurl", "httpie", "wget"],
  python: ["python3", "aiohttp", "httpx_sync", "httpx_async"],
  node: ["axios", "ofetch", "undici"],
};

export default function Scalar({ specUrl, dark }: { specUrl: string; dark: boolean }): React.JSX.Element {
  const configuration = useMemo(
    () => ({
      url: specUrl,
      layout: "modern" as const,
      theme: "none" as const,
      customCss,
      withDefaultFonts: false,
      // The docs follow the site's colour mode; Scalar must not bring its own toggle.
      forceDarkModeState: dark ? ("dark" as const) : ("light" as const),
      hideDarkModeToggle: true,
      // The specs name relative servers or localhost, so "Try it" cannot reach a real host from a static site.
      hideTestRequestButton: true,
      // Samples use a placeholder host the reader replaces with their own.
      servers: [{ url: "https://YOUR-HOST" }],
      hiddenClients,
      defaultHttpClient: { targetKey: "shell", clientKey: "curl" },
      hideClientButton: true,
      showDeveloperTools: "never" as const,
      showToolbar: "never" as const,
      telemetry: false,
      mcp: { disabled: true },
      hideDownloadButton: false,
      documentDownloadType: "direct" as const,
      persistAuth: false,
    }),
    [specUrl, dark],
  );
  return <ApiReferenceReact configuration={configuration as never} />;
}
