import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Products() {
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
        <h1 className="section-title">Our Products</h1>

        <div className="row">
          {[1,2,3,4].map((item) => (
            <div className="col-md-3 mb-4" key={item}>
              <div className="card shadow product-card">
                <img src={`/images/frame${item%2+1}.jpg`} className="card-img-top" />
                <div className="card-body">
                  <h5>Smart LED Photo Frame</h5>
                  <p>Luxury digital frame with slideshow support.</p>
                  <a href="/product-details" className="btn btn-dark w-100">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}