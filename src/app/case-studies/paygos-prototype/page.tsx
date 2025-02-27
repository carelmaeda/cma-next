import '@/styles/case-studies.css';
import Link from 'next/link';
import Image from 'next/image';

const PaygosPrototype = () => {
      return (
    <section className="">
      {/* Hero Section */}
      <div className="case-study-hero">
        <Image
          src="/images/paygos-prototype-hero.png"
          alt="Paygos Prototype"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

    <div className="section-wrapper container d-grid gap-4">
      <h1 className="mb-4 text-center display-5">Paygos Prototypes</h1>

    <p className='text-center h5 col-md-8'>
            This case study explores how I designed a compelling interactive prototype for Paygos,
            aimed at helping business development teams pitch the platform to potential clients.
    </p>

    {/* Introduction Section */}
    <div>
      <h2 className="h4">Introduction</h2>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-unstyled">
            <li><strong>Role:</strong> UX/UI Designer</li>
            <li><strong>Date and Duration:</strong> Summer 2023, 6 weeks</li>
            <li><strong>Team:</strong> Paygos Team (Project Management, Business Developer)</li>
            <li><strong>Tools:</strong> Figma, Figjam</li>
          </ul>
        </div>
        
      </div>
    </div>

    {/* Project Overview */}
      <div className='text-center text-wrapper'>
      <h2 className="h4">Project Overview</h2>
       <p>
        Paygos needed an interactive prototype to showcase the platform&apos;s key capabilities to it&apos;s clients, such as their 
        <strong> ordering, returns, payments, rebates, and dashboards</strong>.<br />Prior to this, the team relied on
        static PowerPoint presentations that lacked engagement, took considerable time to update and were not always consistent.
      </p>
      </div>

      {/* Exploring the Problem */}
      <div>
        <h2 className="h4">Exploring the Problem</h2>
        <p>
          The existing sales materials were <strong>outdated and ineffective</strong>. The static nature of PowerPoint
          presentations made it difficult to convey the platform&apos;s dynamic capabilities.
        </p>
      </div>

   
    {/* Research Section */}
    <div>
      <h2 className="h4">Research & Target Users</h2>
      <div className="row">
        <div className="col-md-6">
          <h3 className="h6">Target Users</h3>
          <p>
            The prototype was designed for <strong>Business Development Directors</strong>, giving them a
            more compelling tool to present to potential clients.
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="h6">Key Insights</h3>
          <p>
            We identified that interactive, hands-on demonstrations significantly improve client
            engagement and understanding of platform functionality.
          </p>
        </div>
      </div>
    </div>

    <div className="row">

    </div>
    {/* Design Process */}
    <div>
      <h2 className="h4">Design Process</h2>
      <p>
        The design process followed a structured approach including:
      </p>
      <ul>
        <li>User research and stakeholder interviews</li>
        <li>Task flow analysis</li>
        <li>Wireframing and prototyping in Figma</li>
        <li>Usability testing and iteration</li>
      </ul>
    </div>

    <div className='d-grid'>
    <Image src="/images/paygos-prototype1.png" alt="profile"  width={700}  height={500}  className='border rounded mb-1' />
    <small>Example of a few taskflows I created with the Project Management team using Figjam</small>
    </div>

    {/* Results & Impact */}
    <div>
      <h2 className="h4">Results & Impact</h2>
      <p>
        With the new interactive prototype, the Business Development team observed:
      </p>
      <ul>
        <li>Increased client engagement and interaction</li>
        <li>Faster decision-making from potential buyers</li>
        <li>More effective sales presentations</li>
      </ul>
    </div>

    {/* Creating the Artboards */}
    <div className="text-center">
      <h2 className="h4">Creating the Artboards</h2>
      <small>
        During the initial phase, I created detailed artboards covering each key feature of the platform.
      </small>
      <iframe
        src="https://embed.figma.com/design/pIMhQogytlVvlOsnkmIjNt/CPG?node-id=6835-10477&embed-host=share"
        allowFullScreen
      ></iframe>
    </div>

    {/* Prototype Section */}
    <div className="text-center">
      <h2 className="h4">Interactive Prototype</h2>
      <small>
        Feel free to explore the interactive prototype below to experience the final design:
      </small>
      <iframe
        src="https://embed.figma.com/proto/pIMhQogytlVvlOsnkmIjNt/CPG?page-id=6835%3A10477&node-id=6835-10480&p=f&viewport=-8404%2C-865%2C0.28&scaling=contain&content-scaling=fixed&starting-point-node-id=6835%3A10480&embed-host=share"
        allowFullScreen 
      ></iframe>
    </div>

    {/* Return to Homepage Button */}
    <div>
    <Link href="/" className="btn btn-primary">Return to Homepage</Link>
    </div>
    
    </div>
        
        </section>
      );
    };

export default PaygosPrototype;
