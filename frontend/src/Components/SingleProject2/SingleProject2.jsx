import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SingleProject2 = () => {
    const { id } = useParams(); // Get project ID from URL
    const [complete, setComplete] = useState(false); // Initialize with false
    const url = "http://localhost:4300";
    useEffect(() => {
        const fetchCompleteDetails = async () => {
            try {
                const res = await axios.get(`${url}/api/completes/fetchComplete/${id}`);
                setComplete(res.data.data); // Assuming response contains the project data under 'data'
            } catch (error) {
                console.error("Error fetching complete details:", error);
            }
        };

        fetchCompleteDetails();
    }, [id]); 
  return (
    <>
         {complete ? (
            <div>
                 <div id="banner-area" className="banner-area" style={{
        backgroundImage: 'linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url(/images/projects/project1.jpg)'
      }}
      >
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-heading aos-init aos-animate" data-aos="fade-up">
                  <h1 className="banner-title">PROJECT DETAILS</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><Link to="/">HOME</Link></li>
                      <li className="breadcrumb-item"><Link to="/ongoing-page">COMPLETED PROJECTS</Link></li>
                      <li className="breadcrumb-item"><Link to="/single-project2">{complete.name}</Link></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
           <section id="ts-features" className="ts-features">
            <div className="container">
           
               <div className="row">
                  <div className="col-lg-6">
                     <div className="ts-intro">
                        <h3 className="section-sub-title" data-aos="fade-up"><span>{complete.name}</span></h3>
                        <p data-aos="fade-up">
                          {complete.details}
                        </p>
                     </div>
                     {/* <!-- Intro box end --> */}
                  </div>
                  {/* <!-- Col end --> */}
                  <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up">
                     <img src={`${url}/completeImages/${complete.image}`}  className="img-fluid"/>
                  </div>
                  {/* <!-- Col end --> */}
               </div>
      
            </div>
            {/* <!-- Container end --> */}
         </section>


         <section id="main-container" className="main-container pb-5">
            <div className="container">
               <div className="row text-center">
                  <div className="col-lg-12">
                     <h3 className="section-sub-title" data-aos="fade-up">Map &<span>Location</span></h3>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-6 mt-4 mt-lg-0">
                   <img src={`${url}/completeImages/${complete.map1}`}   className="img-fluid"/>
                  </div>
                  {/* <!-- Col end --> */}
                 <div className="col-lg-6 mt-4 mt-lg-0">
                    <h4 className="text-danger mt-5">{complete.place}</h4>
                  </div>
                  {/* <!-- Col end --> */}
               </div>
               {/* <!-- Row end --> */}
            </div>
         </section>
         </div>
               ) : (
                <div>No data available</div>
            )}
    
    </>
  )
}

export default SingleProject2