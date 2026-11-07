/**
 * The address of the reader's IoT Breeze. Customers on their own domain set it once; every link
 * into the app (AppLink, TourLink, "Open IoT Breeze") is then built on it.
 *
 * Set by: the address field next to "Open IoT Breeze", or `?app=<origin>` on any docs URL (IoT
 * Breeze's help drawer can add its own origin, so readers who come from the app never set it).
 * Kept in localStorage; falls back to the default when storage is unavailable.
 */
import { useEffect, useState } from "react";

export const DEFAULT_APP_URL = "https://iotbreeze.nimbit.ai";
const KEY = "nimbit-docs.app-url";
const EVENT = "nimbit-docs:app-url";

/** An http(s) origin, or null for anything else. Paths, queries and credentials are dropped. */
export function normalizeAppUrl(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  try {
    const url = new URL(/^[a-z]+:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function getAppUrl(): string {
  if (typeof window === "undefined") return DEFAULT_APP_URL;
  try {
    return normalizeAppUrl(window.localStorage.getItem(KEY) ?? "") ?? DEFAULT_APP_URL;
  } catch {
    return DEFAULT_APP_URL;
  }
}

/** Stores the address (null resets to the default) and tells every mounted link. */
export function setAppUrl(value: string | null): void {
  try {
    if (value) window.localStorage.setItem(KEY, value);
    else window.localStorage.removeItem(KEY);
  } catch {
    // Storage blocked: the address lasts for this page only.
  }
  window.dispatchEvent(new CustomEvent(EVENT));
}

/** Reads `?app=` once per page load and stores it. */
export function captureAppUrlFromQuery(): void {
  if (typeof window === "undefined") return;
  const value = new URLSearchParams(window.location.search).get("app");
  const origin = value ? normalizeAppUrl(value) : null;
  if (origin) setAppUrl(origin);
}

/** The current address; the default during server rendering, the stored one after hydration. */
export function useAppUrl(): string {
  const [url, setUrl] = useState(DEFAULT_APP_URL);
  useEffect(() => {
    const update = () => setUrl(getAppUrl());
    update();
    window.addEventListener(EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  return url;
}

/** A link into the app: the route (without locale), and optionally a guided tour to start there. */
export function appHref(base: string, route = "/", options: { tour?: string; lang?: string } = {}): string {
  const lang = options.lang ?? "en";
  const path = route === "/" ? `/${lang}` : `/${lang}${route.startsWith("/") ? route : `/${route}`}`;
  const url = new URL(path, base);
  if (options.tour) url.searchParams.set("tour", options.tour);
  return url.toString();
}
