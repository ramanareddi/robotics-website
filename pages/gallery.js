import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Gallery() {
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
        <h1 className="section-title">Gallery</h1>

        <div className="row">
          {[1,2,3,4,5,6].map((item) => (
            <div className="col-md-4 mb-4" key={item}>
              <img
                src="/images/gallery1.jpg"
                className="img-fluid rounded shadow"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}