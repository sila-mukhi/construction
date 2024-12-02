import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddService = ({ url }) => {
  const [image, setImage] = useState(false);
  const [icon, setIcon] = useState(false);
  const [data, setData] = useState({
    service: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    console.log(data); // Logs data to check language selections
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('image', image); // Append the image file
    formData.append('icon', icon); // Append the icon file
    formData.append('service', data.service); // Append the service name

    try {
      const response = await axios.post(`${url}/api/services/addService`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
          service: '',
        });
        setImage(false);
        setIcon(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Error while adding the service');
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className='image-div'>
        {/* Image Upload */}
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

        {/* Icon Upload */}
        <div className="add-img-upload flex-col">
          <p>Upload Icon</p>
          <label htmlFor="icon">
            <img src={icon ? URL.createObjectURL(icon) : assets.upload_area} alt="" />
          </label>
          <input
            onChange={(e) => setIcon(e.target.files[0])}
            type="file"
            id="icon"
            hidden
            required
          />
        </div>
        </div>

        {/* Service Name Field */}
        <div className="add-product-name flex-col">
          <p>Service Name</p>
          <input
            onChange={onChangeHandler}
            value={data.service}
            type="text"
            name="service"
            placeholder="Type here"
          />
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddService;
