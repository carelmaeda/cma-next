import * as React from 'react';

import { cn } from '@/lib/utils';

/* Pull-quote panel (Carel's own voice): warm panel, ink spine, serif
   copy on the fluid `text-quote` step. Children are plain <p> tags. */
const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      // mt-item mirrors the article-section rhythm token so spacing matches
      // the surrounding prose flow; mb-8 keeps the roomier exit below.
      'mt-item mb-8 rounded-card border-l-4 border-ink bg-warm-panel px-4 py-3 md:px-9 md:py-8',
      '[&_p]:max-w-none [&_p]:font-display [&_p]:font-medium [&_p]:text-quote [&_p]:text-ink',
      className,
    )}
    {...props}
  />
));
Blockquote.displayName = 'Blockquote';

export { Blockquote };
