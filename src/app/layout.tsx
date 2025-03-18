import type { Metadata } from 'next';
import { Inter, EB_Garamond } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script'; 
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';

const inter = Inter({ subsets: ['latin'] });
const garamond = EB_Garamond({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carel Maeda',
  description: 'Carel Maeda | UX UI Design',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${garamond.className}`}>
      <head>
        {/* Google Analytics Script */}
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

        {/* Bootstrap & Popper.js */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.6/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
