import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProductDetails() {
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
        <div className="row">
          <div className="col-md-6">
            <img src="/images/frame1.jpg" className="img-fluid rounded shadow" />
          </div>

          <div className="col-md-6">
            <h2>Luxury LED Photo Frame</h2>
            <h3 className="text-success">₹10,000</h3>

            <ul>
              <li>1-10 Photos Slideshow</li>
              <li>Premium Luxury Finish</li>
              <li>Embedded System Technology</li>
              <li>Perfect for Rich & Fashion Lovers</li>
            </ul>

            <button className="btn btn-success btn-lg">
              Order Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}