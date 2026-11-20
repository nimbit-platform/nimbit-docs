import React, { isValidElement, type ReactNode } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props } from "@theme/Admonition/Layout";

/**
 * The design's callout: a mono chip with the type on the left, the text on the right.
 * `:::warning Title` keeps its title as a bold lead-in.
 */
const KIND: Record<string, string> = {
  note: "note",
  info: "note",
  tip: "tip",
  warning: "warning",
  caution: "warning",
  danger: "danger",
};

export default function AdmonitionLayout({ type, title, children, className }: Props): ReactNode {
  const kind = KIND[type] ?? "note";
  // Without an author title, Docusaurus passes its default <Translate> label ("warning").
  const custom = title && !(isValidElement(title) && title.type === Translate) ? title : undefined;
  // Runtime lookup of the theme's own labels (theme.admonition.warning etc. in code.json).
  const chip = translate({ id: `theme.admonition.${type}`, message: type });
  return (
    <aside
      className={clsx(ThemeClassNames.common.admonition, ThemeClassNames.common.admonitionType(type), "nb-callout", className)}
      data-kind={kind}
    >
      <span className="nb-callout-chip">{chip}</span>
      <div className="nb-callout-body">
        {custom && <strong className="mb-1 block">{custom}</strong>}
        {children}
      </div>
    </aside>
  );
}
