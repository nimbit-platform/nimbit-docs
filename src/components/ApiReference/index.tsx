import React, { lazy, Suspense, useMemo } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

// Scalar is large and needs the DOM: load it only in the browser, only on reference pages.
const Scalar = lazy(() => import("./Scalar"));

export type ApiId = "tsflux" | "nbq" | "ocb";

/**
 * Renders the Scalar API reference for one OpenAPI spec in `static/openapi/<id>.yaml`.
 * Full-width: use it on a page, not inside a doc.
 */
export default function ApiReference({ id }: { id: ApiId }): React.JSX.Element {
  const specUrl = useBaseUrl(`/openapi/${id}.yaml`);
  const { colorMode } = useColorMode();
  const fallback = (
    <p className={styles.loading}>{translate({ id: "api.loading", message: "Loading the API reference…" })}</p>
  );
  const content = useMemo(
    () => (
      <Suspense fallback={fallback}>
        <Scalar specUrl={specUrl} dark={colorMode === "dark"} />
      </Suspense>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [specUrl, colorMode],
  );
  return (
    <div className={styles.root} data-api={id}>
      <BrowserOnly fallback={fallback}>{() => content}</BrowserOnly>
    </div>
  );
}
