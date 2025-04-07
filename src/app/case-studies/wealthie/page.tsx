import '@/styles/case-studies.css';
import Image from 'next/image';
import { FaFigma, FaPlay } from 'react-icons/fa';
import Work from '@/app/components/partials/Work';
import { MotionScaleIn, MotionHero, MotionVertical, MotionHorizontal } from '@/app/components/partials/Motions';
import ImageZoom from '@/app/components/partials/ImgZoom';

const Wealthie = () => {
  return (
    <main>
      <section> 
        {/* Hero Section */}
        <div className="row case-study-3 p-3 p-md-5 justify-content-center align-items-center">
          <MotionHero className="col-8 col-md-3 d-flex justify-content-center">
            {/* APP Video */}
            <figure aria-label="Demo video of Wealthie App">
              <video autoPlay loop muted playsInline>
                <source src="/videos/wealthie-video1.webm" type="video/webm" />
                <source src="/videos/wealthie-video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </figure>
          </MotionHero>
          <MotionHero className="col-md-4 text-wrapper text-white d-grid gap-3">
          <div>
            <h1 className="d-none">Case Studies</h1>
            <h2 className="text-white">Smart Finance for Young Adults</h2>
            <small className="m-0">Meet Wealthie: an AI-Powered Financial App for the Next Generation</small>
          </div>
           <div>
            <h5>Timeframe</h5>
            <p>7 Days</p>
          </div>  
          <div>
            <h5>Project Overview</h5>
            <p>Wealthie is a teen-focused finance app that uses AI to make budgeting and saving simple, fun, and personalized. I led the design process, from research to testing, to create an intuitive, gamified experience that empowers young users to manage their money with confidence.</p>
          </div>
          <div>
             <h5>My Role</h5>
             <div className="badge-wrapper">
              <span className="badge">UX &amp; UI</span>
              <span className="badge">Visual Design</span>
              <span className="badge">Branding</span>
              <span className="badge">User Flow</span>
              <span className="badge">Research</span>
              <span className="badge">Prototype &amp; Testing</span>
             </div>
          </div>
            <div>
             <h5>Tools</h5>
             <div className="badge-wrapper">
                <span className="badge">Figma</span>
                <span className="badge">Figjam</span>
                <span className="badge">Zoom</span>
                <span className="badge">Google Forms</span>
             </div>
          </div>        

        {/* Play Button */}
        <div className="w-100">
          <a
            href="https://www.figma.com/proto/Y69VVPc9rl5039Jqj9720z/Wealthie?page-id=0%3A1&node-id=39-2737&p=f&viewport=-876%2C-161%2C0.13&t=bmoV5VudWEWsAZNk-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=39%3A2737&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className='btn btn-icon'
          >
            <FaPlay size={14} />
            View Hi-Fi Prototype
          </a>
          </div>
          </MotionHero>
        </div>

        {/* Body Section */}
        <div className="container">
          <div className="section-wrapper">
            <div className="p-3 d-grid gap-4 mx-auto text-wrapper col-md-8">
            {/* NavIndex */}
              <MotionHorizontal className="d-grid my-3">
                <h4>Jump to Section</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="#introduction">Introduction</a></li>
                  <li className="list-group-item"><a href="#research">Research &amp; Insights</a></li>
                  <li className="list-group-item"><a href="#design">Ideation &amp; Design</a></li>
                  <li className="list-group-item"><a href="#result">Testing &amp; Validation</a></li>
                  <li className="list-group-item"><a href="#conclusion">Conclusion &amp; Next Steps</a></li>
                </ul>
              </MotionHorizontal>
              {/*SECTION INTRO */}
              <MotionVertical>
              <div id="introduction">
                <h4>Introduction</h4>
                <div className="card-wrapper">
                  <MotionScaleIn className="card">
                  <small>
                  Teenagers are often left out of traditional financial tools and feel overwhelmed by complex concepts like budgeting and investing.
                  </small>
                  </MotionScaleIn>
                </div>
                <p>How might we design a financial app that simplifies money management for young users while using AI to make financial habits more engaging, educational, and personalized?</p>
              </div>
              </MotionVertical>

              {/* Objective/Goal */}
              <MotionVertical>
                <h4>Objective/Goal</h4>
                <p>The primary goals of the research were to:</p>
                <ul>
                  <li>Understand how teenagers perceive and interact with financial tools.</li>
                  <li>Identify the barriers that prevent young users from budgeting, saving, or investing.</li>
                  <li>Explore how AI could be integrated to deliver personalized financial guidance in a friendly and intuitive way.</li>
                  <li>Design an experience that makes managing money feel simple, engaging, and rewarding.</li>
                </ul>
              </MotionVertical>
              {/* SECTION RESEARCH */}
              <MotionVertical>
              <div id="research">
                <h4>My Design Process</h4>
                <MotionScaleIn>
                  <figure>
                  <ImageZoom
                    src="/images/objective.png"
                    alt="Paygos Prototype Design"
                    width={800}
                    height={300}
                    quality={100}
                    className="img-fluid mx-auto"
                    loading="lazy"
                  />
                </figure>
                </MotionScaleIn>
              </div>
              </MotionVertical>


            {/* Research Methodology */}
              <MotionVertical>
                <h4>Research Methodology</h4>
                <p>To achieve these goals, I conducted:</p>
                 <ol>
                  <li>Competitive Market Analysis: I explored existing finance apps targeting younger audiences to evaluate how they present budgeting, saving, and investing tools, especially those using AI or gamification.</li>
                  <li>User Interviews: I spoke with teenagers and young adults to better understand their financial behaviors, goals, and frustrations. These conversations offered valuable insights into their emotional relationship with money and the support they wish they had.</li>
                </ol>
              </MotionVertical>

              {/* User Interviews */}
              <MotionVertical>
                <h4>User Interviews</h4>
                <p>I spoke to individuals who fall into the following categories:</p>
                 <ul>
                  <li>Teenagers who are beginning to manage their own money.</li>
                  <li>Young adults who have recently started budgeting, saving, or investing.</li>
                  <li>Parents and educators who influence or support teens in learning financial habits.</li>
                </ul>
              </MotionVertical>

              {/* Key Questions */}
              <MotionVertical>
                <h4>Key Questions</h4>
                <div className="card-wrapper three-col">
                    <MotionScaleIn className='card'><small>What challenges do you face when trying to manage your money?</small></MotionScaleIn>
                    <MotionScaleIn className='card'><small>Have you ever used a financial app before? If so, what did you like or dislike about it?</small></MotionScaleIn>
                    <MotionScaleIn className='card'><small>If you could change one thing about how you learn or handle finances, what would it be?</small></MotionScaleIn>
                </div>
              </MotionVertical>

              {/* Findings */}
              <MotionVertical>
                  <h4>This is what I found</h4>
                 <p>From the user interviews, key themes emerged through affinity mapping, highlighting several pain points and needs:</p>
                  <div className="card-wrapper two-col">
                    <MotionScaleIn className='card'>
                    <strong>Information Overload</strong>
                    <small>Many finance apps present too much data at once, making it hard for beginners to know where to start or what actions to take.</small>
                    </MotionScaleIn>
                    <MotionScaleIn className='card'>
                    <strong>Fear of Making Mistakes</strong>
                    <small>Teens worry about doing the &quot;wrong thing&quot; financially, which can lead to avoidance or hesitation in using financial tools.</small>
                    </MotionScaleIn>
                    <MotionScaleIn className='card'>
                    <strong>Lack of Motivation</strong>
                    <small>Without clear goals or incentives, users struggle to stay engaged with long-term financial habits like saving or budgeting.</small>
                    </MotionScaleIn>
                    <MotionScaleIn className='card'>
                    <strong>Emotional Overwhelm</strong>
                    <small>Users often feel anxious and uncertain when dealing with money, especially without prior experience or guidance.</small>
                    </MotionScaleIn>
                </div>
              </MotionVertical>    

            {/* User Personas */}
              <MotionVertical>
                <h4>User Personas</h4>
                <p>With the knowledge and insights gained through the interviews, personas were created to understand the unique qualities, preferences and behaviors of the people most likely to benefit from the website.</p>
                  <div className="card-wrapper two-col">
                    <MotionScaleIn>
                    <figure>
                  <ImageZoom
                    src="/images/wealthie-persona01.png"
                    alt="User Persona Giulia"
                    width={1000}
                    height={800}
                    quality={100}
                    className="img-fluid"
                    loading="lazy"
                  />
                </figure>
                    </MotionScaleIn>
                <MotionScaleIn>
                <figure>
                <ImageZoom
                  src="/images/wealthie-persona02.png"
                  alt="User Persona Jacob"
                  width={1000}
                  height={800}
                  quality={100}
                  className="img-fluid"
                  loading="lazy"
                />
              </figure>
                </MotionScaleIn>
               
                  </div>
              </MotionVertical>   

            {/* Point of View */}
              <MotionVertical>
                <h4>Point of View</h4>
                 <ol>
                  <li>Teenagers need a way to easily manage their finances because they often lack the tools and guidance to start budgeting, saving, and investing on their own.</li>
                  <li>Young adults starting out with irregular incomes need a simple, intuitive financial tool because traditional apps often feel too complicated and overwhelming for those just beginning their financial journey.</li>
                  <li>Users new to financial planning need personalized, actionable insights because generic advice and complex financial jargon often leave them feeling confused and disconnected from their financial goals.</li>
                </ol>
              </MotionVertical>       

            {/* How might we */}
              <MotionVertical>
                <h4>How Might We?</h4>
                 <ol>
                  <li>How might we help teens and young adults feel more confident managing their money?</li>
                  <li>How might we use AI to make investing more engaging and accessible?</li>
                  <li>How might we reduce the intimidation of budgeting and saving for first-time users?</li>
                </ol>
              </MotionVertical>    

           {/* SECTION DESIGN */}

            {/* Site Map */}
              <MotionVertical>
                <h4>Site Map</h4>
                <p>To create the site map, I referred back to key insights from user research, specifically the need for simplicity, clear navigation, and always-accessible AI support. I organized the structure to prioritize core actions like budgeting, saving, and interacting with the AI assistant, while keeping the interface clean and intuitive for younger users.</p>
                <MotionScaleIn>
                  <figure>
                  <ImageZoom
                    src="/images/wealthie-sitemap.png"
                    alt="Wealthie Site Map"
                    width={1000}
                    height={679}
                    quality={100}
                    className="img-fluid w-75 mx-auto"
                    loading="lazy"
                  />
                </figure>
                </MotionScaleIn>
              </MotionVertical>   

            {/* Low - Mid Fidelity Wireframes */}
              <MotionVertical>
                <h4>Low - Mid Fidelity Wireframes</h4>
                <p>Next, I started with low-fidelity wireframes to explore different layouts and navigation options. These wireframes focused on essential features like signing in and the homepage dashboards.</p>
                <MotionScaleIn>
                <figure>
                  <ImageZoom
                    src="/images/wealthie-lofi.png"
                    alt="Wealthie Lo-Fi Wireframes"
                    width={1000}
                    height={679}
                    quality={100}
                    className="img-fluid w-75 mx-auto py-3"
                    loading="lazy"
                  />
                </figure>
                </MotionScaleIn>
              </MotionVertical>   

            {/* High Fidelity Wireframes */}
              <MotionVertical>
                <h4>High Fidelity Wireframes</h4>
                <p>I then proceeded to design high fidelity wireframes applying branding and vibrant imagery. <br /> It is starting to look like a real app!</p>
              <MotionScaleIn>
                 <figure>
                  <ImageZoom
                    src="/images/wealthie-hifi1.png"
                    alt="Wealthie High-Fi Wireframes"
                    width={1000}
                    height={679}
                    quality={100}
                    className="img-fluid w-75 mx-auto"
                    loading="lazy"
                  />
                </figure>
              </MotionScaleIn>
              </MotionVertical> 

            {/* Usability Testing */}
              <MotionVertical>
                <h4>Usability Testing</h4>
                <p>Users easily completed tasks within the given timeframe, finding the app intuitive and well-organized. The Homepage and History were simple to navigate and understand, with the AI insights enhancing engagement.</p>
                <p>However, based on the feedback received I made a few adjustments to the UI, check the screens below:</p>
                <div className="card-wrapper three-col">
                    <MotionScaleIn className='card'><small>&quot;I&apos;d love to see more categories on the item listing page to help me organize my finances better.&quot;</small></MotionScaleIn>
                    <MotionScaleIn className='card'><small>&quot;It would be ideal to have the A.I features as a pop up instead of the full page, it would be less intrusive.&quot;</small></MotionScaleIn>
                    <MotionScaleIn className='card'><small>&quot;I&apos;d love if the AI could give me feedback my spending behavior, it would help me stay on track.&quot;</small></MotionScaleIn>
                </div>
                <MotionScaleIn>
                <figure>
                  <ImageZoom
                    src="/images/wealthie-hifi2.png"
                    alt="Wealthie Hi-Fi Wireframes After Feedback"
                    width={1000}
                    height={679}
                    quality={100}
                    className="img-fluid w-75 mx-auto"
                    loading="lazy"
                  />
                 <figcaption>Based on the feedback received I made a few adjustments to the UI</figcaption>
                </figure>
                </MotionScaleIn>

              </MotionVertical> 

              {/*SECTION Conclusion */}
              <MotionVertical>
              <div id="conclusion">
              <h4>Conclusion</h4>
              <p>By applying a user-centered design process, I was able to create an app that not only meets the financial needs of young adults but also empowers them to take control of their financial future in a simple, engaging way.</p>
              <p>The combination of AI-driven insights, intuitive design, and gamified features ensured the app provided a meaningful and approachable experience for users.</p>
              <p>Through research, prototyping, and testing, I was able to address key pain points and deliver a solution that aligns with user needs and expectations.</p>
             <MotionScaleIn>
              <figure>
                <ImageZoom
                  src="/images/wealthie-hifi3.png"
                  alt="Final Wealthie Desktop and Mobile Screens"
                  width={1000}
                  height={614}
                  quality={100}
                  className="img-fluid case-study-img"
                  loading="lazy"
                />
                <figcaption>High Fidelity screens on Desktop and Mobile</figcaption>
              </figure>
             </MotionScaleIn>

              <MotionVertical>
                <h4>Next Steps</h4>
                <ul>
                  <li>Integrate Bank Account Connections: Allow users to link their bank accounts for real-time tracking of spending and automatic categorization of expenses.</li>
                  <li>Enhance Onboarding Experience: Improve the onboarding process by including a quick tutorial that introduces new users to the app&apos;s features and helps them set their first savings goal.</li>
                  <li>Expand AI Capabilities: Enhance the AI assistant to provide more tailored advice on budgeting, saving, and even potential investments.</li>
                  <li>Reward System: Offer more reward options, such as discounts or special offers, to increase engagement and incentivize regular financial check-ins.</li>
                </ul>
              </MotionVertical>
              {/* Figma Button */}
              <MotionScaleIn className="d-flex justify-content-center align-items-center mb-4">
                <a
                  href="https://www.figma.com/design/Y69VVPc9rl5039Jqj9720z/Wealthie?node-id=0-1&t=j0YiAzQTwaLcEweT-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-primary d-flex align-items-center gap-2 "
                >
                  <FaFigma size={16} />
                  View Figma Artboards
                </a>
              </MotionScaleIn>
             </div>
              </MotionVertical>

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