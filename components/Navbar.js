import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        <Link href="/" className="navbar-brand fw-bold">
          RV Robotics
        </Link>

        {/* Mobile Menu Button */}
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

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/services" className="nav-link">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}