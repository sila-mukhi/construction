

import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddTestimonial= ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    reviews:'',
    name: '',
    company:'',
   
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
    formData.append('reviews',data.reviews)
    formData.append('name',data.name)
    formData.append('company', data.company);
  

    try {
      const response = await axios.post(`${url}/api/testimonials/addTestimonial`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
          reviews:'',
          name: '',
          company:'',
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the testimonial');
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
        <p>Testimonial Reviews</p>
        <input
          onChange={onChangeHandler}
          value={data.reviews}
          type="text"
          name="reviews"
          placeholder="Type here"
        />
      </div>

      <div className="add-product-name flex-col">
        <p>Testimonial Name</p>
        <input
          onChange={onChangeHandler}
          value={data.name}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
    </div>

    <div className="add-product-name-container">
      <div className="add-product-name flex-col">
        <p>Testimonial Company</p>
        <input
          onChange={onChangeHandler}
          value={data.company}
          type="text"
          name="company"
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

export default AddTestimonial;
