import React from "react";
import { Play } from "lucide-react";
import { appHref, useAppUrl } from "@site/src/lib/appUrl";
import tours from "@site/src/data/tours.json";
import styles from "./styles.module.css";

export type Tour = { id: string; title: string; route: string; guide?: string; guideTitle?: string };

/** A tour that starts on one record's screen (`/dashboards/:dashboardId`) can't be linked: the docs don't know the record. */
export const linkable = (tour: Tour) => !tour.route.includes(":");

/**
 * Starts one of IoT Breeze's guided tours in the reader's app:
 *   <TourLink id="build-graph-model" />
 * The tour's title and start screen come from src/data/tours.json (scripts/sync-tours.mjs reads
 * them from the app). IoT Breeze starts the tour named in `?tour=` once the screen has loaded.
 */
export default function TourLink({ id, children }: { id: string; children?: React.ReactNode }) {
  const base = useAppUrl();
  const tour = (tours as Tour[]).find((t) => t.id === id);
  if (!tour) throw new Error(`TourLink: unknown tour "${id}". Run scripts/sync-tours.mjs or fix the id.`);
  if (!linkable(tour)) throw new Error(`TourLink: tour "${id}" starts on a record's screen (${tour.route}); link its guide's first chapter instead.`);
  return (
    <a className={styles.tour} href={appHref(base, tour.route, { tour: tour.id })} target="_blank" rel="noopener noreferrer">
      <Play size={14} aria-hidden="true" />
      <span>
        <span className={styles.eyebrow}>Guided tour in IoT Breeze</span>
        <span className={styles.title}>{children ?? tour.title}</span>
      </span>
    </a>
  );
}
