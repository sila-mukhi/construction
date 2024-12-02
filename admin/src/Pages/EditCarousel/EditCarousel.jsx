import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditCarousel = ({url}) => {
  const { id } = useParams(); 
  const [carousel, setCarousel] = useState({
    content: '',
    description: '',
    button1: '',
    button2:'',
  });
  const [image, setImage] = useState(null); 
  const [currentImage, setCurrentImage] = useState(''); 
  const navigate = useNavigate();
  
  // Fetch carousel data by ID
  useEffect(() => {
    const fetchCarouselById = async () => {
      try {
        const response = await axios.get(`${url}/api/carousels/fetchCarousel/${id}`);
        if (response.data.success) {
          setCarousel(response.data.data);
          setCurrentImage(`${url}/carouselImages/${response.data.data.image}`);
        } else {
          toast.error('Error fetching Carousel data');
        }
      } catch (error) {
        console.error("Error fetching Carousel data:", error);
        toast.error('Error fetching Carousel data');
      }
    };

    fetchCarouselById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarousel({ ...carousel, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setCurrentImage(newImageUrl);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('content', carousel.content);
    formData.append('description', carousel.description);
    formData.append('button1',carousel.button1);
    formData.append('button2',carousel.button2);

    try {
      const response = await axios.put(`${url}/api/carousels/updateCarousel/${id}`, formData);
      if (response.data.success) {
        toast.success('Carousel updated successfully');
        navigate('/list-carousel'); 
      } else {
        toast.error('Error updating Carousel');
      }
    } catch (error) {
      console.error("Error updating Carousel:", error);
      toast.error('Error updating Carousel');
    }
  };

  return (
    <div className="edit1">
      <h2>Edit Carousel</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            <img src={currentImage} alt="Carousel" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit-product-name">
          <div className="input-group">
            <p>Change Image</p>
            <input type="file" name="image" onChange={handleImageChange} className='small-input' />
          </div>
          <div className="input-group">
            <p>Content</p>
            <input type="text" name="content" value={carousel.content} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="edit-product-name">
          <div className="input-group">
            <p>Description</p>
            <input type="text" name="description" value={carousel.description} onChange={handleInputChange} required />
          </div>
          <div className="input-group">
            <p>Button1</p>
            <input type="text" name="button1" value={carousel.button1} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="edit-product-name">
          <div className="input-group">
            <p>Button2</p>
            <input type="text" name="button2" value={carousel.button2} onChange={handleInputChange} required />
          </div>
        </div>

        <button type="submit" className="update-btn">Update Carousel</button>
      </form>
    </div>
  );
};

export default EditCarousel;
