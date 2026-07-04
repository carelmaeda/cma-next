'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { MotionStagger, MotionItem } from '../partials/Motions';

/**
 * The five-phase design-thinking process strip used on case-study pages.
 * Mobile: each phase is a native <details> accordion. Desktop: CSS lays the
 * same markup out as a full-width 5-column process on a hairline track.
 */
export type DesignThinkingPhase = 'empathize' | 'define' | 'ideate' | 'prototype' | 'test';

interface Phase {
  id: DesignThinkingPhase;
  label: string;
  colorVar: string;
  bullets: string[];
}

const PHASES: Phase[] = [
  {
    id: 'empathize',
    label: 'Empathize',
    colorVar: 'var(--color-phase-empathize)',
    bullets: ['Conduct interviews', 'Uncover emotions', 'Seek stories'],
  },
  {
    id: 'define',
    label: 'Define',
    colorVar: 'var(--color-phase-define)',
    bullets: ['Reframe the problem', 'Find tensions', 'Infer insights'],
  },
  {
    id: 'ideate',
    label: 'Ideate',
    colorVar: 'var(--color-phase-ideate)',
    bullets: ['Brainstorm widely', 'Build on ideas', 'Suspend judgement'],
  },
  {
    id: 'prototype',
    label: 'Prototype',
    colorVar: 'var(--color-phase-prototype)',
    bullets: ['Build low-res', 'Role-play context', 'Learn by making'],
  },
  {
    id: 'test',
    label: 'Test',
    colorVar: 'var(--color-phase-test)',
    bullets: ['Test with users', 'Deepen empathy', 'Embrace failure'],
  },
];

// Small hexagon (flat-top, inscribed in a 100×100 viewBox). Kept tiny — a
// restrained nod to design-thinking, tied to the phase chips, not a loud block.
const HEX_PATH = 'M25 8 L75 8 L100 50 L75 92 L25 92 L0 50 Z';

export default function DesignThinkingDiagram({
  activities,
}: {
  /** Optional per-phase "what I did" labels; falls back to the generic bullets. */
  activities?: Partial<Record<DesignThinkingPhase, string[]>>;
}) {
  // Mobile: native <details> collapse (compact accordion). Desktop: force every
  // phase open — the closed-details hiding lives in the UA shadow DOM and can't
  // be undone with CSS, so set `open` imperatively at the md breakpoint. The
  // summaries also leave the tab order there: CSS pointer-events can block
  // clicks but not Enter/Space, which would collapse a column for keyboard users.
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => {
      ref.current?.querySelectorAll('details').forEach((d) => {
        d.open = mq.matches;
        const summary = d.querySelector('summary');
        if (summary) summary.tabIndex = mq.matches ? -1 : 0;
      });
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return (
    <div ref={ref}>
      <MotionStagger className="process" stagger={0.06}>
        {PHASES.map((phase, i) => {
          const labels = activities?.[phase.id] ?? phase.bullets;
          return (
            <MotionItem key={phase.id} className="phase-item">
              <details className="phase">
                <summary>
                  <span
                    className="phase-chip"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${phase.colorVar} 12%, transparent)`,
                    }}
                  >
                    <svg viewBox="0 0 100 100" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path d={HEX_PATH} fill={phase.colorVar} />
                    </svg>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>{' '}
                    <span>{phase.label}</span>
                  </span>
                  <ChevronDown className="chevron h-4 w-4 shrink-0 md:hidden" aria-hidden="true" />
                </summary>
                <div className="body">
                  <ul className="pills">
                    {labels.map((l) => (
                      <li
                        key={l}
                        className="phase-pill"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${phase.colorVar} 15%, transparent)`,
                        }}
                      >
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </MotionItem>
          );
        })}
      </MotionStagger>
    </div>
  );
}
