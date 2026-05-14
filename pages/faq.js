import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function FAQ() {
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
        <h1 className="section-title">FAQ</h1>

        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#one">
                What is LED Smart Frame?
              </button>
            </h2>

            <div id="one" className="accordion-collapse collapse show">
              <div className="accordion-body">
                Smart frame with multiple slideshow photos.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}