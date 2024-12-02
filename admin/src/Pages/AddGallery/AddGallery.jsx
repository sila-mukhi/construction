import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddGallery = ({ url }) => {
  const [image, setImage] = useState(null); // store the uploaded image file

  const onChangeHandler = (event) => {
    // Handle the image file change event
    setImage(event.target.files[0]);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Check if an image is selected
    if (!image) {
      toast.error('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/galleries/addGallery`, formData);
      if (response.data.success) {
        // Reset the image field after successful submission
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the gallery image.');
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Image preview"
              style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
            />
          </label>
          <input
            onChange={onChangeHandler}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddGallery;
