# Paygos: Positioning a B2B Sales Platform for Pipeline

> Strategic marketing site for a multi-module B2B sales platform — translating a fragmented product story into a single, conversion-oriented surface that earns pipeline from pet, pharma, and CPG buyers.

> **Note for Carel:** Numbers wrapped in `{{double curly braces}}` are placeholders — replace with real values from GA4, EmailJS, and Search Console before publishing. Lighthouse scores (94/92/100/100) and all qualitative signals are confirmed and final. Pre-publish checklist at the bottom of this file.

---

## Snapshot

**Role.** Sole designer, content writer, front-end engineer, and deployer. CEO as reviewer.

**Timeline.** ~7 weeks of build + iteration, preceded by ~2 weeks of stakeholder discovery and IA work.

**Scope.** 15 indexed pages, custom multi-step ROI calculator with gated lead capture, 6 modular product pages, 6 case studies with structured data, full SEO foundation.

**Stack.** Next.js 16 (App Router, RSC), Tailwind v4, TypeScript, Framer Motion, Radix.

**Early outcomes** _(~10 weeks post-launch)_:

- **Lighthouse: 94 / 92 / 100 / 100** (Performance / Accessibility / Best Practices / SEO) — mobile and desktop
- **{{7 Book-a-Call submissions in 10 weeks}}**, vs. {{~2–3 per year}} on the legacy site
- **ROI Calculator funnel:** {{89 starts → 38 completions → 11 gated lead captures}}
- Sales adopted the site as their default outbound surface; leadership now cites specific pages in investor conversations

[HERO VISUAL: Three-up composition — desktop homepage hero _"Sell More. Spend Less."_ on the left, ROI calculator results screen in the middle, customer story page with metric callout on the right.]

---

## The Problem

Paygos sells across six overlapping product modules to four regulated industries. The old site predated that growth, and three problems compounded:

**Positioning drift.** The legacy site led with features, not buyer outcomes. Prospects could not answer _"what is Paygos, in one line?"_ after a 30-second visit — and neither could half of the sales team in cold outreach.

**No conversion surface.** No quantified value story, no self-serve way to estimate ROI, no clear single CTA. Demos were booked almost entirely through outbound. The site contributed marginal inbound.

**Credibility gap on enterprise calls.** Pharma and CPG buyers Googled Paygos mid-evaluation. A dated marketing site became a silent objection in six- and seven-figure deals.

The brief I wrote with leadership was deliberately narrow: rebuild the site as a positioning and pipeline asset, not a brochure. Constraints were real — pre-Series-A budget, no front-end engineer to hand off to, regulated-industry buyers who distrust hype, and a brand identity that existed in fragments rather than a system.

---

## Discovery

I ran a compressed discovery sprint before opening Figma.

**Stakeholder interviews** with the CEO, Head of Sales, and two account managers. Goal: extract the deals they win, the deals they lose, and the language buyers actually use. The single most valuable artifact was a list of objections heard in the first ten minutes of a discovery call — those became the questions the homepage had to answer.

**Competitive teardown** of nine adjacent platforms — trade-promotion management, field-sales automation, distributor portals. Most led with abstract enterprise language; almost none used named-customer proof above the fold. That gap became an opening.

**Content audit** of the legacy site, sales decks, and proposal PDFs. I mapped every existing claim, deduplicated overlapping messages, and flagged anything sales would not defend.

**Persona synthesis** from CRM patterns: a VP of Sales or Commercial at a mid-to-large brand in pet, vet, pharma, or CPG — evaluating tools to reduce admin drag on field reps and tighten rebate margins. Time-poor, skeptical, ROI-driven.

The synthesis converged on one insight: prospects didn't need to understand all six modules on the first visit. They needed to believe Paygos was credible, relevant to their industry, and worth a 30-minute call. Everything downstream — IA, hero, calculator — flowed from that.

---

## Strategy & Alignment

### Positioning

I anchored the site on a single promise:

> _**Sell More. Spend Less.**_

Deliberately blunt. Survives translation across pet, pharma, and CPG. Maps cleanly to two buyer outcomes — top-line growth and rep efficiency — both of which the ROI calculator quantifies later in the journey.

Secondary positioning: _sales acceleration_, not "platform" or "suite." Category language matters. _Sales acceleration_ primes the buyer to think in velocity and pipeline — the metrics they're measured on — rather than features.

Both lines came from me, not inherited from a previous brief.

### The alignment moment

The CEO wanted depth on every module on the homepage, plus more colors and shapes to signal product range. Sales wanted radical simplicity — one promise, one CTA, get out of the buyer's way.

Both were right about their own customer. Neither was right about the homepage.

I wrote a one-page positioning brief with three articulated directions — feature-led, outcome-led, vertical-led — _before_ any visual work. Forcing leadership to choose between named options, instead of reacting to a mock, collapsed weeks of likely drift into a single working session.

Then I proposed a **two-layer IA**: a tight, simple homepage _plus_ dedicated tool pages with depth. I sketched the click-path — a prospect who self-qualifies into "rebates" reaches a rebate-specific page in two clicks, with a rebate-specific case study one cross-link away. The CEO got module depth. Sales got homepage clarity. Neither had to compromise the surface that matters to them.

That decision shaped every page that followed.

### Information architecture

The site resolves to a funnel-shaped IA: Homepage → Solution hub + 6 tool pages → metric-titled customer stories → ROI Calculator → Book a Call. **Two actions, by design.** No third CTA anywhere on the site.

I also titled each customer story by its outcome metric — _"40% Less Admin Work"_, _"20% Higher Sales Activity"_ — rather than by client name. The metric is what closes the next deal, not the logo. Client anonymization became a feature, not a constraint.

[FIGURE 1: Funnel-shaped sitemap diagram — every route resolves to _Book a Call_ or _Calculate ROI_.]

---

## Design & Build

### Visual direction

The brand had to feel credible to a pharma VP _and_ modern to a tech-forward CPG team simultaneously. I built a system to do both.

**Color.** I created a custom palette — _Ocean_ — a restrained neutral base with a deeper teal accent and intentional dark/light section alternation down the homepage. Each `<section>` carries a `data-navbar-theme` attribute; the navbar inverts as you scroll. A small craft detail that signals _this site was made by someone who cared._

**Type.** Urbanist for headings (geometric, signals "platform"), Inter for body and UI (dense, neutral, readable). Fluid type scale using `clamp()` so headlines breathe on desktop without breaking on a 360px phone.

**Motion.** Framer Motion for section entrances and staggered lists, wrapped in a `MotionProvider` that honors `prefers-reduced-motion`. Motion is decoration, never the message.

### Process

References → wireframes → Ocean palette creation → application + polish, with stakeholder approvals between each step. Keeping approvals modular meant a colour critique never blocked a layout decision, and a layout critique never re-opened a positioning question.

### Key surfaces

**Hero.** Single promise. Social-proof badge. One CTA. I cut a secondary CTA in v2 — testing showed it diluted the primary action without adding qualified clicks.

**Solutions grid.** Six modules as equal-weight cards. I resisted leadership's request to feature the highest-margin module visually — the buyer arrives with their _own_ highest-priority pain, not ours.

**ROI Calculator — the highest-stakes craft decision on the site.** I proposed it mid-project after hearing the same need surface in conversations with the Business Developer and CEO: sales reps were doing back-of-napkin ROI math live on calls, with no asset to support them. I scoped it, designed it, and built it from scratch — no plugin: vertical-specific inputs, client-side formulas, a Recharts visualization, summary results inline, and a gated detailed export via EmailJS.

The gating pattern was a deliberate compromise. Sales originally wanted _every_ result gated. I pushed back. Buyers see enough to trust the math; the gated export becomes a self-qualifying lead signal rather than a friction wall.

**Customer story pages.** Each on its own route with Article JSON-LD, an industry tag, and a single headline metric. Cross-linked from the homepage carousel and from the relevant tool page, so a prospect browsing "Rebates" naturally encounters the rebate case study.

[FIGURE 2: ROI Calculator three-frame strip — input form → inline summary → gated lead-capture modal.]

### Front-end implementation

I shipped the codebase myself in Next.js 16 (App Router, RSC), Tailwind v4, and TypeScript, with shadcn/ui and Radix as accessibility primitives rather than as a finished look.

Engineering choices that produced the Lighthouse scores:

- Critical CSS inlined in the root layout, eliminating flash-of-unstyled-content on the LCP element
- `next/font` self-hosting for Inter and Urbanist with `adjustFontFallback` to minimize CLS
- Dynamic imports for below-fold homepage sections to shrink the initial bundle
- Image pipeline locked to AVIF/WebP with a constrained `deviceSizes` array
- Build-time SEO: per-route metadata, OG/Twitter cards, generated sitemap and robots, JSON-LD (Organization, WebSite, Article)
- GA4 + EmailJS wired for analytics and form delivery; EmailJS preconnects scoped only to pages that need them
- Static generation for every route — the entire site is pre-rendered, served from Netlify edge, with zero runtime origin cost

94/92/100/100 mobile and desktop is the result of those choices, not a lucky run.

### Accessibility

Mobile-first throughout. 44px minimum touch targets, full-width primary CTAs on mobile, accordion-based mobile nav via Radix, skip-link, semantic landmarks, WCAG AA contrast on the Ocean palette, ARIA labels on icon-only controls, screen-reader-friendly carousel. Accessibility isn't a separate phase; it's how I build.

---

## Outcome

**Quantitative** _(early signals, ~10 weeks post-launch — full conversion data still maturing)_

- **Lighthouse (mobile + desktop):** 94 Performance / 92 Accessibility / 100 Best Practices / 100 SEO
- **Book-a-Call submissions:** {{7 in 10 weeks}}, vs. {{~2–3 per year}} on the legacy site
- **ROI Calculator funnel:** {{89 starts → 38 completions (43% completion rate) → 11 gated lead captures (29% of completions)}}
- **GA4:** {{1,650 users / 2,180 sessions}} since launch; dominant traffic Direct + Referral, reflecting sales adoption of the site as the default outbound surface
- **Search Console:** {{980 organic impressions / 41 clicks / avg. position 28}}; ranking for {{branded queries and "sales acceleration platform" category terms}} as indexing matures

**Qualitative**

Sales adopted the site as their default outbound link and retired the legacy PDF deck cold. The ROI Calculator entered the live discovery-call playbook — reps screen-share it to walk prospects through the value math, a use case that wasn't in the original brief and is now the most-cited piece of the project internally. Leadership references specific pages — the ROI calculator, the customer story metrics — in investor and partner conversations. Prospects in active deals reference site language back to reps on calls; _Sell More. Spend Less._ has entered the buyer's vocabulary, which is the cleanest signal that positioning landed.

**What shipped.** 15 indexed pages, custom multi-step ROI calculator, six modular product pages, six metric-titled customer case studies with structured data, complete SEO foundation (metadata, sitemap, JSON-LD, resolved canonical), GA4 instrumentation, and a static-by-default Next.js build on Netlify edge.

---

## Reflection

**What I learned.** Stakeholder alignment is design work. The hour I spent writing a three-option positioning brief saved weeks of mock-driven debate. I'll do that on every Senior-scope project from now on, and it's a discipline I'll carry into a Lead role.

**What I'd do differently.** I instrumented analytics _after_ launch, which means the before/after picture is rougher than it should be. On the next iteration I'd run two weeks of legacy-site baseline before cutting over.

**What this unlocked.** The site became the surface every other Paygos artifact now points to — outbound, partner decks, investor conversations, and the in-product demo environment (the subject of my next case study). The ROI Calculator turned into a sales-enablement tool used live on discovery calls — a second-order outcome I couldn't have predicted from the original brief, and the project's most-cited internal win.

---

## How AI Assisted Me on This Project

I used AI coding assistants to accelerate execution on the codebase — generating component boilerplate, producing repetitive structures (route metadata, OG variants, JSON-LD schemas) I'd otherwise hand-type, and speeding up debugging. Every strategic decision, design judgment, content choice, and shipped surface is mine.

---

---

# PRE-PUBLISH CHECKLIST — _delete this section before publishing_

## Placeholders to replace (search for `{{`)

Run a Ctrl+F for `{{` in this file. Every match is a number to verify and replace with your real data. Locations:

1. **Snapshot section** — Book-a-Call count + legacy baseline; ROI Calculator funnel numbers
2. **Outcome section** — same numbers, plus GA4 users/sessions, Search Console impressions/clicks/position, and the top-queries description

If any real number comes in _worse_ than the placeholder, paste it in anyway and ping me — sometimes a low number tells a stronger story than you'd expect (e.g., low traffic + high conversion = "small audience, but it converts").

## Visual assets to create or capture

In priority order — the first four are essential, the rest strengthen:

1. **Hero strip** — desktop homepage above-the-fold + mobile homepage above-the-fold, side by side. This is the opening visual for the case study page.
2. **Before/after** — legacy homepage vs. new homepage, same viewport. _You said you'd provide this — this is the single most persuasive artifact in a positioning case study._
3. **Funnel IA diagram** — clean redraw of the sitemap showing every route resolving to _Book a Call_ or _Calculate ROI_. Use whatever diagram tool you prefer (Figma works fine).
4. **ROI Calculator flow** — three-frame strip: input form → inline summary → gated lead-capture modal. Optional fourth frame: the emailed detail.
5. **Positioning brief artifact** — even a clean redraw of your three-option brief (feature-led / outcome-led / vertical-led). This is the single asset that proves _strategy_, not just _decoration_. If you have the original, beautify it. If not, reconstruct from memory — it's still legitimate.
6. **Dark/light section rhythm** — scrolling screenshot of the homepage showing alternating section themes + inverting navbar. A small craft signal that goes a long way.
7. **Customer story page** — one full case study page with the metric headline visible and JSON-LD highlighted (proves SEO + content design in one frame).
8. **Lighthouse score card** — screenshot of the 94/92/100/100 panel. Small visual, big signal.
9. **Mobile system** — navbar accordion open, hero stacked, ROI calculator stepped. Proves responsive ownership.

## Anonymization audit

Before publishing, search the file for: _Haleon, Mars, Nestlé, Roche, Royal Canin, Hill's, [any specific deal sizes], [any specific dollar amounts]_. None should appear. Industry verticals (pet, pharma, CPG) are fine.

## Final read-through

Read the case study out loud, top to bottom, once. If a sentence trips you, it'll trip a hiring manager too. Cut or rewrite.
