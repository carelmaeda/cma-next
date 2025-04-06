'use client';

import { MotionVertical, MotionScore } from './Motions';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const skills = ["Figma", "UX/UI Design", "Front-End Development", "Graphic Design"];
  const [currentSkill, setCurrentSkill] = useState(skills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => {
        const nextIndex = (skills.indexOf(prev) + 1) % skills.length;
        return skills[nextIndex];
      });
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section row section-wrapper">
      <div className="d-none">
        <h1>Carel Maeda - UX/UI Designer & Developer</h1>
        <h2>Portfolio Showcase</h2>
        <p>Welcome to my portfolio, where I showcase my latest UX/UI projects</p>
      </div>
      <MotionVertical>
        <div className="hero-header">
          Hi! My name is <span>Carel.</span>
        </div>
        <p className="lead">
          <AnimatePresence mode="wait">
            <MotionScore key={currentSkill} className="fw-bold">
              {currentSkill}
            </MotionScore>
          </AnimatePresence> <br />projects that bring you results
        </p>
        <a href="#contact" className="d-none btn btn-dark">
          Work with Me
        </a>
      </MotionVertical>
    </div>
  );
}
