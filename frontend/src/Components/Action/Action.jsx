import React from 'react'

const Action = () => {
  return (
    <>
      <section className="call-to-action-box no-padding">
        <div className="container">
          <div className="action-style-box">
            <div className="row align-items-center">
              <div className="col-md-8 text-center text-md-left">
                <div className="call-to-action-text">
                  <h3 className="action-title">We understand your needs on construction</h3>
                </div>
              </div>
              <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                <div className="call-to-action-btn">
                  <a className="btn btn-dark" href="#">Request Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ts-intro">
                <h2 className="into-title">About Us</h2>
                <h3 className="into-sub-title">We deliver landmark projects</h3>
                <p>We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains,
                  she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
                  and the subline of her own road, the Line Lane.</p>
              </div>
              <div className="gap-20"></div>
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-trophy"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">We've Repution for Excellence</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-sliders-h"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">We Build Partnerships</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-thumbs-up"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Guided by Commitment</h3>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-users"></i>
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">A Team of Professionals</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <h3 className="into-sub-title">Our Values</h3>
              <p>Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.</p>

              <div className="accordion accordion-group" id="our-values-accordion">
                <div className="card">
                  <div className="card-header p-0 bg-transparent" id="headingOne">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Safety
                      </button>
                    </h2>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 bg-transparent" id="headingTwo">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Customer Service
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 bg-transparent" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Integrity
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Action