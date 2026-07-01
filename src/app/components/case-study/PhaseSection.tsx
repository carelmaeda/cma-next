import { ReactNode } from 'react';
import CaseStudySection from './CaseStudySection';
import type { DesignThinkingPhase } from '../shared/DesignThinkingDiagram';

const PHASE_META: Record<
  DesignThinkingPhase,
  { number: string; label: string; colorVar: string }
> = {
  empathize: { number: '01', label: 'Empathize', colorVar: 'var(--color-phase-empathize)' },
  define: { number: '02', label: 'Define', colorVar: 'var(--color-phase-define)' },
  ideate: { number: '03', label: 'Ideate', colorVar: 'var(--color-phase-ideate)' },
  prototype: { number: '04', label: 'Prototype', colorVar: 'var(--color-phase-prototype)' },
  test: { number: '05', label: 'Test', colorVar: 'var(--color-phase-test)' },
};

const HEX_PATH = 'M25 8 L75 8 L100 50 L75 92 L25 92 L0 50 Z';

interface PhaseSectionProps {
  phase: DesignThinkingPhase;
  heading: string;
  id?: string;
  children: ReactNode;
}

export default function PhaseSection({
  phase,
  heading,
  id,
  children,
}: PhaseSectionProps) {
  const meta = PHASE_META[phase];
  const eyebrowNode = (
    <span
      className="cs-section__phase-chip"
      style={{ ['--phase-color' as string]: meta.colorVar }}
    >
      <svg viewBox="0 0 100 100" className="cs-section__phase-chip-hex" aria-hidden="true">
        <path d={HEX_PATH} fill={meta.colorVar} />
      </svg>
      <span className="cs-section__phase-chip-number">{meta.number}</span>
      <span>{meta.label}</span>
    </span>
  );

  return (
    <CaseStudySection
      id={id ?? phase}
      heading={heading}
      // CaseStudySection's `eyebrow` prop renders as a string in a <p>.
      // We need a styled chip, so pass via a slot pattern below.
      eyebrowSlot={eyebrowNode}
    >
      {children}
    </CaseStudySection>
  );
}
