import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditOngoing = ({ url }) => {
  const { id } = useParams(); // Get ongoing ID from URL parameters
  const [ongoing, setOngoing] = useState({
    name: '',
    place: '',
    details: '',
  });
  const [image, setImage] = useState(null); // For the new ongoing image
  const [map1Image, setMap1Image] = useState(null); // For the new map1 image
  const [map2Image, setMap2Image] = useState(null); // For the new map2 image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current ongoing image
  const [currentMap1Image, setCurrentMap1Image] = useState(''); // For displaying the current map1 image
  const [currentMap2Image, setCurrentMap2Image] = useState(''); // For displaying the current map2 image
  const navigate = useNavigate();

  // Fetch ongoing data by ID
  useEffect(() => {
    const fetchOngoingById = async () => {
      try {
        const response = await axios.get(`${url}/api/ongoings/fetchOngoing/${id}`);
        if (response.data.success) {
          setOngoing(response.data.data);
          setCurrentImage(`${url}/ongoingImages/${response.data.data.image}`);
          setCurrentMap1Image(`${url}/ongoingImages/${response.data.data.map1}`);
          setCurrentMap2Image(`${url}/ongoingImages/${response.data.data.map2}`);
        } else {
          toast.error('Error fetching ongoing data');
        }
      } catch (error) {
        console.error('Error fetching ongoing data:', error);
        toast.error('Error fetching ongoing data');
      }
    };

    fetchOngoingById();
  }, [id, url]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOngoing({ ...ongoing, [name]: value });
  };

  // Handle image upload for ongoing image, map1, and map2
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
    } else if (imageType === 'map2') {
      setMap2Image(file);
      if (file) {
        const newMap2ImageUrl = URL.createObjectURL(file);
        setCurrentMap2Image(newMap2ImageUrl);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) {
      formData.append('image', image); // Add the ongoing image if it exists
    }
    if (map1Image) {
      formData.append('map1', map1Image); // Add the map1 image if it exists
    }
    if (map2Image) {
      formData.append('map2', map2Image); // Add the map2 image if it exists
    }
    formData.append('name', ongoing.name);
    formData.append('place', ongoing.place);
    formData.append('details', ongoing.details);

    try {
      const response = await axios.put(`${url}/api/ongoings/updateOngoing/${id}`, formData);
      if (response.data.success) {
        toast.success('Ongoing updated successfully');
        navigate('/list-ongoing'); // Redirect to the list after successful update
      } else {
        toast.error(response.data.message || 'Error updating ongoing');
      }
    } catch (error) {
      console.error('Error updating ongoing:', error);
      toast.error('Error updating ongoing');
    }
  };

  return (
    <div className="edit1">
      <h2>Edit Ongoing</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current ongoing image */}
        {currentImage && (
          <div className="image-preview">
            <img
              src={currentImage}
              alt="Ongoing"
              style={{ width: '200px', height: 'auto' }}
            />
            <p>Current Ongoing Image</p>
          </div>
        )}

        {/* Display current map1 image */}
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

        {/* Display current map2 image */}
        {currentMap2Image && (
          <div className="image-preview">
            <img
              src={currentMap2Image}
              alt="Map 2"
              style={{ width: '200px', height: 'auto' }}
            />
            <p>Current Map 2 Image</p>
          </div>
        )}

        {/* Image upload fields */}
        <div className="edit1-product-name flex-col">
          <p>Change Ongoing Image</p>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'image')}
          />
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
          <p>Change Map 2 Image</p>
          <input
            type="file"
            name="map2"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'map2')}
          />
        </div>

        {/* Text fields */}
        <div className="edit1-product-name flex-col">
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={ongoing.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Place</p>
          <input
            type="text"
            name="place"
            value={ongoing.place}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Details</p>
          <textarea
            name="details"
            value={ongoing.details}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="update-btn">
          Update Ongoing
        </button>
      </form>
    </div>
  );
};

export default EditOngoing;
