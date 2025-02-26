import type { Metadata } from 'next';
import { Inter,EB_Garamond } from 'next/font/google';
import '@/styles/globals.css';
import Script from 'next/script'; // Import the Script component
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';


const inter = Inter({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Carel Maeda',
  description: 'Carel Maeda | UX UI Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${garamond.className}`}>
      <body>
      <Navbar />
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}