/**
 * Embed mode: the docs inside IoT Breeze's help panel (an iframe) or its undocked window.
 * `?embed=1` turns it on for this tab and `?embed=0` off; it then lasts while the reader follows
 * links. While on, the site's chrome is hidden (custom.css, `html[data-embed]`) and every page
 * tells the app which page it is: `{ type: "nimbit-docs:page", permalink, title, locale }`.
 */
export const EMBED_KEY = "nimbit-docs.embed";
export const EMBED_MESSAGE = "nimbit-docs:page";

/** Runs in <head> before the page paints, so the navbar never flashes in the panel. */
export const EMBED_HEAD_SCRIPT = `(function(){try{var q=new URLSearchParams(location.search).get("embed");if(q==="1")sessionStorage.setItem("${EMBED_KEY}","1");if(q==="0")sessionStorage.removeItem("${EMBED_KEY}");if(sessionStorage.getItem("${EMBED_KEY}")==="1")document.documentElement.setAttribute("data-embed","1")}catch(e){}})();`;

export function isEmbedded(): boolean {
  return typeof document !== "undefined" && document.documentElement.getAttribute("data-embed") === "1";
}

/** Tells the frame's parent, or the window that opened this one, which page is showing. */
export function announcePage(): void {
  if (!isEmbedded()) return;
  const target = window.parent !== window ? window.parent : window.opener;
  if (!target) return;
  const message = {
    type: EMBED_MESSAGE,
    permalink: window.location.pathname,
    title: document.title,
    locale: document.documentElement.lang,
  };
  try {
    target.postMessage(message, "*");
  } catch {
    // The opener is gone or closed.
  }
}
