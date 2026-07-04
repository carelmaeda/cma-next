# React + shadcn/ui Architecture & Style Contract

This document is the permanent style and architecture contract for this
repository. Every developer (and every Claude Code session) must follow it
strictly.

## How this maps to the codebase

- **Tokens are the source of truth.** Colours + type scale + spacing live in
  `src/styles/variables.css`; the Tailwind theme (`tailwind.config.ts`) exposes
  them as named tokens. Fluid headings are `text-hero / text-h1 / text-h2 /
text-h3 / text-h4`; micro-label tracking is `tracking-wide / wider / widest`;
  interaction fills are `bg-pill` and `bg-ink-hover`. **Never** hardcode an
  arbitrary font size, fractional spacing step, or inline `rgba()`.
- **Decoration lives in CSS, not className soup.** Just two stylesheets:
  `src/styles/variables.css` (tokens only) and `src/styles/globals.css`
  (everything else). Site-wide primitives (`.eyebrow`, `.wrap*`) and the base
  `h1…h6` / `p` / `a` / `ul` / `table` element rules live there (pull-quotes
  are the shadcn-style `<Blockquote>` primitive in `src/components/ui/`),
  and apply everywhere — home page and case study alike, no wrapper class. Text
  markup stays classless (`<h2>`, `<p>`, no class on either); a component that
  needs a different size/weight layers a Tailwind utility on top, which always
  wins over a bare tag selector on specificity. Only blocks that aren't a
  single tag get a **plain-noun class** (`.card`, `.stat`, `.columns`,
  `.placeholder`, `.phase-chip`, `.phase-pill`, `.phase-title`, `.bento-value`)
  — no scoping prefix, since nothing else in the codebase uses those names.
  The one deliberate exception: long-form vertical rhythm between a
  `<section>`'s direct children is scoped to `article section > * + *`
  (tag-based, not a class) so it can't leak margin onto the home page's
  `gap-*`-based sections. Do **not** reintroduce `cs-*` prefixes, a `.prose`
  wrapper, or a class on every heading/paragraph. Tailwind in JSX is for
  layout/spacing/sizing.
- **shadcn is customised at the primitive** (`src/components/ui/*`) via theme
  tokens — never patched with page-level overrides.

---

## Core philosophy

Simplicity over cleverness. Delete more than you add. Prefer structure over
styling. Prefer shadcn/ui over custom UI. Prefer semantic HTML over utility
noise. Prefer component extraction over duplication. Tailwind is for layout, not
decoration. SCSS/CSS is for reusable structural patterns, not random overrides.
Never fight shadcn/ui — customise it via `tailwind.config.ts` or theme variables,
never with hacked overrides. Every class must justify its existence. If something
feels visually "overbuilt", simplify it.

## Architecture rules

- Functional, standalone React components only. Keep them small and focused (one
  component per file unless a compound pattern).
- Extract UI repetition — never duplicate Tailwind chains across JSX.
- Avoid unnecessary deep nesting. Do not introduce global CSS unless required.
- If a pattern repeats 3+ times → extract a reusable React component **or** a
  semantic CSS class using `@apply` / tokens. Never solve repetition with
  copy/paste.

## Tailwind usage rules (strict)

Allowed only for: layout (flex, grid), spacing (gap, space-y, p-, m-),
width/height, simple alignment, rare justified responsive adjustments.
NOT for: styling shadcn internals via deep selectors, overriding core CSS-variable
theme colours inline, heavy/non-standard typography, complex shadow stacking,
micro-adjustments (pixels, fractional steps).

### No-to-do list

- **No fractional/half-step spacing** (`px-3.5`, `py-1.5`) → whole steps.
- **No arbitrary/absolute font sizes** (`text-[11px]`) → the typography scale.
- **No inline arbitrary RGBA backgrounds** (`bg-[rgba(...)]`) → theme colours /
  opacity utilities (`bg-muted/20`, `bg-pill`).
- **Remove redundant utilities** that are already native/theme defaults:
  `flex-row`, `items-stretch`, `justify-start`, `overflow-visible`, `font-normal`,
  `leading-normal`, `text-black`/`text-white` (when themed), `relative` (unless
  anchoring an absolute child), `w-auto`/`h-auto`, bloated responsive chains.
- **Avoid margin stacking** — use a parent `gap-*` / `space-y-*` instead of
  `mt-*`/`mb-*` on siblings.
- **Utility limits & ordering** — no element over 6–8 utilities unless justified
  (10+ → refactor). Order: layout → spacing → sizing → typography → background →
  border → effects → state/breakpoints.

## shadcn/ui rules (critical)

shadcn/ui is the primary UI system. Prefer its Button variants, Input/Select/
Checkbox wrappers, primitives (Dialog, DropdownMenu, Card) and slot-based `cn()`
composition. Never rebuild what shadcn provides. Do not override it with brittle
inline chains or pixel-push primitives. Apply utilities to structural wrapper
containers, use provided variants (`variant="outline"`, `size="sm"`), keep rhythm
with parent `gap-*`. For an app-wide structural change, modify the global shadcn
CSS variables or the primitive in `src/components/ui/` — never at the page level.

## SCSS/CSS rules

Allowed for: reusable site-wide structural layouts, extracting heavily-repeated
Tailwind via `@apply`, component-scoped visual patterns unique to a complex
feature. NOT for: random experiments, replacing utilities out of laziness,
duplicating/fighting the shadcn theme. Use `@apply` sparingly — only when a chain
repeats 3+ times, reduces JSX noise, and drastically improves clarity.

## Responsive rules

Fewest breakpoints possible. Standard target: base (mobile) and `md` (desktop).
Avoid messy `sm → md → lg → xl` chains unless the data layout truly demands it.
Mobile-first always.

## JSX / template cleanliness

JSX should read without horizontal scrolling and without utility-soup blockades;
prefer structural clarity. Before adding a class ask: is this a native browser
default? Can flex/grid solve it without margins? Can parent `gap` solve it? Should
this markup become its own component?

## Performance & maintainability

No unnecessary npm dependencies. Do not over-abstract for future use cases. Avoid
deep specificity, structural CSS hacking, and `!important`. Prefer deleting code
over adding it.

## When modifying existing code

Make the smallest possible change. Preserve behaviour, accessibility (ARIA), and
responsiveness. Remove redundancy, replace margin soup with parent `gap`, remove
Tailwind defaults. If unsure: add a `// TODO:` — do not guess.

## Final enforcement principle

Clean > Clever · Simple > Fancy · Structured > Styled · shadcn > Custom ·
Reusable > Repeated · Readable > Compact. If code feels heavy, it is wrong —
refactor toward minimalism.
