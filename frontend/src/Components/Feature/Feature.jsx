import React from 'react'
import {Link} from  'react-router-dom'
const Feature = () => {
  return (
    <section id="ts-features" className="ts-features">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="ts-intro aos-init" data-aos="fade-left">
                     <h3 className="section-sub-title aos-init" data-aos="fade-up">About<span> Arya Group</span></h3>
                     <p>With a group of young and dedicated professional at its core Arya Constructions (P) Ltd is passionately committed to the cause of good living.</p>
                     <p> Spearheading the group is Er. S.K.Jha with substantial experience of 30 years as managing director of Lord Engineering, constructions and Consultancy Pvt. Ltd which had promoted reputed projects like Lord Gunjan Palace, Gagan Awas, Shanti Niwas, Bright Residency, 12th Milestone, Kalinga Kutir, Arya Vertex, Nanda Kutir, Aryavarata &amp; Aryabhatt (at Cuttack) etc. The technical strength of the team has resulted in successfully carving out projects offering elegant living condition with a decent price tag.
                     </p>
                     <Link to="/about" className="slider btn btn-primary">Read More</Link>
                  </div>
                  
               </div>
               
               <div className="col-lg-6 mt-4 mt-lg-0 aos-init" data-aos="fade-right">
                  <img src="/images/projects/project1.jpg" style={{
    height: '450px',
    width: '100%',
    objectFit: 'cover'
  }}/>
                  {/* <!----   <div className="inner-div top-left">
                     <h2>World Class Service</h2> 
                        </div>---> */}
               </div>

            </div>
    
         </div>
         
      </section>
  )
}

export default Feature