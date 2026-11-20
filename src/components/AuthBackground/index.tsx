import React, { useEffect, useState } from "react";
import backgrounds from "./backgrounds.json";
import "./auth-bg.css";
import "./bg-network.css";
import "./bg-telemetry.css";
import "./bg-devices.css";
import "./bg-geofences.css";

type Kind = keyof typeof backgrounds;
const KINDS = Object.keys(backgrounds) as Kind[];
const KEY = "nimbit-docs.bg";

/**
 * One of the IoT Breeze sign-in backgrounds, filling its positioned parent. As on the sign-in page,
 * each visit gets the next background in the rotation and keeps it until the tab closes.
 * The server render uses the first, so the page never flashes an empty hero.
 */
export default function AuthBackground({ kind }: { kind?: Kind }) {
  const [current, setCurrent] = useState<Kind>(kind ?? KINDS[0]);

  useEffect(() => {
    if (kind) return;
    try {
      const kept = window.sessionStorage.getItem(KEY) as Kind | null;
      if (kept && KINDS.includes(kept)) return setCurrent(kept);
      const last = Number(window.localStorage.getItem(KEY) ?? -1);
      const next = (Number.isFinite(last) ? last + 1 : 0) % KINDS.length;
      window.localStorage.setItem(KEY, String(next));
      window.sessionStorage.setItem(KEY, KINDS[next]);
      setCurrent(KINDS[next]);
    } catch {
      // Storage blocked: keep the first background.
    }
  }, [kind]);

  return (
    <div
      className="auth-bg"
      data-bg={current}
      data-detail="calm"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: backgrounds[current] }}
    />
  );
}
