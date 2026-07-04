import { MotionVertical } from './Motions';

/** Closing contact section — availability status + mailto CTA. */
export default function ContactCTA() {
  return (
    <section id="contact" className="py-page">
      <div className="wrap wrap--content text-center">
        <MotionVertical>
          <p className="eyebrow tracking-widest mb-4 mx-auto">
            <span className="text-accentGreen" aria-hidden="true">
              ●
            </span>{' '}
            Open for new projects
          </p>
          <h2 className="mx-auto max-w-[16ch] text-h1 font-medium">Let&rsquo;s build something.</h2>
          <a
            href="mailto:carelmaeda@gmail.com"
            className="no-underline-grow mt-sub inline-block py-2 font-display text-h3 underline decoration-1 underline-offset-[6px] transition-opacity duration-300 ease-standard hover:opacity-60"
          >
            carelmaeda@gmail.com
          </a>
        </MotionVertical>
      </div>
    </section>
  );
}
