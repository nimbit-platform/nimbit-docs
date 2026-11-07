import { announcePage, isEmbedded } from "@site/src/lib/embed";

/** After each navigation, once the new title is set. */
export function onRouteDidUpdate(): void {
  if (!isEmbedded()) return;
  window.setTimeout(announcePage, 0);
}
