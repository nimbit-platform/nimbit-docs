import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import { ChevronDown } from "lucide-react";
import { SECTIONS, type Section } from "./sections";
import styles from "./styles.module.css";

function getActiveSection(pathname: string): Section {
    const segment = pathname.match(/\/docs\/?([^/]*)/)?.[1] ?? "";
    return SECTIONS.find((s) => s.paths.includes(segment)) ?? SECTIONS[1];
}

export default function SidebarMenu(): React.JSX.Element {
    const { pathname } = useLocation();
    const active = getActiveSection(pathname);
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const Icon = active.icon;

    return (
        <div className={styles.container} ref={containerRef}>
            <button
                type="button"
                className={styles.trigger}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <div className={styles.triggerContent}>
                    <Icon className={styles.triggerIcon} />
                    <div>
                        <div className={styles.triggerLabel}>{active.label}</div>
                        <div className={styles.triggerDescription}>
                            {active.description}
                        </div>
                    </div>
                </div>
                <ChevronDown
                    className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
                />
            </button>

            {open && (
                <div className={styles.dropdown}>
                    {SECTIONS.map((section) => {
                        const SIcon = section.icon;
                        const isActive = section.id === active.id;
                        return (
                            <Link
                                key={section.id}
                                to={section.to}
                                className={`${styles.option} ${isActive ? styles.optionActive : ""}`}
                                onClick={() => setOpen(false)}
                            >
                                <SIcon className={styles.optionIcon} />
                                <div>
                                    <div className={styles.optionLabel}>
                                        {section.label}
                                    </div>
                                    <div className={styles.optionDescription}>
                                        {section.description}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
