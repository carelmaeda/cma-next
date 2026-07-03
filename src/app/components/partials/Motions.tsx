'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';

/**
 * Motion primitives tuned to the reference (h3ylab.com) computed values:
 *   - scroll-reveal: ~0.4–0.8s ease-out, subtle Y-rise + opacity 0→1
 *   - hover/state:   0.3s cubic-bezier(.4,0,.2,1)
 *   - press/micro:   0.18s cubic-bezier(.2,0,0,1)
 * "Soft, eased, unhurried", nothing fast or flashy.
 */
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

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
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Above-the-fold: animate on mount so it doesn't render at opacity 0. */
export function MotionHero({
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
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Per-word staggered reveal for the hero headline, each word is wrapped and
 * rises into place on load. Pass children as the styled headline; words split
 * on spaces. Markup-preserving: render a node per word via the render prop.
 */
const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const wordChild: Variants = {
  hidden: { opacity: 0, y: '0.5em' },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function StaggerWords({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <motion.span
      className={className}
      variants={wordContainer}
      initial="hidden"
      animate="show"
      style={{ display: 'inline-block' }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <motion.span variants={wordChild} style={{ display: 'inline-block' }}>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
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
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-10%' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
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
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
      }}
    >
      {children}
    </motion.div>
  );
}
