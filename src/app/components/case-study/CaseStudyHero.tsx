import { ReactNode } from 'react';
import Link from 'next/link';
import { MotionVertical } from '../partials/Motions';

export interface CaseStudyMeta {
  label: string;
  value: ReactNode;
}

interface CaseStudyHeroProps {
  /** e.g. "Case Study 01 · Brand & Positioning" */
  eyebrow?: string;
  title: string;
  framing?: ReactNode;
  meta?: CaseStudyMeta[];
  outcomes?: ReactNode;
  heroVisual?: ReactNode;
  heroVisualCaption?: string;
  /** Optional "View more" target shown at the right of the metadata strip. */
  viewMoreHref?: string;
}

/**
 * Splits "Case Study 01 · Brand & Positioning" into the numeric index ("01")
 * and the descriptive tail so the header can render the index as a large serif
 * numeral (the signature editorial detail) and the kicker tail in mono.
 */
function splitEyebrow(eyebrow: string) {
  const match = eyebrow.match(/(\d{1,2})\s*[·•-]\s*(.+)$/);
  if (match) return { index: match[1], rest: match[2].trim() };
  const lead = eyebrow.match(/^(\d{1,2})\s+(.+)$/);
  if (lead) return { index: lead[1], rest: lead[2].trim() };
  return { index: null as string | null, rest: eyebrow };
}

export default function CaseStudyHero({
  eyebrow,
  title,
  framing,
  meta,
  outcomes,
  heroVisual,
  heroVisualCaption,
  viewMoreHref,
}: CaseStudyHeroProps) {
  const split = eyebrow ? splitEyebrow(eyebrow) : null;

  return (
    <header className="grid gap-10 pt-4">
      <MotionVertical className="max-w-[58rem]">
        {split && (
          <div className="mb-6 flex items-baseline gap-4">
            {split.index && (
              <span className="font-numeral leading-none text-muted-ink text-6xl md:text-7xl">
                {split.index}
              </span>
            )}
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
              {split.rest}
            </span>
          </div>
        )}

        <h1 className="font-display text-ink font-medium tracking-tight leading-[1.04] text-[clamp(2.25rem,5.5vw,4.25rem)]">
          {title}
        </h1>

        {framing && (
          <p className="mt-6 max-w-prose font-sans text-lg leading-[1.55] text-ink md:text-xl">
            {framing}
          </p>
        )}
      </MotionVertical>

      {/* Hero visual, drop the project's hero mockup here (see Figure placeholder). */}
      {heroVisual && (
        <MotionVertical>
          <figure className="m-0">
            {heroVisual}
            {heroVisualCaption && (
              <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.1em] text-muted-ink leading-[1.5]">
                {heroVisualCaption}
              </figcaption>
            )}
          </figure>
        </MotionVertical>
      )}

      {/* Metadata strip, Client / Year / What I did / Industry, + optional View more */}
      {meta && meta.length > 0 && (
        <MotionVertical>
          <div className="flex flex-wrap items-end justify-between gap-6 border-y border-hairline py-6">
            <dl className="grid flex-1 grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
              {meta.map((m) => (
                <div className="grid gap-1.5" key={m.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-ink">
                    {m.label}
                  </dt>
                  <dd className="font-sans text-sm leading-snug text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
            {viewMoreHref && (
              <Link
                href={viewMoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline-grow inline-flex shrink-0 items-center gap-2 rounded-pill bg-ink px-5 py-2.5 font-display text-sm font-medium tracking-snug text-white transition-transform duration-300 ease-standard hover:-translate-y-0.5"
              >
                View more ↗
              </Link>
            )}
          </div>
        </MotionVertical>
      )}

      {outcomes && (
        <MotionVertical>
          <div className="rounded-card bg-off-white p-6 md:p-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
              Early outcomes
            </p>
            <div className="font-sans text-base leading-[1.7] text-ink [&_ul]:grid [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-muted-ink [&_strong]:font-semibold [&_em]:text-muted-ink [&_em]:not-italic [&_em]:text-sm">
              {outcomes}
            </div>
          </div>
        </MotionVertical>
      )}
    </header>
  );
}
