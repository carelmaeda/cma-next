import { ReactNode } from 'react';
import { MotionVertical } from '../partials/Motions';

interface CaseStudySectionProps {
  id?: string;
  heading: string;
  eyebrow?: string;
  eyebrowSlot?: ReactNode;
  children: ReactNode;
}

export default function CaseStudySection({ id, heading, eyebrow, eyebrowSlot, children }: CaseStudySectionProps) {
  return (
    <section id={id} className="grid gap-6 scroll-mt-24 max-w-[58rem]">
      <MotionVertical>
        <div className="grid gap-3">
          {eyebrowSlot ? (
            eyebrowSlot
          ) : eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-aubergine tracking-tight leading-[1.05] text-[clamp(1.875rem,4vw,2.75rem)]">
            {heading}
          </h2>
        </div>
      </MotionVertical>
      <div className="grid gap-5">{children}</div>
    </section>
  );
}

export function CaseStudySubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-aubergine text-[1.625rem] leading-[1.2] tracking-tight mt-2">
      {children}
    </h3>
  );
}

export function CaseStudyMinorHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-sans text-[1.0625rem] font-semibold text-aubergine leading-[1.3] mt-1">
      {children}
    </h4>
  );
}
