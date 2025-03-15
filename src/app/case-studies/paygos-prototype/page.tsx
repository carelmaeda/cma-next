import '@/styles/case-studies.css';
import Image from 'next/image';

const PaygosPrototype = () => {
  return (
  <section className='container-fluid'>
  {/* Hero Section */}
  <div className='row case-study-1 p-3 p-md-5 justify-content-md-center'>
    <div className="col-md-4 d-flex justify-content-center">
      {/* Use a regular img tag for the GIF */}
      <img
        className='img-fluid col-md-10'
        src="/videos/paygos-prototype-gif1.gif"
        alt="Screen Recording GIF showcasing Paygos prototype"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
    <div className="col-md-4 text-wrapper">
      <div>
        <h1>From One Day to One Hour</h1>
        <label className='m-0'>How I Expanded a Business by Designing a Scalable Figma Prototype</label>
      </div>
      <div className='py-2'>
        <span className="badge bg-primary me-2">UX & UI</span>
        <span className="badge bg-primary me-2">FIGMA</span>
        <span className="badge bg-primary">UX & UI</span>
      </div>
      <hr className="my-2" />
      <div className='py-2'>
        <h5>Summary</h5>
        <p>
          Designed a <strong>scalable, interactive Figma prototype for a fintech sales platform</strong>, reducing client presentation prep time from one day to one hour.
        </p>
        <h5>Problem Statement</h5>
        <p>
          The company’s manual branding process for client presentations was <strong>time-consuming</strong>, taking a full day per client and limiting their ability to scale quickly.
        </p>
        <h5>Solution</h5>
        <p>
          A customizable Figma prototype with <strong>dynamic branding components</strong>, enabling quick updates and interactive client demos.
        </p>
        <h5>Metrics</h5>
        <p>
          Reduced presentation prep time <strong>from 1 full day to only 1 hour</strong> - leading to increased client acquisition.
        </p>
      </div>
    </div>
  </div>

  {/* Body Section */}
  <div className='section-wrapper container'>

    <div className="row justify-content-center">
{/* Sticky */}
    <Image
      src="/images/sticky1.png"
      alt="Sticky note with Paygos prototype details"
      width={330}
      height={250}
      quality={100}
      sizes="(max-width: 370px) 33vw, (max-width: 767px) 33vw, 20.833333333333336vw"
      className='col-9 col-md-3 img-fluid my-3'
    />

    {/* NavIndex */}
    <div className='col-md-4 d-grid my-3'>
      <h4>Jump to Section</h4>
      <div className="list-unordered">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#introduction">Introduction</a></li>
          <li className="nav-item"><a className="nav-link" href="#idea">Let’s Develop! - An Initial Idea</a></li>
          <li className="nav-item"><a className="nav-link" href="#solution">The Solution? Figma!</a></li>
          <li className="nav-item"><a className="nav-link" href="#design">Designing with the Team</a></li>
          <li className="nav-item"><a className="nav-link" href="#result">The Result</a></li>
          <li className="nav-item"><a className="nav-link" href="#conclusion">Conclusion</a></li>
        </ul>
      </div>
    </div>
    </div>
    

    <div className="d-grid gap-4 mx-auto text-wrapper col-md-6">
      {/* Intro */}
      <div id='introduction'>
        <h4>Introduction</h4>
        <p>The Fintech’s Business Directors needed to present their product to as many clients as possible in the shortest amount of time.</p>
        <p>To increase client acquisition, they wanted to present a branded version of their platform to each client. This approach was meant to make clients feel more identified with the product while helping them visualize the User Experience.</p>
        <p>However, their current process was time-consuming. They manually built PowerPoint presentations and Photoshopped still screens for each client, taking up to one full day per client. This was unsustainable and limited their ability to scale and prospect clients.</p>
      </div>

      {/* Idea */}
      <div id='idea'>
        <h4>Let’s Develop! - An Initial Idea</h4>
        <p>My first thought was to design and develop a live demo website that was easily accessible for the directors to present. This demo version would showcase the platform’s functionality with unbranded images and fake data, giving clients a realistic feel of how the platform works.</p>
        <p>But there was a problem: we had no developers or project managers to support such a project. Maintaining and updating a live platform would also be time-consuming. I needed a quicker, simpler, and more feasible solution.</p>
      </div>

      {/* Solution */}
      <div id='solution'>
        <h4>The Solution? Figma!</h4>
        <p>I pivoted to creating a high-fidelity Figma prototype that mimicked a live website. Users could click through and interact with the platform’s features as if it were real.</p>
        <p>The best part? This prototype was highly customizable. With just a few clicks, we could update the logo, colors, typography, product images, and names to match each client’s branding.</p>
      </div>

      {/* Design */}
      <div id='design'>
        <h4>Designing with the Team</h4>
        <p className='my-0'>I collaborated with Project Managers, who provided a basic navbar and user flows for each feature. This helped me identify which pages to design and how users would navigate the platform.</p>
        <Image
          src="/images/paygos-prototype2.png"
          alt="Paygos Prototype Design"
          width={600}
          height={390}
          quality={100}
          className='img-fluid case-study-img'
        />
        <p>After finalizing the design, prototyping extensively, and testing it with the team, the platform looked polished and ready for client presentations!</p>
        <strong>But we still needed to make it scalable for branding.</strong>
      </div>

      {/* Results */}
      <div id='result'>
        <h4>The Result</h4>
        <p>The final prototype was a game-changer. Not only did it look and feel like a real product, but it also <strong>reduced the time needed to prepare client presentations from one day to one hour.</strong></p>
      </div>

      {/* Conclusion */}
      <div id='conclusion'>
        <h4>Conclusion</h4>
        <p>By designing a scalable Figma prototype, I helped the fintech streamline its client acquisition process, saving time and driving business growth.</p>
      </div>

      <Image
        src="/images/paygos-prototype3.png"
        alt="Final Paygos Prototype"
        width={600}
        height={390}
        quality={100}
        className='img-fluid case-study-img'
      />
    </div>
  </div>
</section>
  );
};

export default PaygosPrototype;