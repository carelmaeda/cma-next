import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-snug transition-[transform,background-color,color,border-color,box-shadow,opacity] duration-300 ease-standard will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-white active:duration-[180ms] active:ease-snappy active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // Primary — the black pill (the reference default): darkens and lifts
        // with a soft cast shadow so the elevation reads.
        default:
          'bg-ink text-white rounded-pill hover:bg-ink-hover hover:-translate-y-1 hover:shadow-lift',
        // Secondary — the case-study asset trigger (opens images, links,
        // documents). Deliberately NOT the black pill: a paper pill with a
        // hairline border in the site's mono micro-label voice (same language
        // as .eyebrow tags/meta), so it reads as "supporting material", not a
        // call to action. Border inks in and the pill lifts on hover.
        secondary:
          'border border-hairline bg-white text-ink rounded-pill font-mono uppercase tracking-wide hover:border-ink hover:-translate-y-1 hover:shadow-soft',
        // Outline — hairline border on white; quiet grey wash on hover.
        outline:
          'border border-hairline bg-white text-ink rounded-pill hover:bg-pill hover:-translate-y-1',
        // Ghost — text only; the translucent wash appears on hover, no lift
        // (ghosts stay flat so they never compete with real buttons).
        ghost: 'bg-transparent text-ink rounded-pill hover:bg-pill',
        // Link — matches the site's inline ink links (thin rule, generous
        // offset, dims on hover like the contact e-mail link).
        link: 'text-ink underline decoration-1 underline-offset-4 hover:opacity-60 active:scale-100',
        // Destructive kept for shadcn compat
        destructive:
          'bg-destructive text-destructive-foreground rounded-pill hover:-translate-y-1 hover:opacity-95',
        // Legacy alias for any leftover `variant="dark"` references
        dark: 'bg-ink text-white rounded-pill hover:bg-ink-hover hover:-translate-y-1 hover:shadow-lift',
      },
      size: {
        default: 'h-12 px-7 py-2 text-sm',
        sm: 'h-10 px-5 text-xs [&_svg]:size-3.5',
        lg: 'h-14 px-9 text-base',
        icon: 'h-11 w-11 rounded-pill',
        // Hero / section CTA, big, generous pill
        cta: 'px-10 py-4 text-base tracking-snug',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
