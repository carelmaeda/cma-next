'use client';

import { useEffect, useRef } from 'react';
import { track } from '@/lib/analytics';

const MILESTONES = [25, 50, 75] as const;

/**
 * Reading-depth telemetry for a long-form case study. Rendered as the last
 * child of the `<article>`, it measures how far the viewport bottom has
 * travelled through that article and fires each GA4 event exactly once:
 *
 *   case_study_scroll_25 / _50 / _75  — reading-funnel milestones
 *   case_study_read_complete          — article bottom reached
 *
 * Distinct event names (rather than one event with a percent param) so the
 * counts show up in GA4's standard Events report with zero configuration.
 * The scroll listener is passive and rAF-throttled, and removes itself once
 * read_complete has fired.
 */
export default function ReadTracker({ study }: { study: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const article = ref.current?.closest('article');
    if (!article) return;

    const fired = new Set<number>();
    let complete = false;
    let ticking = false;

    const measure = () => {
      ticking = false;
      if (complete) return;
      const rect = article.getBoundingClientRect();
      const progress = ((window.innerHeight - rect.top) / rect.height) * 100;
      for (const m of MILESTONES) {
        if (progress >= m && !fired.has(m)) {
          fired.add(m);
          track(`case_study_scroll_${m}`, { study });
        }
      }
      // Complete when the article's bottom edge is within a viewport's slack
      // of being visible — "read to the end", not "pixel-perfect bottom".
      if (rect.bottom <= window.innerHeight + 80) {
        complete = true;
        track('case_study_read_complete', { study });
        window.removeEventListener('scroll', onScroll);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    measure(); // catches reloads restored mid-article
    return () => window.removeEventListener('scroll', onScroll);
  }, [study]);

  return <div ref={ref} aria-hidden="true" />;
}
