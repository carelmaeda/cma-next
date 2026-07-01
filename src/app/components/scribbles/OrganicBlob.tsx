import * as React from 'react';

type Props = {
  color?: string;
  className?: string;
} & React.SVGAttributes<SVGSVGElement>;

/**
 * Asymmetric blob, never a circle. Use as a soft section backdrop in
 * peach/mustard at low opacity. Pair with `aria-hidden` (default).
 */
export default function OrganicBlob({
  color = 'var(--color-peach)',
  className,
  ...rest
}: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill={color}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d="M328 78c34 38 54 96 38 152-16 56-66 110-124 122s-122-22-160-66-58-104-38-152S134 50 196 46s98-6 132 32z" />
    </svg>
  );
}
