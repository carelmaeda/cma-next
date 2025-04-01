import '@/styles/case-studies.css';
import Image from 'next/image';
import { FaFigma, FaPlay } from 'react-icons/fa';
import Work from '@/app/components/partials/Work';

const BirdsEye = () => {
  return (
    <main>
      <section>
        {/* Hero Section */}
        <div className="row case-study-2 p-3 p-md-5 justify-content-md-center align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            {/* APP GIF */}
            <Image
              src="/videos/birdseye-gif1.gif"
              width={350}
              height={620}
              alt="Screen Recording GIF showcasing Paygos prototype"
              unoptimized
              loading="lazy"
            />
          </div>
          <div className="col-md-4 text-wrapper text-white">
            <div>
              <h1 className="d-none">Case Studies</h1>
              <h2 className='h1 text-white'>Gamefying Receipts</h2>
              <label className="m-0">Designing a Simple and Engaging Receipt Tracker System for Birdseye</label>
            </div>
            <div className="py-2">
              <span className="badge me-2">UX &amp; UI</span>
              <span className="badge me-2">FIGMA</span>
              <span className="badge">Wireframing</span>
            </div>
            <hr className="my-2" />
            <div className="py-2">
              <h5>Summary</h5>
              <p>I designed platform for BirdsEye that encouraged users to upload receipts in exchange for rewards, boosting engagement and customer loyalty.              </p>
              <h5>Problem Statement</h5>
              <p>BirdsEye needed an effective way to collect customer data and gain insights into purchasing behavior.              </p>
              <h5>Solution</h5>
              <p>A simple and intuitive platform that made receipt submission effortless while incorporating game mechanics to keep users engaged and motivated.              </p>
          
          {/* Play Button */}
          <div className="d-flex align-items-center my-3">
            <a
              href="https://www.figma.com/proto/FQvq1XSAg0904hF2QS1iF8/Vet-Mobile-3.0?page-id=0%3A1&node-id=1-4421&p=f&viewport=-166%2C159%2C0.03&t=AlTwewAMyTPezQOI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4421"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-icon d-flex align-items-center gap-2"
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
            <div className="p-3 row justify-content-center">
              {/* Sticky */}
              <Image  
                src="/images/sticky2.webp"
                alt="Sticky note with details"
                width={400}
                height={400}
                quality={100}
                className="col-9 col-md-3 img-fluid my-3"
                loading="lazy"
              />

              {/* NavIndex */}
              <div className="col-md-auto d-grid my-3">
                <h4>Jump to Section</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="#introduction">Introduction</a></li>
                  <li className="list-group-item"><a href="#idea">The Idea</a></li>
                  <li className="list-group-item"><a href="#approach">UX Approach</a></li>
                  <li className="list-group-item"><a href="#result">The Results</a></li>
                  <li className="list-group-item"><a href="#conclusion">Conclusion</a></li>
                </ul>
              </div>
            </div>

            <div className="p-3 d-grid gap-4 mx-auto text-wrapper col-md-6">
              {/* Intro */}
              <div id="introduction">
                <h4>Introduction</h4>
                <p>BirdsEye needed a way to better <strong>understand customer behavior and strengthen engagement.</strong></p>
                <p>Collecting purchase data was crucial, but getting users to willingly share their receipts was a challenge.</p>
                <p>The goal was to create an experience that motivated participation while also benefiting the customer.</p>

              </div>

              {/* Idea */}
              <div id="idea">
                <h4>The Idea? A Gamified Experience</h4>
                <p>After brainstorming with the client, we landed on a simple solution: a platform where users upload their receipts.</p>
                <p>But just asking people to upload receipts wasn’t enough—we needed to make it <strong>fun and rewarding.</strong></p>

                <p>We needed a platform that turned receipt uploads into a game. Here’s how it works:</p>
                <ul>
                  <li>Every uploaded receipt filled a progress bar.</li>
                  <li>Once the bar was full, the user unlocked rewards.</li>
                  <li>Rewards ranged from BirdsEye freebies to Netflix subscriptions and coffee gift cards.</li>
                </ul>
                <p>After rounding up the idea with the client and brainstorming with the team, we mapped out the ideal User Journey below:</p>

                <figure>
                  <Image
                    src="/images/birdseye3.webp"
                    alt="Paygos Prototype Design"
                    width={600}
                    height={390}
                    quality={100}
                    className="img-fluid case-study-img"
                    loading="lazy"
                  />
                  <figcaption>Figjam board with the proposed User Journey.</figcaption>
                </figure>
              </div>

              {/* Solution */}
              <div id="approach">
                <h4>The UX Approach</h4>
                 <ul>
                  <li><strong>Seamless Onboarding: </strong>Users could quickly sign up and start uploading receipts with minimal effort.</li>
                  <li><strong>Progress Tracking: </strong> A visual progress bar showed how close they were to earning their next reward.</li>
                  <li><strong>Instant Gratification: </strong>Unlocking rewards felt satisfying and encouraged repeat participation.</li>
                  <li><strong>Personalized Rewards: </strong>Users could select from a variety of reward options, making the experience more appealing.</li>
                </ul>
                 <p>Using this information I created a mid fidelity version of the platform:</p>
                 <figure>
                  <Image
                    src="/images/birdseye2.webp"
                    alt="Paygos Prototype Design"
                    width={600}
                    height={390}
                    quality={100}
                    className="img-fluid case-study-img"
                    loading="lazy"
                  />
                  <figcaption>This is a snip of the mid fidelity screens showing the receipt upload workflow.</figcaption>
                </figure>
              </div>

              {/* Results */}
              <div id="result">
                <h4>The Result</h4>
                <p>
                  By making the process interactive and rewarding, we transformed a simple data collection task into an engaging experience.
                </p>
                <p>The platform led to increased receipt submissions, provided valuable customer insights, and gave BirdsEye a powerful way to personalize marketing based on real purchase data.</p>
                 <figure>
                  <Image
                    src="/images/birdseye4.webp"
                    alt="Paygos Prototype Design"
                    width={300}
                    height={365}
                    quality={100}
                    className="mx-auto"
                    loading="lazy"
                  />
                  <figcaption>High Fidelity mock-up of the Home Page</figcaption>
                </figure>             
              </div>

              {/* Conclusion */}
              <div id="conclusion">
                <h4>Conclusion and Takeways</h4>
              <p>This project proved that a small shift in approach can have a big impact. Instead of simply requesting receipts, we made users want to upload them. And that made all the difference.</p>
                <ul>
                  <li>Users are more likely to share data when there’s a clear, tangible benefit.</li>
                  <li>Gamification can turn routine tasks into engaging experiences</li>
                  <li>Simple UX elements—like a progress bar—can drive user participation.</li>
                </ul>

              <p>Below you can see a few mid fidelity screens finalized and also have access to the full Figma project:</p>

              <figure>
                <Image
                  src="/images/birdseye1.webp"
                  alt="Final Paygos Prototype"
                  width={600}
                  height={390}
                  quality={100}
                  className="case-study-img"
                  loading="lazy"
                />
                <figcaption>Mid Fidelity screens that were approved by the client</figcaption>
              </figure>

              {/* Figma Button */}
              <div className="d-flex justify-content-center align-items-center mb-4">
                <a
                  href="https://www.figma.com/design/yEr60Fn1iaoISg278NLXRk/Conagra-v1.0?node-id=0-1&t=87ji4Sug93aLPN5Q-1"
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

export default BirdsEye;
