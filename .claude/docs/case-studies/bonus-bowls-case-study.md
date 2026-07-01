# Bonus Bowls: A Cashback Loyalty Platform for a Fortune 500 Pet-Nutrition Brand

**Timeline:** Fall 2025 to Spring 2026
**Tools:** Figma, FigJam, Angular, GA4, Looker Studio
**Role:** UX Research · UI/UX Design · Personas · User Flows · Wireframing · Prototyping · Usability Testing · Front-End Development · Analytics

> **Working note (delete before publishing):** Items in `{{braces}}` are placeholders. Drop in your real quotes, persona, Figma links, usability findings, and launch numbers. Survey data (100 respondents, fall 2025) and the percentages are final. Checklist at the bottom.

---

## Project Overview

Bonus Bowls is a cashback loyalty platform for a Fortune 500 pet-nutrition brand. Canadian pet parents buy the brand's products at their vet, photograph the clinic receipt, upload it, and earn reward dollars they can cash out by Interac e-transfer once a reviewer approves it.

I ran the research, designed the experience in Figma, shipped the front-end in Angular, and instrumented the live product with analytics. One backend engineer built the data layer, receipt pipeline, and payouts.

---

## How I Leveraged AI

I directed AI like a build partner, which is how one person shipped a platform this size:

- Turned my wireframes and design decisions into working Angular components
- Drafted the GA4 analytics instrumentation to my spec
- Generated tests and boilerplate that would have taken weeks by hand
- Kept the research, design, and product calls mine, and reviewed and shipped every piece

The thinking, what to build and why, stayed the work.

---

## Problem

The brand's vet-channel products have the best margins and the worst stickiness. A pet parent tries the brand on a vet's recommendation, then drifts back to cheaper grocery-store food the next month. Once they leave the clinic, there is no reason to return and no relationship with the brand.

Receipt-based rewards are the obvious fix, but they are a friction minefield: most people don't keep receipts, and existing programs are slow and unreliable, so pet parents don't trust them enough to bother.

---

## Solution

Bonus Bowls rewards pet parents in cash for buying the brand at the vet, without leaving the app. Photograph the receipt, get reward dollars after a quick review, and cash out by e-transfer at $25. The whole design rests on one promise: the receipt part just works, which is exactly where competitors fall down.

---

## The Design Process

I ran the project through the five phases of design thinking:

- **Empathize:** a 100-person survey and a competitive teardown
- **Define:** a research-based persona, a POV, and How-Might-We questions
- **Ideate:** user flows and a research-to-design map
- **Prototype:** mid-fidelity Figma straight into a coded build
- **Test:** usability testing before launch, live analytics after

---

## Empathize

### Primary Research

I ran a 17-question anonymous survey of 100 Canadian pet parents in fall 2025. The goal: understand how people buy pet food, what they do with receipts, and what would make a rewards program worth their time, before designing anything.

### Key Takeaways

- **People don't keep receipts.** 71% don't, and 30% wouldn't upload one at all. The biggest threat to a receipt-based program.
- **They want cash, not stuff.** 66% wanted cash-back; just 3% wanted cheques. The reward had to be money.
- **Mobile, but cautious.** 89% are smartphone-comfortable, but only 45% were comfortable sharing banking details. Trust had to be earned on every money screen.
- **Demand is real.** 85% wanted a pet-food loyalty program. If engagement fell well below that, the design was the problem.

### User Testimonials

> {{Strongest open-text survey quote, about not keeping or trusting receipts, or wanting cash.}}
>
> {{Participant 1}}

> {{Second quote, ideally about wanting rewards for a vet purchase, or hesitation about a new program.}}
>
> {{Participant 2}}

### Competitive Analysis

I scored the programs pet parents said they would compare this to on what drives success or failure: upload reliability, processing time, reward type, and trust.

| Competitor | Strengths | Challenges |
|---|---|---|
| **myPurina** | Major national brand; established program; wide product range | Rejects ~60% of receipts; slow, opaque review |
| **Receipt Hog** | Familiar receipt-scanning model; broad retailer coverage | Low reward value; points and sweepstakes, not cash; not pet-specific |
| **{{third competitor, if analyzed}}** | {{strengths}} | {{challenges}} |

**Key Insight:** Every option fails at the thing that matters most: accepting a receipt reliably and paying out in cash. The category leader rejects 60%. That gap was the opening.

---

## Define

### User Persona

> Swap in your finished persona. The pain points, needs, and behaviours are drafted from the survey as a starting point.

**{{Name}}** · {{Age}} · {{Occupation}} · {{Location, Canada}}

{{Background paragraph: who they are, how pets and shopping fit their life, why a rewards program appeals.}}

**Pain Points**
- Doesn't keep receipts, so most rewards programs are a non-starter
- Tried receipt apps that were slow or rejected uploads, and stopped trusting them
- Nervous about entering banking details in an app she doesn't know
- Doesn't want to research how a program works

**Needs & Goals**
- Rewarded for vet purchases with zero hassle
- Upload a receipt in seconds, from her phone, at the clinic
- Trust that the cash actually arrives
- Paid in cash, not points or merchandise

**Behaviors**
- Buys the brand on a vet's recommendation, then drifts to cheaper food
- Runs almost everything from her phone
- Comfortable with apps, careful with anything financial

**Feelings**
- Cautious · Skeptical · Hopeful · Motivated by real savings

### POV Statement

I want to explore ways to reward Canadian pet parents for buying the brand at their vet, quickly and reliably, without leaving the app, so a one-time vet recommendation can become a repeat habit, even for people who have never bought the brand.

### How Might We

- How might we make uploading a vet receipt effortless for people who don't keep receipts?
- How might we make the reward trustworthy enough that bank-cautious users will cash out?
- How might we turn a single vet recommendation into a lasting habit?

---

## Ideate

### From Research to Design Decisions

Before opening Figma, I mapped each business goal to the research finding that should drive it, on one page the client signed off on. It stopped every later "what if we…" from reopening a settled decision.

| Business goal | Research-backed solution |
|---|---|
| Drive repeat purchase | Cash-back at a **$25 minimum**, about one monthly purchase cycle |
| Reward the purchase | One-tap photo upload, fast confirmation |
| Build trust | Security messaging, 2FA, breached-password checks, consent-first analytics |
| Win new customers | Sign-up bonus, educational content, denser cash-back than competitors |

### User Flows

I mapped the two core journeys so the path from "I bought it" to "I got paid" stayed as short as possible.

- **Earn:** Sign up → Upload receipt (Photo → Details → Products → Review) → Reward dollars credited after review
- **Redeem:** Reach $25 → Redeem → Choose e-transfer → Cash-out confirmed

### Mid-Fidelity Wireframes

Mid-fidelity wireframes let me lock layout, hierarchy, and the upload flow's logic without getting pulled into visual polish. This is where I gathered early feedback and fixed structural problems before building. These wireframes doubled as the flow and journey map for the build.

{{Figma: mid-fidelity wireframes & flows}}

---

## Prototype

### From Wireframes Straight to Code

We skipped high-fidelity mockups. The mid-fidelity Figma covered wireframes and flow; the real visual design got built directly in Angular. Coding was where the "sauce" went in. The look, feel, and polish all happened in the product itself, not in a Figma comp.

### Visual Direction

The product had to feel trustworthy first and warm second, since people were sharing purchase and banking data for a brand most of them didn't buy yet. In code, that meant generous white space, photos of real pets over stock shots, and brand colour used sparingly so primary buttons stood out.

### Built on Google Material

Instead of building every component from scratch, I used Google's Material Design system (via Angular Material): accessible, familiar components out of the box. It sped up the build and freed up time for the screens that needed real craft, the upload and the dashboard.

### Key Screens

| Screen | Design decision | View |
|---|---|---|
| Sign-up | Bonus on screen one; banking deferred to cash-out | {{screenshot}} |
| Receipt upload | Guided 4-step flow; one-tap camera; live validation | {{screenshot}} |
| Earnings dashboard | Plain progress to the threshold; no gamification noise | {{screenshot}} |
| Cash-out | E-transfer; transparent status; support one tap away | {{screenshot}} |

### From Prototype to Shipped Product

I owned the Angular front-end end to end: architecture, component and state design, responsive behaviour, accessibility, and the production deploy, plus the API contract my backend partner and I built against.

It shipped as a real product:
- **Bilingual EN / FR-CA:** every string, status, and page title flips cleanly.
- **Accessibility:** WCAG AA, passing AXE checks, with live announcements on receipt status changes.
- **A full admin console:** the brand's reviewers approve receipts, manage payouts, and run the product catalog.

---

## Test

Testing happened twice: with real users on the prototype before launch, and with live data after.

### Usability Testing

I ran moderated usability tests with {{N}} participants ({{N}} current users, {{N}} interested). Each completed a few core tasks:

- {{Task 1: e.g., upload a receipt for a recent purchase}}
- {{Task 2: e.g., check balance and start a cash-out}}

**Goal:** see how easily people moved through the flow, gather feedback on look and feel, and find points of confusion.

### Key Findings

{{Overall reaction. For example: participants found the upload flow clear and the cash-out trustworthy. Note any praise or sticking points.}}

### Changes Made After Testing

The most useful part was watching where people hesitated. The fixes that came out of it:

**Issue 1: {{title}}**
- *Before:* {{what confused them}}
- *After:* {{what you changed}}

**Issue 2: {{title}}**
- *Before:* {{…}}
- *After:* {{…}}

**Issue 3: {{title}}**
- *Before:* {{…}}
- *After:* {{…}}

### Final Product

{{Annotated final screens or a link. Call out 2 to 3 best moments: the upload flow, the reward card, the cash-out confirmation.}}

{{Final product: screenshots / link}}

### Validating in Production

Testing didn't stop at launch. I instrumented the live product so the brand could see whether real behaviour matched the research.

The GA4 layer tracks the full member journey, 30+ events, with four real conversions: account created, receipt submitted, payout requested, payment method added. Three decisions kept the data honest:

- **Privacy-first:** nothing is tracked until the user consents.
- **Members vs. browsers:** every session is tagged registered or guest, so reports show real members, not all traffic.
- **Bilingual in the data:** language is captured as a property, so English and French behaviour is visible, not guessed.

A Looker Studio dashboard turns the raw events into plain-language answers. Every research number that justified a decision is now a live metric.

| Research said | The KPI it became |
|---|---|
| myPurina rejects 60% of receipts | Our approval rate vs. that 40% |
| 90% aren't customers yet | % of sign-ups who are first-time customers |
| 85% want this | Real engagement vs. that floor |

**Early signals** *(placeholders):*
- {{N}} sign-ups in {{X}} weeks
- {{N}} receipts · {{N%}} approval *(vs. competitor's 40%)*
- {{N}} redemptions · ${{N}} cashed out
- {{N%}} first-time customers

---

## Conclusion

### Main Insights

The research was clear: pet parents want cash, won't tolerate a slow or unreliable receipt process, and need to trust a new program before sharing banking details. Every major decision (cash over points, one-tap upload, security on every money screen, e-transfer payouts) traces back to one of those findings. Designing from data meant every review became "show me the survey answer that says why."

### What I Learned

- **Pitching for research time was the highest-leverage hour of the project.** Four weeks up front made every later decision faster.
- **Reliability is a strategy when everyone else is unreliable.** A 60% rejection rate from the market leader was the whole opening.
- **Build the scoreboard before kickoff.** Instrumenting from launch means "did it work?" has a real answer.
- **Launch is the start of research, not the end.** Next: a quarterly micro-survey to live members, fed into the roadmap.

---

## Let's Connect

Thanks for reading. Happy to talk through any part of the process, or just say hi.

📧 {{your email}}
🔗 {{portfolio / LinkedIn}}

---
---

# CHECKLIST (delete before publishing)

**Fill the placeholders** (`Ctrl+F` for `{{`):
- 2 user quotes from your survey's open-text responses
- Your finished persona (name, photo, demographics, background); I seeded the pain points, needs, and behaviours from the survey
- Figma link for the mid-fidelity wireframes
- Screenshots of the built screens (key screens table + final product)
- Usability testing: participants, tasks, key findings, before/after fixes
- Launch numbers
- Contact details

**Verify the competitive table.** myPurina's 60% rejection is from your research; check the other strengths and challenges against your actual teardown, and add or delete the third competitor row.

**Verify the corrections** (vs. earlier drafts): Angular 21 stack · cashback dollars, not points · $25 threshold · e-transfer only · 4-step upload · bilingual, GA4/Looker, admin console, security · no high-fidelity Figma stage (mid-fi straight to code).

**On the AI section:** it states plainly that AI did the implementation under your direction. Make sure you can speak to the design, product, and research decisions you owned, and that the split matches how you would describe it out loud.

**Anonymization:** searched Hill's / Science Diet / etc., none appear. "Bonus Bowls" and "Paygos" do appear; keep only if you are comfortable. myPurina and Receipt Hog are named, which you confirmed is fine.
