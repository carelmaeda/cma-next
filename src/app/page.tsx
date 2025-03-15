import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/partials/Hero';
import Work from './components/Work';

export default function Home() {
  return (
    <main>
      <div className="container-fluid">
      <Hero />
      </div>
      <section id="work" className="py-4">
      <Work />
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