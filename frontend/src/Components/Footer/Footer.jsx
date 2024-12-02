import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="body-inner">


<footer id="footer" className="footer">
      <div className="footer-main">
          <div className="container">
              <div className="row justify-content-between">
                  <div className="col-lg-5 col-md-6 footer-widget footer-about aos-init aos-animate" data-aos="fade-up">
                      <h3 className=" widget-title">About Us</h3>
                      <a className="d-block " href="index.php">
                          <h2 style={{width:'250px', color:'white'}} >ARYA CONSTRUCTIONS</h2>
                      </a>

                      <p>With a group of young and dedicated professionals at its core, Arya Constructions (p) Ltd., Bhubaneswar is passionately committed to the cause of good living. Spearheading the group is Er. Sanjay Jha with substantial experience as the Director of Lord Engineering, Constructions and Consultancy Pvt. Ltd.</p>
                      <div className="footer-social">
                          <ul>
                              <li><a href="" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                              </li>
                              <li><a href="" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                              <li><a href="" aria-label="Github"><i className="fab fa-github"></i></a></li>
                          </ul>
                      </div>
                      {/* <!-- Footer social end --> */}
                  </div>
                  {/* <!-- Col end --> */}

                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget aos-init" data-aos="fade-up">
                      <h3 className="widget-title">Quick Links</h3>
                      <ul className="list-arrow">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About Us</Link></li>
                          <li><Link to="/services">Services</Link></li>

                          <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                  </div>
                  {/* <!-- Col end --> */}




                  <div className="col-lg-2 col-md-6 mt-5 mt-lg-0 footer-widget aos-init" data-aos="fade-up">
                      <h3 className="widget-title">Projects</h3>
                      <ul className="list-arrow">
                          <li><Link to="/ongoing-page" href="ongoingprojects.php">Ongoing</Link></li>
                          <li><Link to="/complete-page">Completed</Link></li>

                      </ul>
                  </div>
                  {/* <!-- Col end --> */}

              </div>
              {/* <!-- Row end --> */}
          </div>
          {/* <!-- Container end --> */}
      </div>
      {/* <!-- Footer main end --> */}

      <div className="copyright">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-12 col-12">
                      <div className="copyright-info text-center">
                          Copyright © <script>
                              document.write(new Date().getFullYear())
                          </script>2024, Designed &amp; Developed by <span><a href="https://thyosoftech.com/">Thyo</a></span>
                      </div>
                  </div>
              </div>
              {/* <!-- Row end --> */}

              <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top position-fixed" style={{display: "block"}}>
                  <button className="btn btn-primary" title="Back to Top">
                      <i className="fa fa-angle-double-up"></i>
                  </button>
              </div>

          </div>
          {/* <!-- Container end --> */}
      </div>
      {/* <!-- Copyright end --> */}
  </footer>
        </div>

    )
}

export default Footer