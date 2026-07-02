'use client';

import { motion, useReducedMotion } from 'framer-motion';

export type DesignThinkingPhase =
  | 'empathize'
  | 'define'
  | 'ideate'
  | 'prototype'
  | 'test';

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
    bullets: ['Brainstorm widely', "Build on ideas", 'Suspend judgement'],
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

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Small hexagon (flat-top, inscribed in a 100×100 viewBox). Kept tiny — a
// restrained nod to design-thinking, tied to the phase chips, not a loud block.
const HEX_PATH = 'M25 8 L75 8 L100 50 L75 92 L25 92 L0 50 Z';

interface DesignThinkingDiagramProps {
  activePhase?: DesignThinkingPhase;
  variant?: 'full' | 'compact';
  /** Optional per-phase "what I did" labels; falls back to the generic bullets. */
  activities?: Partial<Record<DesignThinkingPhase, string[]>>;
}

export default function DesignThinkingDiagram({
  activePhase,
  variant = 'full',
  activities,
}: DesignThinkingDiagramProps) {
  const reduce = useReducedMotion() ?? false;

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        {PHASES.map((phase) => {
          const active = activePhase === phase.id;
          return (
            <div key={phase.id} className="flex items-center gap-2" title={phase.label}>
              <svg viewBox="0 0 100 100" className="h-4 w-4" aria-hidden="true">
                <path d={HEX_PATH} fill={phase.colorVar} opacity={active ? 1 : 0.35} />
              </svg>
              {active && <span className="eyebrow eyebrow--strong">{phase.label}</span>}
            </div>
          );
        })}
      </div>
    );
  }

  // Editorial "process index" — a numbered horizontal stepper. Serif numerals
  // over a hairline track, a tiny phase-colour hex as the only accent, and the
  // activities listed beneath. Monochrome and restrained, matching the site.
  return (
    <ol className="grid grid-cols-1 gap-x-8 gap-y-sub md:grid-cols-5">
      {PHASES.map((phase, i) => {
        const labels = activities?.[phase.id] ?? phase.bullets;
        return (
          <motion.li
            key={phase.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: reduce ? 0 : i * 0.08 }}
            className="cs-panel grid content-start gap-3"
          >
            <span
              className="cs-phase-chip"
              style={{
                backgroundColor: `color-mix(in srgb, ${phase.colorVar} 12%, transparent)`,
              }}
            >
              <svg viewBox="0 0 100 100" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path d={HEX_PATH} fill={phase.colorVar} />
              </svg>
              <span className="cs-phase-chip__n">{String(i + 1).padStart(2, '0')}</span>
              <span>{phase.label}</span>
            </span>
            <ul className="grid gap-1">
              {labels.map((l) => (
                <li key={l} className="text-sm leading-snug text-muted-ink">
                  {l}
                </li>
              ))}
            </ul>
          </motion.li>
        );
      })}
    </ol>
  );
}

export { PHASES };
