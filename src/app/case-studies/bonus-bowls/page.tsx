import type { Metadata } from 'next';
import Image from 'next/image';
import { Children, isValidElement, type CSSProperties, type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  CalendarDays,
  CircleDollarSign,
  HandCoins,
  ReceiptText,
  Smartphone,
  Tag,
  ThumbsUp,
  Users,
} from 'lucide-react';
import DesignThinkingDiagram from '@/app/components/shared/DesignThinkingDiagram';
import ImageLightbox from '@/app/components/shared/ImageLightbox';
import {
  MotionHero,
  MotionVertical,
  MotionStagger,
  MotionItem,
} from '@/app/components/partials/Motions';
import { Blockquote } from '@/components/ui/blockquote';
import { Button } from '@/components/ui/button';

// ≤60-char title (before the "| Carel Maeda" template) and ≤160-char
// description; og/twitter set explicitly so this page never inherits the
// homepage's social tags (Next merges those objects wholesale).
const CS_TITLE = 'Bonus Bowls — Loyalty Platform Case Study';
const CS_DESCRIPTION =
  'UX case study: research, design, and the Angular front-end for a cashback loyalty platform for a Fortune 500 pet-nutrition brand — from survey to live analytics.';
const CS_URL = '/case-studies/bonus-bowls';

export const metadata: Metadata = {
  title: CS_TITLE,
  description: CS_DESCRIPTION,
  alternates: { canonical: CS_URL },
  openGraph: {
    type: 'article',
    url: CS_URL,
    title: CS_TITLE,
    description: CS_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: CS_TITLE,
    description: CS_DESCRIPTION,
  },
};

const caseStudyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bonus Bowls: A loyalty platform for a Fortune 500 pet brand',
  description: CS_DESCRIPTION,
  url: `https://carelmaeda.com${CS_URL}`,
  image: `https://carelmaeda.com${CS_URL}/opengraph-image`,
  datePublished: '2026-07-04',
  author: {
    '@type': 'Person',
    name: 'Carel Maeda',
    jobTitle: 'Product Design Manager',
    url: 'https://carelmaeda.com',
  },
  keywords:
    'UX case study, product design, loyalty platform, design systems, user research, Angular',
};

/* ------------------------------------------------------------------ *
 * One case study. Text is authored as plain HTML (h2/h3/p/ul/table)
 * and styled by bare tag in globals.css, same rules as the rest of
 * the site. Pull-quotes use the shadcn-style <Blockquote> primitive
 * (src/components/ui/blockquote.tsx). Only true components (cards,
 * stats, the process chips) take a plain-noun class. Layout/spacing
 * stays in Tailwind.
 * ------------------------------------------------------------------ */

/* Components whose entrance is already choreographed internally.
   (`Bento` is a hoisted function declaration further down the file.) */
const SELF_ANIMATED = new Set<unknown>([DesignThinkingDiagram, Bento]);

/* Scroll-reveal for a section body: each direct child gets its own
 * MotionVertical so it rises when IT enters the viewport (reading-order
 * choreography on long sections). Components that already animate their
 * own children (Bento, DesignThinkingDiagram stagger internally) pass
 * through untouched — a second wrapper would double-fade them. */
function reveal(children: ReactNode) {
  return Children.map(children, (child) =>
    isValidElement(child) && SELF_ANIMATED.has(child.type) ? (
      child
    ) : (
      <MotionVertical>{child}</MotionVertical>
    ),
  );
}

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <MotionVertical>
        <h2>{heading}</h2>
      </MotionVertical>
      {reveal(children)}
    </section>
  );
}

const HEX_PATH = 'M25 8 L75 8 L100 50 L75 92 L25 92 L0 50 Z';
const PHASES = {
  empathize: { n: '01', label: 'Empathize', color: 'var(--color-phase-empathize)' },
  define: { n: '02', label: 'Define', color: 'var(--color-phase-define)' },
  ideate: { n: '03', label: 'Ideate', color: 'var(--color-phase-ideate)' },
  prototype: { n: '04', label: 'Prototype', color: 'var(--color-phase-prototype)' },
  test: { n: '05', label: 'Test', color: 'var(--color-phase-test)' },
} as const;

function Phase({ phase, children }: { phase: keyof typeof PHASES; children: ReactNode }) {
  const { n, label, color } = PHASES[phase];
  return (
    <section id={phase}>
      <MotionVertical>
        {/* One asset: the enlarged phase badge doubles as the section title. */}
        <h2
          className="phase-title"
          style={{ backgroundColor: `color-mix(in srgb, ${color} 18%, transparent)` }}
        >
          <svg viewBox="0 0 100 100" className="h-6 w-6 shrink-0" aria-hidden="true">
            <path d={HEX_PATH} fill={color} />
          </svg>
          {/* whitespace between spans so screen readers don't read "01Empathize" */}
          <span className="n">{n}</span> <span>{label}</span>
        </h2>
      </MotionVertical>
      {reveal(children)}
    </section>
  );
}

function Stat({ value, label, context }: { value: string; label: string; context?: string }) {
  return (
    <div className="stat">
      <span className={`value${value.length > 12 ? ' long' : ''}`}>{value}</span>
      <span className="label">{label}</span>
      {context && <span className="context">{context}</span>}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-hairline">
      <table>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Bento cells. `cls` carries the responsive span (literal Tailwind classes so
 * JIT sees them): a 2-col grid on mobile, a 6-col mosaic on desktop. Compact,
 * tiered reading order — a full-width tinted hero band, three stat tiles,
 * two logo tiles, then a quiet strip of supporting numbers beside a light
 * CTA. Tile decoration lives in globals.css (.bento-tile / .bento-logo /
 * .bento-cta); the hero passes its tint as the `--tile-accent` property.
 * Icons match the homepage (bare lucide, default stroke, ink). */
type BentoMini = { icon: LucideIcon; value: string; label: string };
type BentoLogo = { src: string; alt: string };
type BentoCell = { cls: string } & (
  | {
      kind: 'stat';
      icon: LucideIcon;
      value: string;
      label: string;
      accent?: string;
      featured?: boolean;
    }
  | { kind: 'strip'; eyebrow: string; items: BentoMini[] }
  | { kind: 'logos'; eyebrow: string; logos: BentoLogo[] }
  | { kind: 'cta'; title: string; label: string; href: string }
);

/** Big sans numeral with its unit ("%", "$") lifted to a superscript. */
function BentoValue({ value, size }: { value: string; size?: 'hero' | 'sub' }) {
  const m = value.match(/^(\$?[\d.,]+)(.*)$/);
  const num = m ? m[1] : value;
  const unit = m ? m[2] : '';
  return (
    <span className={`bento-value${size ? ` bento-value--${size}` : ''}`}>
      {num}
      {unit && <span className="bento-unit">{unit}</span>}
    </span>
  );
}

function BentoStat({ cell }: { cell: Extract<BentoCell, { kind: 'stat' }> }) {
  const Icon = cell.icon;
  if (cell.featured) {
    /* Full-width horizontal band: icon · number · label · pill. */
    return (
      <div
        className="bento-tile bento-tile--hero"
        style={{ '--tile-accent': cell.accent } as CSSProperties}
      >
        <Icon className="h-7 w-7 shrink-0" aria-hidden />
        <BentoValue value={cell.value} size="hero" />
        <span className="max-w-[38ch] text-sm leading-snug">{cell.label}</span>
        <span className="eyebrow ml-auto hidden rounded-pill border border-hairline px-3 py-1 md:inline-flex">
          Key finding
        </span>
      </div>
    );
  }
  return (
    <div
      className={`bento-tile${cell.accent ? ' bento-tile--tint' : ''} justify-center gap-2`}
      style={cell.accent ? ({ '--tile-accent': cell.accent } as CSSProperties) : undefined}
    >
      <span className="flex items-center gap-3">
        <Icon className="h-6 w-6 shrink-0" aria-hidden />
        <BentoValue value={cell.value} />
      </span>
      <span className="text-sm leading-snug">{cell.label}</span>
    </div>
  );
}

/** One quiet row for the supporting numbers — context, not headlines.
 *  Each mini stacks number over label so wrapping text never shifts the
 *  numerals; hairline dividers keep the desktop row measured. */
function BentoStrip({ cell }: { cell: Extract<BentoCell, { kind: 'strip' }> }) {
  return (
    <div className="bento-tile justify-center gap-3">
      <span className="eyebrow">{cell.eyebrow}</span>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 lg:grid-cols-4">
        {cell.items.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="grid content-start gap-1 lg:border-l lg:border-hairline lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
          >
            <span className="flex items-center gap-2">
              <Icon className="h-4 w-4 shrink-0 text-muted-ink" aria-hidden />
              <BentoValue value={value} size="sub" />
            </span>
            <span className="text-sm leading-snug text-muted-ink">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BentoCta({ cell }: { cell: Extract<BentoCell, { kind: 'cta' }> }) {
  return (
    <a
      href={cell.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bento-cta no-underline-grow"
    >
      <span className="grid gap-1">
        <span className="eyebrow">{cell.label}</span>
        <span className="font-display text-h4 leading-tight">{cell.title}</span>
      </span>
      <span className="arrow" aria-hidden>
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </a>
  );
}

/** Survey mentions rendered as round logo badges (square icons, circle-cropped). */
function BentoLogos({ cell }: { cell: Extract<BentoCell, { kind: 'logos' }> }) {
  return (
    <div className="bento-tile justify-center gap-3">
      <span className="eyebrow">{cell.eyebrow}</span>
      <div className="flex flex-wrap items-center gap-2">
        {cell.logos.map((logo) => (
          <span key={logo.alt} className="bento-logo" title={logo.alt}>
            <Image src={logo.src} alt={logo.alt} width={96} height={96} />
          </span>
        ))}
      </div>
    </div>
  );
}

function Bento({ cells }: { cells: BentoCell[] }) {
  return (
    <MotionStagger
      className="grid grid-cols-2 gap-1 md:gap-3 max-w-6xl lg:grid-cols-6 lg:pb-8 mx-auto"
      stagger={0.06}
    >
      {cells.map((c, i) => (
        <MotionItem key={i} className={c.cls}>
          {c.kind === 'stat' ? (
            <BentoStat cell={c} />
          ) : c.kind === 'strip' ? (
            <BentoStrip cell={c} />
          ) : c.kind === 'cta' ? (
            <BentoCta cell={c} />
          ) : (
            <BentoLogos cell={c} />
          )}
        </MotionItem>
      ))}
    </MotionStagger>
  );
}

export default function BonusBowlsPage() {
  return (
    <main id="main" className="py-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <article className="wrap wrap--wide grid grid-cols-1 gap-section">
        {/* Hero — text left, hero image right on tablet+ (stacked on mobile) */}
        <header className="grid gap-sub">
          <div className="grid grid-cols-1 gap-sub md:grid-cols-2 md:items-center">
            {/* Header uses MotionHero (CSS entrance), not MotionVertical —
                it's above the fold, so a hydration-gated reveal would hold
                the page's LCP hostage. Sequence: copy → image → meta. */}
            <MotionHero y={28} delay={0}>
              <h1>Bonus Bowls: A loyalty platform for a Fortune 500 pet brand</h1>
              <p className="mt-block max-w-prose text-lg leading-relaxed md:text-xl">
                Bonus Bowls is a platform that rewards Canadian pet parents for their pet food
                purchases. Users photograph and upload their receipts, collect cashback, and redeem
                it for rewards. I ran the User Research, designed the experience, shipped the
                Angular front-end, and connected it to a comprehensive analytics dashboard.
              </p>
            </MotionHero>
            <MotionHero y={28} delay={0.15} className="h-full">
              <Image
                src="/images/bonusbowls-hero.webp"
                alt="Bonus Bowls, the receipt-to-cashback loyalty app for pet parents"
                width={4800}
                height={3600}
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={85}
                className="h-full min-h-[16rem] w-full rounded-card object-cover"
              />
            </MotionHero>
          </div>
          <MotionHero y={28} delay={0.3}>
            <dl className="grid grid-cols-2 items-start gap-x-block gap-y-item border-y border-hairline py-block sm:grid-cols-4">
              {[
                { label: 'Timeline', value: 'Fall 2025 → Spring 2026' },
                {
                  label: 'Tools',
                  value: 'Google Forms, Figma, FigJam, Angular, GA4, Looker Studio',
                },
                {
                  label: 'Role',
                  value: 'UX research, UI/UX, Prototyping, Usability Testing, Front-End, Analytics',
                },
                { label: 'Industry', value: 'Pet food' },
              ].map((m) => (
                <div className="grid gap-1" key={m.label}>
                  <dt className="eyebrow">{m.label}</dt>
                  <dd className="text-sm leading-snug">{m.value}</dd>
                </div>
              ))}
            </dl>
          </MotionHero>
        </header>

        <Section heading="About">
          <p>
            The client came to us with a problem: their products have the best margins but the worst
            stickiness. Pet parents pick brands on price, so loyalty was hard to build, and that was
            quietly weakening the vet-customer relationship too. A rewards program is the obvious
            fix, but only if pet parents trust it enough to bother.
          </p>
          <p>
            That&rsquo;s the gap Bonus Bowls closes. The whole design rests on one promise: the
            receipt part just works, which is exactly where competitors fall down.
          </p>
          <p>So the real question was:</p>
          <Blockquote>
            <p>
              How do we build a rewards platform that pet parents actually trust, and make rewards
              actually feel rewarding?
            </p>
          </Blockquote>
        </Section>

        <hr className="border-hairline" />

        <Section heading="Design Thinking">
          <p>
            We run every project on the same five phases of design thinking. Here&rsquo;s how each
            one played out on Bonus Bowls:
          </p>
          <DesignThinkingDiagram
            activities={{
              empathize: ['User surveys', 'Competitive analysis'],
              define: ['Persona', 'POV', 'How-Might-We'],
              ideate: ['User flows', 'Wireframes'],
              prototype: ['Mid-fi Figma', 'Google Material'],
              test: ['Usability testing', 'Analytics'],
            }}
          />
        </Section>

        <hr className="border-hairline" />

        <Phase phase="empathize">
          <p>
            We needed to understand how pet parents behave: where they buy pet food, how often, what
            they do with receipts, and what would make a rewards program worth their time. I put
            together a 5-minute survey targeting Canadian pet parents.
          </p>

          <h3>Key Takeaways</h3>
          <Bento
            cells={[
              {
                kind: 'stat',
                featured: true,
                icon: ThumbsUp,
                value: '85%',
                label: 'open to the program — the demand proof and the reason the project exists',
                accent: 'var(--color-green)',
                cls: 'col-span-2 lg:col-span-6',
              },
              {
                kind: 'stat',
                icon: HandCoins,
                value: '66%',
                label: 'want cash, not merchandise',
                accent: 'var(--color-cyan)',
                cls: 'lg:col-span-2',
              },
              {
                kind: 'stat',
                icon: ReceiptText,
                value: '50%',
                label: "don't keep receipts",
                accent: 'var(--color-lilac)',
                cls: 'lg:col-span-2',
              },
              {
                kind: 'stat',
                icon: Smartphone,
                value: '89%',
                label: 'smartphone-comfortable',
                accent: 'var(--color-pink)',
                cls: 'col-span-2 lg:col-span-2',
              },
              {
                kind: 'logos',
                eyebrow: 'Top brands mentioned',
                logos: [
                  { src: '/images/brands/hills.webp', alt: "Hill's Pet Nutrition" },
                  { src: '/images/brands/purina.webp', alt: 'Purina' },
                  { src: '/images/brands/vitalessentials.webp', alt: 'Vital Essentials' },
                ],
                cls: 'lg:col-span-2',
              },
              {
                kind: 'logos',
                eyebrow: 'Top loyalty apps mentioned',
                logos: [
                  { src: '/images/brands/starbucks.webp', alt: 'Starbucks Rewards' },
                  { src: '/images/brands/aircanada.webp', alt: 'Air Canada' },
                  { src: '/images/brands/airmiles.webp', alt: 'Air Miles' },
                ],
                cls: 'lg:col-span-2',
              },
              {
                kind: 'strip',
                eyebrow: 'Buying habits & audience',
                items: [
                  { icon: Tag, value: '30%', label: 'buy on price' },
                  { icon: CircleDollarSign, value: '47%', label: 'spend about $100 a month' },
                  { icon: CalendarDays, value: '40%', label: 'buy once a month' },
                  { icon: Users, value: '80%', label: 'are 20 to 40 years old' },
                ],
                cls: 'col-span-2 lg:col-span-4',
              },
              {
                kind: 'cta',
                title: 'See the full survey results',
                label: 'Full report',
                href: 'https://docs.google.com/forms/d/1DTZH-iRz0N4Dk8GsG8a65eTPbB0KarAwAxV4YgjtXEk/viewanalytics',
                cls: 'col-span-2 lg:col-span-2 lg:col-start-5 lg:row-start-3 lg:row-span-2',
              },
            ]}
          />

          <Blockquote>
            <p>
              Great news: people are open to the program. <br /> Beyond that, we found that pet
              parents shop monthly (suggesting a similar usage cadence for our platform), the
              audience is young, tech-savvy, and price-driven, and we&rsquo;ve identified their
              favorite brands and platforms to enable a competitive analysis.
            </p>
          </Blockquote>

          <h3>Competitive Analysis</h3>
          <p>
            After reading through the survey responses, it was time to investigate the pet brands
            that came up most often, along with some general loyalty apps. We needed to understand
            what was already out there so we could pick the best features and avoid what was causing
            frustration.
          </p>
          <p>
            To accomplish this research I signed myself up to the programs, downloaded the apps and
            used them, read numerous Google and App Store reviews, and joined Reddit forums.
          </p>
          <Table
            headers={['Feature', 'Purina myPurina', 'Receipt Hog', 'Takeaways']}
            rows={[
              [
                'Receipt Upload',
                '✗ 60% rejection rate',
                '✓ Universal acceptance',
                '✓ Accept receipts from every vendor, no rejections',
              ],
              [
                'Processing Time',
                '✗ 3+ business days',
                '✗ Variable delays',
                '✓ Approve receipts in under 3 days',
              ],
              [
                'App Reliability',
                '✓ Stable and fast',
                '✗ Stability issues',
                '✓ Keep the app stable and fast enough to trust',
              ],
              [
                'Reward Options',
                '✗ Merchandise, no cash',
                '✗ Low cash, low reward',
                '✓ Pay out in real cash, not merchandise',
              ],
              [
                'Customer Support',
                '✗ Email only',
                '✗ Limited response',
                '✓ Offer responsive support like live chat and email',
              ],
            ]}
          />
          <Blockquote>
            <p>
              Every program we looked at got one half right and dropped the other, so how might we
              deliver both: reliable, universal approvals and rewards worth cashing in?
            </p>
          </Blockquote>
        </Phase>

        <hr className="border-hairline" />

        <Phase phase="define">
          <p>
            Now that we&rsquo;ve mapped our users and our competition, we have a solid base to
            define our challenges and plan how to overcome them.
          </p>

          <h3>Personas</h3>
          {/* Card teasers: one-line bio + the persona's core objective. The
              trailing ellipsis signals the list continues in the full
              document (the pill below opens it). */}
          <div className="grid gap-item sm:grid-cols-3">
            {[
              {
                name: 'Elena Martinez',
                role: 'The Devoted Dog Mom',
                bio: '32, marketing coordinator, ~$90/month on prescription dog food.',
                objective: 'Upload a receipt in seconds and get cash back she can actually use.',
              },
              {
                name: 'David Thompson',
                role: 'The Multi-Pet Owner',
                bio: '40, mobile-first and price-driven, three pets at $200+/month.',
                objective: 'Earn on every purchase and cash out fast — it has to just work.',
              },
              {
                name: 'Linda Wilson',
                role: 'The Loyal Vet Customer',
                bio: '58, retired teacher, shops only at her vet clinic.',
                objective: 'Rewards without complicated apps, and reassurance her info is safe.',
              },
            ].map((p) => (
              <div key={p.name} className="card grid content-start gap-3">
                <div>
                  <p className="font-display text-xl leading-tight tracking-heading">{p.name}</p>
                  <p className="eyebrow mt-1">{p.role}</p>
                </div>
                <p className="text-sm leading-relaxed">{p.bio}</p>
                <ul className="bullets m-0 text-sm leading-relaxed">
                  <li>
                    <strong>Objective:</strong> {p.objective}
                  </li>
                </ul>
                <span className="text-muted-ink" aria-hidden>
                  …
                </span>
              </div>
            ))}
          </div>
          <div>
            <ImageLightbox
              src="/images/bonusbowls-personas.webp"
              alt="Full user persona document covering the three Bonus Bowls personas."
              width={2400}
              height={1942}
              className="inline-flex cursor-pointer"
            >
              <Button asChild variant="secondary" size="sm">
                <span>
                  <span aria-hidden>↗</span>
                  Full user persona document
                </span>
              </Button>
            </ImageLightbox>
          </div>

          <h3>How Might We</h3>
          <small className="eyebrow">The three key challenges we need to solve</small>
          <div className="grid gap-item md:grid-cols-3 md:gap-sub">
            {[
              'How might we convert price-driven shoppers into loyal customers?',
              'How might we make uploading a receipt effortless for people who don’t keep receipts?',
              'How might we keep members coming back between monthly purchases?',
            ].map((q, i) => (
              <div key={q}>
                <span className="index">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-base leading-relaxed">{q}</p>
              </div>
            ))}
          </div>

          <Blockquote>
            <p>Now that we defined the problems, how do we solve them?</p>
          </Blockquote>
        </Phase>

        <hr className="border-hairline" />

        <Phase phase="ideate">
          <p>
            Before opening Figma, I mapped each business goal to the research finding that should
            drive it, on one page the client signed off on. It stopped every later &ldquo;what if
            we&hellip;&rdquo; from reopening a settled decision.
          </p>
          <Table
            headers={['Business goal', 'Research-backed solution']}
            rows={[
              [
                'Drive repeat purchase',
                <>
                  Cash-back at a <strong>$25 minimum</strong>, build a monthly purchase relationship
                </>,
              ],
              ['Reward the purchase', 'Quick photo capture, fast confirmation'],
              [
                'Build trust',
                'Security messaging, 2FA, breached-password checks, consent-first analytics',
              ],
              [
                'Win new customers',
                'Educational content, more generous cash-back than competitors',
              ],
            ]}
          />

          <h3>User Flows</h3>

          {/* Text + flow-map teaser split the width from tablet up, matching
              the other phase figures; the lightbox carries the full map. */}
          <div className="grid grid-cols-1 gap-item md:grid-cols-2 md:items-center md:gap-sub">
            <p>
              I mapped the main journeys so the path from &ldquo;Onboarding&rdquo; to &ldquo;I got
              paid&rdquo; stayed as short as possible.
            </p>
            <figure className="m-0">
              <ImageLightbox
                src="/images/bonusbowls-user-flows.webp"
                alt="User flow diagram mapping the main journeys from onboarding to cashing out."
                width={3000}
                height={2400}
                className="group relative block w-full cursor-zoom-in"
              >
                <Image
                  src="/images/bonusbowls-user-flows.webp"
                  alt="User flow diagram mapping the main journeys from onboarding to cashing out."
                  width={3000}
                  height={2400}
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={90}
                  className="aspect-[3/2] w-full rounded-md border border-hairline object-cover object-top transition duration-300 ease-standard group-hover:border-ink"
                />
                {/* asChild renders a span: the lightbox trigger is already a
                    <button>, and a nested <button> is invalid HTML (hydration
                    error). The span keeps the Button styling. */}
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="group-hover:-translate-y-1 group-hover:border-ink group-hover:shadow-soft"
                >
                  <span className="absolute bottom-4 right-4">
                    <span aria-hidden>↗</span>
                    View full user flows
                  </span>
                </Button>
              </ImageLightbox>
              <figcaption className="eyebrow mt-3">
                The main journeys, from onboarding to cashing out
              </figcaption>
            </figure>
          </div>

          <Blockquote>
            <p>
              With every decision mapped and signed off, the plan felt solid. Now the real question
              was how fast we could turn it into something people could actually use.
            </p>
          </Blockquote>
        </Phase>

        <hr className="border-hairline" />

        <Phase phase="prototype">
          {/* Text + artboards split the width evenly from tablet up. The dense
              board sheet shows as a fixed-height teaser cropped to its top
              rows; the lightbox carries the full 3000×2400 board. */}
          <div className="grid grid-cols-1 gap-item md:grid-cols-2 md:items-center md:gap-sub">
            <div>
              <p>
                To build a prototype as fast as possible, we decided to use Google Material for our
                raw components. We chose Material for a few reasons:
              </p>
              <ol className="bullets">
                <li>
                  Google is the native platform the client already uses, so the look would feel
                  familiar to stakeholders.
                </li>
                <li>It let us ship a quick mid-fidelity prototype for review.</li>
                <li>
                  Material components are built to work with our Angular framework, which saved
                  developer time.
                </li>
              </ol>
            </div>

            <figure className="m-0">
              <ImageLightbox
                src="/images/bonusbowls-midfidelity.webp"
                alt="Figma mid-fidelity artboards for the Bonus Bowls prototype."
                width={3000}
                height={2400}
                className="group relative block w-full cursor-zoom-in"
              >
                <Image
                  src="/images/bonusbowls-midfidelity.webp"
                  alt="Figma mid-fidelity artboards for the Bonus Bowls prototype."
                  width={3000}
                  height={2400}
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={90}
                  className="aspect-[3/2] w-full rounded-md border border-hairline object-cover object-top transition duration-300 ease-standard group-hover:border-ink"
                />
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="group-hover:-translate-y-1 group-hover:border-ink group-hover:shadow-soft"
                >
                  <span className="absolute bottom-4 right-4">
                    <span aria-hidden>↗</span>
                    View Figma Artboards
                  </span>
                </Button>
              </ImageLightbox>
              <figcaption className="eyebrow mt-3">
                Mid-fidelity artboards in Figma, built on Google Material
              </figcaption>
            </figure>
          </div>

          <h3>Visual Direction</h3>
          <p>
            We pulled colors, typography, and core patterns from the brand&rsquo;s existing design
            system to keep Bonus Bowls consistent with its other products.
          </p>

          <h3>Key Screens</h3>
          {/* Rationale beside its evidence: decision table left, the four
              screens right, from tablet up. */}
          <div className="grid grid-cols-1 gap-item md:grid-cols-2 md:items-center md:gap-sub">
            <Table
              headers={['Screen', 'Design decision']}
              rows={[
                ['Sign-up', 'Banking deferred to cash-out'],
                ['Earnings dashboard', 'Plain progress to the threshold; no gamification noise'],
                ['Receipt upload', 'Guided 4-step flow; one-tap camera; live validation'],
              ]}
            />
            <figure className="m-0">
              <ImageLightbox
                src="/images/bonusbowls-key-screens.webp"
                alt="The four key screens: sign-up, receipt upload, earnings dashboard, and redeem."
                width={4800}
                height={3204}
                className="group relative block w-full cursor-zoom-in"
              >
                <Image
                  src="/images/bonusbowls-key-screens.webp"
                  alt="The four key screens: sign-up, receipt upload, earnings dashboard, and redeem."
                  width={4800}
                  height={3204}
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={90}
                  className="w-full rounded-md border border-hairline transition duration-300 ease-standard group-hover:border-ink"
                />
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="group-hover:-translate-y-1 group-hover:border-ink group-hover:shadow-soft"
                >
                  <span className="absolute bottom-4 right-4">
                    <span aria-hidden>↗</span>
                    View key screens
                  </span>
                </Button>
              </ImageLightbox>
              <figcaption className="eyebrow mt-3">
                Some key screens — Profile | Dashboard | Upload Receipt
              </figcaption>
            </figure>
          </div>

          <h3>From Prototype to Shipped Product</h3>
          <p>
            I owned the Angular front-end end to end: architecture, component and state design,
            responsive behaviour, accessibility, and the production deploy, plus the API contract my
            backend partner and I built against.
          </p>
          <p>It shipped as a real product:</p>
          <ul className="bullets">
            <li>
              <strong>Bilingual EN / FR-CA:</strong> every string, status, and page title flips
              cleanly.
            </li>
            <li>
              <strong>Accessibility:</strong> WCAG AA, passing AXE checks, with live announcements
              on receipt status changes.
            </li>
            <li>
              <strong>A full admin console:</strong> the brand&rsquo;s reviewers approve receipts,
              manage payouts, and run the product catalog.
            </li>
          </ul>

          <Blockquote>
            <p>
              The product was built and shipped. But building something and proving it works for
              real people are two very different things.
            </p>
          </Blockquote>
        </Phase>

        <hr className="border-hairline" />

        <Phase phase="test">
          <p>
            Testing happened twice: with real users on the prototype before launch, and with live
            data after.
          </p>

          <h3>Usability Testing</h3>
          <p>
            I ran moderated usability tests with 5 participants (3 current users, 2 interested).
            Each completed a few core tasks:
          </p>
          <ul className="bullets">
            <li>Upload a receipt for a recent vet purchase</li>
            <li>Check your balance and start a cash-out</li>
          </ul>
          <p>
            <strong>Goal:</strong> see how easily people moved through the flow, gather feedback on
            look and feel, and find points of confusion.
          </p>

          <h3>Key Findings</h3>
          <p>
            Participants moved through the upload process and described the redemption as
            trustworthy and straightforward, mostly because each step confirmed what had happened
            and the e-transfer payout was something they were already familiar with. The friction
            showed up in a few places: entering the invoice total before tax, needing an e-transfer
            setup method before cash-out, and finding the right product in the catalog.
          </p>

          <h3>Changes Made After Testing</h3>
          <p>
            The most useful part was watching where people hesitated. The fixes that came out of it:
          </p>
          <div className="grid gap-item md:grid-cols-3">
            {[
              {
                title: 'Issue 1: People entered the total with tax included',
                before:
                  'On the Purchase Details step, several participants typed the full invoice total, tax included, even though rewards are based on the pre-tax product total.',
                after: (
                  <>
                    Added a clear hint under the field (&ldquo;Enter the pre-tax product total,
                    before tax&rdquo;) and a matching line in the pre-submit checklist.
                  </>
                ),
              },
              {
                title: 'Issue 2: Cash-out stalled with no payment method saved',
                before:
                  'Participants reached the redemption screen ready to redeem, then discovered they first had to add an e-transfer email, which felt like an unexpected extra step.',
                after: (
                  <>
                    Surfaced the payment-method prompt earlier and added a direct link to add one
                    from the redemption screen, so people aren&rsquo;t sent hunting through
                    settings.
                  </>
                ),
              },
              {
                title: 'Issue 3: Hard to find a product in a long list',
                before:
                  'On the Select Products step, participants scrolled a large catalog to locate their item.',
                after:
                  'Added search and category filters (dog/cat, dry/wet, prescription/regular) at the top of the step.',
              },
            ].map((issue) => (
              <div key={issue.title} className="card grid gap-2">
                <h4>{issue.title}</h4>
                <p className="text-sm leading-relaxed">
                  <span className="eyebrow">Before</span> {issue.before}
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="eyebrow eyebrow--strong">After</span> {issue.after}
                </p>
              </div>
            ))}
          </div>

          <h3>Final Product</h3>
          <figure className="m-0">
            <ImageLightbox
              src="/images/bonusbowls-signup.webp"
              alt="Final product: the shipped Bonus Bowls sign-up flow."
              width={6783}
              height={2673}
              className="group relative block w-full cursor-zoom-in"
            >
              <Image
                src="/images/bonusbowls-signup.webp"
                alt="Final product: the shipped Bonus Bowls sign-up flow."
                width={6783}
                height={2673}
                loading="lazy"
                sizes="(min-width: 2112px) 2048px, 100vw"
                quality={90}
                className="w-full rounded-md border border-hairline transition duration-300 ease-standard group-hover:border-ink"
              />
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="group-hover:-translate-y-1 group-hover:border-ink group-hover:shadow-soft"
              >
                <span className="absolute bottom-4 right-4">
                  <span aria-hidden>↗</span>
                  View full size
                </span>
              </Button>
            </ImageLightbox>
            <figcaption className="eyebrow mt-3">
              The shipped sign-up flow, live in production
            </figcaption>
          </figure>

          <h3>Validating in Production</h3>
          <p>
            Testing didn&rsquo;t stop at launch. I instrumented the live product so the brand could
            see whether real behaviour matched the research, and to lay a solid base for UX
            measurement so we can track how well future updates perform.
          </p>
          <p>
            The GA4 layer tracks the full member journey across 30+ events, with four real
            conversions: account created, receipt submitted, payout requested, and payment method
            added. Three decisions kept the data honest:
          </p>
          <ul className="bullets">
            <li>
              <strong>Privacy-first:</strong> nothing is tracked until the user consents.
            </li>
            <li>
              <strong>Members vs. browsers:</strong> every session is tagged registered or guest, so
              reports show real members, not all traffic.
            </li>
            <li>
              <strong>Bilingual in the data:</strong> language is captured as a property, so English
              and French behaviour is visible, not guessed.
            </li>
          </ul>
          <p>
            A Looker Studio dashboard turns the raw events into plain-language answers that I shared
            with all stakeholders. Every research number that justified a decision is now a live
            metric.
          </p>
          <p>
            Bonus Bowls launched in July 2026, so this data is just starting to flow. The signals
            below are a first read, not a verdict.
          </p>
          <h4>Early signals</h4>
          {/* The numbers beside the report they're read from: stat tiles
              stack in a narrow left column, the Looker dashboard takes the
              wider right column, from tablet up. */}
          <div className="grid grid-cols-1 gap-item md:grid-cols-5 md:items-center md:gap-sub">
            <div className="grid grid-cols-1 gap-item sm:grid-cols-3 md:col-span-2 md:grid-cols-1">
              <Stat value="722" label="Sign-Ups" context="in 4 weeks" />
              <Stat
                value="264"
                label="Receipts Submitted"
                context="80% approved, vs. competitor's 40%"
              />
              <Stat value="3" label="Payouts Requested" context="first to clear the $25 minimum" />
            </div>

            <figure className="m-0 md:col-span-3">
              <ImageLightbox
                src="/images/bonusbowls-looker-dashboard.webp"
                alt="The Bonus Bowls analytics dashboard, built in Google Looker Studio."
                width={2750}
                height={2063}
                className="group relative block w-full cursor-zoom-in"
              >
                <Image
                  src="/images/bonusbowls-looker-dashboard.webp"
                  alt="The Bonus Bowls analytics dashboard, built in Google Looker Studio."
                  width={2750}
                  height={2063}
                  loading="lazy"
                  sizes="(min-width: 768px) 60vw, 100vw"
                  quality={90}
                  className="w-full rounded-md border border-hairline transition duration-300 ease-standard group-hover:border-ink"
                />
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="group-hover:-translate-y-1 group-hover:border-ink group-hover:shadow-soft"
                >
                  <span className="absolute bottom-4 right-4">
                    <span aria-hidden>↗</span>
                    View dashboard
                  </span>
                </Button>
              </ImageLightbox>
              <figcaption className="eyebrow mt-3">
                The exact report I shared with the client, built in Google Looker Studio.
              </figcaption>
            </figure>
          </div>

          <Blockquote>
            <p>
              Between usability testing before launch and live analytics after, the product could
              finally answer its own hardest question: is it actually working?
            </p>
          </Blockquote>
        </Phase>

        <hr className="border-hairline" />

        <Section heading="Conclusion">
          <h3>Main Insights</h3>
          <p>
            The research was clear: pet parents want cash, won&rsquo;t tolerate a slow or unreliable
            receipt process, and need to trust a new program before sharing banking details. Every
            major decision &mdash; cash over points, one-tap upload, security on every money screen,
            e-transfer payouts &mdash; traces back to one of those findings. Designing from data
            meant every review became &ldquo;show me the survey answer that says why.&rdquo;
          </p>

          <h3>What I Learned</h3>
          {/* Learnings left, the AI-disclosure sticky note right, from tablet
              up — the note reads as one more takeaway instead of floating
              alone at the top of the page. */}
          <div className="grid grid-cols-1 gap-item md:grid-cols-3 md:items-start md:gap-sub">
            <div className="columns md:col-span-2">
              {[
                {
                  lead: 'Pitching for research time was the highest-leverage hour of the project.',
                  body: 'Four weeks up front made every later decision faster.',
                },
                {
                  lead: 'Reliability is a strategy when everyone else is unreliable.',
                  body: 'A 60% rejection rate from the market leader was the whole opening.',
                },
                {
                  lead: 'Build the scoreboard before kickoff.',
                  body: (
                    <>
                      Instrumenting from launch means &ldquo;did it work?&rdquo; has a real answer.
                    </>
                  ),
                },
                {
                  lead: 'Launch is the start of research, not the end.',
                  body: 'Next: a quarterly micro-survey to live members, fed into the roadmap.',
                },
              ].map((l) => (
                <div key={l.lead}>
                  <h4>{l.lead}</h4>
                  <p className="text-sm leading-relaxed">{l.body}</p>
                </div>
              ))}
            </div>

            <aside
              className="grid gap-3 rounded-sm border border-hairline bg-warm-panel p-block shadow-soft"
              aria-label="How I leveraged AI on this project"
            >
              <p className="eyebrow">Note</p>
              <h4>How I Leveraged AI</h4>
              <small>I used AI to help me get things done faster and more efficiently:</small>
              <ul className="bullets text-sm">
                <li>Organizing Notes and Ideas</li>
                <li>Helped me scale front end components</li>
                <li>Debug Solving</li>
                <li>Converting/Optimizing Images</li>
                <li>Assisted on implementing GA4 and Looker Studio</li>
              </ul>
            </aside>
          </div>
        </Section>

        <hr className="border-hairline" />

        <Section heading="Let&rsquo;s Connect">
          <p>Thanks for reading. Happy to talk through any part of the process, or just say hi.</p>
          <p>
            {/* text-decoration underline (not the grow-underline) so the rule
                hugs the text despite the padded 44px touch target */}
            <a
              href="mailto:carelmaeda@gmail.com"
              className="no-underline-grow -my-3 inline-block py-3 underline decoration-1 underline-offset-4 transition-opacity duration-300 ease-standard hover:opacity-60"
            >
              carelmaeda@gmail.com
            </a>
          </p>
        </Section>
      </article>
    </main>
  );
}
