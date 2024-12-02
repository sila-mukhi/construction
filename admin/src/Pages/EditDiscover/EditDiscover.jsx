import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const EditDiscover = ({url}) => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [discover, setDiscover] = useState({
   email:'',
   address:'',
   phone:''
  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  // const url = "https://e-learning-project-backend.onrender.com";

  // Fetch course data by ID
  useEffect(() => {
    const fetchDiscoverById = async () => {
      try {
        const response = await axios.get(`${url}/api/discovers/fetchDiscover/${id}`);
        if (response.data.success) {
          setDiscover(response.data.data);
          setCurrentImage(`${url}/discoverImages/${response.data.data.image}`); // Set the current image URL
        } else {
          toast.error('Error fetching Discover data');
        }
      } catch (error) {
        console.error("Error fetching discover data:", error);
        toast.error('Error fetching discover data');
      }
    };

    fetchDiscoverById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiscover({ ...discover, [name]: value });
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
    formData.append('image', image); // add the new image file
    formData.append('emain', discover.email);
    formData.append('address', discover.address);
    formData.append('phone', discover.phone);


    try {
      const response = await axios.put(`${url}/api/discovers/updateDiscover/${id}`, formData);
      if (response.data.success) {
        toast.success('Discover updated successfully');
        navigate('/list-discover'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating Discover');
      }
    } catch (error) {
      console.error("Error updating Discover:", error);
      toast.error('Error updating Discover');
    }
  };

  return (
    <div className="edit1">
      <h2>Edit Discover</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            {/* <p>Current/New Image Preview:</p> */}
            <img src={currentImage} alt="discover" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit1-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Email</p>
          <input type="text" name="email" value={discover.email} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Address</p>
          <input type="text" name="address" value={discover.address} onChange={handleInputChange} required />
        </div>

        <div className="edit1-product-name flex-col">
          <p>Phone</p>
          <input type="text" name="phone" value={discover.phone} onChange={handleInputChange} required />
        </div>

     

        
        <button type="submit" className='update-btn1'>Update Discover</button>
      </form>
    </div>
  );
};

export default EditDiscover;
