

import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddDiscover= ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    email: '',
    address: '',
    phone: '',
    
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
    formData.append('email',data.email)
    formData.append('address', data.address);
    formData.append('phone', data.phone);
   

    try {
      const response = await axios.post(`${url}/api/discovers/addDiscover`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
         email: '',
    address: '',
    phone: '',
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the discover');
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

    <div className="add-product-name-container">
      <div className="add-product-name flex-col">
        <p>Discover Email</p>
        <input
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          name="email"
          placeholder="Type here"
        />
      </div>

      <div className="add-product-name flex-col">
        <p>Discover Address</p>
        <input
          onChange={onChangeHandler}
          value={data.address}
          type="text"
          name="address"
          placeholder="Type here"
        />
      </div>
    </div>

    <div className="add-product-name-container">
      <div className="add-product-name flex-col">
        <p>Discover Phone</p>
        <input
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          name="phone"
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

export default AddDiscover;
