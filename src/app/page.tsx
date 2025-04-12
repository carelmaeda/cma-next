import About from './components/partials/About';
import Contact from './components/partials/Contact';
import Hero from './components/partials/Hero';
import Work from './components/partials/Work';
import PaygosPrototype from './case-studies/paygos-prototype/page';

export default function Home() {
  return (
    <main>
      <div className="container-fluid">
      <Hero />
      </div>
      <section className="container py-4">
         <PaygosPrototype/>
      </section>
      <section id="work" className="container py-4">
        <Work/>
      </section>
      <section id="about" className="container py-4">
        <About />
      </section>
      <section id="contact" className="container py-4">
        <Contact />
      </section>
    </main>
  );
}