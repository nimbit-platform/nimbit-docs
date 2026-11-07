import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useThemeConfig } from "@docusaurus/theme-common";
import Translate from "@docusaurus/Translate";

type Column = { title: string; items: { label: string; to?: string; href?: string }[] };

const link =
  "text-sm text-[var(--ifm-font-color-base)]! no-underline transition-colors hover:text-[var(--ifm-color-primary)]! hover:no-underline";

/** The design's footer: logo and a contact line, mono-labelled link columns, a mono copyright bar. */
export default function Footer(): React.JSX.Element | null {
  const { footer } = useThemeConfig();
  const logoSrc = useBaseUrl("/img/nimbit.svg");
  if (!footer) return null;
  const { links, copyright } = footer;

  return (
    <footer className="border-0 border-t border-solid border-[var(--docs-color-border)] bg-[var(--nb-sunk)]">
      <div className="mx-auto flex max-w-[1360px] flex-wrap justify-between gap-10 px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-3.5">
          <img src={logoSrc} alt="NimBit" className="h-7 w-fit dark:brightness-0 dark:invert" />
          <p className="m-0 text-sm text-[var(--docs-color-muted)]">
            <Translate
              id="footer.contact"
              values={{
                email: (
                  <a href="mailto:info@nimbit.de" className="text-[var(--ifm-color-primary)]!">
                    info@nimbit.de
                  </a>
                ),
              }}
            >
              {"Missing a page? Write to {email}."}
            </Translate>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-14 gap-y-8">
          {(links as Column[]).map((column) => (
            <div key={column.title} className="flex flex-col gap-2">
              <span className="nb-eyebrow mb-1">{column.title}</span>
              {column.items.map((item) =>
                item.to ? (
                  <Link key={item.label} to={item.to} className={link}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={link}>
                    {item.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="border-0 border-t border-solid border-[var(--docs-color-border)]">
        <p className="mx-auto my-0 max-w-[1360px] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--docs-color-text-100)] lg:px-10">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
