
"use client"; // Ensure it's a Client Component

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer bg-light">
      <div className="container text-muted">
          <h6>Thank you for your interest in my work!</h6>
          <div>
          <p className="m-0">This portfolio was <a href="https://www.figma.com/design/vINdCUCFAALYVx9bto0Nq5/CMA-Portfolio?node-id=75-2169&t=SgGC9GVQ7sCtWpMG-1">designed</a> in Figma and <a href="https://github.com/carelmaeda/cma-next.git">developed</a> with Next.js, TypeScript, and Bootstrap.</p>
          <small>&copy; {year ? year : ""} Carel Maeda. All rights reserved.</small>
          </div>
      </div>
    </footer>
  );
}

