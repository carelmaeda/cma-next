# Bonus Bowls: A cashback loyalty platform for a Fortune 500 pet-nutrition brand

> **Editing note (not published):** This file mirrors the **live** page at
> `src/app/case-studies/bonus-bowls/page.tsx`. Edit the copy here freely and hand it
> back — I'll apply your edits to the page. Headings below map to the page's blocks so
> the round-trip stays clean. Items in `{{braces}}` are still placeholders on the live
> site. Keep the anonymization: it's always "a Fortune 500 pet food brand," never
> Hill's/Science Diet. myPurina and Receipt Hog are fine to name.

---

## Hero

{{**Hero visual:**}}

**Title:** Bonus Bowls: A loyalty platform for a Fortune 500 pet brand

**Framing:** Bonus Bowls is a platform that rewards Canadian pet parents for their pet food purchases. Users photograph and upload their receipts, collect cashback, and redeem it for rewards. I ran the research, designed the experience, shipped the Angular front-end, and connected it to a comprehensive analytics dashboard.

**Meta:**

- **Timeline:** Fall 2025 → Spring 2026
- **Tools:** Google Forms, Figma, FigJam, Angular, GA4, Looker Studio
- **Role:** UX research, UI/UX, prototyping, usability testing, front-end, analytics.
- **Industry:** Pet food

---

## How I Leveraged AI - Sticky Note

I directed AI like a build partner, which is how one person shipped a platform this size:

- Turned my wireframes and design decisions into working Angular components
- Drafted the GA4 analytics instrumentation to my spec
- Generated tests and boilerplate that would have taken weeks by hand
- Kept the research, design, and product calls mine, and reviewed and shipped every piece

---

## Section: About

Bonus Bowls is a platform that rewards Canadian pet parents for their pet food purchases. Users photograph and upload their receipts, collect cashback, and redeem it for rewards.
The client came to us with a problem: their products have the best margins but the worst stickiness. They were struggling to build loyalty among pet parents, since customers tend to pick pet food brands purely on price. This was indirectly weakening the long-term relationship between vets and their customers. A loyalty rewards platform is the obvious fix, but there were real challenges to face: most people don't keep receipts, and some existing programs are slow and unreliable, so pet parents don't trust them enough to bother.

So the real question was:

## "How do we build a rewards platform that pet parents actually trust, and make rewards actually feel rewarding?"

Bonus Bowls closes that gap without leaving the app: photograph the receipt, get reward dollars after a quick review, and cash out by e-transfer at $25. The whole design rests on one promise: the receipt part just works, which is exactly where competitors fall down.

---

### The Design Process

I ran the project through the usual five phases of design thinking: user surveys and competitive analysis to **empathize**; a research-based persona, POV, and How-Might-We questions to **define**; user flows and wireframes to **ideate**; mid-fidelity Figma and Google Material to **prototype**; and usability testing and analytics after to **test**.

_(Insert the Design Thinking diagram. - add a pill under each step showing what I did according to the list above)_

---

## Section: Empathize

I ran a 5-minute survey targeting Canadian pet parents. We needed to understand how pet parents behave: where they buy pet food, how often, what they do with receipts, and what would make a rewards program worth their time.

---

### Key Takeaways (Transform this into a Bento Grid) (Hero are big bold tiles, Intermediate is medium tiles, small tiles are small)

### Hero tile

Justifies the project.

1. **85% open to the program.** The demand proof and the reason the project exists. Full-width banner.

### Intermediate tiles

Findings that shaped or sized a design decision.

2. **66% want cash, not merchandise.** Validates the biggest product decision: cash back over points.
3. **50% don't keep receipts.** Defines the exact problem the design solves.
4. **30% buy on price.** The loyalty problem in the users' own words.
5. **47% spend about $100 a month.** Sizes the reward economics.

### Small tiles

Supporting context and numbers.

6. **40% buy once a month.** Sets the engagement cadence.
7. **89% smartphone-comfortable.** Reassures the mobile-first call.
8. **Top brands mentioned.**
9. **Top loyalty apps mentioned.**
10. **80% are 20 to 40 years old.**

Click the link below to see the full survey results.

{{Include Survey Link Here}}

## "Great news: people are open to the program. We learned that pet parents usually buy food once a month, which hints at a similar once-a-month usage of our platform. And we are looking at a young, tech-savvy, price-oriented audience. We also uncovered their favorite brands and platforms so we can run a competitive analysis."

### Competitive Analysis

After reading through the survey responses, it was time to investigate the pet brands that came up most often, along with some general loyalty apps. We needed to understand what was already out there so we could pick the best features and avoid what was causing frustration.

To accomplish this research I signed myself up to the programs, downloaded the apps and used them, read numerous Google and App Store reviews, joined Reddit forums.

| Feature          | Purina myPurina        | Receipt Hog            | Takeaways                                           |
| ---------------- | ---------------------- | ---------------------- | --------------------------------------------------- |
| Receipt Upload   | ✗ 60% rejection rate   | ✓ Universal acceptance | ✓ Accept receipts from every vendor, no rejections  |
| Processing Time  | ✗ 3+ business days     | ✗ Variable delays      | ✓ Approve receipts in under 3 days                  |
| App Reliability  | ✓ Stable and fast      | ✗ Stability issues     | ✓ Keep the app stable and fast enough to trust      |
| Reward Options   | ✗ Merchandise, no cash | ✗ Low cash, low reward | ✓ Pay out in real cash, not merchandise             |
| Customer Support | ✗ Email only           | ✗ Limited response     | ✓ Offer responsive support like live chat and email |

## "Every program we looked at got one half right and dropped the other, so how might we deliver both: reliable, universal approvals and rewards worth cashing in?"

---

## Section: Define

Header: Now that we've mapped our users and our competition, we have a solid base to define our challenges and plan how to overcome them

## Personas (summary)

**Elena Martinez — The Devoted Dog Mom**
32, marketing coordinator, tech-comfortable but wants simple apps. Spends ~$90/month on her dog's prescription food. Needs fast receipt uploads, cash back she can use, and trust that her data is safe. Frustrated by complicated programs with unclear rules or slow rewards.

**David Thompson — The Multi-Pet Owner**
40, works full-time, mobile-first, price-driven. Feeds three pets at $200+/month. Wants to earn on every purchase, cash out fast, and get instant receipt confirmation. Already juggles five reward apps, so this one has to just work or he drops it.

**Linda Wilson — The Loyal Vet Customer**
58, retired teacher, prefers phone calls over apps. Shops only at her vet. Wants rewards without downloading anything complicated, an in-person explanation, and reassurance her information is safe. Open to rewards but wary of anything that needs smartphone skills.

_click here to see the full User Persona document_

### How Might We

- How might we convert price-driven shoppers into loyal customers?
- How might we make uploading a receipt effortless for people who don't keep receipts?
- How might we keep members coming back between monthly purchases?

## "Now that we defined the problems, how do we solve them?"

---

## Section: Ideate

Before opening Figma, I mapped each business goal to the research finding that should drive it, on one page the client signed off on. It stopped every later "what if we…" from reopening a settled decision.

| Business goal         | Research-backed solution                                                   |
| --------------------- | -------------------------------------------------------------------------- |
| Drive repeat purchase | Cash-back at a **$25 minimum**, about one monthly purchase cycle           |
| Reward the purchase   | Quick photo capture, fast confirmation                                     |
| Build trust           | Security messaging, 2FA, breached-password checks, consent-first analytics |
| Win new customers     | Educational content, more generous cash-back than competitors              |

### User Flows

I mapped the two core journeys so the path from "I bought it" to "I got paid" stayed as short as possible.

- **Earn:** Sign up → Upload receipt (Photo → Details → Products → Review) → Reward dollars credited after review
- **Redeem:** Reach $25 → Redeem → Choose e-transfer → Cash-out confirmed

{{Figma: user flows here}}

## "With every decision mapped and signed off, the plan felt solid. Now the real question was how fast we could turn it into something people could actually use."

---

## Prototype: From wireframes straight to code

To build a prototype as fast as possible, we decided to use Google Material for our raw components. We chose Material for a few reasons:

1. Google is the native platform the client already uses, so the look would feel familiar to stakeholders.
2. It let us ship a quick mid-fidelity prototype for review.
3. Material components are built to work with our Angular framework, which saved developer time.

### Visual direction

We pulled colors, typography, and core patterns from the brand's existing design system to keep Bonus Bowls consistent with its other products.

### Key Screens

| Screen             | Design decision                                        | View           |
| ------------------ | ------------------------------------------------------ | -------------- |
| Sign-up            | Banking deferred to cash-out                           | {{screenshot}} |
| Receipt upload     | Guided 4-step flow; one-tap camera; live validation    | {{screenshot}} |
| Earnings dashboard | Plain progress to the threshold; no gamification noise | {{screenshot}} |
| Redeem             | E-transfer; transparent status; support one tap away   | {{screenshot}} |

### From Prototype to Shipped Product

I owned the Angular front-end end to end: architecture, component and state design, responsive behaviour, accessibility, and the production deploy, plus the API contract my backend partner and I built against.

It shipped as a real product:

- **Bilingual EN / FR-CA:** every string, status, and page title flips cleanly.
- **Accessibility:** WCAG AA, passing AXE checks, with live announcements on receipt status changes.
- **A full admin console:** the brand's reviewers approve receipts, manage payouts, and run the product catalog.

## "The product was built and shipped. But building something and proving it works for real people are two very different things."

---

## Test: Before launch, and with live data after

Testing happened twice: with real users on the prototype before launch, and with live data after.

### Usability testing

I ran moderated usability tests with 5 participants (3 current users, 2 interested). Each completed a few core tasks:

- Upload a receipt for a recent vet purchase
- Check your balance and start a cash-out

**Goal:** see how easily people moved through the flow, gather feedback on look and feel, and find points of confusion.

### Key findings

Participants moved through the upload process and described the redemption as trustworthy and fast, mostly because each step confirmed what had happened and the e-transfer payout was something they were already familiar with. The friction showed up in a few places: entering the invoice total before tax, needing a payment method before cash-out, and finding the right product in the catalog.

### Changes made after testing

The most useful part was watching where people hesitated. The fixes that came out of it:

**Issue 1: People entered the total with tax included**

- _Before:_ On the Purchase Details step, several participants typed the full invoice total, tax included, even though rewards are based on the pre-tax product total.
- _After:_ Added a clear hint under the field ("Enter the pre-tax product total, before tax") and a matching line in the pre-submit checklist.

**Issue 2: Cash-out stalled with no payment method saved**

- _Before:_ Participants reached the redemption screen ready to redeem, then discovered they first had to add an e-transfer email, which felt like an unexpected extra step.
- _After:_ Surfaced the payment-method prompt earlier and added a direct link to add one from the redemption screen, so people aren't sent hunting through settings.

**Issue 3: Hard to find a product in a long list**

- _Before:_ On the Select Products step, participants scrolled a large catalog to locate their item.
- _After:_ Added search and category filters (dog/cat, dry/wet, prescription/science diet) at the top of the step.

### Final Product

{{Final product: annotated screenshots / link}}

## Validating in Production

Testing didn't stop at launch. I instrumented the live product so the brand could see whether real behaviour matched the research, and to lay a solid base for UX measurement so we can track how well future updates perform.

The GA4 layer tracks the full member journey across 30+ events, with four real conversions: account created, receipt submitted, payout requested, and payment method added. Three decisions kept the data honest:

- **Privacy-first:** nothing is tracked until the user consents.
- **Members vs. browsers:** every session is tagged registered or guest, so reports show real members, not all traffic.
- **Bilingual in the data:** language is captured as a property, so English and French behaviour is visible, not guessed.

A Looker Studio dashboard turns the raw events into plain-language answers that I shared with all stakeholders. Every research number that justified a decision is now a live metric.

Bonus Bowls launched in July 2026, so this data is just starting to flow. The signals below are a first read, not a verdict.

**Early signals**

- **{{N}}** sign-ups _(in {{X}} weeks)_
- **{{N}}%** receipt approval _(vs. competitor's 40%)_
- **${{N}}** cashed out _(across {{N}} redemptions)_

## "Between usability testing before launch and live analytics after, the product could finally answer its own hardest question: is it actually working?"

---

## Conclusion

### Main Insights

The research was clear: pet parents want cash, won't tolerate a slow or unreliable receipt process, and need to trust a new program before sharing banking details. Every major decision — cash over points, one-tap upload, security on every money screen, e-transfer payouts — traces back to one of those findings. Designing from data meant every review became "show me the survey answer that says why."

### What I Learned

- **Pitching for research time was the highest-leverage hour of the project.** Four weeks up front made every later decision faster.
- **Reliability is a strategy when everyone else is unreliable.** A 60% rejection rate from the market leader was the whole opening.
- **Build the scoreboard before kickoff.** Instrumenting from launch means "did it work?" has a real answer.
- **Launch is the start of research, not the end.** Next: a quarterly micro-survey to live members, fed into the roadmap.

---

## Let's Connect

Thanks for reading. Happy to talk through any part of the process, or just say hi.

📧 carelmaeda@gmail.com
