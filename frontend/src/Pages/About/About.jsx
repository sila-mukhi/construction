import React from 'react'
import Promoters from '../../Components/Promoters/Promoters'
import AboutUs from '../../Components/AboutUs/AboutUs'
import CoreValues from '../../Components/CoreValues/CoreValues'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div id="banner-area" className="banner-area" style={{
        backgroundImage:
          'linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url(images/projects/project1.jpg)'
      }}>
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-heading aos-init aos-animate" data-aos="fade-up">
                  <h1 className="banner-title">About Us</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                      <li className="breadcrumb-item"><Link to="/about">About Us</Link></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Promoters />
      <AboutUs />
      <CoreValues />
    </>
  )
}

export default About