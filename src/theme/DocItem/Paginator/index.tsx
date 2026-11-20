import React from "react";
import Paginator from "@theme-original/DocItem/Paginator";
import { useDoc } from "@docusaurus/plugin-content-docs/client";

/** Previous/Next only makes sense where pages are read in order: tutorials. */
export default function PaginatorWrapper(): React.JSX.Element | null {
  const { frontMatter } = useDoc();
  if ((frontMatter as { type?: string }).type !== "tutorial") return null;
  return <Paginator />;
}
