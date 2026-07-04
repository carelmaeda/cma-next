'use client';

import { Fragment } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

/**
 * Motion primitives tuned to the reference (h3ylab.com) computed values:
 *   - scroll-reveal: ~0.4–0.8s ease-out, subtle Y-rise + opacity 0→1
 *   - hover/state:   0.3s cubic-bezier(.4,0,.2,1)
 *   - press/micro:   0.18s cubic-bezier(.2,0,0,1)
 * "Soft, eased, unhurried", nothing fast or flashy.
 *
 * Reduced motion: the server can't know the visitor's preference, so the
 * rendered markup and initial props NEVER branch on it (that caused a real
 * hydration failure, React #418). Instead the preference only zeroes the
 * transition durations — same DOM, instant reveal, no movement.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Scroll-triggered reveal: rises 28px and fades in once, when in view. */
export function MotionVertical({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Above-the-fold: animate on mount so it doesn't wait for a scroll trigger.
 *  `y`/`delay` let the hero sequence its pieces (headline → copy → CTA);
 *  y=0 gives a pure fade for containers whose children move on their own. */
export function MotionHero({
  children,
  className,
  y = 16,
  delay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Per-word staggered reveal for the hero headline — each word is wrapped and
 * rises into place on load. Words split on spaces; markup is identical for
 * every visitor (see the reduced-motion note above).
 */
export function StaggerWords({
  text,
  className,
  delay = 0.15,
}: {
  text: string;
  className?: string;
  /** When the first word starts — lets successive lines enter in sequence. */
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  const container: Variants = {
    hidden: {},
    show: {
      transition: reduce
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren: 0.07, delayChildren: delay },
    },
  };
  const child: Variants = {
    hidden: { opacity: 0, y: '0.5em' },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.7, ease: EASE_OUT },
    },
  };
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: 'inline-block' }}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {/* No overflow:hidden mask here — with line-height < 1 (the hero
              ramp) the wrapper is shorter than the glyphs' em box and clips
              caps/ascenders at rest. The opacity fade carries the reveal. */}
          <span style={{ display: 'inline-block' }}>
            <motion.span variants={child} style={{ display: 'inline-block' }}>
              {word}
            </motion.span>
          </span>
          {/* separator OUTSIDE the inline-block wrapper — trailing whitespace
              inside one is trimmed by CSS, which jammed the words together */}
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </motion.span>
  );
}

/** Generic stagger container + item, for lists/grids that reveal in sequence. */
export function MotionStagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: reduce ? { duration: 0 } : { duration: 0.6, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
