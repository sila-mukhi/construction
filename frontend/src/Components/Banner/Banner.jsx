import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {
   // const url = "http://localhost:4300";
   const url="https://construction-backend-wp9o.onrender.com";
   const [carousel, setCarousel] = useState([]);
   const fetchCarousels = async () => {
      try {
         const res = await axios.get(`${url}/api/carousels/listCarousel`);
         console.log("hhh:",res);
         if (res.data.success && Array.isArray(res.data.data)) {
            setCarousel(res.data.data);
         } else {
            console.error("Expected an array from API response.");
         }
      } catch (error) {
         console.error("Failed to fetch data", error);
      }
      // } finally {
      //    setLoading(false);
      // }
   };

   useEffect(() => {
      fetchCarousels();
   }, []);
   return (
      <div className="banner-carousel banner-carousel-1 mb-0" data-aos="fade-down">
         {carousel.length > 0 ? (
            carousel.map((item, index) => (
               <div key={index} className="banner-carousel-item" style={{
                  backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('${url}/carouselImages/${item.image}')`
               }}>
                  <div className={`slider-content ${item.styleText}`} >
                     <div className="container h-100">
                        <div className="row align-items-center h-100">
                           <div className={`col-md-12 ${item.styleText}`} data-aos="fade-down">
                              <h2 className="slide-title">{item.content}</h2>
                              <h3 className="slide-sub-title">{item.description}</h3>
                              <p data-animation-in="slideInLeft">
                                 <Link to="/services" className="slider btn btn-primary">{item.button1}</Link>
                                 <Link to="/contact" className="slider btn btn-primary border">{item.button2}</Link>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               

            ))
         ) : (
            <div>No data available</div>
         )}
                  {/* {carousel.length > 0 ? (
            carousel.map((item, index) => (
         <div key={index} className="banner-carousel-item" style={{
    backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/slider-main/bg2.jpg')`
  }}>
      <div className="slider-content text-left">
         <div className="container h-100">
            <div className="row align-items-center h-100">
               <div className="col-md-12" data-aos="fade-left">
                  <h2 className="slide-title-box">{item.content}</h2>
                  <h3 className="slide-title">{item.description}</h3>
                  <h3 className="slide-sub-title">Your Choice is Simple</h3>
                  <p data-animation-in="slideInRight">
                     <a href="services.php" className="slider btn btn-primary border">{item.button1}</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
         ))
      ) : (
         <div>No data available</div>
      )}
          {carousel.length > 0 ? (
            carousel.map((item, index) => (
   <div key={index} className="banner-carousel-item" style={{
    backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/slider-main/bg4.jpg')`
  }}>
      <div className="slider-content text-right">
         <div className="container h-100">
            <div className="row align-items-center h-100">
               <div className="col-md-12" data-aos="fade-right">
                  <h2 className="slide-title">{item.content}</h2>
                  <h3 className="slide-sub-title">{item.description}</h3>
                  <div data-animation-in="slideInLeft">
                     <a href="contact.php" className="slider btn btn-primary" aria-label="contact-with-us">{item.button1}</a>
                     <a href="about.php" className="slider btn btn-primary border" aria-label="learn-more-about-us">{item.button2}</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
))
      ) : (
         <div>No data available</div>
      )} */}
      </div>
   )
}

export default Banner