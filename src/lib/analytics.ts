// GA4 event helper. The inline snippet in layout.tsx defines `window.gtag`
// synchronously before hydration, so by the time any handler or effect can
// call track() the queue exists — gtag.js (lazyOnload) replays it on load.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | number | boolean>;

/** Send a GA4 event. No-ops when gtag is absent (SSR, ad-blockers). */
export function track(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
}
