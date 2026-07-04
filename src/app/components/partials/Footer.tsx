import Link from 'next/link';
import { Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '../shared/BrandIcons';

const explore = [
  { label: 'Work', href: '/#work' },
  { label: 'Resume', href: '/cma-resume.pdf', external: true },
];

const social = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/carelmaeda', Icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/carelmaeda', Icon: GitHubIcon },
  { label: 'Email', href: 'mailto:carelmaeda@gmail.com', Icon: Mail },
];

/** Site-wide footer — inline nav, social icon buttons, and colophon. */
export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-white pb-10 pt-20 md:pt-24">
      <div className="wrap wrap--wide">
        {/* Utility bar — inline nav + social icon buttons, capping the wordmark */}
        <div className="flex flex-col gap-8 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {explore.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="no-underline-grow -mx-2 -my-3.5 inline-block px-2 py-3.5 text-sm font-medium tracking-snug text-ink/75 transition-colors duration-300 ease-standard hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="no-underline-grow grid size-11 place-items-center rounded-full border border-hairline text-muted-ink transition duration-300 ease-standard hover:-translate-y-1 hover:border-ink hover:text-ink"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Colophon */}
        <div className="eyebrow flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Carel Maeda · Senior Product Designer · Toronto, Canada</span>
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              I built this using Next.js + Tailwind ·{' '}
              <a
                href="https://github.com/carelmaeda/cma-next"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline-grow -my-3.5 inline-block py-3.5 text-ink transition-opacity duration-300 ease-standard hover:opacity-60"
              >
                Source ↗
              </a>
            </span>
            {/* "#top" scrolls to the document top on every page (HTML spec
                fallback) — "#hero" only exists on the home page. */}
            <a
              href="#top"
              className="no-underline-grow -my-3.5 inline-block py-3.5 text-ink transition-opacity duration-300 ease-standard hover:opacity-60"
            >
              Back to top ↑
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
