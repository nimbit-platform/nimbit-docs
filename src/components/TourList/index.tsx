import React from "react";
import tours from "@site/src/data/tours.json";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAppHref } from "@site/src/lib/appUrl";
import { linkable, useTourTitle, type Tour } from "@site/src/components/TourLink";

/**
 * Every guided tour in IoT Breeze, grouped by guide. A tour that starts on a list or overview
 * links into the reader's app and starts there; one that starts on a single record's screen is
 * started from the help menu on that screen.
 */
export default function TourList() {
  const href = useAppHref();
  const titleOf = useTourTitle();
  const { i18n } = useDocusaurusContext();
  const more = translate({ id: "tours.more", message: "More tours" });
  const groups = new Map<string, Tour[]>();
  for (const tour of tours as Tour[]) {
    const guide = i18n.currentLocale === "de" ? tour.guideTitleDe : tour.guideTitle;
    const key = guide ?? more;
    groups.set(key, [...(groups.get(key) ?? []), tour]);
  }
  const ordered = [...groups.entries()].sort(([a], [b]) => (a === more ? 1 : b === more ? -1 : 0));

  return (
    <>
      {ordered.map(([guide, list]) => (
        <section key={guide}>
          <h2>{guide}</h2>
          <ol>
            {list.map((tour) => (
              <li key={tour.id}>
                {linkable(tour) ? (
                  <a href={href(tour.route, { tour: tour.id })} target="_blank" rel="noopener noreferrer">
                    {titleOf(tour)}
                  </a>
                ) : (
                  <>
                    {titleOf(tour)}{" "}
                    <span style={{ color: "var(--docs-color-text-100)" }}>
                      <Translate id="tours.fromHelpMenu">(start it from the help menu on that screen)</Translate>
                    </span>
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
