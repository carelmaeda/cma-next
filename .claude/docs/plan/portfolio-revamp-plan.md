# carelmaeda.com — Portfolio Revamp Plan

> A four-phase plan to take the portfolio from its current state (per the May 2026 audit) to interview-ready for **Senior Product Designer roles, on a visible path toward Design Lead**.

> Each phase is designed to be executable in a single working session of a separate Claude code-assistant instance. You should end one phase before starting the next, and you should not begin Phase N+1 until Phase N's definition-of-done is met.

---

## The target positioning

**Senior Product Designer who ships strategy, design, and code — building toward Design Lead.**

This positioning was chosen deliberately after an honesty audit:

- "Senior" is defensible from actual evidence — six years at Paygos, ~10–15% YoY revenue impact across enterprise accounts, three shipped products end-to-end
- "Ships strategy, design, *and* code" is the differentiation — the audit's section 10 flagged this as the most underused asset on the current site
- "Building toward Design Lead" is the trajectory framing that lets the portfolio earn interviews now while planting the seeds for the next title escalation

The previous positioning (claiming Design Lead directly, without people-leadership evidence) created a contradiction the audit caught immediately. This positioning resolves it in the direction that's true.

---

## What the audit found (summary)

The May 2026 audit of carelmaeda.com surfaced four categories of issues:

**Disqualifying (must fix before any other work):**
- Every primary work-card CTA on the home page returns 404 (`/work/demo-platform`, `/work/receipt-platform`, `/work/sales-ops-tool`)
- About, Resume, and Archive links in the nav and footer all 404
- The public repo is linked from the footer, so any hiring manager can verify all of the above in 30 seconds
- Three misspellings in case study copy ("compnents", "Gamefying", "Takeways")
- A hidden `d-none` H1 says "Design Lead" while the visible H1 says "Hi! My name is Carel" — the page reads junior to humans and senior to crawlers

**Content gaps (the work we already prepared for):**
- Three new case studies are ready to replace the existing weak ones
- The existing case-study template is single-mode (tactical IC story) and will flatten the new case studies if used as-is
- The bottom of the case-study mix (Wealthie 7-day bootcamp project, Design Archive Figma templates) actively undercuts senior signal

**Positioning issues:**
- "Hi! My name is" hero framing reads junior
- "Open for cool projects" pulsing pill reads freelancer/junior
- "How I Work" pillars are all senior-IC craft, no Lead-adjacent thinking
- Proof strip has three metrics that are really two distinct claims
- The eng-background + writes front-end angle is positioned as IC craft when it's actually senior leverage

**Technical hygiene:**
- No per-case-study metadata
- No sitemap, no robots, no structured data
- Bootstrap 5.3 loaded via CDN for the hamburger menu only
- Inter and Urbanist both loaded but only one used
- LCP image lazy-loaded on About
- `package.json` still named `next-proj`

The audit's verdict: *"Good metric, broken links, IC's portfolio with a Lead's job title — pass for now."*

This plan moves the verdict to: *"Senior portfolio with end-to-end ownership and visible upward trajectory — interview."*

---

# Phase 0 — Foundation fixes

**Scope:** Remove every disqualifying signal so the site is shippable at the floor. Not making it good yet — making it not actively hostile.

**Estimated effort:** 4–6 hours, one evening session.

**Why this phase exists alone:** Phase 1 will involve adding new content. If Phase 0 isn't done first, Phase 1's new content gets evaluated alongside still-broken infrastructure. The audit's #1 finding was that broken links disqualify the candidate regardless of what's underneath. Fix the floor before laying the carpet.

## Tasks (in order)

### 1. Resolve every 404 route

For each broken route, choose **one** of three actions:

- **Build the destination** — only for routes Phase 1 needs anyway
- **Remove the link entirely** — preferred for routes that won't exist in the final site
- **Replace with a direct link** — e.g. `/resume` → direct link to the existing PDF in `/public/cma-resume.pdf`

Specific broken routes (per audit):

- `/work/demo-platform` (home page work card)
- `/work/receipt-platform` (home page work card)
- `/work/sales-ops-tool` (home page work card)
- `/about` (navbar, About section "Full story →" link, footer)
- `/resume` (navbar, footer) — file exists at `/public/cma-resume.pdf` but isn't linked
- `/archive` (footer)

**Recommended dispositions:**

- Three `/work/*` routes → remove the links from the home page work cards entirely. The home page cards will be rebuilt in Phase 1C to point at the new case-study routes. For Phase 0, just kill the broken anchors.
- `/about` → remove from navbar and footer entirely. The About section already exists inline on the home page; the "Full story →" link is redundant if there's no extended About page yet. Phase 2 may add one.
- `/resume` → swap the `href` to `/cma-resume.pdf` (the actual file location). Or remove if you'd rather link to it from About in Phase 2.
- `/archive` → remove from footer entirely.

### 2. Fix the three misspellings

- `compnents` → `components` (in `/case-studies/paygos-prototype`)
- `Gamefying` → `Gamifying` (in `/case-studies/birdseye` H2)
- `Takeways` → `Takeaways` (in `/case-studies/birdseye` conclusion)

These case studies will be replaced in Phase 1, but the typos need to go now in case the portfolio is shared before Phase 1 ships.

### 3. Hide the public repo link from the footer

The audit flagged that the footer's "Developed with Next.js and TypeScript" link exposes the public repo, which lets anyone verify the issues we're fixing. Remove the link (or comment it out) for now. It will come back in Phase 3 once the code is clean.

### 4. Resolve the title-vs-positioning mismatch

The current site has:
- Visible H1: *"Hi! My name is Carel."*
- Hidden `d-none` H1: *"Design Lead | UX Strategy & Product Design"*
- Metadata title: *"Carel Maeda — Design Lead"*

This is the worst possible combination — junior to humans, senior to crawlers. Phase 0 picks one direction and aligns everything.

**Resolution for this plan:**

- **Metadata title:** *"Carel Maeda — Senior Product Designer"*
- **Visible H1:** TBD in Phase 2 (will replace the "Hi! My name is" hero). For Phase 0, just remove the hidden `d-none` H1 and leave the existing visible H1 in place. The hero will be properly rewritten in Phase 2.
- **Open Graph title:** match metadata
- **Twitter card title:** match metadata

### 5. Definition of done

Phase 0 is complete when:

- Every link on every page resolves (no 404s anywhere in the live site or codebase)
- All three misspellings are fixed
- The public repo link in the footer is removed or commented out
- The hidden `d-none` "Design Lead" H1 is removed
- The metadata, OG, and Twitter card titles all say "Senior Product Designer"
- A fresh clone of the repo + `npm run build` + `npm run start` produces a site with zero broken anchors

**What Phase 0 does NOT do:**

- Does not rewrite the hero ("Hi! My name is" stays for now — Phase 2's job)
- Does not touch case study content (Phase 1's job)
- Does not redesign anything (Phase 3's job)
- Does not address technical hygiene beyond what's listed above (Phase 3's job)
- Does not cut Wealthie or Design Archive case studies (Phase 1's job, after the new case studies are ready to replace them)

If the receiving Claude wants to "improve" anything else while in the codebase: **no**. Phase 0 is deliberately surgical. Every change outside its scope contaminates Phase 1 or 2.

---

# Phase 1 — Content integration

**Scope:** Build the new case-study template, migrate the three new case studies into it, and rework the home page work cards to point at the new routes.

**Estimated effort:** 12–20 hours across 2–3 working sessions, with most of the time spent on visual asset capture.

**Prerequisite:** Phase 0 complete.

## Phase 1A — Design the new case-study template *(half a session)*

The current case-study template is single-mode: a "Summary / Problem / Solution / Metrics" four-stack hero followed by a fixed narrative sequence. The audit was emphatic that this template will flatten the new case studies because the three are in three different modes:

- **Paygos Corporate Site** — Brand / Positioning / Stakeholder Alignment
- **Paygos Demo** — Craft / Systems / Design-system-at-product-scale
- **Bonus Bowls** — Strategy / Impact / Research-driven consumer loyalty

The new template needs to flex along these axes:

**Hero pattern.** Keep the snapshot block (role, timeline, scope, key outcomes). Lift directly from the markdown files. Stop using the four-stack pattern as the whole structure.

**Body sections.** Variable. Each case study has its own section sequence in its markdown source. The template should render whatever H2s the case study has — not enforce a fixed sequence.

**Visual slots.** Each case study's pre-publish checklist specifies 6–9 visual asset slots. The template needs flexible figure components:
- Hero composition (full-width)
- Before/after pair
- Diagram (full-width or constrained)
- Flow strip (multi-frame horizontal)
- Code or artifact screenshot
- Two-up or three-up grid
- Pull quote / callout block
- Stat callout

**Callout components.**
- Pulled quotes (e.g. The Ownership Rule blockquote in the Demo case study)
- Stat callouts (e.g. the "85% interested" insight in Bonus Bowls)
- The "How AI Assisted Me on This Project" section at the bottom of each case study

**Cross-linking.** Every case study ends with a "Next case study →" link. Currently inconsistent across the existing case studies.

**Per-case-study metadata.** Each case study exports its own `metadata` (title, description, OG image). The audit flagged this is currently missing.

**Definition of done for 1A:** a single page component (or MDX layout) that all three new case studies will use, with all the slot types above implemented.

## Phase 1B — Migrate the three case studies *(one session per case study)*

The mapping:

| Existing route | Replace with | Status |
|---|---|---|
| `/case-studies/paygos-prototype` | **Paygos Demo** | Direct upgrade — same project, more mature framing |
| `/case-studies/birdseye` | **Bonus Bowls** | Same shape of story, more rigorous version |
| `/case-studies/design-archive` | **Paygos Corporate Site** | Brand+positioning replaces Figma-template-archive |
| `/case-studies/wealthie` | **Cut or move to deep archive** | 7-day bootcamp project undercuts senior signal |

The three new case study markdown files are at:
- `paygos-corporate-site-case-study.md`
- `paygos-demo-case-study.md`
- `bonus-bowls-case-study.md`

### Pre-migration sentence softening

Three sentences across the three case studies need a small edit before migration, to align with the "Senior, building toward Lead" positioning rather than claiming Lead directly:

**In `paygos-demo-case-study.md`, Reflection section:**

- Old: *"This work is the bar I want to set for a team: a design system isn't a deliverable, it's a contract..."*
- New: *"This work is the bar I'm building toward as I grow into a Lead role: a design system isn't a deliverable, it's a contract..."*

- Old: *"The Paygos Demo is my proof that I can hold both sides — set the bar in design, *and* ship the code that makes the bar hold."*
- New: *"The Paygos Demo is my proof that I can hold both sides today — set the bar in design, *and* ship the code that makes the bar hold — and the foundation I'm building Lead-scope capability on."*

**In `bonus-bowls-case-study.md`, Reflection section:**

- Old: *"A Design Lead's job is to make that through-line non-negotiable in how a team operates."*
- New: *"As I grow into a Lead role, this is the discipline I want to be known for — making the through-line from research to shipped UI non-negotiable."*

- Old: *"Bonus Bowls is my proof that I can pitch that discipline to a Fortune 500 client, run it myself, translate it into a shipping product, and write the code that makes the design real."*
- New: *"Bonus Bowls is my proof that I can pitch that discipline to a Fortune 500 client, run it myself, translate it into a shipping product, and write the code that makes the design real — at Senior level today, building toward Lead."*

**In `paygos-corporate-site-case-study.md`, Reflection section:**

- Old: *"I'll do that on every Lead-scope project from now on."*
- New: *"I'll do that on every Senior-scope project from now on, and it's a discipline I'll carry into a Lead role."*

These are six total sentence edits across three files. Do them at the start of Phase 1B before any migration work.

### Per case study, do this:

1. Drop the markdown into MDX (or whatever renders content in your stack)
2. Apply the sentence softening edits above
3. Replace `{{placeholders}}` with real numbers — this is *the* moment to pull the metrics that have been deferred:
 - **Corporate Site:** GA4, EmailJS, Search Console — see the case study's pre-publish checklist
 - **Demo:** verticals where sales has demoed + production team's relationship to the system
 - **Bonus Bowls:** post-launch sign-up counts, receipt approval rate, redemption totals — whatever has accumulated since launch
4. Capture the priority visual assets from each case study's pre-publish checklist (top 4 are essential, top 9 are listed)
5. Fill the per-page metadata (title, description, OG image)
6. Delete the `PRE-PUBLISH CHECKLIST` section from each file before shipping

**The visual asset capture is the bottleneck.** Realistically, Phase 1B will not ship without spending real time on visuals. Plan for it.

## Phase 1C — Rework the case study index and home cards *(half a session)*

The home page currently has three work cards pointing at broken routes with mismatched copy. Rebuild:

- **Three cards**, one per new case study
- Each card leads with **the headline outcome** from that case study's snapshot, not a feature description
- Each card uses the case study's hero visual as preview
- Links resolve to the new routes:
 - `/case-studies/paygos-corporate-site`
 - `/case-studies/paygos-demo`
 - `/case-studies/bonus-bowls` *(or whichever URL slug fits your scheme)*

**Wealthie disposition:** cut from the home page entirely. If you want to preserve it for context, move to an `/archive` page that is not linked from primary nav. Honest recommendation: cut entirely.

**Design Archive disposition:** cut entirely. It's replaced by the Paygos Corporate Site case study.

## Definition of done for Phase 1

- New case-study template is in place and rendering all three case studies correctly
- All three case studies have real metrics in place (no `{{ }}` placeholders in production HTML)
- All priority visual assets are captured and placed
- Per-case-study metadata is filled
- Home page work cards point at the three new routes with correct copy and visuals
- Wealthie is cut or moved to a non-primary archive
- Design Archive case study is cut
- Each case study ends with a working "Next case study →" link
- Pre-publish checklist sections are removed from all three case study files

---

# Phase 2 — Positioning rewrite

**Scope:** Rewrite the home page hero, About, proof strip, "How I Work," and contact CTA to reflect the "Senior Product Designer building toward Design Lead" positioning.

**Estimated effort:** 4–6 hours, one session.

**Prerequisite:** Phase 1 complete. We don't write the cover letter until we know what's in the package.

## Tasks

### 1. Hero rewrite

Cut "Hi! My name is" and the "Open for cool projects" pulsing pill. The new hero has three jobs:

- State who you are with a defensible senior claim
- Surface the front-end angle as differentiation
- Hint at the trajectory without forcing it

**Working draft (to iterate):**

> **Senior Product Designer who ships strategy, design, and code.**
> *Six years at Paygos, ~10–15% YoY revenue impact across enterprise accounts. Building toward Design Lead.*

Every clause maps to evidence in the case studies. The "Building toward Design Lead" line is the move that makes everything else honest.

### 2. Proof strip rewrite

The three current metrics are really two distinct claims phrased three ways. Rebuild as three *distinct* proofs:

1. **10–15% YoY revenue impact** across enterprise accounts *(strategy)*
2. **~15% engagement lift** through UX optimization *(craft)*
3. **End-to-end ownership** of three shipped products *(scope)*

The third one is new and addresses the audit's repeated "this is your most underused asset" finding.

### 3. "How I Work" rewrite

The four pillars currently read as Senior IC manifesto. That's defensible at Senior level — *but* one pillar should be reframed to Lead-adjacent thinking. The candidate for reframing is the front-end pillar.

**Old (per audit):** *"I write front-end code and review PRs."* — IC craft.

**New:** *"I close the design-engineering trust gap. My work ships faster because handoffs aren't theater — they're a contract written in code."* — Senior leverage that reads as proto-Lead thinking.

The other three pillars can stay close to current copy.

### 4. About rewrite

Two changes:

**Surface the trajectory explicitly:**

> *"Senior Product Designer at Paygos, building toward a Design Lead role over the next 12–18 months."*

**Surface any leadership-adjacent work that is real.** Even small evidence earns its place in the About story without overclaiming. Examples to consider including if they're true:

- Informally mentoring other designers
- Setting design standards that others followed
- Input on hiring criteria
- Leading client workshops or discovery sessions
- Owning cross-functional alignment

This is a conversation to have at the start of Phase 2 — what real evidence exists for the About paragraph.

### 5. Contact CTA rewrite

Replace the *"Design Lead opportunities"* line with:

> *"I'm exploring Senior Product Designer roles with a path to Lead. Remote-first, fintech / consumer / B2B SaaS."*

The mailto subject becomes *"Senior Product Designer opportunity"*.

### 6. Add a real visible H1 to each page

Kill the `d-none` H1 hack (already done in Phase 0). Add a semantically correct, visible H1 to every page. Home page H1 becomes the hero headline from task 1 above.

## Definition of done for Phase 2

- Hero rewritten and shipped
- Proof strip rebuilt with three distinct claims
- "How I Work" pillar 4 reframed to Lead-adjacent
- About paragraph rewritten with trajectory framing + any real leadership-adjacent evidence
- Contact CTA rewritten
- Every page has a real, visible, semantically correct H1
- The audit's seniority-calibration findings are addressed

---

# Phase 3 — UI polish and technical hygiene

**Scope:** Visual polish + the technical hygiene items from the audit's section 7.

**Estimated effort:** 6–10 hours, one to two sessions.

**Prerequisite:** Phase 2 complete.

## Visual polish

### Typography hierarchy review

Every heading, body block, and caption across the three case studies and the home page should feel like one document. The Demo case study has a *"typography owned by the tag"* insight; ironically, applying that discipline to the portfolio itself is the move.

### Spacing rhythm

Case study pages get long. Consistent vertical rhythm matters more than people realize. Audit didn't flag this, but it's the difference between "this reads as one document" and "this reads as several documents stitched together."

### Hero compositions for each case study

The most visible artifact per case study. Each one is listed as priority #1 in the case study's pre-publish checklist. Worth real time.

### Per-case-study OG images

The audit flagged that a strong OG image route exists at `opengraph-image.tsx` but isn't customized per case study. Build per-case-study OG variants. Free social-sharing win.

## Technical hygiene

In priority order, from the audit's section 7:

1. Per-case-study `metadata` exports — already done in Phase 1B
2. `src/app/sitemap.ts` and `src/app/robots.ts`
3. JSON-LD `Person` schema on home page
4. Fix the Inter/Urbanist double-load (currently both applied to `<html>`, Urbanist's class overrides Inter — one font is wasted)
5. Remove Bootstrap CDN if it's only used for the hamburger menu. Rebuild the hamburger natively if needed.
6. Captions on case-study videos (audit flagged accessibility issue)
7. Rename `next-proj` in `package.json` to something appropriate (e.g. `carelmaeda-portfolio`)
8. Drop the "Developed with Next.js and TypeScript" footer line entirely
9. Fix the LCP image lazy-load issue on About — the profile image is `loading="lazy"` but is in the above-the-fold About section
10. Add proper Open Graph image generation per case study route

## Re-expose the repo

Once Phase 3 is done, the public repo link can come back if you want it there. The same repo that was a liability in Phase 0 becomes an asset by Phase 3 — clean code, real routes, sitemap present, semantic HTML correct, no 404s. Optional; many portfolios omit it.

## Definition of done for Phase 3

- Lighthouse run scores in the high 90s across all four metrics on the home page and at least one case study
- No console errors in production
- No render-blocking third-party scripts
- Sitemap and robots present
- JSON-LD on home
- Per-case-study OG images
- All accessibility items from audit section 7 addressed
- Repo is publicly browsable without embarrassment (whether you re-expose the link is your call)

---

# Total estimated effort

- **Phase 0:** 4–6 hours
- **Phase 1:** 12–20 hours (visual asset capture is the bottleneck)
- **Phase 2:** 4–6 hours
- **Phase 3:** 6–10 hours

**Total:** ~26–42 hours of focused work. Realistically two to three weeks of evening/weekend work alongside a day job. Could compress to a long week if pushed hard.

---

# The verdict we're aiming at

The audit's current verdict:

> *"Good metric, broken links, IC's portfolio with a Lead's job title — pass for now."*

The verdict after this plan executes:

> *"Senior portfolio with end-to-end ownership and visible upward trajectory — interview."*

That's the target. Every phase is sequenced to move the verdict that direction.
