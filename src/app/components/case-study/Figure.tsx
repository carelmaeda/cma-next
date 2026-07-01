import { ReactNode } from 'react';

interface FigureProps {
  children?: ReactNode;
  caption?: ReactNode;
  variant?: 'inline' | 'wide' | 'bleed';
  placeholder?: string;
  alt?: string;
}

const variantWrap: Record<NonNullable<FigureProps['variant']>, string> = {
  inline: 'm-0',
  wide: 'm-0 md:-mx-12 lg:-mx-24',
  bleed: 'm-0 mx-[calc(50%-50vw)] max-w-[100vw]',
};

export default function Figure({
  children,
  caption,
  variant = 'inline',
  placeholder,
  alt,
}: FigureProps) {
  return (
    <figure className={variantWrap[variant]}>
      {children ?? (
        <div
          className="grid place-items-center gap-2 min-h-[220px] p-8 bg-cream-pale border border-dashed border-hairline rounded-md text-center"
          role="img"
          aria-label={alt ?? placeholder ?? 'Visual asset pending'}
        >
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-terracotta">
            Visual asset
          </span>
          {placeholder && (
            <p className="max-w-[50ch] font-sans text-sm text-warm-grey leading-[1.5]">
              {placeholder}
            </p>
          )}
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-warm-grey leading-[1.5]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface BeforeAfterProps {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: ReactNode;
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  caption,
}: BeforeAfterProps) {
  return (
    <figure className="m-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative bg-cream-pale border border-hairline rounded-md overflow-hidden">
          <span className="absolute top-3 left-3 z-10 font-mono text-[10px] uppercase tracking-[0.08em] bg-aubergine text-cream py-1 px-2.5 rounded-pill">
            {beforeLabel}
          </span>
          {before}
        </div>
        <div className="relative bg-cream-pale border border-hairline rounded-md overflow-hidden">
          <span className="absolute top-3 left-3 z-10 font-mono text-[10px] uppercase tracking-[0.08em] bg-terracotta text-cream py-1 px-2.5 rounded-pill">
            {afterLabel}
          </span>
          {after}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-warm-grey leading-[1.5]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface FlowStripProps {
  frames: { content: ReactNode; caption?: ReactNode }[];
  caption?: ReactNode;
}

export function FlowStrip({ frames, caption }: FlowStripProps) {
  return (
    <figure className="m-0">
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-[var(--flow-cols)]"
        style={{ ['--flow-cols' as string]: `repeat(${frames.length}, minmax(0, 1fr))` }}
      >
        {frames.map((frame, i) => (
          <div className="grid gap-2" key={i}>
            <div className="bg-cream-pale border border-hairline rounded-md overflow-hidden min-h-[140px]">
              {frame.content}
            </div>
            {frame.caption && (
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-warm-grey leading-[1.45] m-0">
                {frame.caption}
              </p>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-warm-grey leading-[1.5]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface GridFigureProps {
  items: ReactNode[];
  caption?: ReactNode;
}

export function GridFigure({ items, caption }: GridFigureProps) {
  const cols = Math.min(items.length, 3);
  return (
    <figure className="m-0">
      <div
        className="grid gap-4 grid-cols-1 sm:grid-cols-[var(--grid-cols)]"
        style={{ ['--grid-cols' as string]: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {items.map((item, i) => (
          <div key={i} className="bg-cream-pale border border-hairline rounded-md overflow-hidden">
            {item}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.08em] text-warm-grey leading-[1.5]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
