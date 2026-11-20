import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Translate from "@docusaurus/Translate";
import MDXContent from "@theme/MDXContent";
import type { Props } from "@theme/DocItem/Content";

/** The title is in the page header (DocItem/Layout), so no synthetic h1 here. */
export default function DocItemContent({ children }: Props): React.JSX.Element {
  const { frontMatter } = useDoc();
  const { untranslated } = frontMatter as { untranslated?: boolean };
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {untranslated && (
        <aside className="nb-callout" data-kind="note" role="note">
          <span className="nb-callout-chip">
            <Translate id="doc.untranslated.chip">English</Translate>
          </span>
          <div className="nb-callout-body">
            <Translate id="doc.untranslated">This page is not translated yet. You are reading the English version.</Translate>
          </div>
        </aside>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
