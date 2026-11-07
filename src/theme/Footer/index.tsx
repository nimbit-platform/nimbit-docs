import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useThemeConfig } from "@docusaurus/theme-common";
import { ArrowRight } from "lucide-react";
import Translate from "@docusaurus/Translate";

const DEMO_URL =
    "https://outlook.office365.com/book/NimBitGmbHErstgesprchIhreDigitaleTransformation@cpars.de/";

export default function Footer(): React.JSX.Element | null {
    const { footer } = useThemeConfig();
    if (!footer) return null;

    const { links, copyright } = footer;
    const logoSrc = useBaseUrl("/img/nimbit.svg");

    return (
        <footer className="border-t border-[var(--docs-color-border)] bg-background">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">
                    {/* Brand + CTA */}
                    <div className="flex-1 max-w-xs">
                        <img
                            src={logoSrc}
                            alt="NimBit"
                            className="h-8 dark:brightness-0 dark:invert"
                        />
                        <p className="mt-4 text-sm leading-relaxed text-[var(--docs-color-text-100)]">
                            <Translate id="footer.tagline">
                                Build and manage your IoT solutions with the NimBit platform.
                            </Translate>
                        </p>
                        <a
                            href={DEMO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground! no-underline transition-colors hover:bg-[var(--ifm-color-primary-dark)] hover:no-underline"
                        >
                            <Translate id="footer.demo">Book a demo</Translate>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                    </div>

                    {/* Link columns */}
                    <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
                        {(
                            links as {
                                title: string;
                                items: {
                                    label: string;
                                    to?: string;
                                    href?: string;
                                }[];
                            }[]
                        ).map((column) => (
                            <div key={column.title}>
                                <h3 className="text-sm font-semibold text-[var(--docs-color-text)]">
                                    {column.title}
                                </h3>
                                <ul className="mt-3 list-none space-y-2 pl-0">
                                    {column.items.map((item) => (
                                        <li key={item.label}>
                                            {item.to ? (
                                                <Link
                                                    to={item.to}
                                                    className="text-sm text-[var(--docs-color-text-100)] no-underline transition-colors hover:text-[var(--ifm-color-primary)] hover:no-underline"
                                                >
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-[var(--docs-color-text-100)] no-underline transition-colors hover:text-[var(--ifm-color-primary)] hover:no-underline"
                                                >
                                                    {item.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-[var(--docs-color-border)] pt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                    <p className="text-xs text-[var(--docs-color-text-100)] m-0">
                        {copyright}
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://nimbit.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--docs-color-text-100)] no-underline hover:text-[var(--ifm-color-primary)] hover:no-underline"
                        >
                            nimbit.de
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
