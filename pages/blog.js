import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blog() {
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
        <h1 className="section-title">Latest Updates</h1>

        <div className="card shadow p-4 mb-4">
          <h3>Future of IoT in Education</h3>
          <p>
            IoT and embedded systems are transforming modern education and innovation.
          </p>
        </div>

        <div className="card shadow p-4">
          <h3>Premium LED Frames</h3>
          <p>
            Smart luxury photo frames are becoming modern lifestyle products.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}