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
    detail: 'Discovery, positioning, problem framing: the cheapest leverage in product.',
    Icon: Compass,
  },
  {
    number: '02',
    title: 'Product Design',
    detail: 'End-to-end UX & UI: research, flows, prototypes, the finished interface.',
    Icon: PenTool,
  },
  {
    number: '03',
    title: 'Front-end Engineering',
    detail: 'Production React / Next.js. I ship the code, not a handoff file.',
    Icon: Code2,
  },
  {
    number: '04',
    title: 'Design Systems',
    detail: 'Tokens, components, and contracts enforced at the lint layer.',
    Icon: Boxes,
  },
  {
    number: '05',
    title: 'Research & Testing',
    detail: 'Interviews, surveys, usability, metrics: taste backed by evidence.',
    Icon: FlaskConical,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-page">
      <div className="wrap wrap--wide">
        <MotionVertical>
          <header className="mb-sub max-w-prose">
            <p className="eyebrow tracking-widest mb-4">What I do</p>
            <h2 className="text-h2 font-medium">
              One person, the whole arc, from the first interview to the shipped build.
            </h2>
          </header>
        </MotionVertical>

        <MotionStagger className="border-t border-hairline" stagger={0.06}>
          {services.map(({ number, title, detail, Icon }) => (
            <MotionItem key={number}>
              <div className="group flex cursor-default items-center justify-between gap-6 border-b border-hairline py-7 transition-colors duration-300 ease-standard md:py-9">
                <div className="flex items-center gap-5 md:gap-8">
                  <span className="font-mono text-xs tracking-wider text-muted-ink">{number}</span>
                  <h3 className="flex items-center gap-4 text-h3 font-medium">
                    {/* Hover-reveal inline icon next to the word (ref detail). */}
                    <span className="inline-grid w-0 place-items-center overflow-hidden opacity-0 transition-all duration-300 ease-standard group-hover:w-[1.1em] group-hover:opacity-100">
                      <Icon className="size-[0.85em]" />
                    </span>
                    {title}
                  </h3>
                </div>
                <p className="hidden max-w-[24rem] text-right text-sm leading-[1.5] text-muted-ink md:block">
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
