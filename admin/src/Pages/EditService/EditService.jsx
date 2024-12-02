import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const EditService = ({ url }) => {
  const { id } = useParams(); // Get service ID from URL parameters
  const [service, setService] = useState({
    service: '',
  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const [icon, setIcon] = useState(null); // For the icon image
  const [currentIcon, setCurrentIcon] = useState(''); // For displaying the current icon image
  const navigate = useNavigate();

  // Fetch service data by ID
  useEffect(() => {
    const fetchServiceById = async () => {
      try {
        const response = await axios.get(`${url}/api/services/fetchService/${id}`);
        if (response.data.success) {
          const data = response.data.data;
          setService(data);
          setCurrentImage(`${url}/serviceImages/${data.image}`);
          setCurrentIcon(`${url}/serviceIcons/${data.icon}`); // Updated path for icon
        } else {
          toast.error('Error fetching service data');
        }
      } catch (error) {
        console.error('Error fetching service data:', error);
        toast.error('Error fetching service data');
      }
    };

    fetchServiceById();
  }, [id, url]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService((prevService) => ({ ...prevService, [name]: value }));
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

  // Handle icon upload
  const handleIconChange = (e) => {
    const file = e.target.files[0];
    setIcon(file);
    if (file) {
      const newIconUrl = URL.createObjectURL(file);
      setCurrentIcon(newIconUrl);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) formData.append('image', image); // Add new image file if available
    if (icon) formData.append('icon', icon); // Add new icon file if available
    formData.append('service', service.service); // Add service name

    try {
      const response = await axios.put(`${url}/api/services/updateService/${id}`, formData);
      if (response.data.success) {
        toast.success('Service updated successfully');
        navigate('/list-service'); // Redirect to the list after successful update
      } else {
        toast.error(response.data.message || 'Error updating service');
      }
    } catch (error) {
      console.error('Error updating service:', error);
      toast.error('Error updating service');
    }
  };

  useEffect(() => {
    // Cleanup object URLs
    return () => {
      if (currentImage) URL.revokeObjectURL(currentImage);
      if (currentIcon) URL.revokeObjectURL(currentIcon);
    };
  }, [currentImage, currentIcon]);

  return (
    <div className="edit1">
      <h2>Edit Service</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            <img src={currentImage} alt="Service" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}
        <div className="edit1-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        {/* Display current or new icon */}
        {currentIcon && (
          <div className="icon-preview">
            <img src={currentIcon} alt="Icon" style={{ width: '50px', height: '50px' }} />
          </div>
        )}
        <div className="edit1-product-name flex-col">
          <p>Change Icon</p>
          <input type="file" name="icon" onChange={handleIconChange} />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Service Name</p>
          <input
            type="text"
            name="service"
            value={service.service}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="update-btn">Update Service</button>
      </form>
    </div>
  );
};

export default EditService;
