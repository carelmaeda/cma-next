import type { Metadata } from 'next';
import Hero from './components/partials/Hero';
import Work from './components/partials/Work';
import Services from './components/partials/Services';
import About from './components/partials/About';
import ContactCTA from './components/partials/ContactCTA';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Carel Maeda',
  jobTitle: 'Senior Product Designer',
  url: 'https://carelmaeda.com',
  image: 'https://carelmaeda.com/images/profile.webp',
  sameAs: ['https://linkedin.com/in/carelmaeda', 'https://github.com/carelmaeda'],
  worksFor: {
    '@type': 'Organization',
    name: 'Paygos',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressCountry: 'CA',
  },
  knowsAbout: [
    'Product design',
    'UX research',
    'Design systems',
    'Product strategy',
    'Usability testing',
    'Front-end development',
  ],
  knowsLanguage: ['en', 'pt', 'fr', 'es'],
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Hero />
      <Work />
      <Services />
      <About />
      <ContactCTA />
    </main>
  );
}
