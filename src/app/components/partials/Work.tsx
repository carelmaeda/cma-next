"use client";

import '@/styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

const workCards = [
    {
  logoImg: "/images/avatar.webp",
  cardTitle: "Design Archive",
  cardSummary: "A collection of my past designs and creative projects",
  cardUrl: "/case-studies/design-archive",
  cardColor:"#fafafa"
 },
  {
    logoImg: "https://cdn.brandfetch.io/idmFNj9SQF/w/300/h/150/theme/light/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
    cardTitle: "Company: BirdsEye",
    cardSummary: "Building a Simple and Engaging Receipt Upload System",
    cardUrl: "/case-studies/birdseye",
    cardColor:"#007CAD"
  },
  {
    logoImg: "/images/wealthie-logo.webp",
    cardTitle: "Company: Wealthie",
    cardSummary: "I redesigned Adobe Acrobat Pro Conversion Funnel",
    cardUrl: "/case-studies/wealthie",
    cardColor:"#FAFAFA"
  },
];

const Work = () => {
  return (
    <section className="section-wrapper p-md-4 justify-items-center"> 
       <h2 className="fs-5">More Stories</h2>
      <div className="work-wrapper">
        {workCards.map((card, index) => (
          <Link href={card.cardUrl} className="work-card" key={index}>
            <div className="d-flex align-items-center">
              <div className="card-logo" style={{ background: card.cardColor }}>
                <Image
                  src={card.logoImg}
                  alt="Case Study Company Logo"
                  width={40}
                  height={40}
                  unoptimized
                  className='img-fluid'
                />
              </div>
              <h3>{card.cardTitle}</h3>
            </div>
            <p className="p-0 m-0">{card.cardSummary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
