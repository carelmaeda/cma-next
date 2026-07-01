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
    bullets: [
      'Reframe and create human-centric problem statements',
      'Identify meaningful surprises and tensions',
      'Infer insights',
    ],
  },
  {
    id: 'ideate',
    label: 'Ideate',
    colorVar: 'var(--color-phase-ideate)',
    bullets: ['Brainstorm radical ideas', "Build on others' ideas", 'Suspend judgement'],
  },
  {
    id: 'prototype',
    label: 'Prototype',
    colorVar: 'var(--color-phase-prototype)',
    bullets: [
      'Create low-res objects and experiences',
      'Role play to understand context and key features',
      'Quickly build to think and learn',
    ],
  },
  {
    id: 'test',
    label: 'Test',
    colorVar: 'var(--color-phase-test)',
    bullets: [
      'Test with users to refine solutions and gather ideas',
      'Gain deeper empathy',
      'Embrace failure',
    ],
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

// Hexagon SVG path (flat-top hex inscribed in 100×100 viewBox).
// Using a viewBox keeps it crisp at any rendered size.
const HEX_PATH = 'M25 8 L75 8 L100 50 L75 92 L25 92 L0 50 Z';

interface HexProps {
  phase: Phase;
  index: number;
  active: boolean;
  reduce: boolean;
}

function Hex({ phase, index, active, reduce }: HexProps) {
  const delay = reduce ? 0 : index * 0.08;
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.4, ease: EASE_OUT, delay }}
      className="flex flex-col items-center"
      style={{ ['--phase-color' as string]: phase.colorVar }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-32 h-32 md:w-40 md:h-40 drop-shadow-[0_8px_24px_rgba(44,40,38,0.10)]"
        aria-hidden="true"
      >
        <path
          d={HEX_PATH}
          fill={phase.colorVar}
          opacity={active ? 1 : 0.95}
        />
        <text
          x="50"
          y="56"
          textAnchor="middle"
          className="font-display"
          style={{
            fill: 'var(--color-cream-pale)',
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          {phase.label}
        </text>
      </svg>
    </motion.div>
  );
}

interface BulletsProps {
  phase: Phase;
  index: number;
  reduce: boolean;
}

function Bullets({ phase, index, reduce }: BulletsProps) {
  const delay = reduce ? 0 : index * 0.08 + 0.1;
  return (
    <motion.ul
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.4, ease: EASE_OUT, delay }}
      className="mt-4 grid gap-1.5"
    >
      {phase.bullets.map((b) => (
        <li
          key={b}
          className="flex items-start gap-2 text-sm leading-snug text-charcoal"
        >
          <span
            aria-hidden
            className="mt-[0.45rem] inline-block w-1.5 h-1.5 shrink-0"
            style={{ backgroundColor: phase.colorVar }}
          />
          <span>{b}</span>
        </li>
      ))}
    </motion.ul>
  );
}

interface DesignThinkingDiagramProps {
  activePhase?: DesignThinkingPhase;
  variant?: 'full' | 'compact';
}

export default function DesignThinkingDiagram({
  activePhase,
  variant = 'full',
}: DesignThinkingDiagramProps) {
  const reduce = useReducedMotion() ?? false;

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        {PHASES.map((phase) => {
          const active = activePhase === phase.id;
          return (
            <div
              key={phase.id}
              className="flex items-center gap-2"
              title={phase.label}
            >
              <svg viewBox="0 0 100 100" className="w-6 h-6" aria-hidden="true">
                <path
                  d={HEX_PATH}
                  fill={phase.colorVar}
                  opacity={active ? 1 : 0.35}
                />
              </svg>
              {active && (
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-aubergine">
                  {phase.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-12">
      {/* Hex chain, horizontal at md+, vertical stack below */}
      <div
        className="
          grid grid-cols-1 gap-10
          md:grid-cols-5 md:gap-4
          md:items-end
        "
      >
        {PHASES.map((phase, i) => {
          const active = activePhase === phase.id;
          // Stagger y-offset on desktop so the chain reads as a diagonal flow,
          // matching the reference diagram's rhythm.
          const offsetClass =
            i % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-8';
          return (
            <div
              key={phase.id}
              className={`flex flex-col items-center md:items-start ${offsetClass}`}
            >
              <Hex phase={phase} index={i} active={active || !activePhase} reduce={reduce} />
              <div className="md:hidden">
                <Bullets phase={phase} index={i} reduce={reduce} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop bullets, laid out in the same 5-col grid beneath the hex chain */}
      <div className="hidden md:grid md:grid-cols-5 md:gap-4">
        {PHASES.map((phase, i) => (
          <Bullets key={phase.id} phase={phase} index={i} reduce={reduce} />
        ))}
      </div>
    </div>
  );
}

export { PHASES };
