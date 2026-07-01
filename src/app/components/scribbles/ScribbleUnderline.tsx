import * as React from 'react';

type Props = {
  color?: string;
  className?: string;
} & React.SVGAttributes<SVGSVGElement>;

/**
 * Hand-drawn underline. Slightly imperfect Bézier, never a straight line.
 * Drop under a word with `absolute -bottom-2 left-0 w-full` on the parent span.
 */
export default function ScribbleUnderline({
  color = 'var(--color-coral)',
  className,
  ...rest
}: Props) {
  return (
    <svg
      viewBox="0 0 200 18"
      fill="none"
      preserveAspectRatio="none"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M4 12 Q 52 4, 102 9 T 196 8" />
    </svg>
  );
}
