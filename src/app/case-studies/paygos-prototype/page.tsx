import '@/styles/case-studies.css';
import Image from 'next/image';
import { FaFigma, FaPlay } from 'react-icons/fa';

const PaygosPrototype = () => {
  return (
    <section>
      {/* Body Section */}
      <div className="section-wrapper p-0">
      {/* Hero Section */}
      <div className="row case-study-1 p-3 p-md-5 justify-content-md-center align-items-center">
        <div className="col-md-4 d-flex justify-content-center">
            {/* APP Video */}
          <video autoPlay loop muted playsInline>
            <source src="/videos/paygos-prototype-video1.webm" type="video/webm" />
            <source src="/videos/paygos-prototype-video1.mp4" type="video/mp4" />  
          </video>
        </div>
        <div className="col-md-4 text-wrapper">
          <div>
            <h1 className="d-none">Case Studies</h1>
            <h2>From One Day to One Hour</h2>
            <label className="m-0">How I Expanded a Business by Designing a Scalable Figma Prototype</label>
          </div>
          <div className="py-2">
            <span className="badge me-2">UX &amp; UI</span>
            <span className="badge me-2">FIGMA</span>
            <span className="badge">Wireframing</span>
          </div>
          <hr className="my-2" />
          <div className="py-2">
            <h5>Summary</h5>
            <p>
              Designed an <strong>interactive Figma prototype</strong> that can be branded for a client with just a few clicks.
            </p>
            <h5>Problem Statement</h5>
            <p>
              The company needed a demo of their platform to present to clients.
            </p>
            <h5>Solution</h5>
            <p>
              A hi-fi Figma prototype with <strong>dynamic branding compnents and variables</strong>, allowing them to tailor the platform for each client with just a few clicks.</p>
            <h5>Metrics</h5>
            <p>
              Reduced presentation prep time <strong>from 1 full day to only 1 hour</strong> - leading to increased client
              acquisition.
            </p>
             {/* Play Button */}
          <div className="d-flex align-items-center my-3">
            <a
              href="https://www.figma.com/proto/FQvq1XSAg0904hF2QS1iF8/Vet-Mobile-3.0?page-id=0%3A1&node-id=1-4421&p=f&viewport=-166%2C159%2C0.03&t=AlTwewAMyTPezQOI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4421"
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
        <div className="p-3 row justify-content-center">
          {/* Sticky */}
          <Image
            src="/images/sticky1.webp"
            alt="Sticky note with Paygos prototype details"
            width={330}
            height={250}
            quality={100}
            sizes="(max-width: 370px) 33vw, (max-width: 767px) 33vw, 20.833333333333336vw"
            className="col-9 col-md-4 img-fluid my-3"
            loading="lazy"
          />

          {/* NavIndex */}
          <div className="col-md-auto d-grid my-3">
            <h4>Jump to Section</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a className="" href="#introduction">
                    Introduction
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="" href="#idea">
                    Let&rsquo;s Develop! - An Initial Idea
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="" href="#solution">
                    The Solution? Figma!
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="" href="#design">
                    Designing with the Team
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="" href="#result">
                    The Result
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="" href="#conclusion">
                    Conclusion
                  </a>
                </li>
              </ul>
          </div>
        </div>

        <div className=" p-3 d-grid gap-4 mx-auto text-wrapper col-md-6">
          {/* Intro */}
          <div id="introduction">
            <h4>Introduction</h4>
            <p>The Fintech&rsquo;s Business Directors needed to present their product to as many clients as possible in the shortest amount of time.</p>
            <p>To increase client acquisition, they wanted to present a branded version of their platform to each client. This approach was meant to make clients feel more identified with the product while helping them visualize the User Experience.</p>
            <p>However, their current process was time-consuming. They manually built PowerPoint presentations and Photoshopped still screens for each client, taking up to one full day per client. This was unsustainable and limited their ability to scale and prospect clients.</p>
          </div>

          {/* Idea */}
          <div id="idea">
            <h4>Let&rsquo;s Develop! - An Initial Idea</h4>
            <p>My first thought was to design and develop a live demo website that was easily accessible for the directors to present. This demo version would showcase the platform&rsquo;s functionality with unbranded images and fake data, giving clients a realistic feel of how the platform works.</p>
            <p>But there was a problem: we had no developers or project managers to support such a project. Maintaining and updating a live platform would also be time-consuming. I needed a quicker, simpler, and more feasible solution.</p>
          </div>

          {/* Solution */}
          <div id="solution">
            <h4>The Solution? Figma!</h4>
            <p>I pivoted to creating a high-fidelity Figma prototype that mimicked a live website. Users could click through and interact with the platform&rsquo;s features as if it were real.</p>
            <p>The best part? This prototype was highly customizable. With just a few clicks, we could update the logo, colors, typography, product images, and names to match each client&rsquo;s branding.</p>
          </div>

          {/* Design */}
          <div id="design">
            <h4>Designing with the Team</h4>
            <p className="my-0">I collaborated with Project Managers, who provided a basic navbar and user flows for each feature. This helped me identify which pages to design and how users would navigate the platform.</p>
            <figure>
              <Image
                src="/images/paygos-prototype2.webp"
                alt="Paygos Prototype Design"
                width={600}
                height={390}
                quality={100}
                className="img-fluid case-study-img"
                loading="lazy"
              />
              <figcaption>Here is a snap of our Figjam containing some work flows.</figcaption>
            </figure>
            <p>After finalizing the design, prototyping extensively, and testing it with the team, the platform looked polished and ready for client presentations!</p>
            <strong>But we&rsquo;re not done! We still needed to make it scalable for branding.</strong>

          </div>

          {/* Results */}
          <div id="result">
            <h4>The Result</h4>
            <p>The final prototype was a game-changer. Not only did it look and feel like a real product, but it also <strong>reduced the time needed to prepare client presentations from one day to one hour.</strong></p>
          </div>

          <figure>
          {/*video*/}
          <video autoPlay loop muted playsInline>
            <source src="/videos/paygos-prototype-video2.webm" type="video/webm" />
            <source src="/videos/paygos-prototype-video2.mp4" type="video/mp4" />  
          </video>
            <figcaption>With just a few clicks I can change all the products in this prototype</figcaption>
          </figure>
         

          {/* Conclusion */}
          <div id="conclusion">
            <h4>Conclusion</h4>
            <p>By designing a scalable Figma prototype, I helped the fintech streamline its client acquisition process, saving time and driving business growth.</p>
          </div>

           <figure>
            <Image
              src="/images/paygos-prototype1.webp"
              alt="Final Paygos Prototype"
              width={600}
              height={390}
              quality={100}
              className="case-study-img"
              loading="lazy"
            />
            <figcaption>This is a view of all the prototypes I created over the months using this template. Each file contains a branded version of the template ready to be presented to the client.</figcaption>
          </figure>
          
            {/* Figma Button */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <a
                href="https://www.figma.com/design/FQvq1XSAg0904hF2QS1iF8/Vet-Mobile-3.0?node-id=0-1&t=jz44dIPdCVOATYvN-1"
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
    </section>
  );
};

export default PaygosPrototype;