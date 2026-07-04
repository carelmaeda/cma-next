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

export const metadata: Metadata = {
  metadataBase: new URL('https://carelmaeda.com'),
  title: {
    template: '%s | Carel Maeda',
    default: 'Carel Maeda, Senior Product Designer',
  },
  description:
    'Senior Product Designer who ships strategy, design, and code, building toward Design Lead. Six years at Paygos, ~10–15% YoY revenue impact across enterprise accounts.',
  openGraph: {
    type: 'website',
    siteName: 'Carel Maeda',
    locale: 'en_US',
    title: 'Carel Maeda, Senior Product Designer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carel Maeda, Senior Product Designer',
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TGVPXPQKVJ`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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
