import React from "react";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import available from "@site/src/data/screenshots.json";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

/**
 * A screenshot of IoT Breeze at 1440×900 (scale 2), light and dark.
 *
 * Until the screenshot script has captured it, this renders a placeholder that says which
 * route and state the picture needs. The script reads these props from the MDX, captures
 * `static/img/screens/<page>/<id>.<lang>.<theme>.png` and lists it ("de:<key>" for German) in
 * `src/data/screenshots.json`; from then on the image shows and follows the site theme.
 */
export interface ScreenshotProps {
  /** The page folder, e.g. "get-started/first-device". */
  page: string;
  /** The step id, e.g. "05-connection-info"; stable once published. */
  id: string;
  /** The app route to open, without locale, e.g. "/devices/things/:id". */
  route: string;
  /** What must be on screen, in words the script author can act on. */
  state?: string;
  /** Describes the picture for screen readers; required. */
  alt: string;
  /** Shown under the picture. */
  caption?: string;
  /** Defaults to the page's language. A German page shows the English picture until the German one is captured. */
  lang?: "en" | "de";
}

export default function Screenshot({ page, id, route, state, alt, caption, lang: wanted }: ScreenshotProps) {
  const { i18n } = useDocusaurusContext();
  const key = `${page}/${id}`;
  // screenshots.json lists "<key>" for English pictures and "de:<key>" for German ones.
  const has = (l: string) => (available as string[]).includes(l === "en" ? key : `${l}:${key}`);
  const preferred = wanted ?? (i18n.currentLocale as "en" | "de");
  const lang = has(preferred) ? preferred : "en";
  const ready = has(lang);
  const light = useBaseUrl(`/img/screens/${page}/${id}.${lang}.light.png`);
  const dark = useBaseUrl(`/img/screens/${page}/${id}.${lang}.dark.png`);

  return (
    <figure className={styles.figure}>
      {ready ? (
        <ThemedImage className={styles.image} alt={alt} sources={{ light, dark }} width={1440} height={900} />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={`${translate({ id: "screenshot.toCome", message: "Screenshot to come" })}: ${alt}`}>
          <span className={styles.eyebrow}>
            <Translate id="screenshot.toCome">Screenshot to come</Translate> · 1440×900
          </span>
          <span className={styles.alt}>{alt}</span>
          <dl className={styles.meta}>
            <dt><Translate id="screenshot.route">Route</Translate></dt>
            <dd>
              <code>{route}</code>
            </dd>
            {state ? (
              <>
                <dt><Translate id="screenshot.state">State</Translate></dt>
                <dd>{state}</dd>
              </>
            ) : null}
            <dt><Translate id="screenshot.file">File</Translate></dt>
            <dd>
              <code>{key}</code>
            </dd>
          </dl>
        </div>
      )}
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
