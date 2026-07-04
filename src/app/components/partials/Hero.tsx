import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionHero, StaggerWords } from './Motions';

/** Full-viewport home hero — staggered serif headline + single CTA pill. */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92dvh] flex-col items-center justify-center px-gutter pb-24 pt-40 text-center"
    >
      {/* Outer wrapper is a pure fade (y=0) — the words carry their own rise,
          so they never ride a moving container. Sequence: h1 → copy → CTA. */}
      <MotionHero y={0} delay={0} className="flex w-full max-w-[60rem] flex-col items-center">
        {/* Giant centred headline, Newsreader serif 500, per-word rise */}
        <h1 className="text-hero font-medium">
          <StaggerWords text="Hi, I’m Carel." delay={0.15} />
        </h1>
        <p className="mt-5 max-w-prose">
          <StaggerWords
            text="From user research to shipped code, I design products that make an impact."
            delay={0.45}
          />
        </p>

        {/* Single pill CTA + a quiet meta line */}
        <MotionHero y={12} delay={0.75} className="mt-14 flex flex-col items-center gap-5">
          <Button asChild variant="default" size="cta">
            <Link href="#work" className="no-underline-grow">
              See the work →
            </Link>
          </Button>
        </MotionHero>
      </MotionHero>
    </section>
  );
}
