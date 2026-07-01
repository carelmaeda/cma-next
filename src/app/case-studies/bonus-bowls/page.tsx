import type { Metadata } from 'next';
import CaseStudyLayout, { Prose } from '@/app/components/case-study/CaseStudyLayout';
import CaseStudyHero from '@/app/components/case-study/CaseStudyHero';
import CaseStudySection, {
  CaseStudySubheading,
  CaseStudyMinorHeading,
} from '@/app/components/case-study/CaseStudySection';
import PhaseSection from '@/app/components/case-study/PhaseSection';
import Figure, { FlowStrip } from '@/app/components/case-study/Figure';
import { PullQuote, StatCallout, StatGrid } from '@/app/components/case-study/Callouts';
import CaseStudyTable from '@/app/components/case-study/Table';
import BentoShowcase from '@/app/components/case-study/BentoShowcase';
import DesignThinkingDiagram from '@/app/components/shared/DesignThinkingDiagram';

export const metadata: Metadata = {
  title: 'Bonus Bowls: A cashback loyalty platform for a Fortune 500 pet-nutrition brand',
  description:
    'A receipt-based cashback loyalty platform for a Fortune 500 pet-nutrition brand. Researched with a 100-respondent survey, designed in Figma, and shipped end-to-end in Angular. Structured around the Design Thinking method.',
};

export default function BonusBowlsPage() {
  return (
    <CaseStudyLayout>
      <CaseStudyHero
        eyebrow="Case Study · Strategy & Impact"
        title="Bonus Bowls: A cashback loyalty platform for a Fortune 500 pet-nutrition brand"
        framing="Bonus Bowls rewards Canadian pet parents in cash for buying a Fortune 500 brand&rsquo;s products at the vet: photograph the clinic receipt, earn reward dollars after a quick review, and cash out by Interac e-transfer. I ran the research, designed the experience in Figma, shipped the Angular front-end, and instrumented the live product with analytics."
        meta={[
          { label: 'Timeline', value: 'Fall 2025 → Spring 2026' },
          { label: 'Tools', value: 'Figma, FigJam, Angular, GA4, Looker Studio' },
          {
            label: 'Role',
            value:
              'UX research, UI/UX design, prototyping, usability testing, front-end development, and analytics. One backend engineer built the data layer, receipt pipeline, and payouts.',
          },
        ]}
        outcomes={
          <ul>
            <li><strong>100 valid survey responses</strong> from a 17-question study of Canadian pet parents</li>
            <li><strong>85% wanted a pet-food loyalty program</strong> &mdash; the engagement floor to beat</li>
            <li>Category leader rejects 60% of receipts &mdash; <strong>40% approval is the bar to clear</strong></li>
            <li>End-to-end ownership: research &rarr; design &rarr; code &rarr; analytics</li>
          </ul>
        }
        heroVisual={
          <Figure
            placeholder="Three-up composition: a research insight callout ('85% interested') on the left, the mobile receipt-upload screen in the middle, the earnings dashboard on the right."
            alt="Three-up composition of research insight callout, mobile receipt-upload screen, and earnings dashboard."
            caption="Research insight → design decision → shipped surface."
          />
        }
      />

      <BentoShowcase
        heading="Research first, points engine second: a loyalty platform built on evidence."
        cells={[
          { kind: 'stat', value: '85%', label: 'Wanted a pet-food loyalty program', accent: 'var(--color-green)' },
          { kind: 'stat', value: '100', label: 'Survey respondents · 17 questions', accent: 'var(--color-cyan)' },
          { kind: 'stat', value: '40%', label: 'Competitor approval rate to beat', span: 2, accent: 'var(--color-pink)' },
          { kind: 'placeholder', label: 'Receipt-upload screen', hint: 'Guided 4-step mobile capture flow', accent: 'var(--color-lilac)', span: 2 },
          { kind: 'placeholder', label: 'Earnings dashboard', hint: 'Plain progress to the $25 cash-out threshold', accent: 'var(--color-cyan)', span: 2 },
          { kind: 'placeholder', label: 'Sign-up / trust surface', hint: 'Onboarding + security messaging', accent: 'var(--color-green)', span: 2 },
          { kind: 'placeholder', label: 'Research insight board', hint: 'The takeaways that shaped the design', accent: 'var(--color-yellow)', span: 2 },
        ]}
      />

      <CaseStudySection heading="Project Overview">
        <Prose>
          <p>Bonus Bowls is a cashback loyalty platform for a Fortune 500 pet-nutrition brand. Canadian pet parents buy the brand&rsquo;s products at their vet, photograph the clinic receipt, upload it, and earn reward dollars they can cash out by Interac e-transfer once a reviewer approves it.</p>
          <p>I ran the research, designed the experience in Figma, shipped the front-end in Angular, and instrumented the live product with analytics. One backend engineer built the data layer, receipt pipeline, and payouts.</p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection heading="How I Leveraged AI">
        <Prose>
          <p>I directed AI like a build partner, which is how one person shipped a platform this size:</p>
          <ul>
            <li>Turned my wireframes and design decisions into working Angular components</li>
            <li>Drafted the GA4 analytics instrumentation to my spec</li>
            <li>Generated tests and boilerplate that would have taken weeks by hand</li>
            <li>Kept the research, design, and product calls mine, and reviewed and shipped every piece</li>
          </ul>
          <p>The thinking &mdash; what to build and why &mdash; stayed the work.</p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection heading="Problem">
        <Prose>
          <p>The brand&rsquo;s vet-channel products have the best margins and the worst stickiness. A pet parent tries the brand on a vet&rsquo;s recommendation, then drifts back to cheaper grocery-store food the next month. Once they leave the clinic, there is no reason to return and no relationship with the brand.</p>
          <p>Receipt-based rewards are the obvious fix, but they are a friction minefield: most people don&rsquo;t keep receipts, and existing programs are slow and unreliable, so pet parents don&rsquo;t trust them enough to bother.</p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection heading="Solution">
        <Prose>
          <p>Bonus Bowls rewards pet parents in cash for buying the brand at the vet, without leaving the app. Photograph the receipt, get reward dollars after a quick review, and cash out by e-transfer at $25. The whole design rests on one promise: the receipt part just works &mdash; which is exactly where competitors fall down.</p>
        </Prose>
      </CaseStudySection>

      <CaseStudySection heading="The Design Process">
        <Prose>
          <p>I ran the project through the five phases of design thinking: a 100-person survey and competitive teardown to <strong>empathize</strong>; a research-based persona, POV, and How-Might-We questions to <strong>define</strong>; user flows and a research-to-design map to <strong>ideate</strong>; mid-fidelity Figma straight into a coded build to <strong>prototype</strong>; and usability testing before launch plus live analytics after to <strong>test</strong>.</p>
        </Prose>
        <DesignThinkingDiagram />
      </CaseStudySection>

      <PhaseSection phase="empathize" heading="Empathize: 100 pet parents, in their own words">
        <CaseStudySubheading>Primary Research</CaseStudySubheading>
        <Prose>
          <p>I ran a 17-question anonymous survey of 100 Canadian pet parents in fall 2025. The goal: understand how people buy pet food, what they do with receipts, and what would make a rewards program worth their time &mdash; before designing anything.</p>
        </Prose>

        <CaseStudySubheading>Key Takeaways</CaseStudySubheading>
        <StatGrid>
          <StatCallout
            value="71%"
            label="People don&rsquo;t keep receipts."
            context="30% wouldn't upload one at all — the biggest threat to a receipt-based program."
          />
          <StatCallout
            value="66%"
            label="They want cash, not stuff."
            context="wanted cash-back; just 3% wanted cheques. The reward had to be money."
          />
          <StatCallout
            value="89%"
            label="Mobile, but cautious."
            context="smartphone-comfortable, but only 45% were comfortable sharing banking details."
          />
          <StatCallout
            value="85%"
            label="Demand is real."
            context="wanted a pet-food loyalty program. If engagement fell well below that, the design was the problem."
          />
        </StatGrid>

        <CaseStudySubheading>User Testimonials</CaseStudySubheading>
        <PullQuote attribution="Survey participant 1">
          {'{{Strongest open-text survey quote — about not keeping or trusting receipts, or wanting cash.}}'}
        </PullQuote>
        <PullQuote attribution="Survey participant 2">
          {'{{Second quote — ideally about wanting rewards for a vet purchase, or hesitation about a new program.}}'}
        </PullQuote>

        <CaseStudySubheading>Competitive Analysis</CaseStudySubheading>
        <Prose>
          <p>I scored the programs pet parents said they would compare this to on what drives success or failure: upload reliability, processing time, reward type, and trust.</p>
        </Prose>
        <CaseStudyTable
          headers={['Competitor', 'Strengths', 'Challenges']}
          rows={[
            ['myPurina', 'Major national brand; established program; wide product range', 'Rejects ~60% of receipts; slow, opaque review'],
            ['Receipt Hog', 'Familiar receipt-scanning model; broad retailer coverage', 'Low reward value; points and sweepstakes, not cash; not pet-specific'],
            ['{{Third competitor, if analyzed}}', '{{strengths}}', '{{challenges}}'],
          ]}
        />
        <PullQuote>
          Every option fails at the thing that matters most: accepting a receipt reliably and paying out in cash. The category leader rejects 60%. That gap was the opening.
        </PullQuote>
      </PhaseSection>

      <PhaseSection phase="define" heading="Define: A program that has to change behavior">
        <CaseStudySubheading>User Persona</CaseStudySubheading>
        <div className="grid gap-6 rounded-md border border-hairline bg-cream-pale p-6 md:grid-cols-[200px_1fr] md:p-8">
          <Figure
            placeholder="{{Persona photo}}"
            alt="Persona portrait placeholder."
          />
          <div className="grid gap-5">
            <div>
              <p className="font-display text-aubergine text-[1.5rem] leading-tight tracking-tight m-0">
                {'{{Name}}'}
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-warm-grey mt-1.5 m-0">
                {'{{Age}} · {{Occupation}} · {{Location}}, Canada'}
              </p>
              <p className="font-sans text-[0.9375rem] leading-[1.6] text-charcoal mt-3 m-0">
                {'{{Background: who they are, how pets and shopping fit their life, why a rewards program appeals.}}'}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <CaseStudyMinorHeading>Pain Points</CaseStudyMinorHeading>
                <ul className="mt-2 grid gap-1.5 pl-5 list-disc font-sans text-[0.9375rem] leading-[1.5] text-charcoal marker:text-warm-grey">
                  <li>Doesn&rsquo;t keep receipts, so most rewards programs are a non-starter</li>
                  <li>Tried receipt apps that were slow or rejected uploads, and stopped trusting them</li>
                  <li>Nervous about entering banking details in an app she doesn&rsquo;t know</li>
                  <li>Doesn&rsquo;t want to research how a program works</li>
                </ul>
              </div>
              <div>
                <CaseStudyMinorHeading>Needs &amp; Goals</CaseStudyMinorHeading>
                <ul className="mt-2 grid gap-1.5 pl-5 list-disc font-sans text-[0.9375rem] leading-[1.5] text-charcoal marker:text-warm-grey">
                  <li>Rewarded for vet purchases with zero hassle</li>
                  <li>Upload a receipt in seconds, from her phone, at the clinic</li>
                  <li>Trust that the cash actually arrives</li>
                  <li>Paid in cash, not points or merchandise</li>
                </ul>
              </div>
              <div>
                <CaseStudyMinorHeading>Behaviors</CaseStudyMinorHeading>
                <ul className="mt-2 grid gap-1.5 pl-5 list-disc font-sans text-[0.9375rem] leading-[1.5] text-charcoal marker:text-warm-grey">
                  <li>Buys the brand on a vet&rsquo;s recommendation, then drifts to cheaper food</li>
                  <li>Runs almost everything from her phone</li>
                  <li>Comfortable with apps, careful with anything financial</li>
                </ul>
              </div>
              <div>
                <CaseStudyMinorHeading>Feelings</CaseStudyMinorHeading>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-warm-grey leading-[1.6] m-0">
                  Cautious · Skeptical · Hopeful · Motivated by real savings
                </p>
              </div>
            </div>
          </div>
        </div>

        <CaseStudySubheading>POV Statement</CaseStudySubheading>
        <PullQuote>
          I want to explore ways to reward Canadian pet parents for buying the brand at their vet, quickly and reliably, without leaving the app, so a one-time vet recommendation can become a repeat habit &mdash; even for people who have never bought the brand.
        </PullQuote>

        <CaseStudySubheading>How Might We</CaseStudySubheading>
        <Prose>
          <ul>
            <li>How might we make uploading a vet receipt effortless for people who don&rsquo;t keep receipts?</li>
            <li>How might we make the reward trustworthy enough that bank-cautious users will cash out?</li>
            <li>How might we turn a single vet recommendation into a lasting habit?</li>
          </ul>
        </Prose>
      </PhaseSection>

      <PhaseSection phase="ideate" heading="Ideate: Insight to decision, on one page">
        <CaseStudySubheading>From Research to Design Decisions</CaseStudySubheading>
        <Prose>
          <p>Before opening Figma, I mapped each business goal to the research finding that should drive it, on one page the client signed off on. It stopped every later &ldquo;what if we&hellip;&rdquo; from reopening a settled decision.</p>
        </Prose>
        <CaseStudyTable
          headers={['Business goal', 'Research-backed solution']}
          rows={[
            ['Drive repeat purchase', <>Cash-back at a <strong>$25 minimum</strong>, about one monthly purchase cycle</>],
            ['Reward the purchase', 'One-tap photo upload, fast confirmation'],
            ['Build trust', 'Security messaging, 2FA, breached-password checks, consent-first analytics'],
            ['Win new customers', 'Sign-up bonus, educational content, denser cash-back than competitors'],
          ]}
        />

        <CaseStudySubheading>User Flows</CaseStudySubheading>
        <Prose>
          <p>I mapped the two core journeys so the path from &ldquo;I bought it&rdquo; to &ldquo;I got paid&rdquo; stayed as short as possible.</p>
          <ul>
            <li><strong>Earn:</strong> Sign up &rarr; Upload receipt (Photo &rarr; Details &rarr; Products &rarr; Review) &rarr; Reward dollars credited after review</li>
            <li><strong>Redeem:</strong> Reach $25 &rarr; Redeem &rarr; Choose e-transfer &rarr; Cash-out confirmed</li>
          </ul>
        </Prose>

        <CaseStudySubheading>Mid-Fidelity Wireframes</CaseStudySubheading>
        <Prose>
          <p>Mid-fidelity wireframes let me lock layout, hierarchy, and the upload flow&rsquo;s logic without getting pulled into visual polish. This is where I gathered early feedback and fixed structural problems before building. These wireframes doubled as the flow and journey map for the build.</p>
        </Prose>
        <Figure
          placeholder="{{Figma: mid-fidelity wireframes & flows}}"
          alt="Mid-fidelity wireframes and flows placeholder."
          variant="wide"
        />
      </PhaseSection>

      <PhaseSection phase="prototype" heading="Prototype: From wireframes straight to code">
        <Prose>
          <p>We skipped high-fidelity mockups. The mid-fidelity Figma covered wireframes and flow; the real visual design got built directly in Angular. Coding was where the &ldquo;sauce&rdquo; went in &mdash; the look, feel, and polish all happened in the product itself, not in a Figma comp.</p>
        </Prose>

        <CaseStudySubheading>Visual Direction</CaseStudySubheading>
        <Prose>
          <p>The product had to feel trustworthy first and warm second, since people were sharing purchase and banking data for a brand most of them didn&rsquo;t buy yet. In code, that meant generous white space, photos of real pets over stock shots, and brand colour used sparingly so primary buttons stood out.</p>
        </Prose>

        <CaseStudySubheading>Built on Google Material</CaseStudySubheading>
        <Prose>
          <p>Instead of building every component from scratch, I used Google&rsquo;s Material Design system (via Angular Material): accessible, familiar components out of the box. It sped up the build and freed up time for the screens that needed real craft &mdash; the upload and the dashboard.</p>
        </Prose>

        <CaseStudySubheading>Key Screens</CaseStudySubheading>
        <CaseStudyTable
          headers={['Screen', 'Design decision', 'View']}
          rows={[
            ['Sign-up', 'Bonus on screen one; banking deferred to cash-out', '{{screenshot}}'],
            ['Receipt upload', 'Guided 4-step flow; one-tap camera; live validation', '{{screenshot}}'],
            ['Earnings dashboard', 'Plain progress to the threshold; no gamification noise', '{{screenshot}}'],
            ['Cash-out', 'E-transfer; transparent status; support one tap away', '{{screenshot}}'],
          ]}
        />
        <FlowStrip
          frames={[
            { content: <Figure placeholder="Sign-up" />, caption: 'Sign-up' },
            { content: <Figure placeholder="Receipt upload" />, caption: 'Receipt upload' },
            { content: <Figure placeholder="Earnings dashboard" />, caption: 'Earnings dashboard' },
            { content: <Figure placeholder="Cash-out" />, caption: 'Cash-out' },
          ]}
          caption="Figure 1. The four key screens — sign-up → receipt upload → earnings dashboard → cash-out."
        />

        <CaseStudySubheading>From Prototype to Shipped Product</CaseStudySubheading>
        <Prose>
          <p>I owned the Angular front-end end to end: architecture, component and state design, responsive behaviour, accessibility, and the production deploy, plus the API contract my backend partner and I built against.</p>
          <p>It shipped as a real product:</p>
          <ul>
            <li><strong>Bilingual EN / FR-CA:</strong> every string, status, and page title flips cleanly.</li>
            <li><strong>Accessibility:</strong> WCAG AA, passing AXE checks, with live announcements on receipt status changes.</li>
            <li><strong>A full admin console:</strong> the brand&rsquo;s reviewers approve receipts, manage payouts, and run the product catalog.</li>
          </ul>
        </Prose>
      </PhaseSection>

      <PhaseSection phase="test" heading="Test: Before launch, and with live data after">
        <Prose>
          <p>Testing happened twice: with real users on the prototype before launch, and with live data after.</p>
        </Prose>

        <CaseStudySubheading>Usability Testing</CaseStudySubheading>
        <Prose>
          <p>I ran moderated usability tests with {'{{N}}'} participants ({'{{N}}'} current users, {'{{N}}'} interested). Each completed a few core tasks:</p>
          <ul>
            <li>{'{{Task 1: e.g., upload a receipt for a recent purchase}}'}</li>
            <li>{'{{Task 2: e.g., check balance and start a cash-out}}'}</li>
          </ul>
          <p><strong>Goal:</strong> see how easily people moved through the flow, gather feedback on look and feel, and find points of confusion.</p>
        </Prose>

        <CaseStudySubheading>Key Findings</CaseStudySubheading>
        <Prose>
          <p>{'{{Overall reaction — e.g., participants found the upload flow clear and the cash-out trustworthy. Note any praise or sticking points.}}'}</p>
        </Prose>

        <CaseStudySubheading>Changes Made After Testing</CaseStudySubheading>
        <Prose>
          <p>The most useful part was watching where people hesitated. The fixes that came out of it:</p>
        </Prose>
        <div className="grid gap-5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="grid gap-2 rounded-md border border-hairline bg-cream-pale p-5">
              <CaseStudyMinorHeading>Issue {n}: {'{{title}}'}</CaseStudyMinorHeading>
              <p className="font-sans text-[0.9375rem] leading-[1.55] text-charcoal m-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-warm-grey">Before</span>{' '}
                {'{{what confused them}}'}
              </p>
              <p className="font-sans text-[0.9375rem] leading-[1.55] text-charcoal m-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-terracotta">After</span>{' '}
                {'{{what you changed}}'}
              </p>
            </div>
          ))}
        </div>

        <CaseStudySubheading>Final Product</CaseStudySubheading>
        <Prose>
          <p>{'{{Annotated final screens or a link. Call out 2–3 best moments: the upload flow, the reward card, the cash-out confirmation.}}'}</p>
        </Prose>
        <Figure
          placeholder="{{Final product: annotated screenshots / link}}"
          alt="Final product screenshots placeholder."
          variant="wide"
        />

        <CaseStudySubheading>Validating in Production</CaseStudySubheading>
        <Prose>
          <p>Testing didn&rsquo;t stop at launch. I instrumented the live product so the brand could see whether real behaviour matched the research.</p>
          <p>The GA4 layer tracks the full member journey &mdash; 30+ events, with four real conversions: account created, receipt submitted, payout requested, payment method added. Three decisions kept the data honest:</p>
          <ul>
            <li><strong>Privacy-first:</strong> nothing is tracked until the user consents.</li>
            <li><strong>Members vs. browsers:</strong> every session is tagged registered or guest, so reports show real members, not all traffic.</li>
            <li><strong>Bilingual in the data:</strong> language is captured as a property, so English and French behaviour is visible, not guessed.</li>
          </ul>
          <p>A Looker Studio dashboard turns the raw events into plain-language answers. Every research number that justified a decision is now a live metric.</p>
        </Prose>
        <CaseStudyTable
          headers={['Research said', 'The KPI it became']}
          rows={[
            ['myPurina rejects 60% of receipts', 'Our approval rate vs. that 40%'],
            ['90% aren&rsquo;t customers yet', '% of sign-ups who are first-time customers'],
            ['85% want this', 'Real engagement vs. that floor'],
          ]}
        />
        <CaseStudyMinorHeading>Early signals</CaseStudyMinorHeading>
        <StatGrid>
          <StatCallout value="{{N}}" label="Sign-ups" context="in {{X}} weeks" />
          <StatCallout value="{{N%}}" label="Receipt approval" context="vs. competitor's 40%" />
          <StatCallout value="${{N}}" label="Cashed out" context="across {{N}} redemptions" />
        </StatGrid>
      </PhaseSection>

      <CaseStudySection heading="Conclusion">
        <CaseStudySubheading>Main Insights</CaseStudySubheading>
        <Prose>
          <p>The research was clear: pet parents want cash, won&rsquo;t tolerate a slow or unreliable receipt process, and need to trust a new program before sharing banking details. Every major decision &mdash; cash over points, one-tap upload, security on every money screen, e-transfer payouts &mdash; traces back to one of those findings. Designing from data meant every review became &ldquo;show me the survey answer that says why.&rdquo;</p>
        </Prose>

        <CaseStudySubheading>What I Learned</CaseStudySubheading>
        <Prose>
          <ul>
            <li><strong>Pitching for research time was the highest-leverage hour of the project.</strong> Four weeks up front made every later decision faster.</li>
            <li><strong>Reliability is a strategy when everyone else is unreliable.</strong> A 60% rejection rate from the market leader was the whole opening.</li>
            <li><strong>Build the scoreboard before kickoff.</strong> Instrumenting from launch means &ldquo;did it work?&rdquo; has a real answer.</li>
            <li><strong>Launch is the start of research, not the end.</strong> Next: a quarterly micro-survey to live members, fed into the roadmap.</li>
          </ul>
        </Prose>
      </CaseStudySection>

      <CaseStudySection heading="Let&rsquo;s Connect">
        <Prose>
          <p>Thanks for reading. Happy to talk through any part of the process, or just say hi.</p>
          <p>
            <a href="mailto:carelmaeda@gmail.com">carelmaeda@gmail.com</a>
          </p>
        </Prose>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
