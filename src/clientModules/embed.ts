import { announcePage, isEmbedded } from "@site/src/lib/embed";

let pending: (() => void) | undefined;

/**
 * After each navigation, once the new page's title is set. Helmet writes <title> after this hook runs,
 * so on a navigation wait for the title to change, and announce anyway after a short wait in case
 * both pages share a title.
 */
export function onRouteDidUpdate({ previousLocation }: { previousLocation: unknown }): void {
  if (!isEmbedded()) return;
  pending?.();
  if (!previousLocation) {
    window.setTimeout(announcePage, 0);
    return;
  }
  const oldTitle = document.title;
  const observer = new MutationObserver(() => {
    if (document.title !== oldTitle) finish();
  });
  const timer = window.setTimeout(() => finish(), 500);
  function finish(): void {
    cancel();
    announcePage();
  }
  function cancel(): void {
    observer.disconnect();
    window.clearTimeout(timer);
    pending = undefined;
  }
  pending = cancel;
  observer.observe(document.head, { subtree: true, childList: true, characterData: true });
}
