import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
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
        <h1 className="mb-4">About Us</h1>

        <p>
          We are Ramana Reddy and Vijay Prasad, childhood friends and founders of RV Robotics & IoT Solutions.
        </p>

        <p>
          After completing B.Tech from ABR College of Engineering and Technologies and working in MNC companies, we started our own company to build innovative embedded systems and IoT products.
        </p>

        <p>
          Our goal is to create premium technology products with futuristic design and smart automation.
        </p>
      </div>

      <Footer />
    </>
  )
}