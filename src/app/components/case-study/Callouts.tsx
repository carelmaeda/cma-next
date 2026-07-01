import { ReactNode } from 'react';

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
}

export function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <blockquote className="border-l-[3px] border-terracotta pl-6 py-2 my-2">
      <p className="font-display italic text-aubergine text-[1.625rem] leading-[1.3] tracking-tight m-0">
        &ldquo;{children}&rdquo;
      </p>
      {attribution && (
        <cite className="block not-italic mt-3 font-mono text-xs uppercase tracking-[0.08em] text-warm-grey">
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}

interface StatCalloutProps {
  value: string;
  label: ReactNode;
  context?: ReactNode;
}

export function StatCallout({ value, label, context }: StatCalloutProps) {
  const isLong = value.length > 12;
  return (
    <div className="grid gap-1.5 p-6 bg-cream-pale border border-hairline rounded-md">
      <span
        className={`font-display text-aubergine leading-none tracking-tight ${
          isLong ? 'text-[clamp(1.5rem,3.5vw,2.25rem)]' : 'text-[clamp(2rem,4vw,3rem)]'
        }`}
      >
        {value}
      </span>
      <span className="font-sans text-[0.9375rem] font-medium text-charcoal leading-[1.35] mt-1">
        {label}
      </span>
      {context && (
        <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-warm-grey leading-[1.5]">
          {context}
        </span>
      )}
    </div>
  );
}

interface StatGridProps {
  children: ReactNode;
}

export function StatGrid({ children }: StatGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2">
      {children}
    </div>
  );
}

interface AISectionProps {
  children: ReactNode;
}

export function AISection({ children }: AISectionProps) {
  return (
    <aside
      className="border-t border-hairline pt-8 mt-6 text-warm-grey"
      aria-label="How AI assisted on this project"
    >
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-warm-grey mb-2">
        Process note
      </p>
      <h2 className="font-display text-aubergine text-[1.625rem] leading-[1.2] tracking-tight mb-3">
        How AI assisted me on this project
      </h2>
      <div className="font-sans text-[0.9375rem] leading-[1.65] text-charcoal max-w-prose">
        {children}
      </div>
    </aside>
  );
}
