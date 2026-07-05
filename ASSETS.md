# ASSETS.md — where to add imagery (h3ylab-style redesign)

The redesign is **monochrome by rule**: structural chrome stays black-on-white,
and **saturated colour lives only inside imagery + data-viz**. That means the
site looks intentionally restrained until you drop real, colourful mockups into
the placeholder slots below. Every slot is already styled, sized, and tinted —
you only supply the image and flip one commented line.

Conventions:

- Drop files in `public/images/work/` (home covers) or `public/images/cs/<slug>/`
  (case-study mockups). Create the folders as needed.
- Prefer **`.webp`**, exported at **2×** the displayed size for retina.
- Inside mockups, keep the studio's own UI colourful (neon fills, serif numbers).
  The frame around them stays neutral.

---

## 1. Home — project covers (`Work.tsx`)

**File:** `src/app/components/partials/Work.tsx` → `workCards[]`
Each card has a commented `cover` line. Uncomment and set `src` + `alt`:

```ts
cover: { src: '/images/bonusbowls-hero.webp', alt: '…' },
```

| Card           | Suggested image                        | Aspect  | Accent (if left as placeholder) |
| -------------- | -------------------------------------- | ------- | ------------------------------- |
| 01 Bonus Bowls | Tilted phone mockup of the loyalty app | **4:3** | green                           |

Export ~**1280×960**. Until set, a tinted slot with the serif index renders.

---

## 2. Case-study hero visuals (`<Figure placeholder=… />`)

Each case study's `CaseStudyHero` has a `heroVisual={<Figure placeholder=… />}`.
`Figure` already renders a dashed placeholder; to use a real image, pass `src`
to the `Figure` (see `Figure.tsx` props) instead of `placeholder`.

- **Bonus Bowls** → three-up: "85% interested" insight · receipt-upload screen · earnings dashboard

Recommended: a **wide 16:9 or 21:9** brand-tinted board (`public/images/cs/<slug>/hero.webp`),
~**2400px** wide. Put the device renders on a solid brand-accent background.

---

## 3. Case-study bento showcase (`BentoShowcase`)

**File:** each `src/app/case-studies/<slug>/page.tsx` → the `<BentoShowcase cells={…} />`
block right under the hero. Each `placeholder` cell becomes an image by changing:

```ts
{ kind: 'placeholder', label: 'Rep dashboard', … }
// →
{ kind: 'image', src: '/images/cs/bonus-bowls/rep-dashboard.webp', alt: 'Rep dashboard', span: 2 }
```

Cells currently waiting for art:

- **bonus-bowls:** Receipt-upload screen · Earnings dashboard · Sign-up / trust surface · Research insight board

Each cell is a rounded card; supply images that **fill** their box (object-cover).
`span: 2` cells are ~2× wide — export those wider (e.g. 1600×900); square-ish
cells ~800×800. The `stat` cells (serif numerals) are real data — leave as-is.

---

## 4. Decorative monoline doodles (optional, on-brand flourish)

The reference scatters loose **monoline hand-drawn doodles** around hero mockups
(waving hand, dollar bill, piggy bank…). To add: export simple 1.5px-stroke SVGs
(black on transparent) and absolutely-position them around a case-study hero
visual. Keep them black (chrome stays monochrome). Place in
`public/images/doodles/`. This is a nice-to-have, not required.

---

## 5. About portrait

`About.tsx` uses `/images/profile.webp` rendered **grayscale** on purpose
(keeps colour reserved for the work). If you'd rather it be colour, remove the
`grayscale` class on the `<Image>`.

---

## 6. What NOT to reuse

Per `CLAUDE.md`, the old deleted-route assets (`birdseye*`, `wealthie*`,
`design-archive*`, `paygos-prototype*` in `public/images/`) must **not** be
reintroduced. Use fresh exports for the slots above.
