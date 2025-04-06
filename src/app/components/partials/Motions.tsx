// components/partials/Motions.tsx
'use client';

import { motion } from 'framer-motion';

// Fade-in + Vertical motion (slides up)
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // ← Triggers when scrolled into view
      viewport={{ once: true, margin: "-20%" }} // ← Only animate once + trigger 20% early
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}



// Scales from 90% to 100% with a subtle fade
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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Fade-in + Horizontal motion (slides from left)
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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        ease: [0, 0.71, 0.2, 1.01] // Bouncy easing
      }}
    >
      {children}
    </motion.div>
  );
}

// MotionScore - Skill animation (rotation for skills)
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.span>
  );
}
