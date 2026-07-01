import * as React from 'react';

type Props = {
  color?: string;
  className?: string;
} & React.SVGAttributes<SVGSVGElement>;

/**
 * Hand-drawn imperfect circle. Use to "circle" a word or metric the way you
 * would in a sketchbook, slightly oval, leaves a small gap, never closes.
 */
export default function ScribbleCircle({
  color = 'var(--color-coral)',
  className,
  ...rest
}: Props) {
  return (
    <svg
      viewBox="0 0 220 90"
      fill="none"
      preserveAspectRatio="none"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M 22 50 C 16 18, 80 6, 130 10 C 188 14, 214 38, 208 58 C 200 80, 134 86, 80 82 C 38 78, 14 70, 22 50 Z" />
    </svg>
  );
}
