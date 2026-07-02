import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: 'var(--gutter)',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      fontFamily: {
        /* Space Grotesk = headings + ALL UI/nav · Outfit = body + micro-labels
           · Roboto Serif = numerals ONLY. `mono` aliases Outfit so legacy
           micro-label classes resolve to the neutral sans, not monospace. */
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-outfit)', 'Outfit', 'system-ui', 'sans-serif'],
        numeral: ['var(--font-roboto-serif)', 'Roboto Serif', 'Georgia', 'serif'],
        serif:   ['var(--font-roboto-serif)', 'Roboto Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 11rem)', { lineHeight: '1.02', letterSpacing: '-0.045em' }],
        'display':    ['clamp(2.5rem, 6vw, 4rem)',  { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        /* Fluid heading ramps — design tokens that replace arbitrary clamp() in JSX. */
        'hero': ['clamp(2.75rem, 8vw, 5.5rem)',   { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'h1':   ['clamp(2.25rem, 5.5vw, 4.25rem)', { lineHeight: '1.04', letterSpacing: '-0.04em' }],
        'h2':   ['clamp(1.9rem, 4.5vw, 3.25rem)', { lineHeight: '1.1',  letterSpacing: '-0.04em' }],
        'h3':   ['clamp(1.6rem, 4vw, 2.5rem)',    { lineHeight: '1.15', letterSpacing: '-0.04em' }],
        'h4':   ['clamp(1.5rem, 2.6vw, 2rem)',    { lineHeight: '1.2',  letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        tight:  '-0.04em',   /* display headings */
        snug:   '-0.025em',  /* UI / nav / buttons */
        wide:   '0.08em',    /* micro-labels / eyebrows */
        wider:  '0.12em',
        widest: '0.14em',
      },
      colors: {
        /* Monochrome system (ref: h3ylab.com). Chrome stays black-on-white. */
        ink:          '#040404',   /* primary text + black pills */
        'pure-black': '#000000',   /* stat numerals */
        'off-white':  '#F5F5F5',
        'off-white-2':'#F9F9F9',
        'warm-panel': '#FAF9F5',
        'muted-ink':  '#707070',
        'muted-ink-2':'#888888',
        hairline:     '#E8E8E8',

        /* Content / data-viz accents, used ONLY inside imagery + stat bars */
        accentBlue:   '#1400FF',
        accentGreen:  '#39F241',
        accentLilac:  '#B88EFE',
        accentCyan:   '#24D1FE',
        accentYellow: '#EAFF00',
        accentPink:   '#FBC6F2',

        /* Interaction fills, mapped to CSS variables (no inline rgba in JSX) */
        pill:         'var(--color-pill-fill)',   /* translucent grey hover capsule */
        'ink-hover':  'var(--color-ink-hover)',   /* pill button hover darken */

        /* Back-compat names remapped onto the monochrome system so existing
           components + opacity modifiers (bg-cream/40, text-coral) keep
           working and re-skin automatically. Literal hex required for /alpha. */
        cream: {
          DEFAULT: '#FFFFFF',   /* → white   */
          pale:    '#F9F9F9',   /* → off-2   */
          deep:    '#F5F5F5',   /* → off     */
        },
        terracotta: '#040404',  /* → ink     */
        coral:      '#707070',  /* → muted   */
        mustard:    '#707070',  /* → muted   */
        peach:      '#888888',  /* → muted-2 */
        charcoal:   '#040404',  /* → ink     */
        aubergine:  '#040404',  /* → ink     */
        'warm-grey':'#707070',  /* → muted   */

        /* shadcn semantic tokens (HSL pipeline in globals.css) */
        surface:    'hsl(var(--surface))',
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      maxWidth: {
        prose: '42rem',
        wide:  '80rem',
        full2: '90rem',
      },
      spacing: {
        gutter: 'var(--gutter)',
      },
      borderRadius: {
        lg:   'var(--radius)',
        md:   'calc(var(--radius) - 2px)',
        sm:   'calc(var(--radius) - 4px)',
        card: '24px',
        'card-lg': '30px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(4, 4, 4, 0.05)',
        lift: '0 18px 48px -12px rgba(4, 4, 4, 0.14)',
        warm: '0 18px 48px -12px rgba(4, 4, 4, 0.14)',  /* legacy alias */
      },
      transitionTimingFunction: {
        soft:     'cubic-bezier(0.22, 1, 0.36, 1)',
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        snappy:   'cubic-bezier(0.2, 0, 0, 1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
        'wobble': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%':      { transform: 'rotate(-1.2deg)' },
          '75%':      { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
        'wobble':         'wobble 600ms cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
