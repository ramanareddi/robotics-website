import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {

  const [projects, setProjects] = useState(0)
  const [clients, setClients] = useState(0)
  const [iot, setIot] = useState(0)
  const [reviews, setReviews] = useState(0)

  useEffect(() => {

    let projectCount = 0
    let clientCount = 0
    let iotCount = 0
    let reviewCount = 0

    const interval = setInterval(() => {

      if (projectCount < 120) {
        projectCount++
        setProjects(projectCount)
      }

      if (clientCount < 85) {
        clientCount++
        setClients(clientCount)
      }

      if (iotCount < 60) {
        iotCount++
        setIot(iotCount)
      }

      if (reviewCount < 150) {
        reviewCount++
        setReviews(reviewCount)
      }

    }, 40)

    return () => clearInterval(interval)

  }, [])

  return (
    <>
      <Head>
        <title>RV Robotics</title>

        <meta
          name="description"
          content="Embedded systems and IoT company"
        />

        <meta
          name="keywords"
          content="IoT, robotics, embedded systems, AI, ML"
        />

        <meta
          property="og:title"
          content="RV Robotics"
        />

        <meta
          property="og:description"
          content="Premium Smart Products"
        />
      </Head>

      <Navbar />

      {/* Hero Carousel */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <section
              className="d-flex align-items-center text-white"
              style={{
                backgroundImage: "url('/images/hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '90vh'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  width: '100%',
                  minHeight: '90vh',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div className="container text-center">
                  <h1 className="display-3 fw-bold">
                    Future Robotics & IoT Solutions
                  </h1>

                  <p className="lead mt-3">
                    Smart Embedded Systems & Premium Tech Innovations
                  </p>

                  <a
                    href="/products"
                    className="btn btn-success btn-lg mt-4"
                  >
                    Explore Products
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <section
              className="d-flex align-items-center text-white"
              style={{
                backgroundImage: "url('/images/frame1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '90vh'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  width: '100%',
                  minHeight: '90vh'
                }}
              />
            </section>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <section
              className="d-flex align-items-center text-white"
              style={{
                backgroundImage: "url('/images/frame2.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '90vh'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  width: '100%',
                  minHeight: '90vh'
                }}
              />
            </section>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <section
              className="d-flex align-items-center text-white"
              style={{
                backgroundImage: "url('/images/robotics1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '90vh'
              }}
            >
              <div
                style={{
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  width: '100%',
                  minHeight: '90vh'
                }}
              />
            </section>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      {/* About Section */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold mb-4">
          Welcome To RV Robotics
        </h2>

        <p className="lead">
          We build modern IoT, Robotics, Embedded Systems,
          AI, Python and Machine Learning based smart solutions
          for students, startups and industries.
        </p>
      </section>

      {/* Counter Section */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#0d1b2a" }}
      >
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3 mb-4">
              <h1 className="display-4 fw-bold">
                {projects}+
              </h1>

              <p>Projects Completed</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1 className="display-4 fw-bold">
                {clients}+
              </h1>

              <p>Happy Clients</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1 className="display-4 fw-bold">
                {iot}+
              </h1>

              <p>IoT Projects</p>
            </div>

            <div className="col-md-3 mb-4">
              <h1 className="display-4 fw-bold">
                {reviews}+
              </h1>

              <p>Positive Reviews</p>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          Our Services
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h4>IoT Solutions</h4>

              <p>
                Smart automation systems using sensors,
                WiFi modules and cloud technologies.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h4>Embedded Projects</h4>

              <p>
                Arduino, Raspberry Pi and microcontroller
                based customized projects.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100 text-center p-4">
              <h4>AI & ML Projects</h4>

              <p>
                Future-ready Artificial Intelligence,
                Python and Machine Learning solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Products */}
      <section
        className="container py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="text-center fw-bold mb-5">
          Our Premium Products
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card product-card shadow h-100">

              <img
                src="/images/frame1.jpg"
                className="card-img-top"
                alt="Luxury LED Photo Frame"
              />

              <div className="card-body">
                <h5>Luxury LED Photo Frame</h5>

                <p>
                  Premium smart photo frame with slideshow support.
                </p>
              </div>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card product-card shadow h-100">

              <img
                src="/images/robotics1.jpg"
                className="card-img-top"
                alt="IoT Projects"
              />

              <div className="card-body">
                <h5>IoT Projects</h5>

                <p>
                  School & College level IoT mini projects.
                </p>
              </div>

            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card product-card shadow h-100">

              <img
                src="/images/frame2.jpg"
                className="card-img-top"
                alt="Embedded Solutions"
              />

              <div className="card-body">
                <h5>Embedded Solutions</h5>

                <p>
                  Microcontroller based customized products.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Clients */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">
          Our Clients
        </h2>

        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <div className="shadow p-4 rounded bg-white">
              <h4>Engineering Colleges</h4>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="shadow p-4 rounded bg-white">
              <h4>Tech Startups</h4>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="shadow p-4 rounded bg-white">
              <h4>Industries</h4>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="shadow p-4 rounded bg-white">
              <h4>Students</h4>
            </div>
          </div>

        </div>
      </section>

      {/* Reviews */}
      <section
        className="py-5 text-white"
        style={{ backgroundColor: "#001d3d" }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Client Reviews
          </h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card p-4 shadow h-100">
                <p>
                  Excellent IoT project support and
                  professional service.
                </p>

                <h5>- Engineering Student</h5>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card p-4 shadow h-100">
                <p>
                  Best embedded solutions with innovative ideas.
                </p>

                <h5>- Startup Client</h5>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card p-4 shadow h-100">
                <p>
                  Affordable and high quality robotics projects.
                </p>

                <h5>- College Team</h5>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}