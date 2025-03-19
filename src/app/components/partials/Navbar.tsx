import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">

        {/* Nav Right */}
        {/* Logo */}
        <div className='d-flex gap-2 align-items-center'>
        <Link className="navbar-logo" href="/">
          <Image src="/images/logo.png" alt="logo" width={76} height={50} />
        </Link>

        {/* Pulsing light */}
        <div className='nav-pulsing'>
          <div className="nav-circle"></div>
          <small>Open for cool projects</small>
        </div>
        </div>


        {/* Nav Left */}
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
          <ul className="navbar-nav ms-auto align-items-sm-center">
            <li className="nav-item">
              <Link className="nav-link d-none py-3 p-md-0" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-3 p-md-0" href="/#work">
                Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-3 p-md-0" href="/#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="d-inline nav-link py-3 p-md-0" href="/#contact">
                Work with Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
