import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { ArrowUpRight } from "lucide-react";
import { useAppUrl } from "@site/src/lib/appUrl";

/**
 * Each IoT Breeze service serves its own Scalar reference, generated from the code it runs, on the
 * same host as the app. So the docs only link to it, on the reader's own address: the references
 * always match their installation's version, and "Try it" calls their own API.
 */
const REFERENCES = [
  {
    id: "tsflux",
    path: "/tsflux/swagger",
    title: translate({ id: "api.ref.tsflux.title", message: "Ingest API (tsflux)" }),
    text: translate({ id: "api.ref.tsflux.text", message: "Send device messages as JSON, line protocol or InfluxDB-compatible writes." }),
  },
  {
    id: "nbq",
    path: "/nbq/docs",
    title: translate({ id: "api.ref.nbq.title", message: "Query API (nbq)" }),
    text: translate({ id: "api.ref.nbq.text", message: "Read time series, snapshots, positions, events and metrics." }),
  },
  {
    id: "ocb-v2",
    path: "/ocb/api/v2",
    title: translate({ id: "api.ref.ocb.title", message: "Platform API (OCB)" }),
    text: translate({ id: "api.ref.ocb.text", message: "Manage things, thing types, rules, dashboards, users and the rest of the tenant." }),
  },
  {
    id: "ocb-v1",
    path: "/ocb/api/v1",
    title: translate({ id: "api.ref.ocbV1.title", message: "Platform API (OCB), v1" }),
    text: translate({ id: "api.ref.ocbV1.text", message: "The older REST endpoints that v2 does not cover yet." }),
  },
];

export default function ApiReferenceLinks(): React.JSX.Element {
  const base = useAppUrl();
  return (
    <div className="not-prose my-6 flex flex-col gap-3">
      <p className="nb-eyebrow m-0">
        <Translate id="api.ref.host" values={{ host: <span className="text-[var(--ifm-color-primary)]">{new URL(base).host}</span> }}>
          {"On {host}"}
        </Translate>
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {REFERENCES.map((r) => (
          <a
            key={r.id}
            href={new URL(r.path, base).toString()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-[10px] border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-background)] p-[18px] hover:border-[var(--ifm-color-primary)] text-[var(--ifm-font-color-base)]! no-underline hover:no-underline"
          >
            <span className="flex items-center justify-between gap-2 font-semibold group-hover:underline">
              {r.title}
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--ifm-color-primary)]" aria-hidden="true" />
            </span>
            <span className="text-sm leading-5 text-[var(--docs-color-muted)]">{r.text}</span>
            <code className="w-fit border-0! bg-transparent! p-0! text-xs text-[var(--docs-color-text-100)]">{r.path}</code>
          </a>
        ))}
      </div>
    </div>
  );
}
