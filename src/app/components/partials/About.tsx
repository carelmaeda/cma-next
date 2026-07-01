import Image from 'next/image';
import { LinkedInIcon, GitHubIcon } from '../shared/BrandIcons';
import { MotionVertical } from './Motions';

export default function About() {
  return (
    <section id="about" className="px-[var(--gutter)] py-28 md:py-40">
      <div className="mx-auto max-w-wide">
        <MotionVertical>
          <p className="mb-12 font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">About</p>
        </MotionVertical>

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Portrait, grayscale keeps colour reserved for the work */}
          <MotionVertical className="md:col-span-4 lg:col-span-3">
            <Image
              src="/images/profile.webp"
              alt="Carel Maeda"
              width={440}
              height={440}
              loading="lazy"
              className="w-full rounded-card object-cover grayscale"
            />
          </MotionVertical>

          {/* Copy */}
          <MotionVertical className="md:col-span-8 lg:col-span-9" delay={0.05}>
            <h2 className="max-w-[20ch] font-display text-ink font-medium leading-[1.08] tracking-tight text-[clamp(1.9rem,4.5vw,3.25rem)]">
              A designer who codes, because handoff is where ideas go to die.
            </h2>

            <div className="mt-10 grid gap-x-12 gap-y-5 font-sans text-base leading-[1.7] text-ink md:grid-cols-2">
              <p>
                Six years at Paygos, three promotions (Coordinator → Specialist → Manager), now
                building toward a Design Lead role over the next 12–18 months.
              </p>
              <p>
                My mechanical-engineering background lets me ship production front-end as part of my
                design work, closing the design-engineering handoff gap that slows most teams down.
              </p>
              <p>
                I own the design system that governs the Paygos product surface, and I run the
                stakeholder workshops and discovery sessions that align clients and leadership before
                any pixels move.
              </p>
              <p>
                Based in Toronto. Fluent in English, Portuguese, French, and Spanish. Four
                languages, which turned out to be design-research training I didn&rsquo;t know I was
                getting.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="https://linkedin.com/in/carelmaeda"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline-grow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-ink transition-opacity duration-300 ease-standard hover:opacity-60"
              >
                <LinkedInIcon /> LinkedIn ↗
              </a>
              <a
                href="https://github.com/carelmaeda"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline-grow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-ink transition-opacity duration-300 ease-standard hover:opacity-60"
              >
                <GitHubIcon /> GitHub ↗
              </a>
              <a
                href="/cma-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline-grow inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-ink transition-opacity duration-300 ease-standard hover:opacity-60"
              >
                Resume.pdf ↗
              </a>
            </div>
          </MotionVertical>
        </div>
      </div>
    </section>
  );
}
