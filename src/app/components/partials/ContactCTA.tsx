import { MotionVertical } from './Motions';

export default function ContactCTA() {
  return (
    <section id="contact" className="px-[var(--gutter)] py-28 md:py-40">
      <div className="mx-auto max-w-wide text-center">
        <MotionVertical>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-ink">
            <span className="text-accentGreen" aria-hidden="true">●</span> Open for new projects
          </p>
          <h2 className="mx-auto max-w-[16ch] font-display text-ink font-medium leading-[1.04] tracking-tight text-[clamp(2.25rem,6vw,4.5rem)]">
            Let&rsquo;s build something.
          </h2>
          <a
            href="mailto:carelmaeda@gmail.com"
            className="no-underline-grow mt-10 inline-block font-display text-ink tracking-tight underline underline-offset-[6px] decoration-1 transition-opacity duration-300 ease-standard hover:opacity-60 text-[clamp(1.5rem,4vw,2.5rem)]"
          >
            carelmaeda@gmail.com
          </a>
        </MotionVertical>
      </div>
    </section>
  );
}
