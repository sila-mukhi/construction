import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditComplete = ({ url }) => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [complete, setComplete] = useState({
    name: '',
    place: '',
    details: '',
  });
  const [image, setImage] = useState(null); // For the new image
  const [map1Image, setMap1Image] = useState(null); // For the new map1 image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const [currentMap1Image, setCurrentMap1Image] = useState(''); // For displaying the current map1 image
  const navigate = useNavigate();

  // Fetch course data by ID
  useEffect(() => {
    const fetchCompleteById = async () => {
      try {
        const response = await axios.get(`${url}/api/completes/fetchComplete/${id}`);
        if (response.data.success) {
          setComplete(response.data.data);
          setCurrentImage(`${url}/completeImages/${response.data.data.image}`); // Set the current image URL
          setCurrentMap1Image(`${url}/completeImages/${response.data.data.map1}`);
        } else {
          toast.error('Error fetching complete data');
        }
      } catch (error) {
        console.error("Error fetching complete data:", error);
        toast.error('Error fetching complete data');
      }
    };

    fetchCompleteById();
  }, [id, url]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComplete({ ...complete, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0];
    if (imageType === 'image') {
      setImage(file);
      if (file) {
        const newImageUrl = URL.createObjectURL(file);
        setCurrentImage(newImageUrl);
      }
    } else if (imageType === 'map1') {
      setMap1Image(file);
      if (file) {
        const newMap1ImageUrl = URL.createObjectURL(file);
        setCurrentMap1Image(newMap1ImageUrl);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) {
      formData.append('image', image); // Add the new image if it exists
    }
    if (map1Image) {
      formData.append('map1', map1Image); // Add the map1 image if it exists
    }
    formData.append('name', complete.name);
    formData.append('place', complete.place);
    formData.append('details', complete.details);

    try {
      const response = await axios.put(`${url}/api/completes/updateComplete/${id}`, formData);
      if (response.data.success) {
        toast.success('Complete updated successfully');
        navigate('/list-complete'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating complete');
      }
    } catch (error) {
      console.error("Error updating complete:", error);
      toast.error('Error updating complete');
    }
  };

  return (
    <div className="edit1">
      <h2>Edit Complete</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            <img src={currentImage} alt="Complete" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}
        {currentMap1Image && (
          <div className="image-preview">
            <img
              src={currentMap1Image}
              alt="Map 1"
              style={{ width: '200px', height: 'auto' }}
            />
            <p>Current Map 1 Image</p>
          </div>
        )}

        <div className="edit1-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={(e) => handleImageChange(e, 'image')} />
        </div>
        <div className="edit1-product-name flex-col">
          <p>Change Map 1 Image</p>
          <input
            type="file"
            name="map1"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'map1')}
          />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Name</p>
          <input type="text" name="name" value={complete.name} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Place</p>
          <input type="text" name="place" value={complete.place} onChange={handleInputChange} required />
        </div>
        <div className="edit1-product-name flex-col">
          <p>Details</p>
          <input type="text" name="details" value={complete.details} onChange={handleInputChange} required />
        </div>

        <button type="submit" className="update-btn">Update Complete</button>
      </form>
    </div>
  );
};

export default EditComplete;
