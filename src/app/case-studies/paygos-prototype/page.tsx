import '@/styles/case-studies.css';
import Link from 'next/link';
import Image from 'next/image';

const PaygosPrototype = () => {
  return (
    <section className="container mt-5">
      {/* Hero Section */}
      <div className="hero-section text-center mb-5">
        <Image src="/images/example.png" alt="Paygos Prototype" width={500} height={300} />
      </div>

      <h1 className="mb-4 text-center">Paygos Prototype</h1>

      {/* Introduction Section */}
      <div className="card shadow-sm p-4 mb-4">
        <h2 className="h4">Introduction</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li><strong>Role:</strong> UX/UI Designer</li>
              <li><strong>Date:</strong> Summer 2023</li>
              <li><strong>Team:</strong> Paygos Team (Project Management, Business Developer)</li>
              <li><strong>Tools:</strong> Figma</li>
            </ul>
          </div>
          <div className="col-md-6">
            <p>
              This case study explores how I designed a compelling interactive prototype for Paygos,
              aimed at helping business development teams pitch the platform to potential clients.
            </p>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="card shadow-sm p-4 mb-4">
        <h2 className="h4">Project Overview</h2>
        <p>
          Paygos needed an interactive prototype to showcase the platform&apos;s key capabilities, such as
          <strong> ordering, returns, payments, rebates, and dashboards</strong>. Prior to this, the team relied on
          static PowerPoint presentations that lacked engagement and took considerable time to update.
        </p>
      </div>

      {/* Exploring the Problem */}
      <div className="card shadow-sm p-4 mb-4">
        <h2 className="h4">Exploring the Problem</h2>
        <p>
          The existing sales materials were <strong>outdated and ineffective</strong>. The static nature of PowerPoint
          presentations made it difficult to convey the platform’s dynamic capabilities.
        </p>
      </div>

      {/* Research Section */}
      <div className="card shadow-sm p-4 mb-4">
        <h2 className="h4">Research & Target Users</h2>
        <div className="row">
          <div className="col-md-6">
            <h3 className="h5">Target Users</h3>
            <p>
              The prototype was designed for <strong>Business Development Directors</strong>, giving them a
              more compelling tool to present to potential clients.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="h5">Key Insights</h3>
            <p>
              We identified that interactive, hands-on demonstrations significantly improve client
              engagement and understanding of platform functionality.
            </p>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="card shadow-sm p-4 mb-4">
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

      {/* Creating the Artboards */}
      <div className="card shadow-sm p-4 mb-4 text-center">
        <h2 className="h4">Creating the Artboards</h2>
        <p>
          During the initial phase, I created detailed artboards covering each key feature of the platform.
        </p>
        <iframe
          className="responsive-iframe w-100"
          src="https://embed.figma.com/design/pIMhQogytlVvlOsnkmIjNt/CPG?node-id=6835-10477&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Prototype Section */}
      <div className="card shadow-sm p-4 mb-4 text-center">
        <h2 className="h4">Interactive Prototype</h2>
        <p>
          Explore the interactive prototype below to experience the final design:
        </p>
        <iframe
          className="responsive-iframe w-100 h-100"
          src="https://embed.figma.com/proto/pIMhQogytlVvlOsnkmIjNt/CPG?page-id=6835%3A10477&node-id=6835-10480&p=f&viewport=-129%2C163%2C0.02&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6835%3A10480&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Results & Impact */}
      <div className="card shadow-sm p-4 mb-4">
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

      {/* Return to Homepage Button */}
      <div className="text-center mt-5">
      <Link href="/" className="btn btn-primary">Return to Homepage</Link>
      </div>
    </section>
  );
};

export default PaygosPrototype;
