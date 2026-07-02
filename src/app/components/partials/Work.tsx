import Link from 'next/link';
import Image from 'next/image';
import { MotionVertical, MotionStagger, MotionItem } from './Motions';

interface WorkCard {
  number: string;
  tags: string[];
  title: string;
  description: string;
  href: string;
  readingTime: number;
  /** Accent that colours the cover panel, colour lives ONLY inside imagery. */
  accent: string;
  /**
   * Cover image, drop a 4:3 .webp in /public/images/work/ and set `src`.
   * Until then a tinted placeholder slot renders in its place.
   */
  cover?: { src: string; alt: string };
}

const workCards: WorkCard[] = [
  {
    number: '01',
    tags: ['Consumer', 'Strategy & Impact'],
    title: 'Bonus Bowls',
    description:
      'A cashback loyalty platform for a Fortune 500 pet-nutrition brand: researched, designed, and shipped end-to-end, with the strategy built from a 100-respondent primary study.',
    href: '/case-studies/bonus-bowls',
    readingTime: 4,
    accent: 'var(--color-green)',
    // cover: { src: '/images/work/bonus-bowls.webp', alt: 'Bonus Bowls loyalty web app, phone mock' },
  },
];

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center rounded-pill bg-pill px-3 py-1">
      {children}
    </span>
  );
}

/**
 * Cover slot. When no real image is supplied, render a brand-tinted placeholder
 * panel, the ONE place colour is allowed, with a clear "drop image here" hint
 * and the big serif index. Replace by setting `cover` on the card above.
 */
function CoverSlot({ card }: { card: WorkCard }) {
  if (card.cover) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-off-white">
        <Image
          src={card.cover.src}
          alt={card.cover.alt}
          fill
          sizes="(min-width: 768px) 40rem, 90vw"
          className="object-cover transition-transform duration-[600ms] ease-soft group-hover:scale-[1.03]"
        />
      </div>
    );
  }
  return (
    <div
      className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-card transition-transform duration-[600ms] ease-soft group-hover:scale-[1.01]"
      style={{ backgroundColor: `color-mix(in srgb, ${card.accent} 16%, var(--color-off))` }}
      aria-hidden="true"
    >
      <span
        className="absolute right-5 top-3 font-numeral text-8xl leading-none opacity-25"
        style={{ color: card.accent }}
      >
        {card.number}
      </span>
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span
          className="inline-flex h-12 w-12 items-center justify-center rounded-pill border border-dashed"
          style={{ borderColor: card.accent, color: card.accent }}
        >
          +
        </span>
        <span className="eyebrow">Cover slot · drop 4:3 .webp</span>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-gutter py-28 md:py-40">
      <div className="mx-auto max-w-wide">
        <MotionVertical>
          <header className="mb-12 md:mb-16">
            <p className="eyebrow tracking-widest">
              Latest work
            </p>
          </header>
        </MotionVertical>

        <MotionStagger className="grid gap-10" stagger={0.1}>
          {workCards.map((card) => (
            <MotionItem key={card.href}>
              <Link
                href={card.href}
                className="no-underline-grow group grid gap-8 md:grid-cols-2 md:items-center md:gap-14"
              >
                <CoverSlot card={card} />

                <div>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((t) => (
                      <TagPill key={t}>{t}</TagPill>
                    ))}
                  </div>

                  <h3 className="mt-5 font-display text-h2 font-medium text-ink">
                    {card.title}
                  </h3>

                  <p className="mt-4 max-w-prose font-sans text-base leading-[1.6] text-muted-ink">
                    {card.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-medium tracking-snug text-ink">
                    Read case study
                    <span className="transition-transform duration-300 ease-standard group-hover:translate-x-1">
                      →
                    </span>
                    <span className="eyebrow">· {card.readingTime} min</span>
                  </span>
                </div>
              </Link>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
