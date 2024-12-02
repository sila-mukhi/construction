import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OnGoing.css'; // Import the CSS file for hover effect
import {Link} from 'react-router-dom'
const OnGoing = () => {
    // const url = "http://localhost:4300";
    const url="https://construction-backend-wp9o.onrender.com";
    const [ongoing, setOngoing] = useState([]);

    const fetchOngoings = async () => {
        try {
            const res = await axios.get(`${url}/api/ongoings/listOngoing`);
            if (res.data.success && Array.isArray(res.data.data)) {
                setOngoing(res.data.data);
            } else {
                console.error("Expected an array from API response.");
            }
        } catch (error) {
            console.error("Failed to fetch data", error);
        }
    };

    useEffect(() => {
        fetchOngoings();
    }, []);

    return (
        <section id="main-container" className="project-area pb-2">
            <div className="container">
                <div className="row">
                    {ongoing.length > 0 ? (
                        ongoing.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-5 aos-init aos-animate" data-aos="fade-up">
                                <div className="swiper-slide">
                                    <div className="item">
                                       
                                            <div className="ongoing-image-wrapper hover-zoom">
                                            <Link to={`/single-project/${item._id}`} ><img loading="lazy" className="w-100" src={`${url}/ongoingImages/${item.image}`} alt="service-image" /></Link>
                                            </div>
                                        
                                        <h4>{item.name}</h4>
                                        <h5>{item.place}</h5>
                                        <div className="main-button border-top">
                      
                                            <Link to={`/single-project/${item._id}`} ><i className="fa fa-caret-right"></i> Schedule a visit</Link>
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

export default OnGoing;
