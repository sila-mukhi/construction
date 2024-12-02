import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Import the CSS file for hover effect
import { Link } from 'react-router-dom';
const Complete = () => {
    // const url = "http://localhost:4300";
    const url="https://construction-backend-wp9o.onrender.com";
    const [complete, setComplete] = useState([]);

    const fetchCompletes = async () => {
        try {
            const res = await axios.get(`${url}/api/completes/listComplete`);
            if (res.data.success && Array.isArray(res.data.data)) {
                setComplete(res.data.data);
            } else {
                console.error("Expected an array from API response.");
            }
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    useEffect(() => {
        fetchCompletes();
    }, []);

    return (
        <>
            <div id="banner-area" className="banner-area" style={{
                backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/projects/project1.jpg')`,
            }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading aos-init aos-animate" data-aos="fade-up">
                                    <h1 className="banner-title">Completed Projects</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="/complete-page">Completed Projects</Link></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="main-container" className="project-area pb-2">
                <div className="container">
                    <div className="row">
                        {complete.length > 0 ? (
                            complete.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6 mb-5 aos-init" data-aos="fade-up">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            
                                                <div className="complete-image-wrapper hover-zoom">
                                                <Link to={`/single-project2/${item._id}`} > <img loading="lazy" className="w-100" src={`${url}/completeImages/${item.image}`} alt="service-image" /></Link>
                                                </div>
                                            
                                            <h4>{item.name}</h4>
                                            <h5>{item.place}</h5>
                                            <div className="main-button border-top">
                                                <Link to={`/single-project2/${item._id}`}><i className="fa fa-caret-right"></i> Schedule a visit</Link>
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
        </>
    );
};

export default Complete;
