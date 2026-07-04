import Link from 'next/link';
import Image from 'next/image';
import { MotionVertical, MotionStagger, MotionItem } from './Motions';
import { Button } from '@/components/ui/button';

interface WorkCard {
  number: string;
  tags: string[];
  title: string;
  description: string;
  href: string;
  /** Accent that colours the cover panel, colour lives ONLY inside imagery. */
  accent: string;
  /**
   * Cover image, a 4:3 .webp in /public/images/. When omitted (e.g. a new
   * card awaiting art) a tinted placeholder slot renders in its place.
   */
  cover?: { src: string; alt: string };
}

const workCards: WorkCard[] = [
  {
    number: '01',
    tags: ['User Research', 'Design Thinking'],
    title: 'Bonus Bowls',
    description:
      'A cashback loyalty platform for a Fortune 500 pet-nutrition brand: From User Research to Live.',
    href: '/case-studies/bonus-bowls',
    accent: 'var(--color-green)',
    cover: {
      src: '/images/bonusbowls-hero.webp',
      alt: 'Bonus Bowls, the receipt-to-cashback loyalty app for pet parents',
    },
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
        {/* sizes tracks the real rendered width: one grid column of
            .wrap--wide (max 132rem incl. gutter+gap → ~964px cap). The old
            40rem value made browsers upscale a 640px variant on desktop. */}
        <Image
          src={card.cover.src}
          alt={card.cover.alt}
          fill
          quality={85}
          sizes="(min-width: 2112px) 964px, (min-width: 768px) 45vw, 90vw"
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

/** Home "Latest work" section — one full-width linked card per case study. */
export default function Work() {
  return (
    <section id="work" className="py-page">
      <div className="wrap wrap--wide">
        <MotionVertical>
          <header className="mb-4">
            {/* h2 (not p) so the outline doesn't skip from the hero h1 to the
                card h3s; the .eyebrow class keeps the micro-label look. */}
            <h2 className="eyebrow tracking-widest">Latest work</h2>
          </header>
        </MotionVertical>

        <MotionStagger className="grid gap-sub" stagger={0.1}>
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

                  <h3 className="mt-5 text-h2 font-medium">{card.title}</h3>

                  <p className="max-w-prose text-muted-ink">{card.description}</p>

                  {/* asChild renders a span: the whole card is already a link,
                      and a <button> inside an <a> is invalid HTML. The whole
                      card is the hover target, so the pill mirrors its own
                      hover treatment on group-hover — it must respond while
                      the cover image zooms. */}
                  <Button
                    asChild
                    className="group-hover:-translate-y-1 group-hover:bg-ink-hover group-hover:shadow-lift"
                  >
                    <span>Read case study</span>
                  </Button>
                </div>
              </Link>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
