import React from "react";
import clsx from "clsx";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from "@docusaurus/Translate";

/** Markdown copy written by plugins/llms.js next to every page. */
function markdownUrl(permalink: string): string {
  return permalink.endsWith("/") ? `${permalink}index.md` : `${permalink}.md`;
}

/** "View as Markdown" and "Report a problem": in the side rail on desktop, under the page on phones. */
export function DocActions({ className }: { className?: string }): React.JSX.Element {
  const { metadata } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const isGenerated = metadata.id.startsWith("api/reference/");
  const subject = encodeURIComponent(`Docs: ${metadata.title}`);
  const body = encodeURIComponent(`Page: ${siteConfig.url}${metadata.permalink}\n\nWhat's wrong or missing:\n`);
  const link = "text-[var(--docs-color-text-100)]! no-underline hover:text-[var(--ifm-color-primary)]! hover:no-underline";
  return (
    <div className={className}>
      {!isGenerated && (
        <a className={link} href={markdownUrl(metadata.permalink)} target="_blank" rel="noopener">
          <Translate id="doc.footer.markdown">View as Markdown</Translate>
        </a>
      )}
      <a className={link} href={`mailto:info@nimbit.de?subject=${subject}&body=${body}`}>
        <Translate id="doc.footer.report">Report a problem with this page</Translate>
      </a>
    </div>
  );
}

/** The date moved to the page header; on phones the rail is gone, so the actions sit here. */
export default function DocItemFooter(): React.JSX.Element {
  return (
    <DocActions
      className={clsx(
        "mt-12 flex flex-wrap gap-x-6 gap-y-2 border-0 border-t border-dashed border-[var(--nb-dash)] pt-5 text-[13px] min-[997px]:hidden",
      )}
    />
  );
}
