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
        /* Newsreader = headings + highlights + numerals (serif) · Spline Sans =
           body + ALL UI/nav · Spline Sans Mono = a REAL monospace for
           micro-labels, pills, tables, code. `serif`/`numeral` = the heading serif. */
        display: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        sans:    ['var(--font-spline-sans)', 'Spline Sans', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-spline-sans-mono)', 'Spline Sans Mono', 'ui-monospace', 'monospace'],
        numeral: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        serif:   ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
      },
      fontSize: {
        /* Fluid heading ramp — reads the shared CSS vars (variables.css) so the
           `text-*` utilities and the case-study `cs-*` primitives never drift.
           Tracking is the serif-tuned --tracking-heading (near-neutral). */
        'display-xl': ['var(--text-4xl)', { lineHeight: '1.02', letterSpacing: 'var(--tracking-heading)' }],
        'display':    ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.06', letterSpacing: 'var(--tracking-heading)' }],
        'hero': ['var(--text-hero)', { lineHeight: '1.06', letterSpacing: 'var(--tracking-heading)' }],
        'h1':   ['var(--text-h1)',   { lineHeight: '1.07', letterSpacing: 'var(--tracking-heading)' }],
        'h2':   ['var(--text-h2)',   { lineHeight: '1.12', letterSpacing: 'var(--tracking-heading)' }],
        'h3':   ['var(--text-h3)',   { lineHeight: '1.16', letterSpacing: 'var(--tracking-heading)' }],
        'h4':   ['var(--text-h4)',   { lineHeight: '1.22', letterSpacing: 'var(--tracking-heading)' }],
      },
      letterSpacing: {
        heading: 'var(--tracking-heading)',  /* serif headings */
        tight:  '-0.04em',   /* legacy grotesque-era spot use */
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
        /* Reading measure — single source of truth is the CSS var, so the
           `max-w-prose` utility and the `.wrap*` container tiers agree.
           Width tiers themselves live as `.wrap--content` / `.wrap--wide`
           classes (globals.css) since one uses a dynamic min(). */
        prose: 'var(--container-prose)',
      },
      spacing: {
        gutter: 'var(--gutter)',
        /* Fluid rhythm scale (variables.css) as semantic spacing utilities:
           gap-item, gap-block, gap-sub, gap-section, py-page, p-block, … */
        item:    'var(--space-s)',
        block:   'var(--space-m)',
        sub:     'var(--space-l)',
        section: 'var(--space-xl)',
        page:    'var(--space-2xl)',
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
