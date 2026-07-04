import { Compass, PenTool, Code2, Boxes, FlaskConical } from 'lucide-react';
import { MotionVertical, MotionStagger, MotionItem } from './Motions';

interface Service {
  number: string;
  title: string;
  detail: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    number: '01',
    title: 'Product Strategy',
    detail:
      'Discovery workshops, problem framing, stakeholder alignment: steering the product before a pixel is drawn.',
    Icon: Compass,
  },
  {
    number: '02',
    title: 'Product Design',
    detail:
      'End-to-end UX & UI: setting the quality bar from research and flows to the finished interface.',
    Icon: PenTool,
  },
  {
    number: '03',
    title: 'Front-end Engineering',
    detail:
      'Production React / Next.js. I speak engineering fluently, so design decisions survive the build.',
    Icon: Code2,
  },
  {
    number: '04',
    title: 'Design Systems',
    detail:
      'Owning the system end to end: tokens, components, and the standards that keep teams consistent.',
    Icon: Boxes,
  },
  {
    number: '05',
    title: 'Research & Testing',
    detail:
      'Interviews, usability, metrics: building the evidence that earns design a seat in roadmap decisions.',
    Icon: FlaskConical,
  },
];

/** Home "What I do" section — numbered service rows with hover-reveal icons. */
export default function Services() {
  return (
    <section id="services" className="py-page">
      <div className="wrap wrap--wide">
        <MotionVertical>
          <header className="mb-sub max-w-prose">
            <p className="eyebrow tracking-widest mb-4">What I do</p>
            <h2 className="text-h2 font-medium">From user research to shipped product.</h2>
          </header>
        </MotionVertical>

        <MotionStagger className="border-t border-hairline" stagger={0.06}>
          {services.map(({ number, title, detail, Icon }) => (
            <MotionItem key={number}>
              <div className="group flex cursor-default items-center justify-between gap-6 border-b border-hairline py-7 md:py-9">
                <div className="flex items-center gap-5 md:gap-8">
                  <span className="font-mono text-xs tracking-wider text-muted-ink transition-colors duration-300 ease-standard group-hover:text-ink">
                    {number}
                  </span>
                  <h3 className="flex items-center gap-4 text-h3 font-medium">
                    {/* Hover-reveal inline icon next to the word (ref detail).
                        The width anim is deliberate — the title sliding aside
                        IS the effect — but scoped so nothing else transitions. */}
                    <span className="inline-grid w-0 place-items-center overflow-hidden opacity-0 transition-[width,opacity] duration-300 ease-standard group-hover:w-[1.1em] group-hover:opacity-100">
                      <Icon className="size-[0.85em]" />
                    </span>
                    {title}
                  </h3>
                </div>
                <p className="hidden max-w-[24rem] text-right text-sm leading-[1.5] text-muted-ink transition-colors duration-300 ease-standard group-hover:text-ink md:block">
                  {detail}
                </p>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
