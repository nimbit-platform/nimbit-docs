import React from "react";
import { translate } from "@docusaurus/Translate";

/**
 * The drawn header of a blog card or post, from the BlogIndex design.
 * A post picks one with `visual:` in its front matter.
 */
export type VisualKind = "chart" | "chat" | "graph" | "badges" | "geofence" | "code";

type Props = {
  kind?: string;
  /** Chat visual: the question and the answer, in the post's language. */
  question?: string;
  answer?: string;
  /** A mono caption in the bottom-left corner. */
  caption?: string;
  /** Bigger strokes and text for the featured card and the post header. */
  large?: boolean;
};

const mono = "font-mono";

function Chart({ large }: { large?: boolean }) {
  return (
    <svg viewBox="0 0 600 340" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <polyline
        points="0,260 50,240 100,250 150,200 200,215 250,160 300,180 350,120 400,140 450,90 500,110 550,60 600,80"
        fill="none"
        stroke="var(--nb-chart)"
        strokeWidth={large ? 2.5 : 3}
        vectorEffect="non-scaling-stroke"
      />
      <polyline
        points="0,290 50,285 100,270 150,280 200,250 250,262 300,230 350,240 400,210 450,222 500,190 550,200 600,170"
        fill="none"
        stroke="var(--nb-chart2)"
        strokeWidth={1.5}
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Graph() {
  return (
    <svg viewBox="0 0 400 180" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g stroke="var(--nb-dash)" strokeWidth="1.5">
        <line x1="80" y1="90" x2="200" y2="50" />
        <line x1="80" y1="90" x2="200" y2="130" />
        <line x1="200" y1="50" x2="320" y2="40" />
        <line x1="200" y1="50" x2="320" y2="80" />
        <line x1="200" y1="130" x2="320" y2="120" />
        <line x1="200" y1="130" x2="320" y2="150" />
      </g>
      <circle cx="80" cy="90" r="10" fill="var(--nb-chart)" />
      <circle cx="200" cy="50" r="8" fill="var(--ifm-font-color-base)" />
      <circle cx="200" cy="130" r="8" fill="var(--ifm-font-color-base)" />
      <circle cx="320" cy="40" r="6" fill="var(--nb-chart2)" />
      <circle cx="320" cy="80" r="6" fill="var(--nb-chart2)" />
      <circle cx="320" cy="120" r="6" fill="var(--nb-chart2)" />
      <circle cx="320" cy="150" r="6" fill="var(--nb-chart2)" />
    </svg>
  );
}

function Geofence() {
  return (
    <svg viewBox="0 0 400 180" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <polygon
        points="130,40 290,30 320,120 190,150 110,110"
        fill="var(--nb-sel)"
        stroke="var(--nb-chart)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <circle cx="210" cy="90" r="6" fill="var(--nb-chart2)" />
    </svg>
  );
}

function Chat({ question, answer, large }: { question?: string; answer?: string; large?: boolean }) {
  const size = large ? "text-sm" : "text-xs";
  return (
    <span className="absolute inset-x-5 top-5 flex flex-col gap-2">
      <span className={`self-end rounded-[10px_10px_2px_10px] bg-[var(--nb-inv-bg)] px-2.5 py-1.5 ${size} text-[var(--nb-inv-fg)]`}>
        {question}
      </span>
      <span
        className={`self-start rounded-[10px_10px_10px_2px] border border-solid border-[var(--docs-color-border)] bg-[var(--docs-color-background)] px-2.5 py-1.5 ${size} text-[var(--docs-color-text-100)]`}
      >
        {answer}
      </span>
    </span>
  );
}

/** The four page types every docs page carries as a badge. */
function Badges({ large }: { large?: boolean }) {
  const types = [
    translate({ id: "doc.type.tutorial", message: "Tutorial" }),
    translate({ id: "doc.type.how-to", message: "How-to" }),
    translate({ id: "doc.type.concept", message: "Concept" }),
    translate({ id: "doc.type.reference", message: "Reference" }),
  ];
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span className={`flex flex-wrap justify-center ${large ? "max-w-xl gap-4" : "max-w-xs gap-2"}`}>
        {types.map((t, i) => (
          <span
            key={t}
            className={`${mono} rounded-md border border-solid uppercase tracking-[0.14em] ${
              large ? "px-4 py-2 text-sm" : "px-2 py-1 text-[10px]"
            } ${
              i === 0
                ? "border-[var(--ifm-color-primary)] bg-[var(--docs-color-background)] text-[var(--ifm-color-primary)]"
                : "border-[var(--nb-dash)] bg-[var(--docs-color-background)] text-[var(--docs-color-text-100)]"
            }`}
          >
            {t}
          </span>
        ))}
      </span>
    </span>
  );
}

function Code({ question }: { question?: string }) {
  return (
    <span className={`${mono} absolute left-5 top-5 whitespace-pre text-xs leading-5 text-[var(--ifm-font-color-base)]`}>
      {question}
    </span>
  );
}

export default function BlogVisual({ kind = "chart", question, answer, caption, large }: Props): React.JSX.Element {
  return (
    <span className="relative block h-full w-full overflow-hidden bg-[var(--nb-sunk)]">
      <span aria-hidden="true" className={`nb-grid absolute inset-0 ${large ? "bg-[length:32px_32px]" : ""}`} />
      {kind === "chart" && <Chart large={large} />}
      {kind === "graph" && <Graph />}
      {kind === "geofence" && <Geofence />}
      {kind === "chat" && <Chat question={question} answer={answer} large={large} />}
      {kind === "badges" && <Badges large={large} />}
      {kind === "code" && <Code question={question} />}
      {caption && large && <span className="nb-eyebrow absolute bottom-4 left-5">{caption}</span>}
    </span>
  );
}
