import React from "react";
import { Play } from "lucide-react";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAppHref } from "@site/src/lib/appUrl";
import tours from "@site/src/data/tours.json";
import styles from "./styles.module.css";

export type Tour = {
  id: string;
  title: string;
  titleDe: string;
  route: string;
  guide?: string;
  guideTitle?: string;
  guideTitleDe?: string;
};

/** The tour's title in the docs' language. */
export function useTourTitle(): (tour: Tour) => string {
  const { i18n } = useDocusaurusContext();
  return (tour) => (i18n.currentLocale === "de" ? tour.titleDe : tour.title);
}

/** A tour that starts on one record's screen (`/dashboards/:dashboardId`) can't be linked: the docs don't know the record. */
export const linkable = (tour: Tour) => !tour.route.includes(":");

/**
 * Starts one of IoT Breeze's guided tours in the reader's app:
 *   <TourLink id="build-graph-model" />
 * The tour's title and start screen come from src/data/tours.json (scripts/sync-tours.mjs reads
 * them from the app). IoT Breeze starts the tour named in `?tour=` once the screen has loaded.
 */
export default function TourLink({ id, children }: { id: string; children?: React.ReactNode }) {
  const href = useAppHref();
  const titleOf = useTourTitle();
  const tour = (tours as Tour[]).find((t) => t.id === id);
  if (!tour) throw new Error(`TourLink: unknown tour "${id}". Run scripts/sync-tours.mjs or fix the id.`);
  if (!linkable(tour)) throw new Error(`TourLink: tour "${id}" starts on a record's screen (${tour.route}); link its guide's first chapter instead.`);
  return (
    <a className={styles.tour} href={href(tour.route, { tour: tour.id })} target="_blank" rel="noopener noreferrer">
      <Play size={14} aria-hidden="true" />
      <span>
        <span className={styles.eyebrow}>
          <Translate id="tour.eyebrow">Guided tour in IoT Breeze</Translate>
        </span>
        <span className={styles.title}>{children ?? titleOf(tour)}</span>
      </span>
    </a>
  );
}
