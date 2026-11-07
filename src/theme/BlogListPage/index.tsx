import React, { useEffect, useMemo, useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { useHistory, useLocation } from "@docusaurus/router";
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SearchMetadata from "@theme/SearchMetadata";
import BlogListPageStructuredData from "@theme/BlogListPage/StructuredData";
import type { Props } from "@theme/BlogListPage";
import { Search, X } from "lucide-react";
import BlogVisual from "@site/src/components/BlogVisual";
import {
  categoryLabel,
  categoryOrder,
  categoryPlural,
  formatDate,
  readingTime,
  type BlogFrontMatter,
} from "@site/src/lib/blog";

type Post = {
  permalink: string;
  title: string;
  description: string;
  date: string;
  year: string;
  minutes?: number;
  category: string;
  featured: boolean;
  tags: { label: string; permalink: string }[];
  fm: BlogFrontMatter;
};

type Filters = { cat: string; topic: string; year: string; q: string; sort: "newest" | "oldest" };
const empty: Filters = { cat: "", topic: "", year: "", q: "", sort: "newest" };
const PAGE = 9;

function readFilters(search: string): Filters {
  const p = new URLSearchParams(search);
  return {
    cat: p.get("cat") ?? "",
    topic: p.get("topic") ?? "",
    year: p.get("year") ?? "",
    q: p.get("q") ?? "",
    sort: p.get("sort") === "oldest" ? "oldest" : "newest",
  };
}

function writeFilters(f: Filters): string {
  const p = new URLSearchParams();
  if (f.cat) p.set("cat", f.cat);
  if (f.topic) p.set("topic", f.topic);
  if (f.year) p.set("year", f.year);
  if (f.q) p.set("q", f.q);
  if (f.sort !== "newest") p.set("sort", f.sort);
  const s = p.toString();
  return s ? `?${s}` : "";
}

const control =
  "h-8 rounded-md border border-solid border-[var(--nb-dash)] bg-[var(--docs-color-background)] px-2 text-[13px] text-[var(--ifm-font-color-base)]";

function Eyebrow({ post }: { post: Post }) {
  return (
    <>
      <span className="text-[var(--nb-tag)]">{categoryLabel(post.category)}</span>
      <span>·</span>
      <time dateTime={post.date} className="tabular-nums">
        {formatDate(post.date)}
      </time>
    </>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <Link
      to={post.permalink}
      className="nb-card mt-8 flex flex-wrap overflow-hidden rounded-[14px] border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-background)] text-[var(--ifm-font-color-base)]! no-underline hover:no-underline"
    >
      <span className="relative block min-h-[320px] flex-[1_1_520px] border-0 border-r border-solid border-[var(--docs-color-border)]">
        <BlogVisual
          kind={post.fm.visual}
          question={post.fm.visual_question}
          answer={post.fm.visual_answer}
          caption={post.fm.visual_caption}
          large
        />
      </span>
      <span className="flex flex-[1_1_420px] flex-col justify-center gap-[18px] p-9">
        <span className="nb-eyebrow flex flex-wrap items-center gap-2.5">
          <span className="rounded bg-[var(--nb-yellow)] px-1.5 py-0.5 text-[#0d0f12]">
            <Translate id="blog.featured">Featured</Translate>
          </span>
          <Eyebrow post={post} />
        </span>
        <span className="nb-card-title text-[36px] font-semibold leading-[1.05] tracking-[-0.03em]">{post.title}</span>
        <span className="text-base leading-[25px] text-[var(--docs-color-text-100)]">{post.description}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ifm-color-primary)]">
          <Translate id="blog.readMore">Read more</Translate> →
        </span>
      </span>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to={post.permalink}
      className="nb-card flex flex-col overflow-hidden rounded-xl border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-background)] text-[var(--ifm-font-color-base)]! no-underline hover:no-underline"
    >
      <span className="relative block h-[180px] border-0 border-b border-solid border-[var(--docs-color-border)]">
        <BlogVisual
          kind={post.fm.visual}
          question={post.fm.visual_question}
          answer={post.fm.visual_answer}
          caption={post.fm.visual_caption}
        />
      </span>
      <span className="flex flex-1 flex-col gap-3 p-5">
        <span className="nb-eyebrow flex flex-wrap items-center gap-2">
          <Eyebrow post={post} />
        </span>
        <span className="nb-card-title text-[21px] font-semibold leading-[1.2] tracking-[-0.02em]">{post.title}</span>
        <span className="flex-1 text-[15px] leading-[22px] text-[var(--docs-color-text-100)]">{post.description}</span>
        <span className="nb-eyebrow border-0 border-t border-dashed border-[var(--nb-dash)] pt-3">{readingTime(post.minutes)}</span>
      </span>
    </Link>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={clsx(
        "h-8 cursor-pointer rounded-full border border-solid px-3 text-[13px] font-medium",
        active
          ? "border-[var(--nb-inv-bg)] bg-[var(--nb-inv-bg)] text-[var(--nb-inv-fg)]"
          : "border-[var(--nb-dash)] bg-transparent text-[var(--ifm-font-color-base)] hover:border-[var(--ifm-color-primary)]",
      )}
    >
      {children}
    </button>
  );
}

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="nb-eyebrow">{label}</span>
      <div role="group" aria-label={label} className="flex overflow-hidden rounded-md border border-solid border-[var(--nb-dash)] font-mono text-[11px] font-medium">
        {options.map((o, i) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={clsx(
              "h-8 cursor-pointer border-0 border-solid px-3 uppercase",
              i > 0 && "border-l border-[var(--nb-dash)]",
              value === o.value
                ? "bg-[var(--nb-inv-bg)] text-[var(--nb-inv-fg)]"
                : "bg-[var(--docs-color-background)] text-[var(--ifm-font-color-base)]",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  all,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  all: string;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex items-center gap-2.5">
      <span className="nb-eyebrow">{label}</span>
      <select className={control} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{all}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function feedUrl(pageUrl: string): string {
  return pageUrl.replace(/\/?$/, "/rss.xml");
}

function BlogListContent({ items }: Props) {
  const { i18n } = useDocusaurusContext();
  const alternate = useAlternatePageUtils();
  const history = useHistory();
  const location = useLocation();

  const posts: Post[] = useMemo(
    () =>
      items.map(({ content }) => {
        const m = content.metadata;
        const fm = (m.frontMatter ?? {}) as BlogFrontMatter;
        return {
          permalink: m.permalink,
          title: m.title,
          description: m.description,
          date: m.date,
          year: String(new Date(m.date).getUTCFullYear()),
          minutes: m.readingTime,
          category: fm.category ?? "announcement",
          featured: !!fm.featured,
          tags: m.tags.map((t) => ({ label: t.label, permalink: t.permalink })),
          fm,
        };
      }),
    [items],
  );

  // Filters live in the URL so a filtered view can be shared. The static HTML shows every post.
  const [f, setF] = useState<Filters>(empty);
  const [shown, setShown] = useState(PAGE);
  useEffect(() => setF(readFilters(location.search)), [location.search]);
  const update = (patch: Partial<Filters>) => {
    const next = { ...f, ...patch };
    setF(next);
    setShown(PAGE);
    history.replace({ pathname: location.pathname, search: writeFilters(next) });
  };

  const categories = categoryOrder
    .map((id) => ({ id, count: posts.filter((p) => p.category === id).length }))
    .filter((c) => c.count > 0);
  const topics = Array.from(new Map(posts.flatMap((p) => p.tags).map((t) => [t.label, t])).values()).sort((a, b) =>
    a.label.localeCompare(b.label, i18n.currentLocale),
  );
  const years = Array.from(new Set(posts.map((p) => p.year))).sort().reverse();

  const q = f.q.trim().toLowerCase();
  const filtered = posts
    .filter((p) => !f.cat || p.category === f.cat)
    .filter((p) => !f.topic || p.tags.some((t) => t.label === f.topic))
    .filter((p) => !f.year || p.year === f.year)
    .filter(
      (p) =>
        !q || [p.title, p.description, ...p.tags.map((t) => t.label)].some((s) => s.toLowerCase().includes(q)),
    )
    .sort((a, b) => (f.sort === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => p !== featured);

  const active: { label: string; clear: Partial<Filters> }[] = [
    f.cat && { label: `${translate({ id: "blog.filter.category", message: "Category" })}: ${categoryPlural(f.cat)}`, clear: { cat: "" } },
    f.topic && { label: `${translate({ id: "blog.filter.topic", message: "Topic" })}: ${f.topic}`, clear: { topic: "" } },
    f.year && { label: `${translate({ id: "blog.filter.year", message: "Year" })}: ${f.year}`, clear: { year: "" } },
    f.q && { label: `“${f.q}”`, clear: { q: "" } },
  ].filter(Boolean) as { label: string; clear: Partial<Filters> }[];

  const feeds = (i18n.locales as string[]).map((locale) => ({
    locale,
    href: feedUrl(alternate.createUrl({ locale, fullyQualified: false })),
  }));

  return (
    <div style={{ "--ifm-link-hover-decoration": "none" } as React.CSSProperties}>
      <div className="relative overflow-hidden border-0 border-b border-solid border-[var(--docs-color-border)]">
        <div aria-hidden="true" className="nb-grid nb-grid-hero absolute inset-0" />
        <section className="relative mx-auto flex max-w-[1360px] flex-wrap items-end gap-x-20 gap-y-8 px-6 pb-12 pt-14 lg:px-10">
          <div className="flex flex-[999_1_620px] flex-col gap-[22px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ifm-color-primary)]">
              <span className="text-[var(--nb-tag)]">──</span> [ Blog ] ·{" "}
              <Translate id="blog.hero.eyebrow">Releases, how-tos, announcements</Translate>
            </span>
            <h1 className="m-0 text-[52px]! font-semibold! leading-[0.95]! tracking-[-0.04em] lg:text-[88px]!">
              <Translate id="blog.hero.title.start">Notes from the</Translate>{" "}
              <span className="text-[var(--ifm-color-primary)]">
                <Translate id="blog.hero.title.accent">platform team.</Translate>
              </span>
            </h1>
          </div>
          <div className="flex flex-[1_1_320px] flex-col gap-3.5">
            <span className="nb-eyebrow">
              <Translate id="blog.subscribe">Subscribe</Translate>
            </span>
            <div className="flex flex-wrap gap-2">
              {feeds.map(({ locale, href }) => (
                <a
                  key={locale}
                  href={href}
                  className="inline-flex h-8 items-center rounded-md border border-solid border-[var(--nb-dash)] px-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--ifm-font-color-base)]! no-underline hover:border-[var(--ifm-color-primary)] hover:no-underline"
                >
                  RSS · {locale}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto max-w-[1360px] px-6 pb-24 lg:px-10">
        <div className="flex flex-col gap-3.5 border-0 border-b border-dashed border-[var(--nb-dash)] py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div role="group" aria-label={translate({ id: "blog.filter.category", message: "Category" })} className="flex flex-wrap gap-1.5">
              <Pill active={!f.cat} onClick={() => update({ cat: "" })}>
                <Translate id="blog.filter.all">All</Translate> <span className="font-mono text-[10px] opacity-70">{posts.length}</span>
              </Pill>
              {categories.map((c) => (
                <Pill key={c.id} active={f.cat === c.id} onClick={() => update({ cat: f.cat === c.id ? "" : c.id })}>
                  {categoryPlural(c.id)} <span className="font-mono text-[10px] opacity-70">{c.count}</span>
                </Pill>
              ))}
            </div>
            <label className="flex h-8 min-w-60 items-center gap-2 rounded-md border border-solid border-[var(--nb-dash)] bg-[var(--docs-color-background)] px-2.5 text-[13px] text-[var(--docs-color-text-100)]">
              <Search className="h-[15px] w-[15px] shrink-0" aria-hidden="true" />
              <input
                type="search"
                value={f.q}
                onChange={(e) => update({ q: e.target.value })}
                placeholder={translate({ id: "blog.search", message: "Search posts…" })}
                aria-label={translate({ id: "blog.search", message: "Search posts…" })}
                className="w-full border-0 bg-transparent text-[13px] text-[var(--ifm-font-color-base)] outline-none"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Select
              label={translate({ id: "blog.filter.topic", message: "Topic" })}
              all={translate({ id: "blog.filter.anyTopic", message: "Any topic" })}
              value={f.topic}
              onChange={(topic) => update({ topic })}
              options={topics.map((t) => ({ value: t.label, label: t.label }))}
            />
            <Select
              label={translate({ id: "blog.filter.year", message: "Year" })}
              all={translate({ id: "blog.filter.anyYear", message: "Any year" })}
              value={f.year}
              onChange={(year) => update({ year })}
              options={years.map((y) => ({ value: y, label: y }))}
            />
            <Segmented
              label={translate({ id: "blog.sort", message: "Sort" })}
              value={f.sort}
              onChange={(sort) => update({ sort })}
              options={[
                { value: "newest", label: translate({ id: "blog.sort.newest", message: "Newest" }) },
                { value: "oldest", label: translate({ id: "blog.sort.oldest", message: "Oldest" }) },
              ]}
            />
            <span className="nb-eyebrow ml-auto">
              {translate(
                { id: "blog.count", message: "{shown} of {total} posts" },
                { shown: String(filtered.length), total: String(posts.length) },
              )}
            </span>
          </div>
          {active.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="nb-eyebrow mr-1">
                <Translate id="blog.filter.active">Active</Translate>
              </span>
              {active.map((a) => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => update(a.clear)}
                  className="inline-flex h-6 cursor-pointer items-center gap-1.5 rounded border-0 bg-[var(--nb-sel)] px-2 text-xs text-[var(--ifm-font-color-base)]"
                >
                  {a.label}
                  <X className="h-3 w-3 text-[var(--docs-color-text-100)]" aria-label={translate({ id: "blog.filter.remove", message: "Remove" })} />
                </button>
              ))}
              <button
                type="button"
                onClick={() => update(empty)}
                className="ml-1.5 cursor-pointer border-0 bg-transparent text-xs text-[var(--ifm-color-primary)] hover:underline"
              >
                <Translate id="blog.filter.clear">Clear all</Translate>
              </button>
            </div>
          )}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-[var(--docs-color-text-100)]">
            <Translate id="blog.empty">No posts match these filters.</Translate>
          </p>
        )}

        {featured && <FeaturedCard post={featured} />}

        {rest.length > 0 && (
          <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-6">
            {rest.slice(0, shown).map((p) => (
              <PostCard key={p.permalink} post={p} />
            ))}
          </div>
        )}

        {rest.length > shown && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShown((n) => n + PAGE)}
              className="h-10 cursor-pointer rounded-md border border-solid border-[var(--nb-dash)] bg-[var(--docs-color-background)] px-5 text-sm text-[var(--ifm-font-color-base)] hover:border-[var(--ifm-color-primary)]"
            >
              <Translate id="blog.loadMore">Load more posts</Translate>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  const { blogTitle, blogDescription } = props.metadata;
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}>
      <PageMetadata title={blogTitle} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
      <BlogListPageStructuredData {...props} />
      <Layout>
        <BlogListContent {...props} />
      </Layout>
    </HtmlClassNameProvider>
  );
}
