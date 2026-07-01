# Portfolio Design System — Carel Maeda

> This file is the source of truth for the visual & copy direction of this portfolio.
> When making any UI or copy change, read this file first and follow the rules below.

---

## 1. Project Context

This is the personal portfolio of **Carel Maeda**, Project Design Manager at Paygos.
Positioning: senior strategic UX leader who drives enterprise revenue growth through user research, stakeholder alignment, and scalable design execution. Background: mechanical engineering → marketing → UX. Speaks 4 languages. Brazilian.

The portfolio must read as **distinctively human and crafted**, not as another monochrome-minimalist UX site. Personality leads; polish supports.

---

## 2. How to Use This File

When the user asks for any UI change, do the following before writing code:

1. **Check the relevant section below** (tokens, type, motion, components, voice).
2. **If a request conflicts with a rule, surface the conflict** before implementing. Do not silently override.
3. **Default to the patterns in the "Component Recipes" section** when building new pieces.
4. **Pattern-match against the anti-patterns list** — if what's being asked falls into one, push back.
5. **For copy changes, follow the Voice & Tone section literally** — first-person, warm, specific.

When the user says "make it more [warmer / bolder / etc.]", consult the **Mood Vocabulary** at the bottom to interpret what that means here.

---

## 3. Design Tokens — CSS Variables

Paste these into the global stylesheet (`globals.css`, `app.css`, or `:root` in `index.html`):

```css
:root {
  /* ============ COLOR ============ */
  /* Backgrounds */
  --color-cream:        #F5EFE6;  /* primary canvas — never pure white */
  --color-cream-pale:   #FAF4E8;  /* surfaces, cards, subtle layering */
  --color-cream-deep:   #EDE3D2;  /* alternate sections, hover backgrounds */

  /* Brand */
  --color-terracotta:   #C66B3D;  /* primary brand, section heads, CTAs */
  --color-coral:        #E87461;  /* interactive states, links, energy */
  --color-mustard:      #D4A24C;  /* highlights, tags — use sparingly */
  --color-peach:        #F4B89C;  /* soft accent, decorative shapes */

  /* Ink */
  --color-charcoal:     #2C2826;  /* body text — softer than pure black */
  --color-aubergine:    #3A2218;  /* display type, deepest contrast */
  --color-warm-grey:    #7A6E63;  /* secondary text, meta info */
  --color-hairline:     #D8CFC2;  /* borders, dividers */

  /* Semantic aliases */
  --bg:                 var(--color-cream);
  --bg-surface:         var(--color-cream-pale);
  --bg-alt:             var(--color-cream-deep);
  --text:               var(--color-charcoal);
  --text-muted:         var(--color-warm-grey);
  --text-strong:        var(--color-aubergine);
  --accent:             var(--color-terracotta);
  --accent-energy:      var(--color-coral);
  --accent-highlight:   var(--color-mustard);
  --border:             var(--color-hairline);

  /* ============ TYPOGRAPHY ============ */
  /* SWAP these for chosen fonts. Defaults are placeholders. */
  --font-sans:          "Inter", "General Sans", system-ui, sans-serif;
  --font-display:       "PP Editorial New", "Migra", Georgia, serif;
  --font-mono:          "JetBrains Mono", "Courier New", monospace;

  /* Type scale (modular, mobile-first) */
  --text-xs:    0.8125rem;   /* 13px — captions, meta */
  --text-sm:    0.9375rem;   /* 15px — UI labels */
  --text-base:  1.125rem;    /* 18px — body */
  --text-lg:    1.375rem;    /* 22px — large body, lead */
  --text-xl:    1.75rem;     /* 28px — small heads */
  --text-2xl:   2.5rem;      /* 40px — section sub-heads */
  --text-3xl:   4rem;        /* 64px — section heads (clamps up on desktop) */
  --text-4xl:   clamp(4rem, 12vw, 11rem);   /* hero / name */

  /* Line heights */
  --leading-tight:   1.05;
  --leading-snug:    1.2;
  --leading-normal:  1.55;
  --leading-loose:   1.7;

  /* Letter spacing */
  --tracking-tight:   -0.02em;  /* display */
  --tracking-normal:  0;
  --tracking-wide:    0.08em;   /* small uppercase labels */

  /* ============ SPACING ============ */
  --space-1:  0.25rem;   /* 4 */
  --space-2:  0.5rem;    /* 8 */
  --space-3:  0.75rem;   /* 12 */
  --space-4:  1rem;      /* 16 */
  --space-6:  1.5rem;    /* 24 */
  --space-8:  2rem;      /* 32 */
  --space-12: 3rem;      /* 48 */
  --space-16: 4rem;      /* 64 */
  --space-24: 6rem;      /* 96 */
  --space-32: 8rem;      /* 128 — between major sections */
  --space-48: 12rem;     /* 192 — between hero and content */

  /* Layout */
  --container-prose: 42rem;   /* 672px — body copy max width */
  --container-wide:  80rem;   /* 1280px — layouts */
  --container-full:  90rem;   /* 1440px — hero, full-bleed */
  --gutter:          clamp(1.5rem, 8vw, 8rem);

  /* ============ RADIUS ============ */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;

  /* ============ SHADOW (use sparingly) ============ */
  --shadow-soft:    0 4px 24px rgba(44, 40, 38, 0.06);
  --shadow-warm:    0 8px 32px rgba(198, 107, 61, 0.12);

  /* ============ MOTION ============ */
  --ease-out:        cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out:     cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast:   150ms;
  --duration-base:   200ms;
  --duration-slow:   400ms;
}

html { background: var(--bg); color: var(--text); }
body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
```

---

## 4. Tailwind Config Snippet

If using Tailwind, extend the theme in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream:      { DEFAULT: '#F5EFE6', pale: '#FAF4E8', deep: '#EDE3D2' },
        terracotta: '#C66B3D',
        coral:      '#E87461',
        mustard:    '#D4A24C',
        peach:      '#F4B89C',
        charcoal:   '#2C2826',
        aubergine:  '#3A2218',
        'warm-grey':'#7A6E63',
        hairline:   '#D8CFC2',
      },
      fontFamily: {
        sans:    ['Inter', 'General Sans', 'system-ui', 'sans-serif'],
        display: ['"PP Editorial New"', 'Migra', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 11rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display':    ['clamp(2.5rem, 6vw, 4rem)',  { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        prose: '42rem',
        wide:  '80rem',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
};
```

---

## 5. Typography Rules

### Pairing
- **Body / structural**: a confident geometric sans (Söhne, Inter, General Sans, Aktiv Grotesk).
- **Display / accent**: a high-contrast modern serif (PP Editorial New, Migra, Reckless Neue, Tobias).

### Hierarchy

| Use case | Class | Notes |
|---|---|---|
| Hero name | `font-display text-display-xl tracking-tight` | One or two words, viewport-filling |
| Section head | `font-display text-display tracking-tight` | 40-64px |
| Sub-head | `font-sans text-xl font-bold` | 28px |
| Body | `font-sans text-base leading-normal` | 18px, 1.55 line height |
| Lead paragraph | `font-sans text-lg leading-normal` | 22px |
| Caption / meta | `font-mono text-xs text-warm-grey tracking-wide uppercase` | Numbers, section labels |

### Type rules

- **Never center body copy.** Always left-align.
- **Max 65 characters per line** for body — use `max-w-prose`.
- **Display type gets tight tracking** (`tracking-tight`).
- **Small uppercase labels get wide tracking** (`tracking-wide`).
- **Numbers, hex codes, dates use monospace** — a designer's touch.
- **Be brave with scale** — hero type should feel oversized. If you're hesitating between two sizes, pick the larger one.

---

## 6. Color Rules

- **Cream is the canvas.** Default page background. Never use pure white (`#FFFFFF`) anywhere visible to the user.
- **Charcoal is body text.** Never pure black (`#000000`).
- **Terracotta is the brand.** Use for primary CTAs, section headers, brand-defining moments.
- **Coral earns its energy.** Use for hover states, links, interactive feedback, decorative scribbles. Coral is the "alive" color.
- **Mustard is the highlighter.** Max one or two uses per page. Tags, dates, occasional emphasis.
- **Peach is the soft accent.** Section backdrops, decorative organic shapes, illustrative moments.
- **Aubergine for deep contrast.** Display type on cream, footer backgrounds, dark mode if added later.
- **Hairline for all borders.** Never use grey-blue or pure black borders.

### Pairing combos (use these):
- `bg-cream` + `text-charcoal` → default reading mode
- `bg-cream-pale` + `text-charcoal` → cards, surfaces
- `bg-terracotta` + `text-cream` → primary CTAs
- `bg-aubergine` + `text-cream` → deep contrast sections
- `text-terracotta` on cream → section heads
- `text-coral` on hover → all interactive elements

### Never:
- Use blue. There is no blue in this portfolio.
- Use pure black or pure white.
- Use the same accent twice in the same viewport at full saturation — let one win.

---

## 7. Spacing & Layout Rules

- **Side gutters**: `var(--gutter)` — scales from 1.5rem on mobile to 8rem on desktop.
- **Major section spacing**: minimum `--space-32` (8rem / 128px) between sections. Often more.
- **Prose width**: never wider than `--container-prose` (672px) for long-form copy.
- **Layout width**: `--container-wide` (1280px) for project grids, dashboards.
- **Hero**: full-bleed, generous top padding (`--space-48` or larger).
- **One idea per screen.** If a section feels crowded, split it into two sections.
- **Asymmetry is welcome** — but it must be anchored to a 12-column grid. Random placement is not "editorial."

---

## 8. Motion Specs

| Interaction | Duration | Easing |
|---|---|---|
| Hover state (color, scale) | 150-200ms | `--ease-out` |
| Page transition | 300-400ms | `--ease-in-out` |
| Scroll reveal | max 400ms | `--ease-out` |
| Stagger between elements | 40-60ms max | — |

### Rules
- **Respect `prefers-reduced-motion`** — wrap every animation in a media query check.
- **No parallax unless requested.** One earned moment per page, max.
- **Hover scale**: never larger than `1.02-1.03x`. No bouncing or overshooting.
- **Custom cursor**: optional. If used: small terracotta filled circle, scales 2x over interactive elements.
- **Hero signature moment**: a tiny wobble or letter-swap on the name when hovered — one signature interaction.

### Default hover pattern for links

```css
a {
  color: var(--text);
  text-decoration: none;
  background-image: linear-gradient(var(--color-coral), var(--color-coral));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size var(--duration-base) var(--ease-out),
              color var(--duration-base) var(--ease-out);
}
a:hover { background-size: 100% 1px; color: var(--color-coral); }
```

---

## 9. Hand-Touched Craft Layer

This is the personality layer. Without it, the portfolio reads as polished but cold.

### Implement via:
- **Inline SVG scribbles** — hand-drawn arrows, circles, underlines. Slightly imperfect paths. Use `stroke="var(--color-coral)"` and `stroke-width="2-3"`.
- **Organic blob shapes** as section backdrops — never perfect circles. Use SVG with rounded asymmetric paths.
- **Slight rotation** on photos and cards: `transform: rotate(-1.2deg)` or similar. Always odd-degree values, never multiples of 5.
- **Photos of sketchbook pages, post-its, whiteboard moments** treated as content, not decoration.
- **Margin annotations** — text in `--color-coral` italic, rotated 2-4 degrees, positioned outside the main content column.

### Example scribble SVG (use these patterns):

```html
<!-- Hand-drawn arrow -->
<svg viewBox="0 0 100 40" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
  <path d="M5 22 Q 30 14, 60 20 T 92 22" />
  <path d="M82 14 L 92 22 L 82 30" />
</svg>

<!-- Scribble circle/underline -->
<svg viewBox="0 0 200 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
  <path d="M10 28 Q 50 18, 100 24 T 195 22" />
</svg>
```

### Never:
- Use Heroicons / Phosphor / Tabler / any clean icon set as personality.
- Use stock illustrations.
- Use Lottie animations of waving emojis, generic office figures, etc.
- Use perfect geometric shapes as decoration.

---

## 10. Component Recipes

### Hero Section

```jsx
<section className="min-h-screen bg-cream flex flex-col justify-center px-[var(--gutter)]">
  <p className="font-mono text-xs uppercase tracking-wide text-coral mb-4">
    Project Design Manager
  </p>
  <h1 className="font-display text-display-xl text-charcoal tracking-tight leading-[1.02]">
    Carel<br />Maeda
  </h1>
  <p className="font-sans text-lg text-warm-grey max-w-prose mt-12 leading-normal">
    Designer, strategist, translator between business and humans. I turn
    complex enterprise problems into experiences people actually want to use.
  </p>
  {/* hand-drawn accent positioned in negative space */}
  <div className="absolute right-[10%] top-[40%] text-coral opacity-80 rotate-[8deg]">
    <ScribbleArrow />
  </div>
</section>
```

### Section Header

```jsx
<header className="mb-12">
  <p className="font-mono text-xs uppercase tracking-wide text-coral mb-2">
    03 — Process
  </p>
  <h2 className="font-display text-display text-charcoal tracking-tight">
    Asking better questions
  </h2>
</header>
```

### Project Card

```jsx
<article className="bg-cream-pale p-8 rounded-md transition-transform duration-[200ms] ease-soft
                    hover:scale-[1.02] hover:rotate-[-0.5deg]">
  <div className="aspect-[4/3] bg-peach rounded-sm mb-6 overflow-hidden">
    <img src={...} className="w-full h-full object-cover" />
  </div>
  <p className="font-mono text-xs uppercase tracking-wide text-terracotta mb-2">
    Fintech · 2025
  </p>
  <h3 className="font-display text-2xl text-charcoal leading-tight">
    Compliance workflows that don't feel like compliance
  </h3>
  <p className="font-sans text-base text-warm-grey mt-3 leading-normal">
    How we cut a 12-screen onboarding flow to 4 and lifted completion 38%.
  </p>
</article>
```

### Primary Button

```jsx
<button className="font-sans text-base bg-terracotta text-cream px-8 py-4 rounded-pill
                   transition-all duration-[200ms] ease-soft
                   hover:bg-coral hover:scale-[1.02]">
  Say hello →
</button>
```

### Body Paragraph

```jsx
<p className="font-sans text-base text-charcoal max-w-prose leading-[1.6] mb-6">
  Lorem ipsum...
</p>
```

### Case Study Section Wrapper

```jsx
<section className="py-32 px-[var(--gutter)]">
  <div className="max-w-wide mx-auto">
    {/* content — one idea per section */}
  </div>
</section>
```

---

## 11. Voice & Copy Rules

### Voice
- **First-person.** "I" / "we" — never third-person bio voice.
- **Warm, conversational.** Like talking to a smart friend over coffee.
- **Specific over abstract.** Name the company, the problem, the metric, the outcome.
- **Drop personal details.** Brazilian, four languages, mech eng background — these are differentiators, not noise.
- **One opinionated phrase per case study.** Show a point of view.
- **Cut every adjective you can.** Cut every word that doesn't earn its place.

### Voice samples

✓ **YES:**
> "I'm Carel. I help enterprise fintech teams turn complex compliance workflows into experiences people actually want to use. Mostly that means asking better questions, drawing a lot, and translating between business, engineering, and the human on the other end."

✗ **NO:**
> "Project Design Manager with 5+ years of experience driving cross-functional UX strategy across enterprise accounts, delivering measurable business impact through user-centered design."

### Phrases that sound like Carel
- "The interesting part wasn't the design — it was figuring out who actually needed to see this."
- "I came to UX from mechanical engineering, which is probably why I draw flowcharts on everything."
- "Speaking four languages turned out to be design research training I didn't know I was getting."
- "This is the version we shipped. The version before it had three more screens. Killing them was the work."

### Copy patterns

- **Section transitions**: a single short line that sets up what's next, italicized.
- **Numbers**: render in mono font, slightly muted (`text-warm-grey`).
- **Outcomes**: state the metric plainly, then the human reason it mattered. "Engagement +15% YoY. More importantly, support tickets dropped because users stopped getting lost on step 3."
- **About page first line**: must contain the word "I" within the first 5 words.
- **CTA copy**: never "Submit" or "Click here." Use "Say hello," "See the work," "Read more →" with the arrow as the cursor target.

---

## 12. Anti-Patterns — Never Do

Reject any request (or part of a request) that asks you to:

- Use a pure white (`#FFFFFF`) background anywhere visible.
- Use a pure black (`#000000`) for text.
- Add blue, including "professional" or "trust" blue.
- Center body copy.
- Add gradients that aren't sun-warm tonal (cream → pale cream is OK; cream → blue is not).
- Add stock illustrations or generic icon-set decorations.
- Write a third-person bio ("Carel is a designer who…").
- Cram multiple major ideas onto one viewport.
- Add motion to everything — restraint reads as confidence.
- Use a generic SaaS hero (big headline + small subhead + screenshot to the right + two CTAs).
- Implement a parallax scroll effect unless explicitly asked.
- Add a "Hire me" badge, scroll-progress bar, or any web-design-trends-2019 ornament.

If a user request falls into one of these, **surface it** before implementing. Example:

> "You asked for a white background on the about page — the design system uses cream (#F5EFE6) as the canvas to avoid pure white. Do you want me to use cream instead, or override the system for this section?"

---

## 13. Decision Framework — When in Doubt

Ask, in order:

1. **Does this advance one of the mood keywords?** *(Confident · Warm · Crafted · Editorial · Approachable · Considered · Distinct · Honest · Tactile · Sun-warmed · Generous · Specific · Personal · Designed · Bright · Unhurried)* — if not, cut it.
2. **Could a 100-person SaaS company use this exact element?** If yes, redesign it.
3. **Would a hiring manager understand the work in 30-60 seconds on this page?** If not, simplify.
4. **Is this serving the content, or showing off?** If showing off, cut it.
5. **Does it sound like Carel talking, or like an AI bio?** Rewrite until it sounds like Carel.

---

## 14. Pre-Change Checklist

Before completing any UI change, verify:

- [ ] No pure white or pure black used
- [ ] No blue anywhere
- [ ] Body text is left-aligned and max 65ch wide
- [ ] Display type uses the display font with tight tracking
- [ ] Hover states have a transition (150-200ms)
- [ ] Copy is in first-person, conversational, specific
- [ ] No more than one major idea per viewport
- [ ] Hand-touched element exists somewhere on the page (scribble, organic shape, photo of process, rotated card)
- [ ] If motion was added, it respects `prefers-reduced-motion`

---

## 15. Mood Vocabulary — How to Interpret Requests

When the user says... | Interpret as...
---|---
"Make it warmer" | More cream / peach exposure, softer rounding, more breathing room
"Make it bolder" | Larger display type, tighter tracking, more terracotta presence
"Make it more crafted" | Add a hand-touched element (scribble, rotation, sketch photo)
"Make it more editorial" | Increase whitespace, lengthen prose width, add section numbering
"Make it more playful" | Add a coral micro-interaction, slight rotation, expressive hover
"Make it cleaner" | Reduce element count, increase spacing — do NOT remove personality
"Make it more professional" | Tighten copy, remove a decorative element if there are 3+, NOT add blue or cool tones
"Make it pop" | Increase contrast between terracotta and cream — never add saturation broadly

---

## 16. Font Loading

Use `<link>` or `@import` for free fonts; self-host for paid ones.

### Free pairing (recommended starting point)
```html
<link rel="preconnect" href="https://api.fontshare.com" />
<link rel="stylesheet"
  href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&f[]=satoshi@400,500,700&display=swap" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" />
```
For the display face, download **PP Editorial New** (free for personal use from Pangram Pangram) and self-host.

### Paid pairing (production-grade)
- Body: **Söhne** (Klim Type Foundry)
- Display: **Tobias** (Klim) or **PP Editorial New** (Pangram Pangram)
- Mono: **Söhne Mono** or **JetBrains Mono** (free)

---

## 17. Accessibility (Non-Negotiable)

- All text on cream must pass WCAG AA contrast (charcoal `#2C2826` on cream `#F5EFE6` passes; verify any new combos).
- Terracotta on cream: passes AA for large text, NOT for body — never use terracotta on cream for body copy.
- Every interactive element must have a visible focus state — `outline: 2px solid var(--color-coral); outline-offset: 4px;`
- Every animation respects `prefers-reduced-motion: reduce`.
- Every image has meaningful alt text written in Carel's voice (not generic).
- Hand-drawn SVG elements get `aria-hidden="true"` — they're decorative.
- Custom cursors must not interfere with default cursor on touch / accessibility tools.

---

## 18. File Naming & Component Conventions

- Components in `PascalCase`: `HeroSection.jsx`, `ProjectCard.jsx`, `ScribbleArrow.jsx`.
- Hand-drawn SVGs live in `components/scribbles/`.
- All scribble components accept `color` and `className` props for flexibility.
- Case study pages: `app/work/[slug]/page.tsx` with consistent section structure.

---

## End of File

**When in doubt, read this file again, then ask Carel before adding anything new to the design language.** The portfolio is a living artifact — but the system above stays consistent.
