'use client';

import { motion } from 'framer-motion';

/**
 * Fade-in + Slide-up animation
 * @param children - Content to animate
 * @param className - Optional CSS classes
 * 
 * Usage: Wraps content that should slide up and fade in when scrolled into view
 * Animation: Starts 50px below, fades in while moving up to final position
 * Trigger: When element enters viewport (with 20% early trigger)
 */
export function MotionVertical({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }} // Start state: invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to: visible and normal position
      viewport={{ once: true, margin: "-20%" }} // Only animate once, trigger 20% early
      transition={{ duration: 1, ease: 'easeOut' }} // Animation timing
    >
      {children}
    </motion.div>
  );
}

/**
 * Fade-in + Slide-from-left animation
 * @param children - Content to animate
 * @param className - Optional CSS classes
 * 
 * Usage: Wraps content that should slide in from left when scrolled into view
 * Animation: Starts 50px to the left, fades in while moving right to final position
 * Trigger: When element enters viewport (with 20% early trigger)
 */

/**
 * Scale-in + Fade animation
 * @param children - Content to animate
 * @param className - Optional CSS classes
 * 
 * Usage: Wraps content that should gently scale up when scrolled into view
 * Animation: Starts at 90% size and invisible, scales up to 100% while fading in
 * Trigger: When element enters viewport (with 20% early trigger)
 */
export function MotionScaleIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }} // Start state: invisible and slightly scaled down
      whileInView={{ opacity: 1, scale: 1 }} // Animate to: visible and normal size
      viewport={{ once: true, margin: "-30%" }} // Only animate once, trigger 20% early
      transition={{ 
        duration: 0.4, 
        ease: [0, 0.71, 0.2, 1.01] // Slightly bouncy easing
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Skill text animation (for rotating text elements)
 * @param children - Content to animate
 * @param className - Optional CSS classes
 * 
 * Usage: For animating skill text that changes (used with AnimatePresence)
 * Animation: New text slides up while fading in, old text slides up while fading out
 * Trigger: Immediately when mounted (no viewport trigger needed)
 * Note: Requires wrapping in AnimatePresence for exit animation to work
 */
export function MotionScore({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 10 }} // Start state: slightly down and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to: normal position and visible
      viewport={{ once: true }} // Only animate once
      exit={{ opacity: 0, y: -10 }} // Exit state: slightly up and invisible
      transition={{ duration: 0.5 }} // Animation timing
    >
      {children}
    </motion.span>
  );
}


export function MotionHero({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }} // Start state: invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to: visible and normal position
      transition={{ duration: 1, ease: 'easeOut' }} // Animation timing
    >
      {children}
    </motion.div>
  );
}

export function MotionHorizontal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -50 }} // Start state: invisible and 50px left
      whileInView={{ opacity: 1, x: 0 }} // Animate to: visible and normal position
      viewport={{ once: true, margin: "-20%" }} // Only animate once, trigger 20% early
      transition={{ duration: 0.6, ease: 'easeOut' }} // Animation timing
    >
      {children}
    </motion.div>
  );
}