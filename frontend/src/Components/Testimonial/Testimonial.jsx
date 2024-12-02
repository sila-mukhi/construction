//   const url = "http://localhost:4300";
//   const [testimonial, setTestimonial] = useState([]);
//   const fetchTestimonial = async () => {
//      try {
//         const res = await axios.get(`${url}/api/testimonials/listTestimonial`);
//         if (res.data.success && Array.isArray(res.data.data)) {
//            setTestimonial(res.data.data);
//         } else {
//            console.error("Expected an array from API response.");
//         }
//      } catch (error) {
//         console.error("Failed to fetch data", error);
//      }
//   };

//   useEffect(() => {
//      fetchTestimonial();
//   }, []);
//   return (
//     <>
//       <section className=" testimonal-sec pb-2">
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-lg-12">
//               <h3 className="section-sub-title" data-aos="fade-up">Our <span> Testimonial</span></h3>
//             </div>
//           </div>
//           <div className="row">
//             <div className="swiper" data-aos="fade-up">
//               <div className=" slide-container-three">
//                 <div className="card-wrapper swiper-wrapper">
//                 {testimonial.length > 0 ? (
//                   testimonial.map((item, index) => (
//                   <div key={index}className="col-lg-4 swiper-slide ">
//                     <div className="quote-item quote-border mt-5">
//                       <div className="quote-text-border">
//                         {item.reviews}
//                       </div>
//                       <div className="quote-item-footer">
//                         <img loading="lazy" className="testimonial-thumb" src={`${url}/testimonialImages/${item.image}`} alt="testimonial" />
//                         <div className="quote-item-info">
//                           <h3 className="quote-author">{item.name}</h3>
//                           <span className="quote-subtext">{item.company}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                     ))
//                   ) : (
//                      <div>No data available</div>
//                   )}
//                 </div>
//               </div>
//               <div className="swiper-button-next-three swiper-navBtn"></div>
//               <div className="swiper-button-prev-three swiper-navBtn"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="youtube-area3">
//         <div className="container">
//           <div className="row ">
//             <div className="col-12 text-center">
//               <h2 className="text-white" data-aos="fade-up"><b> Join Us</b></h2>
//               <h3 className="text-white" data-aos="fade-up"><b> Great Team Great Projects</b></h3>
//               <p className="section-title text-white" data-aos="fade-up">Explore Our Array Of Oppertunities & Find The Role That Works For You.</p>
//               <Link to="/contact" className="slider btn btn-primary">Contact Us</Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Testimonial

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'

const Testimonial = () => {
  // const url = "http://localhost:4300";
  const url="https://construction-backend-wp9o.onrender.com";
  const [testimonial, setTestimonial] = useState([]);
  const fetchTestimonial = async () => {
     try {
        const res = await axios.get(`${url}/api/testimonials/listTestimonial`);
        if (res.data.success && Array.isArray(res.data.data)) {
           setTestimonial(res.data.data);
        } else {
           console.error("Expected an array from API response.");
        }
     } catch (error) {
        console.error("Failed to fetch data", error);
     }
  };

  useEffect(() => {
     fetchTestimonial();
  }, []);
  return (
    <>
      <section className=" testimonal-sec pb-2">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h3 className="section-sub-title" data-aos="fade-up">Our <span> Testimonial</span></h3>
            </div>
          </div>
          <div className="row">
            <div className="swiper" data-aos="fade-up">
              <div className=" slide-container-three">
                <div className="card-wrapper swiper-wrapper">
                {testimonial.length > 0 ? (
                  testimonial.map((item, index) => (
                  <div key={index}className="col-lg-4 swiper-slide ">
                    <div className="quote-item quote-border mt-5">
                      <div className="quote-text-border">
                        {item.reviews}
                      </div>
                      <div className="quote-item-footer">
                        <img loading="lazy" className="testimonial-thumb" src={`${url}/testimonialImages/${item.image}`} alt="testimonial" />
                        <div className="quote-item-info">
                          <h3 className="quote-author">{item.name}</h3>
                          <span className="quote-subtext">{item.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                    ))
                  ) : (
                     <div>No data available</div>
                  )}
                </div>
              </div>
              <div className="swiper-button-next-three swiper-navBtn"></div>
              <div className="swiper-button-prev-three swiper-navBtn"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="youtube-area3">
        <div className="container">
          <div className="row ">
            <div className="col-12 text-center">
              <h2 className="text-white" data-aos="fade-up"><b> Join Us</b></h2>
              <h3 className="text-white" data-aos="fade-up"><b> Great Team Great Projects</b></h3>
              <p className="section-title text-white" data-aos="fade-up">Explore Our Array Of Oppertunities & Find The Role That Works For You.</p>
              <Link to="/contact" className="slider btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial  