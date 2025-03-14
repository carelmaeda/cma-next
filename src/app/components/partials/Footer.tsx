
"use client"; // Ensure it's a Client Component

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer py-3 mt-5">
      <div className="container">
        <div className="d-md-flex justify-content-between">
          <p className="col-auto">This site was designed and built by me.</p>
          <p className="col-auto">
            &copy; {year ? year : ""} Carel Maeda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

