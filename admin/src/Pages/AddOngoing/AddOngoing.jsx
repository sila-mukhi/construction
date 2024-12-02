import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddOngoing = ({ url }) => {
  const [image, setImage] = useState(false);
  const [map1, setMap1] = useState(false);
  const [map2, setMap2] = useState(false);

  const [data, setData] = useState({
    name: "",
    place: "",
    details: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    console.log(data); // Logs data to check input selections
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("image", image);
    formData.append("map1", map1);
    formData.append("map2", map2);
    formData.append("name", data.name);
    formData.append("place", data.place);
    formData.append("details", data.details);

    try {
      const response = await axios.post(`${url}/api/ongoings/addOngoing`, formData);
      if (response.data.success) {
        // Reset form fields after successful submission
        setData({
          name: "",
          place: "",
          details: "",
        });
        setImage(false);
        setMap1(false);
        setMap2(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error while adding the ongoing");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        {/* Main Image Upload */}
        <div className="image-div">
        <div className="add-img-upload flex-col">
          <p>Upload Main Image</p>
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

        {/* Map1 Image Upload */}
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
        

        {/* Map2 Image Upload */}
        <div className="add-img-upload flex-col">
          <p>Upload Map 2 Image</p>
          <label htmlFor="map2">
            <img
              src={map2 ? URL.createObjectURL(map2) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setMap2(e.target.files[0])}
            type="file"
            id="map2"
            hidden
          />
        </div>
</div>
        {/* Text Fields */}
        <div className="add-product-name-container">
          <div className="add-product-name flex-col">
            <p>Ongoing Name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Type here"
            />
          </div>

          <div className="add-product-name flex-col">
            <p>Ongoing Place</p>
            <input
              onChange={onChangeHandler}
              value={data.place}
              type="text"
              name="place"
              placeholder="Type here"
            />
          </div>

          <div className="add-product-name flex-col">
            <p>Ongoing Details</p>
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

export default AddOngoing;
