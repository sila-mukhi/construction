

import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProject= ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    place: '',
    description: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));

    }
  

  useEffect(() => {
    console.log(data); // Logs data to check language selections
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('image', image);
    formData.append('name',data.name)
    formData.append('place', data.place);
  

    try {
      const response = await axios.post(`${url}/api/projects/addProject`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
          name:'',
          place: '',  
    
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the project');
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
            alt=""
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
      </div>
  
      {/* Project Details Fields */}
      <div className="add-product-name-container">
        <div className="add-product-name">
          <p>Project Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name">
          <p>Project Place</p>
          <input
            onChange={onChangeHandler}
            value={data.place}
            type="text"
            name="place"
            placeholder="Type here"
          />
        </div>
      </div>
  
      <button type="submit" className="add-btn">
        ADD
      </button>
    </form>
  </div>
  
  );
};

export default AddProject;
