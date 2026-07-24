# Paygos: Redesigning and shipping the marketing site for a B2B sales-acceleration platform

> **Editing note (not published):** This is the canonical source for a **new**
> case study, modelled on `bonus-bowls-case-study.md` but in the **redesign**
> genre — so it does NOT use the five design-thinking phases. Instead it runs on a
> five-step product/redesign arc: **Audit → Strategy → Design System → Build →
> Launch & Measure**. Everything outside `{{braces}}` is grounded in the real
> `Paygos_website` repo (stack, pages, features, SEO work). Items in `{{braces}}`
> are the things only Carel can confirm — fill or correct them and hand back;
> I'll apply edits here first, then render the `.tsx` page at
> `/case-studies/paygos`.
>
> **Anonymization:** "Paygos" is fine to name (it's Carel's own shipped work,
> live at paygosinc.com). Its enterprise customers are NOT — the client-logo
> carousel (Hill's, Mars, Nestlé, Royal Canin, Haleon, Roche, etc.) must never
> appear here; customer proof stays framed by vertical (pet, pharma, CPG,
> retail, vet). No dollar deal-sizes or account names.

---

## Hero

{{**Hero visual:** a clean shot of the shipped homepage / a device mock of the live site. Need to capture this.}}

**Title:** Paygos: Redesigning a B2B platform's marketing site — and shipping it end-to-end

**Framing:** Paygos is a B2B sales-acceleration platform used to run ordering, rebates, incentive payments, field-sales execution, and analytics for enterprise brands. I redesigned and rebuilt its marketing site from the ground up — information architecture, messaging, a full design system, an interactive ROI calculator, and the production front-end — and shipped it live in Next.js. Design and code, one person, end to end.

**Meta:**

- **Timeline:** {{e.g. Winter 2025 → Spring 2026 — confirm}}
- **Tools:** Figma, Next.js, React, TypeScript, Tailwind, shadcn/ui, Framer Motion, Recharts, Netlify
- **Role:** {{e.g. UX/UI design, design system, front-end engineering, SEO — confirm exact ownership and whether solo or with a team}}
- **Industry:** B2B SaaS (sales acceleration)

---

## How I Leveraged AI — Sticky Note

I directed AI like a build partner, which is how one person redesigned and shipped a site this size:

- Turned design decisions into production React/Tailwind components
- Scaffolded the SEO layer (metadata, JSON-LD, sitemap) to my spec
- Generated boilerplate and data structures that would have taken weeks by hand
- Kept the design, IA, and messaging calls mine, and reviewed and shipped every piece

---

## Section: About

Paygos is a B2B sales-acceleration platform: brands and manufacturers use it to automate ordering (including returns), rebate programs, incentive payments, field-sales execution, and analytics — replacing the spreadsheets, email approvals, and disconnected tools that slow enterprise sales operations down.

The platform is serious and proven. The marketing site in front of it wasn't carrying its weight: {{describe the real problem with the old site — e.g. placeholder-grade copy, an unclear value proposition, no conversion path, thin SEO. Confirm the actual brief and what triggered the rebuild.}}

So the real question was:

## "How do we make the marketing site as credible and capable as the platform it's selling — and make it convert?"

I rebuilt it end to end. Every page now earns its place: a clear value proposition, a structured story for each of the four sales tools, real customer proof, an interactive ROI calculator that turns interest into qualified leads, and an SEO foundation that finally lets Google find the thing.

---

### The Redesign Process

I ran the rebuild as a five-step arc: an **audit** of where the old site fell short; a **strategy** pass on IA, positioning, and messaging; a **design system** to make the whole site one coherent language; the **build** in production code; and **launch & measure** to ship it and prove it works.

_(Render this as the phase diagram — same visual pattern as the Bonus Bowls design-thinking hexagons, relabeled to these five redesign steps, with a pill under each showing what I did.)_

---

## Section: Audit _(Step 1)_

Before redrawing anything, I mapped what the existing site was — and wasn't — doing.

{{Confirm the real findings. Grounded candidates to validate:}}

- **The value proposition didn't land.** {{The hero didn't say, in plain words, what Paygos does or who it's for.}}
- **The platform's depth was invisible.** Four distinct sales tools (Ordering, Rebates, Payments, User Engagement) plus Field Sales Automation and Analytics were flattened into a thin overview — no page did any one of them justice.
- **No conversion path.** {{A visitor who was interested had nowhere to go but a generic contact form — no ROI proof, no structured case studies, no qualified-lead capture.}}
- **SEO was blocking discovery.** A www / non-www canonical mismatch was actively keeping the site out of Google's index, and metadata was thin or missing per route.

## "The platform was enterprise-grade. The site wasn't. Every problem here was a chance to close that gap."

---

## Section: Strategy _(Step 2)_

With the gaps mapped, I set the architecture and the story before touching pixels.

### Information architecture

I restructured the site around how buyers actually evaluate the platform:

- **Sales Acceleration** as a hub, with a dedicated page for each of the four tools — **Ordering** (Returns folded into the ordering workflow, not a separate module), **Rebates**, **Payments**, and **User Engagement**.
- **Field Sales Automation** and **Analytics** as their own first-class stories.
- **Customer Stories** by vertical, so a prospect sees their own industry reflected back.
- **ROI Calculator** as the conversion engine, reachable from every solution page.

### Messaging

Each solution page follows the same honest spine — **the challenge → the capability → the measurable ROI** — so the story is consistent and every claim is tied to an outcome. The top-line promise: **"Sell more. Spend less."**

## "One clear message, one architecture a buyer can navigate, one call to action on every page. Now it needed a visual language to carry it."

---

## Section: Design System _(Step 3)_

A site this size only stays coherent if it's built on a system, not a pile of one-off pages.

- **Tokens first:** colour, spacing, typography, and breakpoints as SCSS variables and CSS custom properties, so the whole site speaks one language and a change happens in one place.
- **Component library:** shadcn/ui (New York variant) on Radix primitives, extended with the site's own patterns — hero blocks, challenge/capability grids, ROI stat rows, customer-story cards.
- **Motion as a system:** a small set of Framer Motion presets (section reveals, staggered lists) applied consistently, all respecting `prefers-reduced-motion`.
- **Mobile-first, accessible by default:** a single `md:` breakpoint discipline, 44px minimum touch targets, semantic markup.

{{Optional visual: a board of the design tokens / component set. Capture if we want it.}}

## "With the system in place, building pages stopped being design work and started being assembly. That's when the code took over."

---

## Section: Build _(Step 4)_

This is the half most designers hand off. I shipped it.

I built the entire site as a production Next.js application — the part of this project that's hardest to fake and easiest to underrate:

- **Stack:** Next.js (App Router, Turbopack), React, TypeScript in strict mode, Tailwind, SCSS tokens, shadcn/ui, Framer Motion, Recharts.
- **Server-first:** Server Components by default; `"use client"` only where it earns its place (forms, motion, the calculator). Below-the-fold sections load through dynamic imports to keep the initial bundle lean.

### Signature builds

**The interactive ROI calculator.** A multi-step calculator that lets a prospect pick their solution, enter their own business metrics, and see an estimated return — ending in a lead-capture modal. It's the site's conversion engine: it turns a passive visitor into a qualified, self-identified lead.

**Recharts data visualizations.** The analytics and solution pages use real charts, not screenshots — the same "insight at a glance" the platform itself sells, demonstrated in the marketing for it.

**Six customer stories.** Structured, vertical-framed case studies (pet, pharma, CPG, retail, vet) — challenge, solution, impact — with Article structured data on each. {{Anonymized: no client names or logos.}}

**Contact & lead capture.** Client-side forms wired through EmailJS — no backend to maintain, leads delivered straight to the inbox.

## "The site was built and shipped. But a marketing site that nobody can find isn't doing its job — so the last step was making sure it could be found, and that it was fast."

---

## Section: Launch & Measure _(Step 5)_

### Shipping it

The site is live at paygosinc.com, deployed on Netlify with a Next.js build, immutable caching on static assets, and an LCP-preload strategy for the hero.

### SEO engineering

This is where design-and-code paid off directly. I owned the technical SEO end to end:

- **Fixed the canonical mismatch** that was blocking indexing — every `metadataBase`, canonical, OG URL, sitemap entry, and JSON-LD `@id` now resolves to a single non-www domain.
- **Per-route metadata:** every page ships its own title, description, and canonical, under a shared title template.
- **Structured data:** Organization and WebSite schema at the root, Article schema on every customer story.
- **A generated sitemap and robots** that stay in sync with the routes.

### Performance & accessibility

Dynamic imports and bundle analysis to keep it lean; Sharp-based WebP/AVIF image optimization; reduced-motion support and 44px touch targets throughout.

### Results

{{THIS IS THE KEY GAP. A redesign case study is far stronger with real outcomes. Provide whatever's true and publishable:}}

- {{Google indexing / impressions before vs. after the canonical fix}}
- {{Organic traffic or ranking movement}}
- {{Lighthouse / Core Web Vitals scores}}
- {{Demo requests or ROI-calculator leads generated}}
- {{Any stakeholder / business outcome}}

{{Note on platform stats: the "20,000+ daily users / $150M+ payments / 500K+ orders" numbers belong to the *product*, not this redesign, and the dollar figure runs into the portfolio's no-deal-sizes rule. Recommend we DON'T lead with those; if used at all, frame them as "the platform this site sells," not as the redesign's results. Confirm.}}

## "Between the indexing fix, the ROI calculator, and a site that finally matches the platform, the redesign could answer the only question that matters: is it doing its job?"

---

## Conclusion

### Main Insights

{{Confirm / adjust — grounded candidates:}}

The rebuild came down to one idea: the marketing has to be as capable as the product. That meant a real information architecture instead of a thin overview, a design system instead of one-off pages, measurable claims instead of vague ones, and — critically — an SEO foundation solid enough for anyone to find the site at all. Designing it and shipping it myself meant no handoff gap between the intent and the built result.

### What I Learned

- **A design system is what makes "ship the whole site" possible for one person.** Tokens and a component library turned page-building into assembly.
- **Technical SEO is a design responsibility, not an afterthought.** The best-designed site is worth nothing if a canonical bug keeps it out of the index.
- **Owning the code closes the handoff gap.** No spec, no telephone game — the built site is the design.
- **A calculator beats a contact form.** Giving prospects a reason to enter their own numbers turns interest into qualified intent.

---

## Let's Connect

Thanks for reading. Happy to talk through any part of the process, or just say hi.

📧 carelmaeda@gmail.com
