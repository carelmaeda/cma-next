import '@/styles/case-studies.css';
import '@/styles/globals.css';
import Work from '@/app/components/partials/Work';
import { FaFigma } from 'react-icons/fa';
import Image from 'next/image';

const DesignArchive = () => {
  return (
    <main>

         {/* More Stories HERO*/}
        <section>
          <div className="container-fluid bg-white p-5 text-center">
            <div className="d-none">
            <h1>Carel Maeda - UX/UI Designer & Developer</h1>
            <h2>Portfolio Showcase</h2>
            </div>
            <h3 className='display-4'>Design Archive</h3>
            <p className="lead">
                  A collection of past designs and creative projects.
              </p>
          </div>
      </section>
<section className="container d-grid gap-4 py-4">

   {/* Paygos Case Studies */}
    <div className='section-wrapper p-0'>
      <div>
         
        <div className='mx-auto text-center justify-content-center text-wrapper col-md-6 p-3 p-md-5'>
           {/* HERO */}
          <figure>
          <Image
            src="/images/design-archive1.webp"
            width={1320}
            height={269}
            alt=" Image showcasing Paygos Case Studies"
            loading="lazy"
            layout="responsive"
            className='img-fluid case-study-img'
          />
        </figure>
          <div>
            <h2 className='h3 m-0'>Paygos Case Studies</h2>
            <label className="m-0">Creating a set of case studies for presentations</label>
          </div>
          <div className="py-2">
            <span className="badge bg-primary me-2">FIGMA</span>
            <span className="badge bg-primary">Graphic Design</span>
          </div>
          <hr className="my-2" />
          <div className="py-2">
            <h5>Objective</h5>
            <p>
              I created a modular, reusable case study templates in Figma to showcase Paygos’ client success stories, enabling business directors to easily customize and share them with prospects.</p>
            <h5>Details</h5>
            <p>
            I designed a set of reusable building blocks in Figma using Auto Layout—things like headers, testimonials, and data visuals. 
            </p>
            <p>
            Then, I mixed and matched these blocks to create flexible templates that could handle all kinds of content.
            </p>
              <p>
              Finally, I turned them into polished, easy-to-use PDFs that work great for both digital sharing and printing.
              </p>
           {/* Figma Button */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <a
                href="https://www.figma.com/design/nAAD8LSGev5S7M6WqazDea/PAYGOS-One-Pagers?node-id=67-38&t=TILW15p53fPeHUly-1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center gap-2 "
              >
                <FaFigma size={16} />
                View Figma Artboards
              </a>
            </div>
          </div>
        </div>

      </div>
   </div>

 {/* Paygos Animated Presentation */}
    <div className='section-wrapper'>
      <div>
          {/* APP GIF */}
          <div className='col-md-6 mx-auto shadow-lg'>
          <Image
          className='rounded '
            src="/videos/design-archive-gif1.gif"
            width={1920}
            height={1080}
            alt=" GIF showcasing Paygos Case Studies"
            loading="lazy"
           layout="responsive"
          />
        </div>
        <div className='mx-auto text-center justify-content-center text-wrapper col-md-6 p-3 p-md-5'>
          <div>
            <h2 className='h3 m-0'> Paygos Animated Presentation</h2>
            <label className="m-0">A Dynamic Visual Overview of the Paygos Platform</label>
          </div>
          <div className="py-2">
            <span className="badge bg-primary me-2">FIGMA</span>
            <span className="badge bg-primary">Graphic Design</span>
          </div>
          <hr className="my-2" />
          <div className="py-2">
           <h5>Objective</h5>
            <p>
              I created an animated presentation to visually showcase the Paygos platform, highlighting its key features, user experience, and benefits for sales representatives and businesses.
            </p>
            <h5>Details</h5>
            <p>
              Using ,<strong> motion design</strong> and <strong>storytelling</strong>, I developed a dynamic sequence that presents Paygos as a brand and showcase some of their main features.
            </p>
            <p>
              Using Figma only, designed an engaging presentation, then I animated it all to make it more engaging and dynamic.
            </p>
            <p>
              Finally, this animated presentation can be used for stakeholder pitches, client demos, and various types of advertising on social media and at conferences. The possibilities are endless.
            </p>

           {/* Figma Button */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <a
                href="https://www.figma.com/proto/KsgNz9HJoKZWgywGoLFh4P/Paygos-Animated-Slides?page-id=0%3A1&node-id=4-10&p=f&viewport=158%2C248%2C0.02&t=pPIjzM5D2FibRdMI-1&scaling=contain&content-scaling=fixed&starting-point-node-id=3%3A2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center gap-2 "
              >
                <FaFigma size={16} />
                View Presentation
              </a>
            </div>
          </div>
        </div>

      </div>
   </div>

</section>
        <section className="container py-4">
            <Work/>
        </section>
    </main>
  );
};

export default DesignArchive;