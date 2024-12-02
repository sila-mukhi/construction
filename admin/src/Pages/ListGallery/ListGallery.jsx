import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ListGallery = ({ url }) => {
  const [gallery, setGallery] = useState([]);

  const fetchGallerys = async () => {
    try {
      const response = await axios.get(`${url}/api/galleries/listGallery`);
      if (response.data.success) {
        setGallery(response.data.data);
      } else {
        toast.error('Error fetching gallerys');
      }
    } catch (error) {
      toast.error('Error while fetching gallerys');
    }
  };

  const removeGallery = async (galleryId) => {
    try {
      const response = await axios.post(`${url}/api/galleries/removeGallery`, { id: galleryId });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchGallerys();
      } else {
        toast.error('Error removing gallery');
      }
    } catch (error) {
      toast.error('Error while removing gallery');
    }
  };

  useEffect(() => {
    fetchGallerys();
  }, []);

  return (
    <div className="list add flex-col">
      <div className="add-course">
        <span>All Gallery List</span>
        <Link to="/add-gallery">
          <button className="add-btn">Add Gallery</button>
        </Link>
      </div>

      <div className="list-table">
        <div className="list-table-header">
          <b>Image</b>

          <b>Delete</b>
          <b>Edit</b>
        </div>
        {gallery.map((item, index) => (
  <div key={index} className="list-table-row">
          <div className="list-table-cell">
            <img className='list-img'
              src={`${url}/galleryImages/${item.image}`}
              alt="gallery"
                         />
            </div>
            <p onClick={() => removeGallery(item._id)} className="delete-btn">
              x
            </p>
          
              {/* <p onClick={() => removeCarousel(item._id)} className='cursor'>x</p> */}
              <Link to={`/edit-gallery/${item._id}`} fetchGallerys={fetchGallerys} className='edit-btn'>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGallery;
