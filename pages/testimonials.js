import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>RV Robotics</title>
        <meta name="description" content="Embedded systems and IoT company" />
        <meta name="keywords" content="IoT, robotics, embedded systems" />
        <meta property="og:title" content="RV Robotics" />
        <meta property="og:description" content="Premium Smart Products" />
      </Head>

      <Navbar />

      <div className="container py-5">
        <h1 className="section-title">Testimonials</h1>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              <h5>Engineering College</h5>
              <p>
                Excellent IoT workshop and embedded projects.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              <h5>School Management</h5>
              <p>
                Students learned robotics in practical way.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              <h5>Luxury Customer</h5>
              <p>
                LED photo frame quality is premium and stylish.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}