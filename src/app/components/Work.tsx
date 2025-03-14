"use client";

import '@/styles/globals.css';
import PaygosPrototype from "../case-studies/paygos-prototype/page";


// const caseStudies = [
//   {
//     title: "Paygos Prototypes",
//     description: "Interactive Figma prototypes to enhance business development presentations and improve client engagement.",
//     tags: ["Figma", "UI/UX"],
//     image: "/images/paygos-thumbnail.png", 
//     link: "/case-studies/paygos-prototype", 
//   },
// ];

// const Work = () => {
//   return (
//     <section className="section-wrapper d-none">
//       <h2 className="text-center mb-4">Case Studies</h2>
//       <div className="row justify-content-center">
//         {caseStudies.map((caseStudy) => (
//           <div key={caseStudy.title} className="col-12 col-md-6 col-lg-4 mb-4">
//             <Link href="/case-studies/paygos-prototype" className="text-decoration-none">
//               <div className="card shadow-sm h-100">
//                 <Image
//                   src={caseStudy.image}
//                   alt={caseStudy.title}
//                   width={400}
//                   height={250}
//                   className="card-img-top"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{caseStudy.title}</h5>
//                   <p className="card-text">{caseStudy.description}</p>
//                   <div className="d-flex flex-wrap">
//                     {caseStudy.tags.map((tag, index) => (
//                       <span key={index} className="badge bg-primary me-2 mb-2">{tag}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const Work = () => {
  return (
    <section>
      <PaygosPrototype/>
    </section>
  );
};

export default Work;
