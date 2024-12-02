import React, { useEffect, useState } from 'react'
// import './ListInstructor.css'
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListTestimonial = ({url}) => {

  const [testimonial, setTestimonial] = useState([]);

  const fetchTestimonials = async () => {
    const response = await axios.get(`${url}/api/testimonials/listTestimonial`);
    //  console.log(response.data);
    if (response.data.success) {
      setTestimonial(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }


  const removeTestimonial = async (testimonialId) => {
    // console.log(instructorId);
    const response = await axios.post(`${url}/api/testimonials/removeTestimonial`, { id: testimonialId });
    await fetchTestimonials();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchTestimonials();
  }, [])

  return (
    // <div className="just-center">
    <div className='list add flex-col'>
      <div className='add-course'>
        <span >All Testimnial List</span>
        <Link to="/add-testimonial"><button className='add-btn'>Add Testimonial</button></Link>

      </div>
      <div className="list-table">
        <div className="list-table-header">
          <b>Image</b>
          <b>Reviews</b>
          <b>Name</b>
          <b>Company</b>        
          <b>Delete</b>
          <b>Edit</b>
        </div>
        {testimonial.map((item, index) => {
          return (
            <div key={index} className="list-table-row">
          <div className="list-table-cell">
              <img  className="list-img" src={`${url}/testimonialImages/` + item.image} alt="" />
              {/* <img className="img-fluid" src={`${url}/images/${course.image}`} alt={course.title} />         */}
            
            </div> 
            <div className="list-table-cell">
            <p>{item.reviews}</p>
            </div>
            <div className="list-table-cell">
            <p>{item.name}</p>
              </div>
              <div className="list-table-cell">
              <p>{item.company}</p> 
              </div>
              <div className="list-table-cell">
              
              <p onClick={() => removeTestimonial(item._id)} className='delete-btn'>x</p>
              </div>
              <div className="list-table-cell">
              <Link to={`/edit-testimonial/${item._id}`} fetchTestimonials={fetchTestimonials} className='edit-btn'>Edit</Link>

              </div>
         
    
                
             

            </div>
          )
        })}
      </div>
    </div>
    // </div>
  )
}

export default ListTestimonial
