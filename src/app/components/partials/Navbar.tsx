'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: 'Resume', href: '/cma-resume.pdf', external: true },
];

/** Light-grey live-status capsule with a pulsing neon-green dot. */
function StatusPill() {
  return (
    <span className="eyebrow hidden items-center gap-2 rounded-pill bg-pill px-4 py-1 md:inline-flex">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentGreen opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accentGreen" />
      </span>
      Open for new projects
    </span>
  );
}

/** Wordmark: "Carel Maeda" + an electric-blue accent dot (the only chrome colour). */
function Wordmark() {
  return (
    <span className="inline-flex items-baseline gap-1 font-display text-base font-semibold tracking-snug text-ink">
      Carel Maeda
      <span className="ml-1 h-2 w-2 -translate-y-px rounded-full bg-accentBlue" aria-hidden="true" />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="wrap wrap--wide pt-4">
        {/* Self-contained floating glass pill — bounded edge + hairline + soft
            shadow reads as an intentional frosted element, never a smear. */}
        <nav className="pointer-events-auto flex items-center justify-between gap-4 rounded-pill border border-hairline/80 bg-white/80 py-2 pl-6 pr-2 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-white/65">
        <Link
          href="/"
          onClick={close}
          aria-label="Carel Maeda, Home"
          className="no-underline-grow shrink-0 transition-opacity duration-300 ease-standard hover:opacity-70"
        >
          <Wordmark />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          <StatusPill />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="no-underline-grow font-sans text-sm font-medium tracking-snug text-ink/80 transition-colors duration-300 ease-standard hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="default" size="sm">
            <Link href="/#contact" className="no-underline-grow">
              Let&rsquo;s talk 👋
            </Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Toggle navigation">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-l border-hairline bg-white sm:w-80">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Site navigation and primary call-to-action.
              </SheetDescription>
              <nav className="mt-12 flex flex-col gap-1">
                <p className="eyebrow mb-4">Menu</p>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      onClick={close}
                      className="no-underline-grow py-3 font-sans text-3xl font-medium tracking-snug text-ink transition-opacity duration-300 ease-standard hover:opacity-60"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild variant="default" size="default" className="mt-8 w-full">
                    <Link href="/#contact" onClick={close} className="no-underline-grow">
                      Let&rsquo;s talk 👋
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        </nav>
      </div>
    </header>
  );
}
