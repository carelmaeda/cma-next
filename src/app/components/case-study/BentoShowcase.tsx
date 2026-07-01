import { ReactNode } from 'react';
import Image from 'next/image';
import { MotionVertical, MotionStagger, MotionItem } from '../partials/Motions';

/**
 * Bento showcase, the asymmetric grid of rounded cards that isolates one UI
 * fragment per card (ref: h3ylab detail pages). It's the visual heart of a
 * case study. Each cell is either a real image, a data card (serif numeral),
 * or a labelled placeholder slot to drop a mockup into later.
 *
 * `span` controls the cell footprint on the 4-col desktop grid.
 */
export type BentoCell = {
  /** col span 1–4 (desktop). Default 1. */
  span?: 1 | 2 | 3 | 4;
  /** row span 1–2 (desktop). Default 1. */
  rows?: 1 | 2;
  /** Accent tint for the cell background, the sanctioned place for colour. */
  accent?: string;
} & (
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'stat'; value: string; label: string }
  | { kind: 'node'; node: ReactNode }
  | { kind: 'placeholder'; label: string; hint?: string }
);

const spanClass: Record<number, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
};
const rowClass: Record<number, string> = { 1: 'md:row-span-1', 2: 'md:row-span-2' };

function Cell({ cell }: { cell: BentoCell }) {
  const bg = cell.accent
    ? { backgroundColor: `color-mix(in srgb, ${cell.accent} 16%, var(--color-off))` }
    : undefined;

  return (
    <MotionItem
      className={`${spanClass[cell.span ?? 1]} ${rowClass[cell.rows ?? 1]} min-h-[180px]`}
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-card bg-off-white p-6"
        style={bg}
      >
        {cell.kind === 'image' && (
          <Image
            src={cell.src}
            alt={cell.alt}
            fill
            sizes="(min-width: 768px) 40rem, 90vw"
            className="object-cover"
          />
        )}

        {cell.kind === 'stat' && (
          <div className="flex h-full flex-col justify-end">
            <span
              className="font-numeral leading-none text-pure-black"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            >
              {cell.value}
            </span>
            <span className="mt-2 font-sans text-sm text-ink">{cell.label}</span>
          </div>
        )}

        {cell.kind === 'node' && <div className="flex h-full flex-col">{cell.node}</div>}

        {cell.kind === 'placeholder' && (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-dashed text-lg"
              style={{ borderColor: cell.accent ?? 'var(--color-hairline)', color: cell.accent ?? 'var(--color-muted)' }}
            >
              +
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink/60">
              {cell.label}
            </span>
            {cell.hint && (
              <span className="max-w-[24ch] font-sans text-xs leading-[1.4] text-muted-ink">
                {cell.hint}
              </span>
            )}
          </div>
        )}
      </div>
    </MotionItem>
  );
}

export default function BentoShowcase({
  eyebrow = 'Showcase',
  heading,
  cells,
}: {
  eyebrow?: string;
  heading?: string;
  cells: BentoCell[];
}) {
  return (
    <section className="grid gap-8">
      {(eyebrow || heading) && (
        <MotionVertical className="max-w-prose">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-ink">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="font-display text-ink font-medium tracking-tight leading-[1.1] text-[clamp(1.75rem,3.5vw,2.5rem)]">
              {heading}
            </h2>
          )}
        </MotionVertical>
      )}

      <MotionStagger
        className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
        stagger={0.07}
      >
        {cells.map((cell, i) => (
          <Cell key={i} cell={cell} />
        ))}
      </MotionStagger>
    </section>
  );
}
