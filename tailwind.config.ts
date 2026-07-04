import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        /* Newsreader = headings + highlights + numerals (serif) · Spline Sans =
           body + ALL UI/nav · Spline Sans Mono = a REAL monospace for
           micro-labels, pills, tables, code. `numeral` = the heading serif. */
        display: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        sans: ['var(--font-spline-sans)', 'Spline Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-spline-sans-mono)', 'Spline Sans Mono', 'ui-monospace', 'monospace'],
        numeral: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
      },
      fontSize: {
        /* Fluid heading ramp — reads the shared CSS vars (variables.css) so the
           `text-*` utilities and the bare h1…h6 element rules never drift.
           Tracking is the serif-tuned --tracking-heading (near-neutral). */
        hero: ['var(--text-hero)', { lineHeight: '0.9', letterSpacing: 'var(--tracking-heading)' }],
        h1: ['var(--text-h1)', { lineHeight: '1.07', letterSpacing: 'var(--tracking-heading)' }],
        h2: ['var(--text-h2)', { lineHeight: '1.12', letterSpacing: 'var(--tracking-heading)' }],
        h3: ['var(--text-h3)', { lineHeight: '1.16', letterSpacing: 'var(--tracking-heading)' }],
        h4: ['var(--text-h4)', { lineHeight: '1.22', letterSpacing: 'var(--tracking-heading)' }],
        quote: [
          'var(--text-quote)',
          { lineHeight: '1.2', letterSpacing: 'var(--tracking-heading)' },
        ],
      },
      letterSpacing: {
        heading: 'var(--tracking-heading)' /* serif headings */,
        snug: '-0.025em' /* UI / nav / buttons */,
        wide: '0.08em' /* micro-labels / eyebrows */,
        wider: '0.12em',
        widest: '0.14em',
      },
      colors: {
        /* Monochrome system (ref: h3ylab.com). Chrome stays black-on-white.
           Literal hex (not var()) so opacity modifiers like text-ink/80 work. */
        ink: '#040404' /* primary text + black pills */,
        'off-white': '#F5F5F5',
        'warm-panel': '#FAF9F5',
        'muted-ink': '#6B6B6B' /* AA on white, off-whites, and pill fills */,
        hairline: '#E8E8E8',

        /* Content / data-viz accents, used ONLY inside imagery + stat bars */
        accentBlue: '#1400FF',
        accentGreen: '#39F241',

        /* Interaction fills, mapped to CSS variables (no inline rgba in JSX) */
        pill: 'var(--color-pill-fill)' /* translucent grey hover capsule */,
        'ink-hover': 'var(--color-ink-hover)' /* pill button hover darken */,

        /* shadcn semantic tokens (HSL pipeline in globals.css) */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
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
        /* Fluid rhythm scale — names mirror the tokens 1:1 (edit values in
           variables.css). Utilities: gap-item, p-block, gap-sub, py-section,
           py-page, … */
        item: 'var(--space-item)',
        block: 'var(--space-block)',
        sub: 'var(--space-sub)',
        section: 'var(--space-section)',
        page: 'var(--space-page)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        card: '24px',
        pill: '999px',
      },
      /* Shadows + easings read the tokens in variables.css — edit them there. */
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
        glass: 'var(--shadow-glass)',
        'glass-scrolled': 'var(--shadow-glass-scrolled)',
      },
      animation: {
        /* Status-dot pulse at a calm cadence — the stock 1s ping reads like a
           notification; 2.2s reads like availability. */
        'ping-slow': 'ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      transitionTimingFunction: {
        soft: 'var(--ease-out)',
        standard: 'var(--ease-standard)',
        snappy: 'var(--ease-snappy)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
