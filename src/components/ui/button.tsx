import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap tracking-snug transition-[transform,background-color,color,border-color] duration-300 ease-standard will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-white active:duration-[180ms] active:ease-snappy active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary, fully-rounded black pill, white text (the reference default)
        default:
          "bg-ink text-white rounded-pill hover:bg-ink-hover hover:-translate-y-1",
        // Secondary, same black pill (kept distinct for shadcn variant resolution)
        secondary:
          "bg-ink text-white rounded-pill hover:bg-ink-hover hover:-translate-y-1",
        // Outline, hairline border on white, translucent grey fill on hover
        outline:
          "border border-hairline bg-white text-ink rounded-pill hover:bg-pill hover:-translate-y-1",
        // Ghost, text only, translucent grey wash on hover
        ghost:
          "bg-transparent text-ink rounded-pill hover:bg-pill",
        // Link, inherits the global ink underline-grow feel
        link:
          "text-ink underline-offset-4 hover:underline",
        // Destructive kept for shadcn compat
        destructive:
          "bg-destructive text-destructive-foreground rounded-pill hover:-translate-y-1 hover:opacity-95",
        // Legacy alias for any leftover `variant="dark"` references
        dark:
          "bg-ink text-white rounded-pill hover:bg-ink-hover hover:-translate-y-1",
      },
      size: {
        default: "h-12 px-7 py-2 text-sm",
        sm:      "h-10 px-5 text-xs",
        lg:      "h-14 px-9 text-base",
        icon:    "h-11 w-11 rounded-pill",
        // Hero / section CTA, big, generous pill
        cta:     "px-10 py-4 text-base tracking-snug",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
