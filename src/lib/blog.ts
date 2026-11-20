import { translate } from "@docusaurus/Translate";

/** Front matter keys the blog design reads, on top of Docusaurus's own. */
export type BlogFrontMatter = {
  category?: string;
  featured?: boolean;
  visual?: string;
  visual_question?: string;
  visual_answer?: string;
  visual_caption?: string;
  /** "In the docs" card on the post page. */
  doc_title?: string;
  doc_link?: string;
};

export const categoryOrder = ["release", "how-to", "announcement", "engineering"];

/** Plural, for the filter chips. */
export function categoryPlural(id: string): string {
  switch (id) {
    case "release":
      return translate({ id: "blog.category.release.plural", message: "Releases" });
    case "how-to":
      return translate({ id: "blog.category.how-to.plural", message: "How-tos" });
    case "announcement":
      return translate({ id: "blog.category.announcement.plural", message: "Announcements" });
    case "engineering":
      return translate({ id: "blog.category.engineering.plural", message: "Engineering" });
    default:
      return id;
  }
}

/** Singular, for the eyebrow above a title. */
export function categoryLabel(id: string): string {
  switch (id) {
    case "release":
      return translate({ id: "blog.category.release", message: "Release" });
    case "how-to":
      return translate({ id: "blog.category.how-to", message: "How-to" });
    case "announcement":
      return translate({ id: "blog.category.announcement", message: "Announcement" });
    case "engineering":
      return translate({ id: "blog.category.engineering", message: "Engineering" });
    default:
      return id;
  }
}

/** 17.08.2026, as in the design, in both languages. */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getUTCDate())}.${p(d.getUTCMonth() + 1)}.${d.getUTCFullYear()}`;
}

export function readingTime(minutes?: number): string {
  const n = Math.max(1, Math.ceil(minutes ?? 1));
  return translate({ id: "blog.readingTime", message: "{n} min read" }, { n: String(n) });
}

/** The design colors the end of a title. Here: the part after the colon. */
export function splitTitle(title: string): [string, string] {
  const i = title.indexOf(": ");
  if (i === -1) return [title, ""];
  return [title.slice(0, i + 1) + " ", title.slice(i + 2)];
}

export function initials(name?: string): string {
  if (!name) return "NB";
  const parts = name.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase() || "NB";
}
