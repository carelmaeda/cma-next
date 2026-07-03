import { MotionVertical } from './Motions';
import DesignThinkingDiagram from '../shared/DesignThinkingDiagram';

interface PhaseNote {
  number: string;
  title: string;
  body: string;
}

const phaseNotes: PhaseNote[] = [
  {
    number: '01',
    title: 'Empathize: I start with the people, not the brief.',
    body: 'Interviews, ride-alongs, surveys, support tickets. On Bonus Bowls I ran a 100-person survey before sketching anything; the resulting 85% interest signal is what gave the program a green light.',
  },
  {
    number: '02',
    title: 'Define: I turn observations into a single problem worth solving.',
    body: 'A reframed problem statement is the cheapest leverage in product. On the Paygos site, "Sell More. Spend Less." replaced a feature-list home page, one promise that the rest of the site could prove.',
  },
  {
    number: '03',
    title: 'Ideate: I bring options before I bring opinions.',
    body: 'I sketch widely, then narrow with criteria the team can defend. Suspend judgement first, evaluate against the problem statement second, the goal is to discover the right move, not to confirm the first one.',
  },
  {
    number: '04',
    title: 'Prototype: I build what I sketch.',
    body: "Design and code are one motion for me. The Paygos demo's Ownership Rule shipped as a real design system with lint-enforceable boundaries, not a Figma library hoping engineering would respect it.",
  },
  {
    number: '05',
    title: 'Test: I measure what we shipped and let the data argue.',
    body: 'Designs ship with success metrics defined upfront. Lighthouse scores, conversion funnels, qualitative follow-ups. Taste is the first draft; evidence is the version that stays.',
  },
];

export default function HowIWork() {
  return (
    <MotionVertical className="py-24 md:py-32">
      <header className="max-w-prose mb-16 md:mb-20">
        <p className="eyebrow mb-3">03 · How I work</p>
        <h2 className="text-h1">Design Thinking, end-to-end, applied to product and code.</h2>
        <p className="md:text-lg leading-[1.7] mt-6 max-w-[44rem]">
          Every project I ship runs through the same five phases. The methodology is borrowed from
          the Stanford d.school; the rigor is mine. Every case study below is organized around these
          phases so you can see exactly where my work lives.
        </p>
      </header>

      <div className="mb-20 md:mb-28">
        <DesignThinkingDiagram variant="full" />
      </div>

      {/* Phase notes, one paragraph per phase, ownership-forward */}
      <div className="grid gap-12 md:gap-x-16 md:gap-y-16 md:grid-cols-2">
        {phaseNotes.map((phase, i) => (
          <article
            key={phase.number}
            className={`flex flex-col gap-3 ${i % 2 === 1 ? 'md:mt-12' : ''}`}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display italic text-5xl leading-none">{phase.number}</span>
              <span className="eyebrow">Phase</span>
            </div>
            <h3 className="text-h4">{phase.title}</h3>
            <p className="leading-[1.7] max-w-prose">{phase.body}</p>
          </article>
        ))}
      </div>
    </MotionVertical>
  );
}
