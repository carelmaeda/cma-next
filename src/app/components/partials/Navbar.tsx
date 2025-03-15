import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-logo" href="/">
          <Image src="/images/logo.png" alt="logo" width={80} height={45} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#work">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
