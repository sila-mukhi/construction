import React, { useEffect, useState } from 'react'
// import './ListInstructor.css'
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListDiscover = ({url}) => {

  const [discover, setDiscover] = useState([]);

  const fetchDiscovers = async () => {
    const response = await axios.get(`${url}/api/discovers/listDiscover`);
    //  console.log(response.data);
    if (response.data.success) {
      setDiscover(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }


  const removeDiscover = async (discoverId) => {
    // console.log(instructorId);
    const response = await axios.post(`${url}/api/discovers/removeDiscover`, { id: discoverId });
    await fetchDiscovers();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchDiscovers();
  }, [])

  return (
    // <div className="just-center">
    <div className='list add flex-col'>
      <div className='add-course'>
        <span >All Discover List</span>
        <Link to="/add-discover"><button className='add-btn'>Add Discover</button></Link>

      </div>
      <div className="list-table">
        <div className="list-table-header">
          <b>Image</b>
          <b>Email</b>
          <b>Address</b>
          <b>Phone</b>
          <b>Delete</b>
          <b>Edit</b>
        </div>
        {discover.map((item, index) => {
          return (
            <div key={index} className="list-table-row">
          <div className="list-table-cell">
              <img className="list-img" src={`${url}/discoverImages/` + item.image} alt="" />
              {/* <img className="img-fluid" src={`${url}/images/${course.image}`} alt={course.title} />         */}
            </div>
              <p>{item.email}</p>
              <p>{item.address}</p>
              <p>{item.phone}</p>
           
              <p onClick={() => removeDiscover(item._id)} className='delete-btn'>x</p>
              <Link to={`/edit-discover/${item._id}`} fetchDiscovers={fetchDiscovers} className='edit-btn'>Edit</Link>


            </div>
          )
        })}
      </div>
    </div>
    // </div>
  )
}

export default ListDiscover
