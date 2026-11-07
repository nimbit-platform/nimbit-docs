import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { DEFAULT_APP_URL, appHref, normalizeAppUrl, setAppUrl, useAppUrl } from "@site/src/lib/appUrl";
import styles from "./styles.module.css";

/**
 * "Open IoT Breeze" in the navbar, with the address it opens. Customers on their own domain change
 * the address here once; every link into the app on the site follows it.
 */
export default function OpenAppNavbarItem({ mobile }: { mobile?: boolean }) {
  const base = useAppUrl();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(base);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setDraft(base), [base, open]);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    const origin = normalizeAppUrl(draft);
    if (!origin) return setError(true);
    setError(false);
    setAppUrl(origin === DEFAULT_APP_URL ? null : origin);
    setOpen(false);
  };

  if (mobile) {
    return (
      <li className="menu__list-item">
        <a className="menu__link" href={appHref(base)} target="_blank" rel="noopener noreferrer">
          Open IoT Breeze
        </a>
      </li>
    );
  }

  return (
    <div className={styles.wrap} ref={ref}>
      <a className={`navbar-book-demo ${styles.open}`} href={appHref(base)} target="_blank" rel="noopener noreferrer">
        Open IoT Breeze
      </a>
      <button
        type="button"
        className={styles.toggle}
        aria-label="Change your IoT Breeze address"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <ChevronDown size={14} />
      </button>
      {open && (
        <form className={styles.panel} onSubmit={save}>
          <label htmlFor="app-url" className={styles.label}>
            Your IoT Breeze address
          </label>
          <input
            id="app-url"
            className={styles.input}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={DEFAULT_APP_URL}
            spellCheck={false}
            autoFocus
          />
          {error && <p className={styles.error}>Enter an address such as iot.example.com.</p>}
          <p className={styles.hint}>
            On your own domain? Enter it once. Links from these docs into IoT Breeze, and guided tours, then open there.
          </p>
          <div className={styles.actions}>
            <button type="button" className={styles.reset} onClick={() => setDraft(DEFAULT_APP_URL)}>
              Use default
            </button>
            <button type="submit" className={`navbar-book-demo ${styles.save}`}>
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
