import React, { useState } from "react";
import clsx from "clsx";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

/** Markdown copy written by plugins/llms.js next to every page. */
function markdownUrl(permalink: string): string {
  return permalink.endsWith("/") ? `${permalink}index.md` : `${permalink}.md`;
}

/** Assistants that take a prompt in the URL; the prompt points them at the page's Markdown copy. */
const ASSISTANTS = [
  { name: "Claude", url: (q: string) => `https://claude.ai/new?q=${q}` },
  { name: "ChatGPT", url: (q: string) => `https://chatgpt.com/?q=${q}` },
];

/** Copies the page's Markdown, so it can be pasted into any assistant. */
function CopyMarkdown({ href, className }: { href: string; className: string }): React.JSX.Element {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error(String(res.status));
      await navigator.clipboard.writeText(await res.text());
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2000);
  };
  return (
    <button type="button" onClick={copy} className={clsx(className, "cursor-pointer border-0 bg-transparent p-0 text-left font-[inherit] text-[length:inherit]")}>
      {state === "copied" ? (
        <Translate id="doc.footer.copied">Copied</Translate>
      ) : state === "failed" ? (
        <Translate id="doc.footer.copyFailed">Couldn't copy</Translate>
      ) : (
        <Translate id="doc.footer.copy">Copy page as Markdown</Translate>
      )}
    </button>
  );
}

/** Page actions: the Markdown copy, assistants, "Report a problem". In the side rail on desktop, under the page on phones. */
export function DocActions({ className }: { className?: string }): React.JSX.Element {
  const { metadata } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const md = markdownUrl(metadata.permalink);
  const subject = encodeURIComponent(`Docs: ${metadata.title}`);
  const body = encodeURIComponent(`Page: ${siteConfig.url}${metadata.permalink}\n\nWhat's wrong or missing:\n`);
  const prompt = encodeURIComponent(
    translate(
      { id: "doc.footer.prompt", message: "Read {url} so I can ask you questions about it." },
      { url: `${siteConfig.url}${md}` },
    ),
  );
  const link = "text-[var(--docs-color-text-100)]! no-underline hover:text-[var(--ifm-color-primary)]! hover:no-underline";
  return (
    <div className={className}>
      <a className={link} href={md} target="_blank" rel="noopener">
        <Translate id="doc.footer.markdown">View as Markdown</Translate>
      </a>
      <CopyMarkdown href={md} className={link} />
      {ASSISTANTS.map((a) => (
        <a key={a.name} className={link} href={a.url(prompt)} target="_blank" rel="noopener noreferrer">
          <Translate id="doc.footer.openIn" values={{ name: a.name }}>
            {"Open in {name}"}
          </Translate>
        </a>
      ))}
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
