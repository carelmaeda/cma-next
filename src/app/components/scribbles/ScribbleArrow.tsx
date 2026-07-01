import * as React from 'react';

type Props = {
  color?: string;
  className?: string;
} & React.SVGAttributes<SVGSVGElement>;

/**
 * Hand-drawn arrow with arrowhead. Use for "look over here" energy in
 * negative space, usually rotated 8–14° and absolute-positioned.
 */
export default function ScribbleArrow({
  color = 'var(--color-coral)',
  className,
  ...rest
}: Props) {
  return (
    <svg
      viewBox="0 0 110 50"
      fill="none"
      stroke={color}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M5 28 Q 32 12, 64 22 T 100 26" />
      <path d="M88 16 L 100 26 L 88 36" />
    </svg>
  );
}
