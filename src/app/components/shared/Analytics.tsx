'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';
import { track } from '@/lib/analytics';

/**
 * Site-wide event plumbing, mounted once in the root layout. Renders nothing.
 *
 * 1. Click delegation: any element carrying `data-track="event_name"` fires
 *    that GA4 event on click, with optional `data-track-location` /
 *    `data-track-label` forwarded as params. Server components stay server
 *    components — they declare intent via data attributes and this one
 *    listener does the client work.
 *
 * 2. Core Web Vitals: real-user LCP/CLS/INP/FCP/TTFB reported as GA4 events
 *    (field data per page, unlike lab-only Lighthouse runs).
 */
export default function Analytics() {
  useReportWebVitals((metric) => {
    track(metric.name, {
      // CLS is a unitless fraction; scale so GA4's integer rounding keeps it.
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_rating: metric.rating,
      non_interaction: true,
    });
  });

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('[data-track]');
      if (!el?.dataset.track) return;
      track(el.dataset.track, {
        ...(el.dataset.trackLocation ? { location: el.dataset.trackLocation } : {}),
        ...(el.dataset.trackLabel ? { label: el.dataset.trackLabel } : {}),
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
