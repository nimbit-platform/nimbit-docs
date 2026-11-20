import { captureAppUrlFromQuery } from "@site/src/lib/appUrl";

/** `?app=<origin>` on the first page a reader opens sets their IoT Breeze address (see src/lib/appUrl.ts). */
if (typeof window !== "undefined") captureAppUrlFromQuery();
