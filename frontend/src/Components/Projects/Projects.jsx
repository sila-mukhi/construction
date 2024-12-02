import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
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
        <section className="project-area">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <h3 className="section-sub-title aos-init" data-aos="fade-up">Our <span> Projects</span></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="swiper aos-init aos-animate" data-aos="fade-up">
                        <div className="slide-container-three swiper-initialized swiper-horizontal">
                            <div className="card-wrapper swiper-wrapper" id="swiper-wrapper-a5a9f9702a8919db" aria-live="off" style={{
                                transitionDuration: "0ms",
                                transform: "translate3d(0px, 0px, 0px)",
                                transitionDelay: "0ms",
                            }}>
                                {complete.length > 0 ? (
                                    complete.map((item, index) => (
                                        <div key={index} className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 11" style={{ width: '320px', marginRight: '20px' }}
                                            data-swiper-slide-index="1">
                                            <div className="item">
                                            <Link to={`/single-project2/${item._id}`}> <img loading="lazy" className="w-100" src={`${url}/completeImages/${item.image}`} alt="service-image" /></Link>
                                                <span className="category top-left">Completed</span>
                                                <h4>{item.name}</h4>
                                                <h5 className=" pt-2">{item.place}</h5>
                                                <p></p>
                                                <div className="main-button  border-top ">
                                                    <Link to={`/single-project2/${item._id}`}><i className="fa fa-caret-right"></i> Schedule a visit</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div>No data available</div>
                                )}
                            </div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </div>
            </section>
    )
}

export default Projects