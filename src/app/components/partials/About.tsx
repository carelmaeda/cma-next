import Image from 'next/image';
import { LinkedInIcon, GitHubIcon } from '../shared/BrandIcons';
import { MotionVertical } from './Motions';

export default function About() {
  return (
    <section id="about" className="py-page">
      <div className="wrap wrap--content">
        <MotionVertical>
          <p className="eyebrow tracking-widest mb-sub">About</p>
        </MotionVertical>

        <div className="grid gap-sub md:grid-cols-12">
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
            <h2 className="max-w-[20ch] text-h2 font-medium">
              A designer who codes, because handoff is where ideas go to die.
            </h2>

            <div className="mt-block grid gap-x-12 gap-y-item leading-[1.7] md:grid-cols-2">
              <p>My team and I lead UX strategies that drive measurable product growth.</p>
              <p>
                Over the years, these strategies delivered around 10–15% YoY growth for clients,
                alongside stronger engagement and reduced workflow friction. Our platforms make
                their lives easier each day so they can focus on selling.
              </p>
              <p>
                Working across design, product, and engineering, we align stakeholders, shape
                roadmap priorities, and ship accessible, high-impact experiences. To facilitate
                this, we built and scaled Paygos&rsquo; first design system back in 2023,
                streamlining the design-to-dev handoff from weeks to days.
              </p>
              <p>
                With a background in marketing and engineering, I bring structured problem-solving
                to creative strategy. I&rsquo;m now focused on broadening my design leadership and
                continually improving as a designer every day. This means mentoring designers,
                taking extra courses, staying up to date with a growing industry, and making myself
                future-proof.
              </p>
              <p>
                Outside of work, I&rsquo;m usually behind a camera. Photography shares the same
                instinct I bring to design: noticing the details that make complex things feel
                simple.
              </p>
            </div>

            <div className="mt-sub flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="https://linkedin.com/in/carelmaeda"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow eyebrow--strong no-underline-grow inline-flex items-center gap-2 transition-opacity duration-300 ease-standard hover:opacity-60"
              >
                <LinkedInIcon /> LinkedIn ↗
              </a>
              <a
                href="https://github.com/carelmaeda"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow eyebrow--strong no-underline-grow inline-flex items-center gap-2 transition-opacity duration-300 ease-standard hover:opacity-60"
              >
                <GitHubIcon /> GitHub ↗
              </a>
              <a
                href="/cma-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow eyebrow--strong no-underline-grow inline-flex items-center gap-2 transition-opacity duration-300 ease-standard hover:opacity-60"
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
