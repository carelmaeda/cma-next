import { MotionVertical } from './Motions';

export default function ContactCTA() {
  return (
    <section id="contact" className="px-gutter py-28 md:py-40">
      <div className="mx-auto max-w-wide text-center">
        <MotionVertical>
          <p className="eyebrow tracking-widest mb-4">
            <span className="text-accentGreen" aria-hidden="true">●</span> Open for new projects
          </p>
          <h2 className="mx-auto max-w-[16ch] font-display text-h1 font-medium text-ink">
            Let&rsquo;s build something.
          </h2>
          <a
            href="mailto:carelmaeda@gmail.com"
            className="no-underline-grow mt-10 inline-block font-display text-h3 text-ink underline underline-offset-[6px] decoration-1 transition-opacity duration-300 ease-standard hover:opacity-60"
          >
            carelmaeda@gmail.com
          </a>
        </MotionVertical>
      </div>
    </section>
  );
}
