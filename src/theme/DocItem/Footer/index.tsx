import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof FooterType>;

/** Markdown copy written by plugins/llms.js next to every page. */
function markdownUrl(permalink: string): string {
  return permalink.endsWith("/") ? `${permalink}index.md` : `${permalink}.md`;
}

export default function FooterWrapper(props: Props): React.JSX.Element {
  const { metadata } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const isGenerated = metadata.id.startsWith("api/reference/");
  const subject = encodeURIComponent(`Docs: ${metadata.title}`);
  const body = encodeURIComponent(`Page: ${siteConfig.url}${metadata.permalink}\n\nWhat's wrong or missing:\n`);
  return (
    <>
      <Footer {...props} />
      <div className={styles.actions}>
        {!isGenerated && (
          <a href={markdownUrl(metadata.permalink)} target="_blank" rel="noopener">
            View as Markdown
          </a>
        )}
        <a href={`mailto:info@nimbit.de?subject=${subject}&body=${body}`}>Report a problem with this page</a>
      </div>
    </>
  );
}
