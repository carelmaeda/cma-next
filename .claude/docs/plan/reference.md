# reference.md — h3ylab.com Design & Mood Reference (v2, expanded)

> Source: https://www.h3ylab.com/ + project detail pages (/details/getupandwalk, /details/order)
> Framer-built studio site. Purpose: replicate the full mood + system on my portfolio.

---

## 1. Overall Mood & Feel

Clean, confident, **editorial-Swiss meets playful app-studio**. A strict black-on-white type
system + huge whitespace creates a premium, disciplined base; saturated candy-bright color
arrives almost exclusively _inside the work_ (app mockups, stat bars), so it pops hard.

Vibe keywords: **minimal, editorial, spacious, high-contrast, premium, playful-but-disciplined.**
Emotional throughline: _"serious craft, but we have fun."_

---

## 2. Color Palette

### Neutrals (foundation, ~90% of surface area)

| Role                                | Value                        |
| ----------------------------------- | ---------------------------- |
| Page background                     | `#FFFFFF`                    |
| Off-white surfaces / cards / inputs | `#F5F5F5`, `#F9F9F9`         |
| Warm off-white panel                | `#FAF9F5`                    |
| Primary text + black pill buttons   | `#040404`                    |
| Pure black (stat numbers)           | `#000000`                    |
| Eyebrow / muted label               | `#707070`                    |
| Secondary metadata                  | `#888888`                    |
| Faded caption                       | `rgba(0,0,0,0.4)`            |
| Translucent pill / hover fill       | `rgba(187,187,187,0.15–0.2)` |
| Hairline divider                    | `#E8E8E8`                    |

### Accents (used sparingly, inside content only)

| Color                 | Value     | Where                                           |
| --------------------- | --------- | ----------------------------------------------- |
| Electric blue (brand) | `#1400FF` | Logo dot, links, Order project                  |
| Neon green            | `#39F241` | "Open for new projects" dot; getupandwalk brand |
| Lilac / purple        | `#B88EFE` | Stat bar; Biz bg                                |
| Cyan                  | `#24D1FE` | Stat bar                                        |
| Acid yellow           | `#EAFF00` | Stat bar; getupandwalk accent                   |
| Pink                  | `#FBC6F2` | Stat bar                                        |

**Rule:** structural chrome stays monochrome; saturated color lives in imagery + data viz.

---

## 3. Typography

Three faces, strict roles:

**Space Grotesk** — headings + ALL UI/nav. Weight **500** almost everywhere, with
aggressively tight negative tracking on large sizes.

| Element         | Size | Wt  | Line-height | Tracking                     |
| --------------- | ---- | --- | ----------- | ---------------------------- |
| H1 hero         | 56px | 500 | 1.1         | **-2.8px**                   |
| H2 section      | 40px | 500 | 1.4         | -2px                         |
| H3 service item | 32px | 500 | 1.4         | -1.6px                       |
| Eyebrow label   | 12px | 400 | —           | -0.6px, UPPERCASE, `#707070` |

**Roboto Serif** — **numerals/data only** (stat numbers ~33px/500, big in-mockup figures).
The serif-vs-grotesque tension is the signature "editorial" detail. Use a serif _only_ for numbers.

**Outfit** — tiny functional labels ("Completed tasks", "AI-Assisted/Manual"). Neutral, recedes.

---

## 4. Layout & Spacing

- Centered max-width column inside a full-width container; large side margins. Desktop ref ~1336px.
- **Whitespace is the primary tool** — near-full-viewport gaps between sections.
- Hero: tiny uppercase eyebrow → giant 2-line centered H1 → single pill CTA. Lots of empty space.
- Services: full-width **stacked list**, large H3 rows + `#E8E8E8` hairline dividers, left-aligned.
- Projects: **2-col card grid** — rounded image → title → grey one-liner → tag-pill row.
- Team: rows with circular avatar + name + role + right-aligned arrow.
- Contact: centered H2 → light-grey rounded "Get a quote" panel.
- Footer: EXPLORE / STALK US link columns + oversized `h3ylab®` wordmark + "BUENOS AIRES, ARGENTINA — 2025".

---

## 5. Shape & Borders

| Token | Value                           | Use                                |
| ----- | ------------------------------- | ---------------------------------- |
| Pill  | `~51.6px` / `60–62px` / `999px` | Buttons, status pill, tag chips    |
| Card  | `24px` / `30px`                 | Project cards, panels, bento cards |
| Small | `4px` / `10–11px`               | Inputs, small UI                   |

Fully rounded everything, no hard rectangles, no heavy strokes (separation via fill + hairline).
Buttons = fully-rounded black pills (`#040404` bg, white text). Tags = translucent grey pills.

---

## 6. Components

Floating transparent nav (logo + status pill + "Let's talk" black pill). Black pill buttons
(emoji warmth, e.g. "Say h3y 👋"). Light-grey live-status capsule. Project card. Multicolor
horizontal **stat bars** (serif number + Outfit caption + AI/Manual toggle). "Get a quote"
form (name, email, budget select, textarea, checkbox group, full-width Send). Oversized
footer wordmark with ® mark.

---

## 7. Motion & Interaction — concrete values

Measured from computed styles / Framer attributes:

- **Global transition primitives found:**
  - `opacity 0.4s ease-out` (the main scroll-reveal fade)
  - `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (standard ease-in-out for hovers/state)
  - `transform 0.18s cubic-bezier(0.2, 0, 0, 1)` (snappy micro-interactions, e.g. button/press)
  - `opacity 0.3s ease-in-out`, `color 0.15s` (links/text)
- **`will-change: transform, opacity`** on animated nodes → reveals are GPU-composited
  translate-Y + fade. Recreate scroll-ins as ~0.4–0.8s ease-out, subtle Y-rise + opacity 0→1.
- **Hover micro-interaction on the services list:** hovering a row reveals a small inline
  brand/app icon next to the word (Framer icon appeared by "Framer Development"). Worth copying.
- Smooth-scroll anchored nav (`#hero`, `#services`, `#projects`, `#team`).
- Framer state machines present (variant names like `SM/Idle`, `MD/SE/Idle`, "Large idle",
  "Variant 1/2") → components have idle↔hover/scroll variants rather than CSS-only states.
- Overall feel: **soft, eased, unhurried** — matches the spacious layout. Nothing fast/flashy.

---

## 8. Details I'd missed (new)

- **Custom cursor:** `body { cursor: none }` applied site-wide (566 elements force `cursor:none`).
  The default pointer is hidden and replaced by a JS-driven custom cursor element. Plan for a
  small custom cursor (likely a dot/ring that scales or morphs on interactive hover).
- **Progressive / layered backdrop-blur gradient:** stacked `backdrop-filter: blur()` layers
  ramping `0.09px → 0.19 → 0.375 → 0.75 → 1.5px…` — a "frosted gradient" mask (a fade-to-blur
  edge, typically behind the floating nav / at section boundaries) rather than one flat blur.
- **"Navigation/Blur" layer** behind the nav confirms the floating header sits over a soft
  blurred backdrop band.
- Logo uses a **mask reveal** (`logo-mask`, `h3y-mask`, `logo-text`) — the wordmark likely
  wipes/reveals via a clip mask on load.
- Hero headline words are individually wrapped (`Let's / turn / your / ideas …`) → enables a
  **per-word staggered appear** animation on load.

---

## 9. Project Detail (Case-Study) Page — anatomy _(NEW)_

Confirmed consistent across /details/getupandwalk and /details/order. Top→bottom:

1. **Full-width hero image** — large `24–30px` rounded card holding a tilted 3D phone mockup of
   the app, on a brand-tinted background (neon-green for getupandwalk, electric-blue for Order).
   Bleeds to near-full width with side margins.
2. **Metadata row** — 4-column horizontal info strip, each with a small grey label + value:
   `Client` · `Year` · `What we did?` (stacked tag pills: Branding / UI/UX / App Design) ·
   `Industry`. A rounded **"View more"** pill button sits at the right of this row.
3. **About** — section title `About`, then a **two-column prose block** (two paragraphs side by
   side), generous leading, black body text on white.
4. **Showcase bento grid** — an **asymmetric, bento-style grid of rounded cards** (mixed sizes,
   `24px` radius) each isolating one UI fragment: app icon tile, notification toast
   ("Goal completed!"), big number stat card ("10.354 Daily Steps"), a segmented
   Today/This-Week toggle, numeric keypad screen, weekly list rows, etc. Cards sit on
   off-white `#F5F5F5`; content keeps the brand accent. This is the visual heart of the page.
5. **How it started?** — another titled prose section (single/again multi-paragraph) telling the
   project narrative.
6. **Shared CTA** — "Ready to get started?" with a **"Book an intro call with us"** full-width
   rounded button, an **"or"** divider, then the same "Get a quote" form as the homepage.
7. **Shared footer** (identical to homepage).

### Detail-page specific flourishes

- **Hand-drawn line-art doodles**: scattered around the hero mockup are simple monoline
  illustrations matching the project (Order: waving hand ✋, dollar bill, piggy bank, invoice).
  A recurring playful motif layered over/around the device.
- App mockups are realistic 3D iPhone renders (Dynamic Island, 9:41 status bar), often tilted.
- Section rhythm mirrors the homepage: small grey label → large content block → big whitespace.

---

## 10. Imagery & Illustration Style _(NEW)_

- Photoreal tilted **iPhone mockups** as the primary product imagery.
- Tinted solid-color backgrounds behind devices, matched to each project's brand accent.
- **Monoline hand-drawn doodles** as decorative accents (loose, marker-like strokes).
- Inside mockups: the studio's own UI work — bold serif numbers, neon fills, clean toggles/cards.
- Effect: clinical-clean frames hosting warm, human, colorful content.

---

## 11. Replication Checklist

- [ ] White canvas; `#F5F5F5` section/card surfaces; `#040404` text.
- [ ] Space Grotesk 500 headings w/ tight negative tracking (-1.6 → -2.8px scaling with size).
- [ ] Serif (Roboto Serif) **only** for numerals/data.
- [ ] Outfit (or neutral sans) for micro-labels; 12px UPPERCASE grey eyebrows above sections.
- [ ] Fully-rounded black pill buttons; translucent grey tag chips.
- [ ] 24–30px rounded cards; `#E8E8E8` hairline dividers for lists.
- [ ] Keep chrome monochrome; let mockups/stat-bars carry neon color.
- [ ] Huge vertical whitespace between sections.
- [ ] Project grid: image → title → grey one-liner → tag row.
- [ ] **Case-study template:** rounded hero mockup → metadata strip (Client/Year/What/Industry +
      View more) → 2-col About → **bento showcase grid** → How it started → shared CTA/form/footer.
- [ ] **Custom cursor** (hide default, JS dot/ring; scale on hover).
- [ ] Scroll reveals: ~0.4–0.8s ease-out, Y-rise + opacity; per-word staggered hero headline.
- [ ] Hovers: `0.3s cubic-bezier(.4,0,.2,1)`; presses: `0.18s cubic-bezier(.2,0,0,1)`.
- [ ] Hover-reveal inline icons on list items.
- [ ] Progressive backdrop-blur band behind floating nav.
- [ ] Monoline hand-drawn doodles + tinted phone mockups for project imagery.
- [ ] Oversized footer wordmark with ® as closing statement.

---

## 12. Notes / limits _(NEW)_

- Exact easing/durations above are the real computed CSS transition values; Framer's
  scroll-appear timings are component-driven (variant state machines) and not all exposed as
  plain CSS — treat the listed values as faithful approximations to rebuild the feel.
- Custom-cursor exact shape/size isn't in static CSS (JS-rendered); replicate by intent.
