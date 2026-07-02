import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionHero, StaggerWords } from './Motions';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92dvh] flex-col items-center justify-center px-gutter pb-24 pt-40 text-center"
    >
      <MotionHero className="flex w-full max-w-[60rem] flex-col items-center">

        {/* Giant centred headline, Space Grotesk 500, tight tracking, per-word rise */}
        <h1 className="font-display text-hero font-medium text-ink">
          <StaggerWords text="Hi, I'm Carel. I design products and ship the code." />
        </h1>

        {/* Single pill CTA + a quiet meta line */}
        <div className="mt-14 flex flex-col items-center gap-5">
          <Button asChild variant="default" size="cta">
            <Link href="#work" className="no-underline-grow">
              See the work →
            </Link>
          </Button>
        </div>
      </MotionHero>
    </section>
  );
}
