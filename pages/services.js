import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
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
        <h1 className="section-title">Our Services</h1>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              <h4>Embedded Projects</h4>
              <p>Microcontroller based smart solutions.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              <h4>IoT Workshops</h4>
              <p>College and school level IoT workshops.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4 text-center">
              <h4>Custom Products</h4>
              <p>Customized robotics and smart products.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}