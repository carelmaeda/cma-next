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
      <div className="d-md-flex gap-4">
        <Image
          src="/images/profile.jpg"
          alt="profile"
          width={200}
          height={200}
        />
        <div className="about-text">
          <p>
            I am a <strong>Product Design Manager</strong> with over 5 years of experience in the industry. My work primarily involves leading projects for client UX and Service Design teams, focusing on creating <strong>user-friendly platforms</strong>, designing <strong>user research studies</strong>, and applying <strong>Design Thinking Methodologies</strong> to uncover valuable user insights. I collaborate closely with teams to translate these insights into impactful design solutions while also managing <strong>project workflows</strong> and contributing to <strong>front-end development</strong> to ensure seamless execution.
          </p>
          <p>
            As an alumnus of <strong>Parsons School of Design</strong> and <strong>University of Toronto</strong>, I specialize in designing platforms that are scalable, responsive, and, most importantly, accessible to all users.
          </p>
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