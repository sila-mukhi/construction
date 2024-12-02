

import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddComplete= ({url}) => {
  const [image, setImage] = useState(false);
  const [map1, setMap1] = useState(false);
  const [data, setData] = useState({
    name: '',
    place: '',
    details:'',
  
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
    formData.append("map1", map1);
    formData.append('name',data.name)
    formData.append('place', data.place);
    

    try {
      const response = await axios.post(`${url}/api/completes/addComplete`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
          name: '',
    place: '',
    details:'',
        });
        setImage(false);
         setMap1(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the complete');
    }
  };

  return (
<div className="add">
  <form className="flex-col" onSubmit={onSubmitHandler}>
    <div className="image-div">
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


    <div className="add-img-upload flex-col">
          <p>Upload Map 1 Image</p>
          <label htmlFor="map1">
            <img
              src={map1 ? URL.createObjectURL(map1) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setMap1(e.target.files[0])}
            type="file"
            id="map1"
            hidden
          />
        </div>
        </div>

    {/* Add Complete Name and Place Fields */}
    <div className="add-product-name-container">
      <div className="add-product-name flex-col">
        <p>Complete Name</p>
        <input
          onChange={onChangeHandler}
          value={data.name}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>

      <div className="add-product-name flex-col">
        <p>Complete Place</p>
        <input
          onChange={onChangeHandler}
          value={data.place}
          type="text"
          name="place"
          placeholder="Type here"
        />
      </div>
      
      <div className="add-product-name flex-col">
        <p>Complete Details</p>
        <input
          onChange={onChangeHandler}
          value={data.details}
          type="text"
          name="details"
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

export default AddComplete;
