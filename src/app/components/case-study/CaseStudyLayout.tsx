import { ReactNode } from 'react';
import CaseStudyBackLink from './CaseStudyBackLink';

interface CaseStudyLayoutProps {
  children: ReactNode;
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <main className="bg-white pt-24 pb-32">
      <article className="mx-auto w-full max-w-wide px-[var(--gutter)] grid gap-20 md:gap-28">
        <CaseStudyBackLink />
        {children}
      </article>
    </main>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-[1.0625rem] leading-[1.7] text-charcoal grid gap-5 max-w-prose [&_strong]:text-aubergine [&_strong]:font-medium [&_em]:italic [&_em]:text-aubergine [&_a]:text-terracotta [&_code]:font-mono [&_code]:text-[0.875em] [&_code]:bg-cream-deep [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-sm">
      {children}
    </div>
  );
}
