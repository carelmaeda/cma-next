import Image from 'next/image';
import { LinkedInIcon, GitHubIcon } from '../shared/BrandIcons';
import { MotionVertical } from './Motions';

/** Home About section — byline avatar, two-column bio, social + resume links. */
export default function About() {
  return (
    <section id="about" className="py-page">
      <div className="wrap wrap--content">
        <MotionVertical>
          <p className="eyebrow tracking-widest mb-sub">About</p>

          <h2 className="max-w-[28ch] text-h3 font-medium">
            I lead UX strategies that drive measurable product growth.
          </h2>

          {/* Byline — the portrait as a small editorial avatar, not a hero */}
          <div className="mt-block flex items-center gap-4">
            <Image
              src="/images/profile.webp"
              alt="Carel Maeda"
              width={112}
              height={112}
              loading="lazy"
              className="size-14 shrink-0 rounded-pill object-cover grayscale"
            />
            <div>
              <p className="font-medium">Carel Maeda</p>
              <p className="eyebrow">Product Design Manager · Toronto</p>
            </div>
          </div>
        </MotionVertical>

        <MotionVertical delay={0.05}>
          {/* Two reading columns: text flows down the left column, then the right.
              Key claims are bolded (600 — the global strong sits at 500). */}
          <div className="mt-sub grid gap-x-16 gap-y-item border-t border-hairline pt-sub leading-[1.7] md:grid-cols-2">
            <div className="grid gap-item content-start">
              <p>
                <strong className="font-semibold">
                  Over the years, my strategies delivered around 10&ndash;15% YoY growth for
                  clients, alongside stronger engagement and less workflow friction.
                </strong>{' '}
                The platforms I design make users&rsquo; lives easier each day so they can focus on
                selling.
              </p>
              <p>
                Working across design, product, and engineering, I align stakeholders, shape roadmap
                priorities, and ship accessible, high-impact experiences. In 2023 my team and I
                built Paygos&rsquo; first design system, and I scaled it,{' '}
                <strong className="font-semibold">
                  streamlining the design-to-dev handoff from weeks to days
                </strong>
                .
              </p>
            </div>
            <div className="grid gap-item content-start">
              <p>
                With a background in marketing and engineering, I bring structured problem-solving
                to creative strategy. As a Product Design Manager, I&rsquo;m growing my leadership
                toward a Design Lead role: mentoring designers, taking extra courses, staying
                up to date with a growing industry, and making myself future-proof.
              </p>
              <p>
                Outside of work, I&rsquo;m usually behind a camera. Photography shares the same
                instinct I bring to design: noticing the details that make complex things feel
                simple.
              </p>
            </div>
          </div>

          <div className="mt-sub flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href="https://linkedin.com/in/carelmaeda"
              target="_blank"
              rel="noopener noreferrer"
              data-track="social_click"
              data-track-location="home_about"
              data-track-label="LinkedIn"
              className="eyebrow eyebrow--strong no-underline-grow -my-3.5 inline-flex items-center gap-2 py-3.5 transition-opacity duration-300 ease-standard hover:opacity-60"
            >
              <LinkedInIcon /> LinkedIn ↗
            </a>
            <a
              href="https://github.com/carelmaeda"
              target="_blank"
              rel="noopener noreferrer"
              data-track="social_click"
              data-track-location="home_about"
              data-track-label="GitHub"
              className="eyebrow eyebrow--strong no-underline-grow -my-3.5 inline-flex items-center gap-2 py-3.5 transition-opacity duration-300 ease-standard hover:opacity-60"
            >
              <GitHubIcon /> GitHub ↗
            </a>
            <a
              href="/cma-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-track="resume_open"
              data-track-location="home_about"
              className="eyebrow eyebrow--strong no-underline-grow -my-3.5 inline-flex items-center gap-2 py-3.5 transition-opacity duration-300 ease-standard hover:opacity-60"
            >
              Resume.pdf ↗
            </a>
          </div>
        </MotionVertical>
      </div>
    </section>
  );
}
