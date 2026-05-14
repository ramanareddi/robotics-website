import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="footer text-white pt-5 pb-4"
      style={{ backgroundColor: "#0d1b2a" }}
    >
      <div className="container">
        <div className="row">

          {/* Office */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-4">Our Office</h4>

            <p>
              Hightech City, Madapur, India
            </p>

            <p>
              +91 900 0978 623
            </p>

            <p>
              info@rvrobotics.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-4">Quick Links</h4>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link
                  href="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-white text-decoration-none"
                >
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/products"
                  className="text-white text-decoration-none"
                >
                  Products
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h4 className="mb-4">Newsletter</h4>

            <p>
              Get the latest updates on robotics projects,
              IoT innovations, smart embedded solutions,
              and premium tech products from RV Robotics.
            </p>

            <div className="d-flex">
              <input
                type="email"
                placeholder="Your email"
                className="form-control me-2"
              />

              <button className="btn btn-success">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 RV Robotics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}