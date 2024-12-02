import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Feature from '../../Components/Feature/Feature'
import Service from '../../Components/Service/Service'
import Projects from '../../Components/Projects/Projects'
import Discover from '../../Components/Discover/Discover'
import Facts from '../../Components/Facts/Facts'
import Mission from '../../Components/Mission/Mission'
import Testimonial from '../../Components/Testimonial/Testimonial'
// import OnGoing from '../../Components/OnGoing/OnGoing'

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Facts />
      <section id="main-container" className="main-container pb-2">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h3 className="section-sub-title aos-init" data-aos="fade-up">Our <span>Services</span></h3>
            </div>
          </div>
        </div>
        <Service />
      </section>
      <Mission />
      <Projects />
      {/* <OnGoing/> */}
      <Testimonial />
      <Discover />
    </div>
  )
}

export default Home