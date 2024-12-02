import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Service.css'; // Import the CSS file for hover effect
import { Link } from 'react-router-dom';

const Service = () => {
   // const url = "http://localhost:4300";
   const url="https://construction-backend-wp9o.onrender.com";
   const [service, setService] = useState([]);

   const fetchServices = async () => {
      try {
         const res = await axios.get(`${url}/api/services/listService`);
         if (res.data.success && Array.isArray(res.data.data)) {
            setService(res.data.data);
         } else {
            console.error("Expected an array from API response.");
         }
      } catch (error) {
         console.error("Failed to fetch data", error);
      }
   };

   useEffect(() => {
      fetchServices();
   }, []);

   return (
      <section id="main-container" className="main-container pb-2">
         <div className="container">
            <div className="row">
               {service.length > 0 ? (
                  service.map((item, index) => (
                     <div className="col-lg-4 col-md-6 mb-5" key={index}>
                        <div className="ts-service-box aos-init" data-aos="fade-up">
                           <div className="ts-service-image-wrapper hover-zoom">
                              <img 
                                 loading="lazy" 
                                 className="w-100" 
                                 src={`${url}/serviceImages/${item.image}`} 
                                 alt="service-image" 
                              />
                           </div>
                           <div className="d-flex">
                              <div className="ts-service-box-img">
                                 <img 
                                    loading="lazy" 
                                    width="80px" 
                                    src={`${url}/serviceIcons/${item.icon}`} 
                                    alt="service-icon" 
                                 />
                              </div>
                              <div className="ts-service-info">
                                 <h5><Link to="/services">{item.service}</Link></h5>
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
      </section>
   );
};

export default Service;
