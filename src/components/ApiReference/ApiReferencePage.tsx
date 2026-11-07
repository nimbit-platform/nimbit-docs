import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ApiReference, { type ApiId } from "./index";
import styles from "./styles.module.css";

const ORDER: ApiId[] = ["tsflux", "nbq", "ocb"];

/** The three references, with their texts. Called at render so translate() sees the active locale. */
function apis(): Record<ApiId, { eyebrow: string; select: string; title: string; description: string }> {
  return {
    tsflux: {
      eyebrow: translate({ id: "api.tsflux.eyebrow", message: "Ingest" }),
      select: translate({ id: "api.tsflux.select", message: "Ingest API (tsflux)" }),
      title: translate({ id: "api.tsflux.title", message: "Ingest API reference" }),
      description: translate({
        id: "api.tsflux.description",
        message: "Send device data: structured JSON, line protocol and InfluxDB-compatible writes.",
      }),
    },
    nbq: {
      eyebrow: translate({ id: "api.nbq.eyebrow", message: "Query" }),
      select: translate({ id: "api.nbq.select", message: "Query API (NBQ)" }),
      title: translate({ id: "api.nbq.title", message: "Query API reference" }),
      description: translate({
        id: "api.nbq.description",
        message: "Read time-series data back: queries, aggregations and time ranges.",
      }),
    },
    ocb: {
      eyebrow: translate({ id: "api.ocb.eyebrow", message: "Platform" }),
      select: translate({ id: "api.ocb.select", message: "Platform API (OCB)" }),
      title: translate({ id: "api.ocb.title", message: "Platform API reference" }),
      description: translate({
        id: "api.ocb.description",
        message: "Manage things, thing types, dashboards, users and the rest of the platform.",
      }),
    },
  };
}

export default function ApiReferencePage({ id }: { id: ApiId }): React.JSX.Element {
  const history = useHistory();
  const all = apis();
  const here = all[id];
  const base = useBaseUrl("/api/reference/");
  const overview = translate({ id: "api.backToOverview", message: "API overview" });
  const switchLabel = translate({ id: "api.switch", message: "Switch API" });
  return (
    <Layout title={here.title} description={here.description}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <p className={styles.eyebrow}>
            [ {translate({ id: "api.eyebrow", message: "API" })} ] · {here.eyebrow}
          </p>
          <h1 className={styles.title}>{here.title}</h1>
          <p className={styles.lead}>{here.description}</p>
        </div>
        <div className={styles.headerActions}>
          <label className={styles.switch}>
            <span className={styles.switchLabel}>{switchLabel}</span>
            <select
              value={id}
              onChange={(e) => history.push(`${base}${e.target.value}`)}
              aria-label={switchLabel}
            >
              {ORDER.map((key) => (
                <option key={key} value={key}>
                  {all[key].select}
                </option>
              ))}
            </select>
          </label>
          <Link to="/docs/api" className={styles.back}>
            ← {overview}
          </Link>
        </div>
      </header>
      <ApiReference id={id} />
    </Layout>
  );
}
