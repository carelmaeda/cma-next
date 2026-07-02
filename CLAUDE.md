# CLAUDE.md

> This file is read automatically by Claude Code in every session in
> this repository. It contains the persistent context that applies
> regardless of which prompt is in front of you.

## What this project is

This is the source code for **carelmaeda.com** — Carel Maeda's personal
design portfolio, built with Next.js (App Router) + React +
TypeScript + Tailwind, hosted at carelmaeda.com.

The portfolio was rebuilt through a four-phase revamp (Phases 0–4D),
now complete. It is in a shippable, interview-ready state. Future
sessions are open-ended — feature work, refactors, content updates —
not phase-bound.

## Carel's positioning

The portfolio is anchored to a single positioning statement:

> **Senior Product Designer who ships strategy, design, and code —
> building toward Design Lead.**

Three things to internalize about this positioning:

1. **"Senior" — not "Lead" — is the visible claim.** The current site
   makes a Design Lead claim that the evidence doesn't support
   (no people-management history). The revamp aligns the visible
   positioning to Senior, which is defensible from actual work.
2. **The "and code" half is the differentiation.** Carel designs *and*
   ships front-end code end-to-end. That hybrid is the most
   underused asset on the current site. Surface it; don't bury it.
3. **"Building toward Design Lead" is the trajectory framing.** It's
   honest, it's specific, and it tells recruiters what to consider
   him for now *and* later. Do not strip it. Do not over-claim past it.

## Where the reference material lives

The four-phase revamp (Phases 0–4D) is complete. The session prompts
that drove each phase have been deleted; what remains is the durable
reference material:

- **`.claude/docs/plan/portfolio-revamp-plan.md`** — historical record
  of the revamp plan. Read for context on *why* the site looks the
  way it does. Not actionable any more.

- **`.claude/docs/case-studies/`** — three canonical long-form case
  study markdown files. The rendered `.tsx` pages are summaries of
  these:
  - `paygos-corporate-site-case-study.md` (Brand & Positioning)
  - `paygos-demo-case-study.md` (Craft & Systems)
  - `bonus-bowls-case-study.md` (Strategy & Impact)

  Treat these as the source of truth for case study content. The
  rendered pages can drift toward shorter or longer; the markdown
  is what feeds future PDF exports or content edits.

- **`.claude/docs/refferences/`** *(sic — folder spelling)* — background
  research on portfolio craft, UX case study structure, and the
  May 2026 audit that drove this revamp. Read only when a specific
  question needs answering.

## Core working rules

### 1. Anonymization rules

The case studies anonymize the following:

- **Hill's Pet Nutrition** → "a Fortune 500 pet nutrition brand" or
  similar generic framing
- Named enterprise customers (Haleon, Mars, Nestlé, Roche, Royal
  Canin, Hill's) — never appear in published portfolio content
- Specific dollar amounts, deal sizes, account names — never appear
- Industry verticals (pet, vet, pharma, CPG) are fine to use

Public competitive analysis (myPurina, Receipt Hog) is acceptable —
those are publicly auditable consumer products.

### 2. AI assistance disclosure

Every case study includes a dedicated AI-disclosure section. Title
and placement follow the case study's own markdown source: the
Bonus Bowls study titles it **"How I Leveraged AI"** and places it
near the top (right after Project Overview), framing AI as the
build partner that let one person ship at that scale. Older studies
may still use **"How AI Assisted Me on This Project"** near the end.
Either pattern is fine — what's fixed is that this section is the
*only* place in any case study where AI tools are mentioned. Do not
insert AI references into other parts of the body. Carel is the
author; AI is acceleration on execution.

If a case study currently has AI mentions outside this section,
they're remnants of an earlier draft — flag them, don't ship them.

### 3. Voice and tone

The case studies use a specific voice:

- **First person, ownership-forward.** "I" for decisions and
  ownership, "we" sparingly for genuine team contributions.
- **Active voice.** Never "the design was iterated upon"; always
  "I iterated on the design."
- **Specific over vague.** "Six modules across pet, pharma, and CPG"
  beats "multiple industry verticals."
- **No hedging.** Confident, defensible claims, written like a
  senior practitioner explaining their work to a peer.

When generating any new copy (home page, About, contact CTA), match
this voice.

### 4. Stack conventions

- **Framework:** Next.js 16 (App Router, Turbopack dev + build)
- **Language:** TypeScript
- **Styling:** Tailwind v3 + shadcn/ui (Bootstrap fully removed).
  Two design-token systems coexist by design: shadcn HSL tokens
  (authoritative) in `globals.css`, and brand `--color-*` tokens
  in `variables.css` for the deep-blue and signature-green hues
  that don't map to shadcn's neutral `secondary`/`accent` semantics.
  The overlapping tokens (`--color-primary`, `--color-black`,
  `--color-white`) derive from the HSL set.
- **Content rendering:** case studies are `.tsx` page files
  (summaries of the canonical `.md` source in
  `.claude/docs/case-studies/`).
- **Images:** `next/image` with explicit width/height, `.webp` source
- **Fonts:** `next/font/google` with three faces in strict roles —
  **Newsreader** (serif) for headings, highlights and numerals;
  **Spline Sans** for body copy and all UI/nav; **Spline Sans Mono**
  (a real monospace) for micro-labels, pills, tables and code. Loaded
  as CSS variables and consumed via the role tokens
  `--font-display` / `--font-sans` / `--font-mono` / `--font-numeral`
  in `variables.css` (with `--font-primary`/`--font-secondary`
  back-compat aliases). Heading size lives on one shared ramp
  (`--text-hero`/`--text-h1…h4`) read by both the Tailwind `text-*`
  utilities and the case-study `cs-*` primitives, so the two never
  drift; serif headings use `--tracking-heading` (near-neutral), not
  the aggressive grotesque tracking.
- **Metadata:** every route should export its own `metadata`. Case
  study routes need title, description, and per-route OG image.
- **Frontend style contract:** all UI work must follow
  `.claude/docs/frontend-style-contract.md` — Tailwind for
  layout/spacing/sizing only; typography, colour and decoration go
  through design tokens (`text-h1…h4`, `tracking-wide/wider/widest`,
  `bg-pill`, `bg-ink-hover`) and semantic CSS classes (`.eyebrow`,
  the `.cs-*` case-study primitives). No arbitrary font sizes,
  fractional spacing, or inline `rgba()`; extract any pattern used
  3+ times; customise shadcn at the `src/components/ui/` primitive.

### 5. What never to do

- Never overclaim leadership ("led a team of X designers" when no
  such team existed)
- Never restore the `d-none` hidden H1 hack
- Never reintroduce the removed routes (birdseye, wealthie,
  design-archive, paygos-prototype) that Phase 0 deleted
- Never insert AI mentions outside the dedicated "How AI Assisted
  Me" section
- Never modify the source case study markdown files in
  `.claude/docs/case-studies/` — those are finalized. If a change
  is needed, surface it; don't silently rewrite.
