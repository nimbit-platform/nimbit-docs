import React, { useEffect, useState, type ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import { useLocation } from "@docusaurus/router";
import { isEmbedded } from "@site/src/lib/embed";

/** In embed mode, a slim bar on top that opens the same page in the full docs. */
function EmbedBar(): React.JSX.Element | null {
  const location = useLocation();
  const [embedded, setEmbedded] = useState(false);
  useEffect(() => setEmbedded(isEmbedded()), []);
  if (!embedded) return null;
  const url = new URL(location.pathname + location.search + location.hash, window.location.origin);
  url.searchParams.set("embed", "0");
  const href = url.toString();
  return (
    <div className="nb-embed-bar">
      <span className="nb-eyebrow">NimBit · Docs</span>
      <a href={href} target="_blank" rel="noopener">
        <Translate id="embed.openFull">Open in the full docs</Translate> ↗
      </a>
    </div>
  );
}

export default function Root({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <>
      <EmbedBar />
      {children}
    </>
  );
}
