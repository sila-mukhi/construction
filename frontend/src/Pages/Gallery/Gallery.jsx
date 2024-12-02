// import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Gallery = () => {
//     const url = "http://localhost:4300";
//     const [gallery, setGallery] = useState([]);
//     const fetchGalleries = async () => {
//         try {
//             const res = await axios.get(`${url}/api/galleries/listGallery`);
//             if (res.data.success && Array.isArray(res.data.data)) {
//                 setGallery(res.data.data);
//             } else {
//                 console.error("Expected an array from API response.");
//             }
//         } catch (error) {
//             console.error("Failed to fetch data", error);
//         }
//     };

//     useEffect(() => {
//         fetchGalleries();
//     }, []);
//     return (
//         <>
//             <div id="banner-area" className="banner-area" style={{ backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/banner/banner10.webp')` }}>
//                 <div className="banner-text">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="banner-heading">
//                                     <h1 className="banner-title">Gallery</h1>
//                                     <nav aria-label="breadcrumb">
//                                         <ol className="breadcrumb justify-content-center">
//                                             <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                                             <li className="breadcrumb-item"><Link to="/gallery">Gallery</Link></li>

//                                         </ol>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section id="main-container" className="main-container pb-2">
//                 <div className="container">

//                     <div className="row">
//                         {gallery.length > 0 ? (
//                             gallery.map((item, index) => (
//                                 <div className="col-lg-4 col-md-6 mb-5 gimage aos-init aos-animate" data-aos="fade-up">
//                                     <img src={`${url}/galleryImages/${item.image}`} width="350px" />
//                                 </div>
//                             ))
//                         ) : (
//                             <div>No data available</div>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Gallery

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const url = "http://localhost:4300";
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchGalleries = async () => {
        try {
            const res = await axios.get(`${url}/api/galleries/listGallery`);
            if (res.data.success && Array.isArray(res.data.data)) {
                setGallery(res.data.data);
            } else {
                setError("Unexpected data structure.");
            }
        } catch (error) {
            setError("Failed to fetch data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGalleries();
    }, []);

    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/banner/banner10.webp')` }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Gallery</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="/gallery">Gallery</Link></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="main-container" className="main-container pb-2">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>{error}</div>
                        ) : gallery.length > 0 ? (
                            gallery.map((item, index) => (
                                <div key={item._id || index} className="col-lg-4 col-md-6 mb-5 gimage aos-init aos-animate" data-aos="fade-up">
                                    <img src={`${url}/galleryImages/${item.image}`} width="350px" alt={item.title || 'Gallery Image'} loading="lazy" />
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

export default Gallery;
