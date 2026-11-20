import React, { type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { BlogPostProvider, useBlogPost } from "@docusaurus/plugin-content-blog/client";
import Layout from "@theme/Layout";
import MDXContent from "@theme/MDXContent";
import TOCItems from "@theme/TOCItems";
import BlogPostPageMetadata from "@theme/BlogPostPage/Metadata";
import BlogPostPageStructuredData from "@theme/BlogPostPage/StructuredData";
import ContentVisibility from "@theme/ContentVisibility";
import type { Props } from "@theme/BlogPostPage";
import { ArrowRight } from "lucide-react";
import BlogVisual from "@site/src/components/BlogVisual";
import { categoryLabel, formatDate, initials, readingTime, splitTitle, type BlogFrontMatter } from "@site/src/lib/blog";

// The RSS feed finds a post's body by this id (blogPostContainerID in @docusaurus/utils-common).
const blogPostContainerID = "__blog-post-container";

function ReadIn() {
  const { i18n } = useDocusaurusContext();
  const alternate = useAlternatePageUtils();
  if (i18n.locales.length < 2) return null;
  return (
    <div className="flex items-center gap-1 rounded-full border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-background)] p-[3px] pl-3">
      <span className="nb-eyebrow mr-1">
        <Translate id="blog.readIn">Read in</Translate>
      </span>
      {i18n.locales.map((locale) =>
        locale === i18n.currentLocale ? (
          <span key={locale} aria-current="true" className="rounded-full bg-[var(--nb-inv-bg)] px-2.5 py-1 text-[13px] text-[var(--nb-inv-fg)]">
            {i18n.localeConfigs[locale]?.label ?? locale}
          </span>
        ) : (
          <a
            key={locale}
            href={alternate.createUrl({ locale, fullyQualified: false })}
            hrefLang={i18n.localeConfigs[locale]?.htmlLang}
            className="rounded-full px-2.5 py-1 text-[13px] text-[var(--ifm-color-primary)]! no-underline hover:no-underline"
          >
            {i18n.localeConfigs[locale]?.label ?? locale}
          </a>
        ),
      )}
    </div>
  );
}

function PostContent({ children }: { children: ReactNode }) {
  const { metadata, toc } = useBlogPost();
  const { title, description, date, readingTime: minutes, authors, tags, frontMatter, nextItem, prevItem } = metadata;
  const fm = frontMatter as BlogFrontMatter & { hide_table_of_contents?: boolean };
  const [lead, accent] = splitTitle(title);
  const author = authors[0];
  const showToc = !fm.hide_table_of_contents && toc.length > 0;

  return (
    <div style={{ "--ifm-link-hover-decoration": "none" } as React.CSSProperties}>
      <div className="relative overflow-hidden border-0 border-b border-dashed border-[var(--nb-dash)]">
        <div aria-hidden="true" className="nb-grid nb-grid-hero absolute inset-0" />
        <header className="relative mx-auto flex max-w-[980px] flex-col gap-5 px-6 pb-10 pt-12 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link to="/blog" className="nb-eyebrow text-[var(--docs-color-text-100)]! no-underline hover:text-[var(--ifm-color-primary)]! hover:no-underline">
              ← Blog
            </Link>
            <ReadIn />
          </div>
          <span className="nb-eyebrow">
            <span className="text-[var(--nb-tag)]">[ {categoryLabel(fm.category ?? "announcement")} ]</span> ·{" "}
            <time dateTime={date} className="tabular-nums">
              {formatDate(date)}
            </time>{" "}
            · {readingTime(minutes)}
          </span>
          <h1 className="m-0 text-[40px]! font-semibold! leading-[1.02]! tracking-[-0.035em] lg:text-[64px]!">
            {lead}
            {accent && <span className="text-[var(--ifm-color-primary)]">{accent}</span>}
          </h1>
          {description && (
            <p className="m-0 max-w-[640px] text-xl leading-[1.5] text-[var(--docs-color-text-100)]">{description}</p>
          )}
          {author && (
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-solid border-[var(--docs-color-border)] bg-[var(--nb-sunk)] font-mono text-[10px] font-semibold text-[var(--ifm-color-primary)]">
                {initials(author.name)}
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">{author.name}</span>
                {author.title && <span className="text-sm text-[var(--docs-color-text-100)]">{author.title}</span>}
              </span>
            </div>
          )}
        </header>
      </div>

      <main className="mx-auto max-w-[1240px] px-6 pb-24 lg:px-10">
        <div className="mt-10 h-[220px] overflow-hidden rounded-[14px] border border-solid border-[var(--docs-color-border)] lg:h-[340px]">
          <BlogVisual
            kind={fm.visual}
            question={fm.visual_question}
            answer={fm.visual_answer}
            caption={fm.visual_caption}
            large
          />
        </div>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <article className="min-w-0 max-w-[720px] flex-1">
            <ContentVisibility metadata={metadata} />
            <div id={blogPostContainerID} className="markdown nb-post-body">
              <MDXContent>{children}</MDXContent>
            </div>

            {tags.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center gap-2 border-0 border-t border-dashed border-[var(--nb-dash)] pt-5">
                <span className="nb-eyebrow mr-1">
                  <Translate id="blog.topics">Topics</Translate>
                </span>
                {tags.map((t) => (
                  <Link
                    key={t.permalink}
                    to={t.permalink}
                    className="rounded-md border border-solid border-[var(--nb-dash)] px-2 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--ifm-font-color-base)]! no-underline hover:border-[var(--ifm-color-primary)] hover:no-underline"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            )}

            {(nextItem || prevItem) && (
              <nav
                aria-label={translate({ id: "blog.pagination", message: "More posts" })}
                className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {[
                  prevItem && { item: prevItem, label: translate({ id: "blog.newer", message: "Newer post" }), align: "" },
                  nextItem && { item: nextItem, label: translate({ id: "blog.older", message: "Older post" }), align: "sm:col-start-2 sm:text-right" },
                ]
                  .filter(Boolean)
                  .map((n) => {
                    const { item, label, align } = n as { item: { title: string; permalink: string }; label: string; align: string };
                    return (
                      <Link
                        key={item.permalink}
                        to={item.permalink}
                        className={`nb-card flex flex-col gap-1.5 rounded-xl border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-background)] p-4 text-[var(--ifm-font-color-base)]! no-underline hover:border-[var(--ifm-color-primary)] hover:no-underline ${align}`}
                      >
                        <span className="nb-eyebrow">{label}</span>
                        <span className="nb-card-title text-[15px] font-semibold">{item.title}</span>
                      </Link>
                    );
                  })}
              </nav>
            )}
          </article>

          <aside className="flex w-full flex-col gap-5 lg:sticky lg:top-[calc(var(--ifm-navbar-height)+2rem)] lg:w-[290px] lg:self-start">
            {showToc && (
              <nav aria-label={translate({ id: "blog.toc", message: "On this page" })}>
                <span className="nb-eyebrow">
                  <Translate id="blog.toc">On this page</Translate>
                </span>
                <TOCItems
                  toc={toc}
                  maxHeadingLevel={2}
                  className="nb-toc mt-2.5 list-none p-0"
                  linkClassName="block border-0 border-l-2 border-solid border-[var(--docs-color-border)] py-1 pl-3 text-sm text-[var(--docs-color-text-100)]! no-underline hover:text-[var(--ifm-font-color-base)]! hover:no-underline"
                  linkActiveClassName="nb-toc-active"
                />
              </nav>
            )}
            {fm.doc_link && fm.doc_title && (
              <Link
                to={fm.doc_link}
                className="group flex flex-col gap-1.5 rounded-xl border border-solid border-[var(--docs-color-border)] border-l-[3px] border-l-[var(--ifm-color-primary)] bg-[var(--docs-color-background)] p-4 text-[var(--ifm-font-color-base)]! no-underline hover:no-underline"
              >
                <span className="nb-eyebrow">
                  <Translate id="blog.inTheDocs">In the docs</Translate>
                </span>
                <span className="text-[15px] font-semibold">{fm.doc_title}</span>
                <span className="inline-flex items-center gap-1 text-sm text-[var(--ifm-color-primary)]">
                  <Translate id="blog.toTheGuide">Open the page</Translate>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}

export default function BlogPostPage(props: Props): ReactNode {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogPostPage)}>
        <BlogPostPageMetadata />
        <BlogPostPageStructuredData />
        <Layout>
          <PostContent>
            <BlogPostContent />
          </PostContent>
        </Layout>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
