'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { EASE_OUT } from './Motions';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks: { label: string; href: string; external?: boolean; track?: string }[] = [
  { label: 'Resume', href: '/cma-resume.pdf', external: true, track: 'resume_open' },
];

/** Light-grey live-status capsule with a pulsing neon-green dot. */
function StatusPill() {
  return (
    <span className="eyebrow hidden items-center gap-2 rounded-pill bg-pill px-4 py-1 md:inline-flex">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-accentGreen opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accentGreen" />
      </span>
      Open for new projects
    </span>
  );
}

/** Wordmark: "Carel Maeda" — plain serif semibold, no accent dot. */
function Wordmark() {
  return <span className="font-display font-semibold tracking-snug">Carel Maeda</span>;
}

/** Shared glass surface for the two navbar pills — blur + saturation,
 *  inset top highlight (edge refraction) and a contact shadow, deepening
 *  once content scrolls underneath. One source so the pair never drifts. */
function glassPill(scrolled: boolean) {
  return cn(
    'pointer-events-auto flex items-center rounded-pill border',
    'backdrop-blur-xl backdrop-saturate-150',
    'transition-[background-color,border-color,box-shadow] duration-300 ease-standard',
    scrolled
      ? 'border-hairline bg-white/90 shadow-glass-scrolled supports-[backdrop-filter]:bg-white/75'
      : 'border-hairline/70 bg-white/85 shadow-glass supports-[backdrop-filter]:bg-white/60',
  );
}

/** Fixed floating glass-pill navbar — desktop inline links, mobile sheet menu. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  // Same reduced-motion contract as Motions.tsx: identical markup for every
  // visitor, the preference only zeroes the duration (no hydration branch).
  const reduce = useReducedMotion();

  // Glass deepens once content actually slides underneath it — at the top of
  // the page the pill sits on plain white, so it stays quieter there.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Near-full-bleed: the pill spans the viewport with just a small
          fixed margin, wider than the wrap--wide content tier below it. */}
      <div className="px-4 pt-4 md:px-6">
        {/* Two floating glass pills — logo left, controls right — with the
            page visible through the gap between them. True glass, not just
            blur: backdrop saturation keeps content vivid through the pane,
            the inset top highlight (shadow-glass) reads as edge refraction,
            and a tight contact shadow grounds it. The bare nav container
            stays pointer-transparent so clicks in the gap reach the page;
            no items-center, so both pills stretch to the same height. */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
          className="flex justify-between gap-3"
        >
          {/* Left pill: wordmark */}
          <div className={cn(glassPill(scrolled), 'px-5 lg:px-6')}>
            <Link
              href="/"
              onClick={close}
              aria-label="Carel Maeda, Home"
              className="no-underline-grow shrink-0 py-2 transition-opacity duration-300 ease-standard hover:opacity-70"
            >
              <Wordmark />
            </Link>
          </div>

          {/* Right pill: status, links, CTA (and the mobile menu trigger).
              Mobile shows only the 44px menu button, so the pill hugs it
              with an even p-1 ring (a tidy near-circle) instead of the
              desktop py-2 + asymmetric padding, which ballooned both
              pills into ovals on small screens. */}
          <div className={cn(glassPill(scrolled), 'gap-4 p-1 lg:py-2 lg:pl-6 lg:pr-2')}>
            {/* Desktop */}
            <div className="hidden items-center gap-6 lg:flex">
              <StatusPill />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...(link.track ? { 'data-track': link.track, 'data-track-location': 'navbar' } : {})}
                  className="no-underline-grow text-sm font-medium tracking-snug text-ink/80 transition-colors duration-300 ease-standard hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" size="sm">
                <a
                  href="mailto:carelmaeda@gmail.com"
                  data-track="contact_click"
                  data-track-location="navbar"
                  className="no-underline-grow"
                >
                  Let&rsquo;s talk 👋
                </a>
              </Button>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-3 lg:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Toggle navigation">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-72 border-l border-hairline bg-white sm:w-80"
                >
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
                          {...(link.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          {...(link.track
                            ? { 'data-track': link.track, 'data-track-location': 'navbar_menu' }
                            : {})}
                          onClick={close}
                          className="no-underline-grow py-3 text-3xl font-medium tracking-snug transition-opacity duration-300 ease-standard hover:opacity-60"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Button asChild variant="default" size="default" className="mt-8 w-full">
                        <a
                          href="mailto:carelmaeda@gmail.com"
                          data-track="contact_click"
                          data-track-location="navbar_menu"
                          onClick={close}
                          className="no-underline-grow"
                        >
                          Let&rsquo;s talk 👋
                        </a>
                      </Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
