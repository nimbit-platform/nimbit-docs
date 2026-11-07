import React from "react";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import available from "@site/src/data/screenshots.json";
import styles from "./styles.module.css";

/**
 * A screenshot of IoT Breeze at 1440×900 (scale 2), light and dark.
 *
 * Until the screenshot script has captured it, this renders a placeholder that says which
 * route and state the picture needs. The script reads these props from the MDX, captures
 * `static/img/screens/<page>/<id>.<lang>.<theme>.png` and lists it in
 * `src/data/screenshots.json`; from then on the image shows and follows the site theme.
 */
export interface ScreenshotProps {
  /** The page folder, e.g. "get-started/first-device". */
  page: string;
  /** The step id, e.g. "05-connection-info"; stable once published. */
  id: string;
  /** The app route to open, without locale, e.g. "/onboarding/things/:id". */
  route: string;
  /** What must be on screen, in words the script author can act on. */
  state?: string;
  /** Describes the picture for screen readers; required. */
  alt: string;
  /** Shown under the picture. */
  caption?: string;
  lang?: "en" | "de";
}

export default function Screenshot({ page, id, route, state, alt, caption, lang = "en" }: ScreenshotProps) {
  const key = `${page}/${id}`;
  const ready = (available as string[]).includes(key);
  const light = useBaseUrl(`/img/screens/${page}/${id}.${lang}.light.png`);
  const dark = useBaseUrl(`/img/screens/${page}/${id}.${lang}.dark.png`);

  return (
    <figure className={styles.figure}>
      {ready ? (
        <ThemedImage className={styles.image} alt={alt} sources={{ light, dark }} width={1440} height={900} />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={`Screenshot to come: ${alt}`}>
          <span className={styles.eyebrow}>Screenshot to come · 1440×900</span>
          <span className={styles.alt}>{alt}</span>
          <dl className={styles.meta}>
            <dt>Route</dt>
            <dd>
              <code>{route}</code>
            </dd>
            {state ? (
              <>
                <dt>State</dt>
                <dd>{state}</dd>
              </>
            ) : null}
            <dt>File</dt>
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
