import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/* Register the custom fluid type ramp (tailwind.config.ts fontSize) as
   font-size classes — otherwise tailwind-merge reads `text-h2`/`text-quote`
   as text COLORS and drops them when a real color (e.g. `text-ink`)
   appears in the same cn() call. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['hero', 'h1', 'h2', 'h3', 'h4', 'quote'] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
