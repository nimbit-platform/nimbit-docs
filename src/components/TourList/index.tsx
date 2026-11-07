import React from "react";
import tours from "@site/src/data/tours.json";
import { appHref, useAppUrl } from "@site/src/lib/appUrl";
import { linkable, type Tour } from "@site/src/components/TourLink";

/**
 * Every guided tour in IoT Breeze, grouped by guide. A tour that starts on a list or overview
 * links into the reader's app and starts there; one that starts on a single record's screen is
 * started from the help menu on that screen.
 */
export default function TourList() {
  const base = useAppUrl();
  const groups = new Map<string, Tour[]>();
  for (const tour of tours as Tour[]) {
    const key = tour.guideTitle ?? "More tours";
    groups.set(key, [...(groups.get(key) ?? []), tour]);
  }
  const ordered = [...groups.entries()].sort(([a], [b]) => (a === "More tours" ? 1 : b === "More tours" ? -1 : 0));

  return (
    <>
      {ordered.map(([guide, list]) => (
        <section key={guide}>
          <h2>{guide}</h2>
          <ol>
            {list.map((tour) => (
              <li key={tour.id}>
                {linkable(tour) ? (
                  <a href={appHref(base, tour.route, { tour: tour.id })} target="_blank" rel="noopener noreferrer">
                    {tour.title}
                  </a>
                ) : (
                  <>
                    {tour.title}{" "}
                    <span style={{ color: "var(--docs-color-text-100)" }}>(start it from the help menu on that screen)</span>
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </>
  );
}
