"use client";
import Image from "next/image";
import {FaArrowRight} from 'react-icons/fa';

export default function About() {
  const handleOpenResume = () => {
    window.open('/cma-resume.pdf', '_blank');
  };

  return (
    <section className="section-wrapper about-wrapper">
      <h2>About Me</h2>
      <div className="d-grid d-md-flex gap-4">
        <Image
        className="mx-auto"
          src="/images/profile.jpg"
          alt="profile"
          width={200}
          height={200}
        />
        <div className="about-text">
         <p>I am a <strong>Product Design Manager</strong> with 6+ years of experience in <strong>UX and UI design</strong>.</p>
         <p>I create user-friendly platforms, conduct user research, and use <strong>Design Thinking</strong> to find valuable insights. Working closely with teams, I turn these insights into effective designs while managing projects and contributing to <strong>front-end development</strong> for a smooth user experience.</p>
        <p>As an alumnus of <strong>Parsons School of Design</strong> and <strong>University of Toronto</strong>, I specialize in designing platforms that are scalable, responsive, and, most importantly, accessible to all users.</p>
        <p>Born and raised in Brasil, I am currently based in Toronto, Canada. In my free time, you can find me exploring the city with a camera around my neck. &#128247; </p>

          {/* Resume Button */}
          <button
            className="btn btn-light d-flex gap-2 align-items-center"
            onClick={handleOpenResume}
          >
            VIEW RESUME
         <FaArrowRight /> {/* Arrow icon */}
          </button>
        </div>
      </div>
    </section>
  );
}