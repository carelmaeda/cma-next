# Paygos Demo: A One-Person Design System at Product Scale

> Case Study 02 · Craft & Systems

> A B2B SaaS sandbox where every screen is built directly on the tokens, primitives, and patterns I own — and where the design system, not the demo, is the work.

> **Note for Carel:** Numbers wrapped in `{{double curly braces}}` are placeholders — replace before publishing. The 39 / 190 / 47 / 125 counts and all systems claims are confirmed and final. Pre-publish checklist at the bottom of this file.

---

## Snapshot

**The work in one line.** I designed, shipped, and steward the Paygos Design System — 39 UI primitives governing 190 components across 47 product surfaces — and built every consumer screen on it, end-to-end, alone.

**Role.** Sole designer, sole front-end engineer, and design system steward.

**Timeline.** ~5 weeks of focused build (Apr 22 → May 25, 2026), 125 commits, ongoing stewardship.

**Outcome signals**

- **39 UI primitives** governing **190 components** across **47 routed product surfaces** — three personas (rep, admin, clinic), one system
- **One enforceable contract** (`PAYGOS-CODING-STANDARDS.md`) — banned utilities, ownership rules, and token-only constraints, all enforced at the lint layer
- **Live in front of enterprise prospects** — sales runs real discovery sessions on the demo with prospects across pet, vet, pharma, and CPG
- **Zero className-driven design drift** in the codebase: typography is owned by `@layer base` and tags; visuals are owned by `components/ui/`, not consumers

[HERO VISUAL: Token grid + primitive catalog + three representative product surfaces (rep dashboard, payment wizard, clinic catalog) arranged as a single composition. Caption: *"The design system, the components it produces, and the product running on them — same surface."*]

---

## Context & Problem

Paygos sells a unified workspace to enterprise commercial teams — distributor orders, returns, rebate agreements, trade-spend payments, analytics. To win those rooms, sales needed more than a slide deck. They needed a working product the prospect could touch, on a laptop, without a backend dependency.

The brief I gave myself was harder than that. Anyone can ship a polished demo. The opportunity was to make the demo *the canonical reference implementation of the design system that ships in production* — one artifact that does three jobs: it sells, it documents the system in code, and it sets the bar for everything Paygos builds next.

**On "is this real?"** This is a working SaaS application, not a portfolio mock. Sales runs live prospect sessions on it. It uses seeded data and runtime mutation overlays to simulate real customer scenarios end-to-end — drafting an order, approving a rebate above threshold, issuing a discretionary payment against a campaign. Where the production product and the demo diverge, the design system is the same; the demo is its most complete deployment.

**Why one owner mattered.** The system has 39 primitives, 190 consumers, and 47 pages. With a handoff seam between design and engineering, drift is inevitable — a `text-sm` here, a one-off `rounded-md` there, and inside six months the system is suggestions instead of rules. Owning both sides let me make the system *self-enforcing in code*, not aspirational in Figma.

---

## The Design System

### Foundations

**Tokens.** Tailwind v4's `@theme inline` block in `globals.css` is the registry of record. Two brand tokens (paygos-green `#43AB6C`, paygos-teal `#0F4C5C`), a neutral scale, semantic surfaces (`background`, `card`, `muted`, `destructive`, `ring`), chart and sidebar palettes, two radii, and a typography stack (Urbanist display, Inter body, Outfit for KPI numerals, Geist Mono for code). Light and dark modes resolve from the same semantic names. **No component reads a hex.**

**Typography is owned by the tag.** This is the single highest-leverage decision in the system. `globals.css @layer base` defines the type for `<h1>`–`<h6>`, `<p>`, `<small>`, `<code>`, `<strong>`, `<dl>/<dt>/<dd>`. Consumer code is *banned* from adding `text-*`, `font-*`, `leading-*`, or `tracking-*` to text. Hierarchy comes from semantics; styling lives in one place; the whole product changes by editing six declarations.

**Motion primitives.** Two utilities, both respecting `prefers-reduced-motion`:

- `[data-stagger]` cascades children with `--i` index variables on a 50ms step, using a `cubic-bezier(0.16, 1, 0.3, 1)` ease-out-quart for a confident landing.
- `[data-slot="main-content"]` runs a 280ms page-mount fade on every `<main>`. Because Next.js remounts the page component on navigation, this doubles as a route transition without router-event wiring.

**Atmosphere.** A `body::before` 5%-opacity paygos-green radial wash and a `body::after` SVG fractal-noise grain (3.5% opacity, inlined as a data URL) give the surface warmth without tinting a single component. Brand presence at zero cost to chrome.

**Iconography.** `lucide-react` as the only icon source. The Button primitive auto-sizes child SVGs so callers don't pick sizes.

### Components

**Architecture: primitives → composed → patterns.** `components/ui/` holds the 39 primitives. Above that, domain folders (`components/order-detail/`, `components/wizard/payments/`, `components/charts/`) compose them. Above that, route layouts and page shells assemble the composed pieces. The split is strict and enforced by **The Ownership Rule**:

> `components/ui/` owns **all** visual styling — color, border, shadow, radius, font-weight, typography. Everything outside owns layout and spacing only — flex, grid, gap, padding, margin, width, height.

Writing `bg-*`, `text-*` (color or size), `border-*` (color), `font-*`, `shadow-*`, or `rounded-*` outside `components/ui/` is a blocker. The `!important` modifier is banned outright. This single rule makes the system mechanically refactorable — re-skin the product by editing the primitives, never by hunting through consumers.

**Notable primitives that exemplify the thinking:**

- **`<Button>`** — 14 variants × 9 sizes, built on `class-variance-authority` with full `aria-expanded`, `aria-pressed`, `data-active`, `aria-invalid`, and disabled state coverage baked into the variant strings. When a consumer needed a filter-chip toggle, the answer was *"add a variant,"* never *"style a div."*
- **`<StatusPill>`** — the *only* place in the codebase permitted to use the extended semantic palette (blue, amber, emerald, indigo, red). The standards explicitly white-list those shades inside this file and forbid them everywhere else. State language has one vocabulary.
- **`<Sheet>`, `<Dialog>`, `<Popover>` + `<Command>`** — Radix primitives wrapped with system tokens. Multi-step wizards (Order, Payment, Return, Rebate Agreement) and complex search-pickers (account, SKU, campaign) all compose these, never bespoke modals.
- **`<Card>` + slots** — a `<div>` is never a card. Any panel-shaped surface uses the primitive, which means radius, border, shadow, and padding rhythm are decided in one file.

### Patterns

**Wizards.** Order, Payment, Return, and Rebate Agreement all share a wizard scaffold under `components/wizard/` — review sidebar, success screen, draft-resume banner, condition builders. The system encodes "multi-step creation" once, deploys it four times.

**Data display.** A `<Table>` primitive for composition; chart primitives (`MiniLineChart`, `MiniSemiPie`, `TopAccountsChart`) wrap Recharts with Paygos tokens and the Outfit display font for tabular figures.

**Runtime pub/sub.** Eight `lib/runtime-*.ts` stores (orders, agreements, returns, drafts, favorites, notifications, payouts, account-distributors) plus matching `use-*-version` hooks. A Map of mutation overlays, a Set of subscriber callbacks, a `notify()` on write. Demo mutations feel real without a backend; the pattern is documented once and reused eight times.

### Documentation & governance

The system is documented where the system lives — in code. `PAYGOS-CODING-STANDARDS.md` defines tokens, banned utilities, mandatory primitives, the 250-line file limit, the no-`any` rule, and the Server-Components-by-default posture. Every primitive carries section banners and prop-level types; every variant string is annotated with the consumer pattern it replaced. The contract is enforceable: no contributor can ship code that violates it without the lint and the rules pushing back.

---

## The Demo as System Showcase

**Rep Home Dashboard** (`app/rep/page.tsx`). Hero KPI card composes the Outfit display font, the YoY chart primitive, and a stagger-reveal sequence — three system pieces converging on one surface. Every visual decision came from a primitive; the page file is layout only.

**Payment Builder Wizard** (`components/wizard/payments/`). The hardest surface in the product — condition builders, term-library pickers, contract-document preview, draft resume, success state. It exists to prove the system holds at maximum density: every input is `<Input>`/`<Select>`/`<Popover>`+`<Command>`, every panel is `<Card>`, every status is `<StatusPill>`, and the wizard chrome itself is a `<Sheet>` composition reused across four creation flows.

**Clinic Catalog & Order Flow** (`app/clinic/`). A different persona, a different portal, the same system. Filter chips use the `filter-chip` Button variant; the product cards use the same `<Card>` slots as the rep account detail; the search uses the same `<Command>` palette. The clinic-side surfaces are the strongest evidence that the system isn't tuned to one persona — it's tuned to the product.

[FIGURE 1: Cross-persona consistency — rep dashboard alongside clinic catalog, with the shared primitives annotated.]

---

## Build & Engineering

Server Components by default, with `"use client"` only where interactivity demands it. The wizards are client islands; everything else streams from the server. Inlined SVG noise (no extra HTTP). `prefers-reduced-motion` honored end-to-end.

Accessibility isn't a phase — it's baked into the variants. Focus-visible rings on every interactive primitive. `aria-expanded` / `aria-pressed` / `aria-invalid` wired into Button variants. A label-association sweep across all forms (commit `78300bc`). Semantic HTML as a non-negotiable. **Ninety of the 190 components carry explicit ARIA wiring.**

Type safety is enforced as a system property. `any` is a blocking lint error. Primitives expose full `VariantProps` contracts. Route data is typed through `lib/mock-data.ts`; pages never touch JSON directly.

---

## Outcome & Impact

**The unambiguous facts.** 39 primitives. 190 components. 47 routed surfaces. 19 fixture sets. 8 runtime stores. 125 commits. One owner. One contract. One system, end-to-end, design and code.

**Adoption.** Sales runs live prospect sessions on the demo with prospects across {{verticals/regions where sessions have run — e.g., "pet nutrition leads in North America and pharma teams in EMEA"}}. The design system documented and proven here is {{describe the production product team's relationship to the demo — e.g., "the reference Paygos production ships against" / "the source patterns the production product is migrating to" / "the canonical implementation other Paygos engineers reference"}}. Onboarding a new contributor is a tour of `components/ui/` and the standards file, not a Figma walkthrough.

**The strategic outcome.** Every future Paygos screen — production product, marketing site, sales collateral — starts from these primitives. The system is an asset that compounds: a token edit re-skins the product, a primitive change propagates to 190 consumers, a new variant lands in one file. The demo is the proof that the system holds at product scale.

---

## Reflection

Owning a design system end-to-end taught me that **rules in a Figma file are wishes; rules enforced by lint are a system.** The leverage came from collapsing the design–engineering seam so the contract could live in one repo, in one file, in a language code can enforce — not just describe.

**What I'd evolve next.** Promote the standards file into a published package consumed by the production product; add visual-regression coverage on the primitive set; build a token-diff CI check that flags any consumer drift before it lands.

**Design Lead trajectory.** This work is the bar I'm building toward as I grow into a Lead role: a design system isn't a deliverable, it's a contract; primitives aren't a library, they're a vocabulary; and a Lead's job is to make that contract enforceable so craft doesn't depend on vigilance. The Paygos Demo is my proof that I can hold both sides today — set the bar in design, *and* ship the code that makes the bar hold — and the foundation I'm building Lead-scope capability on.

---

## How AI Assisted Me on This Project

I used AI coding assistants to accelerate execution — generating component scaffolds from variant specs, drafting TypeScript prop contracts, and producing the boilerplate I'd otherwise hand-type. The system's standards file is intentionally written in a form (`AGENTS.md` / `CLAUDE.md`) that lets these tools work *inside* the rules rather than around them — the same lint and constraints that bind a human contributor bind the assistant. Every system decision, design judgment, and shipped surface is mine. AI is leverage on execution; the system is the work.

---

---

# PRE-PUBLISH CHECKLIST — *delete this section before publishing*

## Placeholders to replace (search for `{{`)

Run Ctrl+F for `{{` in this file. Two placeholders, both in §6 Outcome & Impact:

1. **`{{verticals/regions where sessions have run}}`** — concrete list of industries and regions where sales has actively pitched on the demo.
2. **`{{production product team's relationship to the demo}}`** — one sentence. Pick the most accurate framing.

If neither of these can be filled in honestly, soften the §6 Adoption paragraph rather than overclaim.

## Numbers to recheck before publishing

The 39 / 190 / 47 / 125 / 19 / 8 counts are accurate as of May 25, 2026. If you ship more commits or components between now and portfolio publish, update them.

## Anonymization audit

Scan the file for: named clients, specific deal sizes, dollar amounts, internal account names. None should appear. Industry verticals (pet, vet, pharma, CPG) are fine.
