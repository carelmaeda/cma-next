"use client";

import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    title: "Paygos Prototype",
    description: "A sales acceleration platform for veterinary sales representatives.",
    tags: ["Next.js", "TypeScript", "UI/UX"],
    image: "/images/paygos-thumbnail.jpg", // Update with your actual image path
    link: "/case-studies/paygos-prototype", // Direct link to the static page
  },
];

const Work = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">My Work</h2>
      <div className="row justify-content-center">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.title} className="col-12 col-md-6 col-lg-4 mb-4">
            <Link href="/case-studies/paygos-prototype" className="text-decoration-none">
              <div className="card shadow-sm border-0 h-100">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={400}
                  height={250}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{caseStudy.title}</h5>
                  <p className="card-text text-muted">{caseStudy.description}</p>
                  <div className="d-flex flex-wrap">
                    {caseStudy.tags.map((tag, index) => (
                      <span key={index} className="badge bg-primary me-2 mb-2">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
