// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const SingleProject = () => {
//     const { id } = useParams(); // Get project ID from URL
//     const [ongoing, setOngoing] = useState(false); // Initialize with false
//     const url = "http://localhost:4300";               

//     useEffect(() => {
//         const fetchOngoingDetails = async () => {
//             try {
//                 const res = await axios.get(`${url}/api/ongoings/fetchOngoing/${id}`);
//                 setOngoing(res.data.data); // Assuming response contains the project data under 'data'
//             } catch (error) {
//                 console.error("Error fetching ongoing details:", error);
//             }
//         };

//         fetchOngoingDetails();
//     }, [id]);

//     return (
//         <>
//               {ongoing ? (
//                 <div>
//                       <div id="banner-area" className="banner-area" style={{
//         backgroundImage: 'linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)),url(/images/projects/project1.jpg)'
//       }}
//       >
//         <div className="banner-text">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="banner-heading aos-init aos-animate" data-aos="fade-up">
//                   <h1 className="banner-title">PROJECT DETAILS</h1>
//                   <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb justify-content-center">
//                       <li className="breadcrumb-item"><Link to="/">HOME</Link></li>
//                       <li className="breadcrumb-item"><Link to="/ongoing-page">ONGOING PROJECTS</Link></li>
//                       <li className="breadcrumb-item"><Link to="/single-project">{ongoing.name}</Link></li>
//                     </ol>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//         <section id="ts-features" className="ts-features">
//             <div className="container">
            
//                     <div className="row">
//                         <div className="col-lg-6">
//                             <div className="ts-intro">
//                                 <h3 className="section-sub-title" data-aos="fade-up">
//                                     <span>{ongoing.name}</span>
//                                 </h3>
//                                    <p data-aos="fade-up">
//                           {ongoing.details}
//                         </p>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up">
//                             <img 
//                                 src={`${url}/ongoingImages/${ongoing.image}`} 
//                                 className="img-fluid" 
//                                 alt={ongoing.name || "Ongoing project image"} 
//                             />
//                         </div>
//                     </div>
             
//             </div>
//         </section>
//            <section id="main-container" className="main-container pb-5">
//            <div className="container">
//               <div className="row text-center">
//                  <div className="col-lg-12">
//                     <h3 className="section-sub-title" data-aos="fade-up">Map & <span>Floor Plan</span></h3>
//                  </div>
//               </div>
//               <div className="row">
//                  <div className="col-lg-6 mt-4 mt-lg-0">
//                   <img src={`${url}/ongoingImages/${ongoing.map1}`}  className="img-fluid"/>
//                  </div>
//                  {/* <!-- Col end --> */}
//                 <div className="col-lg-6 mt-4 mt-lg-0">
//                   <img src={`${url}/ongoingImages/${ongoing.map2}`}  className="img-fluid"/>
//                  </div>
//                  {/* <!-- Col end --> */}
//               </div>
//               {/* <!-- Row end --> */}
//            </div>
//         </section>
//         </div>
//            ) : (
//                     <div>No data available</div>
//                 )}
//         </>
//     );
// };

// export default SingleProject;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleProject = () => {
    const { id } = useParams(); // Get project ID from URL
    const [ongoing, setOngoing] = useState(null); // Initialize with null
    // const url = "http://localhost:4300"; 
    const url="https://construction-backend-wp9o.onrender.com";              

    useEffect(() => {
        // Initialize AOS animations
        AOS.init();

        const fetchOngoingDetails = async () => {
            try {
                const res = await axios.get(`${url}/api/ongoings/fetchOngoing/${id}`);
                setOngoing(res.data.data); // Assuming response contains the project data under 'data'
            } catch (error) {
                console.error("Error fetching ongoing details:", error);
            }
        };

        fetchOngoingDetails();
    }, [id]);

    return (
        <>
            {ongoing ? (
                <div>
                    <div
                        id="banner-area"
                        className="banner-area"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)),url(/images/projects/project1.jpg)'
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
                                                    <li className="breadcrumb-item"><Link to="/ongoing-page">ONGOING PROJECTS</Link></li>
                                                    <li className="breadcrumb-item"><Link to="">{ongoing.name}</Link></li>
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
                                        <h3 className="section-sub-title" data-aos="fade-up">
                                            <span>{ongoing.name}</span>
                                        </h3>
                                        <p data-aos="fade-up">{ongoing.details}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-4 mt-lg-0" data-aos="fade-up">
                                    <img 
                                        src={`${url}/ongoingImages/${ongoing.image}`} 
                                        className="img-fluid" 
                                        alt={ongoing.name || "Ongoing project image"} 
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="main-container" className="main-container pb-5">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-12">
                                    <h3 className="section-sub-title" data-aos="fade-up">Map & <span>Floor Plan</span></h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mt-4 mt-lg-0">
                                    <img src={`${url}/ongoingImages/${ongoing.map1}`} className="img-fluid" alt="Map 1" />
                                </div>
                                <div className="col-lg-6 mt-4 mt-lg-0">
                                    <img src={`${url}/ongoingImages/${ongoing.map2}`} className="img-fluid" alt="Map 2" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </>
    );
};

export default SingleProject;
