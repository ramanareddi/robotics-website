import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
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
        <h1 className="section-title">Contact Us</h1>

        <div className="row">
          <div className="col-md-6">
            <form>
              <input type="text" className="form-control mb-3" placeholder="Name" />
              <input type="email" className="form-control mb-3" placeholder="Email" />
              <textarea className="form-control mb-3" rows="5" placeholder="Message"></textarea>
              <button className="btn btn-dark">Send Message</button>
            </form>
          </div>

          <div className="col-md-6">
            <h4>Address</h4>
            <p>
              Mulavari Palli Village,<br />
              Guntu Palli Post,<br />
              Andhra Pradesh - 523110
            </p>

            <h4>Phone</h4>
            <p>
              Ramana Reddy: 8465843887<br />
              Vijay Prasad: 9000978623
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}