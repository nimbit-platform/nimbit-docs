import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useWindowSize } from "@docusaurus/theme-common";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { useDoc, useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import ContentVisibility from "@theme/ContentVisibility";
import type { Props } from "@theme/DocItem/Layout";
import { ArrowRight } from "lucide-react";
import { useAppHref } from "@site/src/lib/appUrl";
import { DocActions } from "@site/src/theme/DocItem/Footer";

/** Page types from docs-spec/WRITING.md. Landing pages show their section instead. */
export function useTypeLabel(type?: string): string | undefined {
  switch (type) {
    case "tutorial":
      return translate({ id: "doc.type.tutorial", message: "Tutorial" });
    case "how-to":
      return translate({ id: "doc.type.how-to", message: "How-to" });
    case "concept":
      return translate({ id: "doc.type.concept", message: "Concept" });
    case "reference":
      return translate({ id: "doc.type.reference", message: "Reference" });
    default:
      return undefined;
  }
}

type DocFrontMatter = {
  type?: string;
  untranslated?: boolean;
  app?: { routes?: string[]; tour?: string };
};

function formatDate(ms?: number): string | undefined {
  if (!ms) return undefined;
  const d = new Date(ms);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getUTCDate())}.${p(d.getUTCMonth() + 1)}.${d.getUTCFullYear()}`;
}

function Languages() {
  const { i18n } = useDocusaurusContext();
  const alternate = useAlternatePageUtils();
  return (
    <span>
      {i18n.locales.map((locale, i) => (
        <React.Fragment key={locale}>
          {i > 0 && " · "}
          {locale === i18n.currentLocale ? (
            <span className="text-[var(--ifm-font-color-base)]">{locale.toUpperCase()}</span>
          ) : (
            <a href={alternate.createUrl({ locale, fullyQualified: false })} hrefLang={locale}>
              {locale.toUpperCase()}
            </a>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}

/** The design's article header: bracketed type and path, title, then a meta row. */
function DocHero() {
  const { metadata, frontMatter } = useDoc();
  const fm = frontMatter as DocFrontMatter;
  const crumbs = useSidebarBreadcrumbs() ?? [];
  const parents = crumbs.slice(0, -1);
  const typeLabel = useTypeLabel(fm.type);
  const updated = formatDate(metadata.lastUpdatedAt ?? undefined);
  return (
    <header className="nb-doc-hero">
      <div aria-hidden="true" className="nb-grid nb-grid-hero absolute inset-0" />
      <div className="relative flex max-w-[860px] flex-col gap-[18px]">
        <nav
          aria-label={translate({ id: "theme.docs.breadcrumbs.navAriaLabel", message: "Breadcrumbs" })}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--docs-color-text-100)]"
        >
          {typeLabel && <span className="text-[var(--nb-tag)]">[ {typeLabel} ]</span>}
          {parents.map((c, i) => (
            <React.Fragment key={i}>
              {(typeLabel || i > 0) && " · "}
              {!typeLabel && i === 0 ? (
                <span className="text-[var(--nb-tag)]">[ {c.label} ]</span>
              ) : c.href ? (
                <Link to={c.href} className="text-[var(--docs-color-text-100)]! hover:text-[var(--ifm-color-primary)]!">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        <h1 className="nb-doc-title">{metadata.title}</h1>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--docs-color-text-100)]">
          {updated && (
            <span>
              <Translate id="doc.meta.updated" values={{ date: updated }}>
                {"Updated {date}"}
              </Translate>
            </span>
          )}
          <Languages />
        </div>
      </div>
    </header>
  );
}

/** Where the page's screen lives in IoT Breeze, from `app.routes` in front matter. */
function AppCard() {
  const { frontMatter } = useDoc();
  const route = (frontMatter as DocFrontMatter).app?.routes?.[0];
  const appHref = useAppHref();
  if (!route) return null;
  return (
    <div className="flex flex-col gap-2.5 rounded-[10px] border border-solid border-[var(--nb-chart)] bg-[var(--docs-color-background)] p-4">
      <span className="nb-eyebrow flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--nb-chart)]" />
        <Translate id="doc.app.eyebrow">In IoT Breeze</Translate>
      </span>
      <span className="text-sm leading-5">
        <Translate id="doc.app.text">This page covers the screen at</Translate>
      </span>
      <code className="w-fit border-0 bg-transparent p-0 font-mono text-xs text-[var(--ifm-color-primary)]">{route}</code>
      <a
        href={appHref(route)}
        target="_blank"
        rel="noopener"
        className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-[var(--nb-chart)] text-[13px] font-semibold text-[#0d0f12]! no-underline hover:no-underline hover:brightness-95"
      >
        <Translate id="doc.app.open">Open in the app</Translate>
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

export default function DocItemLayout({ children }: Props): ReactNode {
  const { metadata, frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRenderToc = !hidden && toc.length > 0;
  const desktop = windowSize === "desktop" || windowSize === "ssr";
  return (
    <div className="nb-doc">
      <ContentVisibility metadata={metadata} />
      <DocVersionBanner />
      <DocHero />
      <div className="nb-doc-body">
        <article className="nb-doc-article">
          {canRenderToc && <DocItemTOCMobile />}
          <DocItemContent>{children}</DocItemContent>
          <DocItemFooter />
          <DocItemPaginator />
        </article>
        {desktop && (
          <aside className={clsx("nb-doc-rail")}>
            {canRenderToc && (
              <div>
                <span className="nb-eyebrow">
                  <Translate id="theme.TOCCollapsible.toggleButtonLabel">On this page</Translate>
                </span>
                <DocItemTOCDesktop />
              </div>
            )}
            <AppCard />
            <DocActions className="flex flex-col gap-2 text-[13px]" />
          </aside>
        )}
      </div>
    </div>
  );
}
