import type { Metadata } from 'next';
import { Newsreader, Spline_Sans, Spline_Sans_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script';
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';
import { cn } from '@/lib/utils';

// Headings + highlights + numerals. Editorial serif; italic is the highlight face.
const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

// Body copy + ALL UI/nav. Neutral sans, the workhorse.
const splineSans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Micro-labels, pills, tables, code — a real monospace matched to the sans.
const splineSansMono = Spline_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-spline-sans-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
});

// ≤60-char titles, ≤160-char descriptions. Every page overrides
// `openGraph`/`twitter` (Next merges those objects wholesale from the
// layout, so a page that skips them would ship the homepage's og:title).
const HOME_TITLE = 'Carel Maeda — Product Design Manager';
const HOME_DESCRIPTION =
  'Product Design Manager in Toronto who ships strategy, design, and code — leading UX research, design systems, and production front-end.';

export const metadata: Metadata = {
  metadataBase: new URL('https://carelmaeda.com'),
  title: {
    template: '%s | Carel Maeda',
    default: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  authors: [{ name: 'Carel Maeda', url: 'https://carelmaeda.com' }],
  creator: 'Carel Maeda',
  openGraph: {
    type: 'website',
    siteName: 'Carel Maeda',
    locale: 'en_US',
    url: '/',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(newsreader.variable, splineSans.variable, splineSansMono.variable)}
      suppressHydrationWarning
    >
      <head>
        {/* lazyOnload: gtag.js is ~100 KiB of mostly-unused JS — loading it
            after `load` keeps it out of the Lighthouse critical window. The
            trade-off (sub-2s bounces may go uncounted) is fine for a
            portfolio. */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TGVPXPQKVJ`}
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TGVPXPQKVJ');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link no-underline-grow">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
