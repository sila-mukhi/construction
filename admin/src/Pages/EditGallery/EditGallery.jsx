import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditGallery = ({url}) => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  // const url = "https://e-learning-project-backend.onrender.com";

  // Fetch course image by ID
  useEffect(() => {
    const fetchGalleryById = async () => {
      try {
        const response = await axios.get(`${url}/api/galleries/fetchGallery/${id}`);
        if (response.data.success) {
          setCurrentImage(`${url}/galleryImages/${response.data.data.image}`); // Set the current image URL
        
        } else {
          toast.error('Error fetching gallery image');
        }
      } catch (error) {
        console.error("Error fetching gallery image:", error);
        toast.error('Error fetching gallery image');
      }
    };

    fetchGalleryById();
  }, [id]);

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

  // Handle form submission for updating the image
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image); // Add the new image file

    try {
      const response = await axios.put(`${url}/api/galleries/updateGallery/${id}`, formData);
      if (response.data.success) {
        toast.success('gallery image updated successfully');
        navigate('/list-gallery');
      } else {
        toast.error('Error updating gallery image');
      }
    } catch (error) {
      console.error("Error updating gallery image:", error);
      toast.error('Error updating gallery image');
    }
  };

  return (
    <div className="edit1">
      <h2>Edit Gallery Image</h2>
      <form onSubmit={handleSubmit} className="flex-col" encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            <img src={currentImage} alt="gallery" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div>
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <button type="submit" className='update-btn'>Update Image</button>
      </form>
    </div>
  );
};

export default EditGallery;
