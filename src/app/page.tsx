import Hero from './components/partials/Hero';
import Work from './components/partials/Work';
import Services from './components/partials/Services';
import About from './components/partials/About';
import ContactCTA from './components/partials/ContactCTA';

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
  knowsLanguage: ['en', 'pt', 'fr', 'es'],
};

export default function Home() {
  return (
    <main>
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
