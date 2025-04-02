import '@/styles/case-studies.css';
import Image from 'next/image';
import { FaFigma, FaPlay } from 'react-icons/fa';
import Work from '@/app/components/partials/Work';

const Wealthie = () => {
  return (
    <main>
      <section>
        {/* Hero Section */}
        <div className="row case-study-3 p-3 p-md-5 justify-content-md-center align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            {/* APP GIF */}
            <Image
              src="/videos/wealthie-gif1.gif"
              width={350}
              height={620}
              alt="Screen Recording GIF showcasing Wealthie App"
              unoptimized
              loading="lazy"
            />
          </div>
          <div className="col-md-4 text-wrapper text-white">
          <div>
            <h1 className="d-none">Case Studies</h1>
            <h2 className="h1 text-white">Wealthie: Smart Finance for Young Adults</h2>
            <label className="m-0">Designing an AI-Powered Financial App for the Next Generation</label>
          </div>
          <div className="py-2">
            <span className="badge me-2">UX &amp; UI</span>
            <span className="badge me-2">FIGMA</span>
            <span className="badge">Wireframing</span>
          </div>
          <hr className="my-2" />
          <div className="py-2">
            <h5>Summary</h5>
            <p>I designed and built Wealthie, a financial app that uses AI to analyze spending habits and provide smart suggestions for saving and investing.</p>
            <h5>Problem Statement</h5>
            <p>Young adults struggle with financial planning and often feel overwhelmed by budgeting and investing.</p>
            <h5>Solution</h5>
            <p>A user-friendly app that leverages AI to offer personalized financial insights, making money management easy and engaging.</p>
        
        {/* Play Button */}
        <div className="btn-wrapper">
          <a
            href="https://www.figma.com/proto/Y69VVPc9rl5039Jqj9720z/Wealthie?page-id=0%3A1&node-id=39-2737&p=f&viewport=-876%2C-161%2C0.13&t=bmoV5VudWEWsAZNk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=39%3A2737&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-icon"
          >
            <FaPlay size={14} />
            View Hi Fi Prototype
          </a>
        </div>
          </div>
          </div>
        </div>

        <div className="container">
          <div className="section-wrapper">
            <div className="p-3 d-grid gap-4 mx-auto text-wrapper col-md-6">
            {/* NavIndex */}
              <div className="d-grid my-3">
                <h4>Jump to Section</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="#introduction">Introduction</a></li>
                  <li className="list-group-item"><a href="#challenge">The Challenge</a></li>
                  <li className="list-group-item"><a href="#solution">The Solution</a></li>
                  <li className="list-group-item"><a href="#result">The Results</a></li>
                  <li className="list-group-item"><a href="#conclusion">Conclusion</a></li>
                </ul>
              </div>
              {/* Intro */}
              <div id="introduction">
                <h4>Introduction</h4>
                <p>The client reached out to me with a clear goal: to create a financial app for teenagers, powered by Artificial Intelligence.</p>
                <p>The app needed to be simple to use, intuitive, and leverage AI to help users manage their finances smarter.</p>
              </div>

              {/* The Challenge */}
              <div id="challenge">
                <h4>The Challenge? Blending AI with Finance</h4>
                <p>Finance apps can feel intimidating, especially for younger users who might not be familiar with investing or budgeting.</p>
                <p>The challenge was to design an app that made financial management easy, engaging, and actionable while also introducing A.I elements</p>

              </div>

              {/* Solution */}
              <div id="solution">
                <h4>The Solution</h4>
                <p>I designed and built Wealthie with a focus on simplicity, personalization, and AI-driven insights.</p>
                <p>Key Features & Design Decisions:</p>
                 <ul>
                  <li><strong>AI-Powered Financial Insights:</strong> Users could quickly sign up and start uploading receipts with minimal effort.</li>
                  <li><strong>Minimalist UI: </strong> A visual progress bar showed how close they were to earning their next reward.</li>
                  <li><strong>Gamified Savings Goals: </strong>Unlocking rewards felt satisfying and encouraged repeat participation.</li>
                  <li><strong>Conversational AI Assistant: </strong>Users could select from a variety of reward options, making the experience more appealing.</li>
                  <li><strong>Dark Mode & Custom Themes: </strong>Recognizing the tech-savvy audience, I included customization options for a more personalized experience.</li>
                </ul>
                 <figure>
                  <Image
                    src="/images/wealthie1.webp"
                    alt="Paygos Prototype Design"
                    width={390}
                    height={600}
                    quality={100}
                    className="img-fluid w-50 mx-auto"
                    loading="lazy"
                  />
                  <figcaption>Figjam board with the Project Details.</figcaption>
                </figure>

                <div className="text-highlight">
                  <p className="text-center">I also designed a dedicated icon to represent Wealthie&rsquo;s AI.</p>
                 <figure className='m-0'>
                  <Image
                    src="/images/wealthie4.webp"
                    alt="Paygos Prototype Design"
                    width={35}
                    height={35}
                    quality={100}
                    loading="lazy"
                    className='mx-auto'
                  />
                </figure>
                </div>
              </div>

            {/* Approach */}
              <div id="approach">
                <h4>The UX Approach</h4>
                <p>These were my insights analyzing the users and the industry</p>
                 <ul>
                  <li><strong>User Research & Persona Development:</strong>I studied the behaviors of young adults when it comes to finance, identifying their pain points and goals.</li>
                  <li><strong>Iterative Design Process: </strong>Based on user feedback, I fine-tuned the app&apos;s features and interface to ensure clarity and engagement, the client also assisted with feedback</li>
                  <li><strong>Adding A.I:</strong>One of the feedback points was to make an A.I. screen easily accessible at all times for users, and it didn&rsquo;t need to be a full screen.</li>
                </ul>
                 <figure>
                 <p>Using this information I created a screen dedicated just for interactions with Wealthie&apos;s A.I.:</p>
                  <Image
                    src="/images/wealthie3.webp"
                    alt="Paygos Prototype Design"
                    width={600}
                    height={390}
                    quality={100}
                    className="img-fluid mx-auto"
                    loading="lazy"
                  />
                  <figcaption>The always accessible A.I button triggers the AI screen to pop up</figcaption>
                </figure>
              </div>



              {/* Results */}
              <div id="result">
                <h4>The Result</h4>
                <p>Wealthie provides an AI-driven, user-friendly financial experience designed for young adults.</p>
                <p>By making budgeting and investing approachable, the app empowers users to take control of their money without feeling overwhelmed.</p>
              </div>

              {/* Conclusion */}
              <div id="conclusion">
                <h4>Conclusion and Takeways</h4>
              <p>Wealthie transformed financial planning into something intuitive and actionable. It&apos;s more than just an app—it&apos;s a financial coach in your pocket.</p>
                <ul>
                  <li>AI can make financial management easier, but the UX still needs to simplify complex concepts.</li>
                  <li>If you assign an engaging visual to a feature or a service, the user will find it easier to engage</li>
                  <li>A conversational, friendly approach makes finance apps feel less intimidating.</li>
                </ul>

              <p>Below you can see a few mid fidelity screens finalized and also have access to the full Figma project:</p>

              <figure>
                <Image
                  src="/images/wealthie2.webp"
                  alt="Final Paygos Prototype"
                  width={600}
                  height={390}
                  quality={100}
                  className="img-fluid case-study-img"
                  loading="lazy"
                />
                <figcaption>High Fidelity screens that were approved by the client</figcaption>
              </figure>

              {/* Figma Button */}
              <div className="d-flex justify-content-center align-items-center mb-4">
                <a
                  href="https://www.figma.com/design/Y69VVPc9rl5039Jqj9720z/Wealthie?node-id=0-1&t=j0YiAzQTwaLcEweT-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-primary d-flex align-items-center gap-2 "
                >
                  <FaFigma size={16} />
                  View Figma Artboards
                </a>
              </div>
             </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <Work />
      </section>
    </main>
  );
};

export default Wealthie;
