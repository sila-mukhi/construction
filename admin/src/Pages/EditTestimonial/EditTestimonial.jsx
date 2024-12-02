import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./EditTestimonial.css"

const EditTestimonial = ({url}) => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [testimonial, setTestimonial] = useState({
    reviews: '',
    name: '',
    company: ''

  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  // const url = "https://e-learning-project-backend.onrender.com";

  // Fetch course data by ID
  useEffect(() => {
    const fetchTestimonialById = async () => {
      try {
        const response = await axios.get(`${url}/api/testimonials/fetchTestimonial/${id}`);
        if (response.data.success) {
          setTestimonial(response.data.data);
          setCurrentImage(`${url}/testimonialImages/${response.data.data.image}`); // Set the current image URL
        } else {
          toast.error('Error fetching testimonial data');
        }
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
        toast.error('Error fetching testimonial data');
      }
    };

    fetchTestimonialById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({ ...testimonial, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create a URL for the new image to display it in the preview
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setCurrentImage(newImageUrl); // Replace the current image with the new image preview
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image); // Add the new image file
    formData.append('name', testimonial.name);
    formData.append('reviews', testimonial.company);
    formData.append('company', testimonial.company);


    try {
      const response = await axios.put(`${url}/api/testimonials/updateTestimonial/${id}`, formData);
      if (response.data.success) {
        toast.success('Testimonial updated successfully');
        navigate('/list-testimonial'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating Testimonial');
      }
    } catch (error) {
      console.error("Error updating Testimonial:", error);
      toast.error('Error updating Testimonial');
    }
  };

  return (
    <div className="edit1">
      <h2>Edit Testimonial</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            {/* <p>Current/New Image Preview:</p> */}
            <img src={currentImage} alt="Category" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit1-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Name</p>
          <input type="text" name="name" value={testimonial.name} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Reviews</p>
          <input type="text" name="reviews" value={testimonial.reviews} onChange={handleInputChange} required />
        </div>
        <div className="edit1-product-name flex-col">
          <p>Company</p>
          <input type="text" name="company" value={testimonial.company} onChange={handleInputChange} required />
        </div>
        <button type="submit" className='update-btn'>Update Testimonial</button>
      </form>
    </div>
  );
};

export default EditTestimonial;
