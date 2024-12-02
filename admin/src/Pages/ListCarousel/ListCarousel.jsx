import React, { useEffect, useState } from 'react'
// import './ListInstructor.css'
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListCarousel = ({url}) => {

  const [carousel, setCarousel] = useState([]);

  const fetchCarousels = async () => {
    const response = await axios.get(`${url}/api/carousels/listCarousel`);
    //  console.log(response.data);
    if (response.data.success) {
      setCarousel(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }


  const removeCarousel = async (carouselId) => {
    // console.log(instructorId);
    const response = await axios.post(`${url}/api/carousels/removeCarousel`, { id: carouselId });
    await fetchCarousels();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchCarousels();
  }, [])

  return (
    // <div className="just-center">
    <div className="list add flex-col">
    <div className="add-course">
      <span>All Carousel List</span>
      <Link to="/add-Carousel">
        <button className="add-btn">Add Carousel</button>
      </Link>
    </div>
  
    <div className="list-table">
      <div className="list-table-header">
        <b>Image</b>
        <b>Content</b>
        <b>Description</b>
        <b>Button 1</b>
        <b>Button 2</b>
        <b>Delete</b>
        <b>Edit</b>
      </div>
      
      {carousel.map((item, index) => (
        <div key={index} className="list-table-row">
          <div className="list-table-cell">
            <img
              className="list-img"
              src={`${url}/carouselImages/` + item.image}
              alt=""
            />
          </div>
          <div className="list-table-cell">
            <p>{item.content}</p>
          </div>
          <div className="list-table-cell">
            <p>{item.description}</p>
          </div>
          <div className="list-table-cell">
            <p>{item.button1}</p>
          </div>
          <div className="list-table-cell">
            <p>{item.button2}</p>
          </div>
          <div className="list-table-cell">
            <p onClick={() => removeCarousel(item._id)} className="delete-btn">x</p>
          </div>
          <div className="list-table-cell">
            <Link to={`/edit-Carousel/${item._id}`} className="edit-btn">Edit</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  
    // </div>
  )
}

export default ListCarousel
