

import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCarousel= ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    content: '',
    description: '',
    button1: '',
    button2:'',
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
    formData.append('content',data.content)
    formData.append('description', data.description);
    formData.append('button1', data.button1);
    formData.append('button2', data.button2);

    try {
      const response = await axios.post(`${url}/api/carousels/addCarousel`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
          content: '',
          description: '',
          button1: '',
          button2:'',
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the carousel');
    }
  };

  return (
    <div className="add">
    <form className="flex-col" onSubmit={onSubmitHandler}>
      <div className="add-img-upload flex-col">
        <p>Upload Image</p>
        <label htmlFor="image">
          <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
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
        <div className="add-product-name">
          <p>Carousel Content</p>
          <input
            onChange={onChangeHandler}
            value={data.content}
            type="text"
            name="content"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name">
          <p>Carousel Description</p>
          <input
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            name="description"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name">
          <p>Carousel Button1</p>
          <input
            onChange={onChangeHandler}
            value={data.button1}
            type="text"
            name="button1"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-name">
          <p>Carousel Button2</p>
          <input
            onChange={onChangeHandler}
            value={data.button2}
            type="text"
            name="button2"
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

export default AddCarousel;
