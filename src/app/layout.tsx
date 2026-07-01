import type { Metadata } from 'next';
import { Space_Grotesk, Roboto_Serif, Outfit } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script';
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';
import { cn } from '@/lib/utils';

// Headings + ALL UI/nav. Weight 500 almost everywhere, tight negative tracking.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Numerals / data ONLY, the serif-vs-grotesque tension is the signature detail.
const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-roboto-serif',
  display: 'swap',
  weight: ['400', '500'],
});

// Body copy + tiny functional micro-labels. Neutral, recedes.
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
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
      className={cn(spaceGrotesk.variable, robotoSerif.variable, outfit.variable)}
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
