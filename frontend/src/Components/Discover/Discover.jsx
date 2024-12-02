import React from 'react'
import { Link } from 'react-router-dom'
const Discover = () => {

  return (
    <section id="ts-features" className="ts-features bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 contact-info aos-init" data-aos="fade-right">
            <div className=" ts-intro">
              <h3 className="section-sub-title">It's Time To <br /> <span> Discover Your Home</span></h3>
              <div className="col-12">
                <h4> <i className="fas fa-envelope" style={{ fontSize: '25px' }}></i> E-Mail :</h4>
                <p> aryaconstruction1@gmail.com </p>
              </div>
              <div className="col-12">
                <h4><i className="fas fa-map"></i> Address :</h4>
                <p>Flat No. 102 . Shanti Niwas,<br />
                  Cuttack Road, Bhubaneswar- 751010 </p>
              </div>
              <div className="col-12">
                <h4> <i className="fas fa-phone  " style={{ fontSize: '25px' }}></i> Phone :</h4>
                <p> Cell: 99999999999</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0 aos-init" data-aos="fade-left">
            <Link to="/contact"><img src=" images/contact.webp" className="img-fluid" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover