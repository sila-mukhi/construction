import React, { useEffect, useState } from 'react'
// import './ListInstructor.css'
import axios from "axios"
import { toast } from "react-toastify"
import { Link } from 'react-router-dom'

const ListProject = ({url}) => {

  const [project, setProject] = useState([]);

  const fetchProjects = async () => {
    const response = await axios.get(`${url}/api/projects/listProject`);
    //  console.log(response.data);
    if (response.data.success) {
      setProject(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }


  const removeProject = async (projectId) => {
    // console.log(instructorId);
    const response = await axios.post(`${url}/api/projects/removeProject`, { id: projectId });
    await fetchProjects();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }
  useEffect(() => {
    fetchProjects();
  }, [])

  return (
    // <div className="just-center">
    <div className='list add flex-col'>
      <div className='add-course'>
        <span >All Project List</span>
        <Link to="/add-product"><button className='add-btn'>Add Project</button></Link>

      </div>
      <div className="list-table">
        <div className="list-table-header">
          <b>Image</b>
          <b>Name</b>
          <b>Place</b>
          <b>Delete</b>
          <b>Edit</b>
        </div>
        {project.map((item, index) => {
          return (
            <div key={index} className="list-table-row">
          <div className="list-table-cell">
              <img className="list-img" src={`${url}/projectimages/` + item.image} alt="" />
              {/* <img className="img-fluid" src={`${url}/images/${course.image}`} alt={course.title} />         */}
              </div>
              <div className="list-table-cell">
              <p>{item.name}</p>
              </div>
              <div className="list-table-cell">
              <p>{item.place}</p>
              </div>
              <div className="list-table-cell">
              <p onClick={() => removeProject(item._id)} className='delete-btn'>x</p>
                </div>
                <div className="list-table-cell">
                <Link to={`/edit-project/${item._id}`} fetchProjects={fetchProjects} className='edit-btn'>Edit</Link>
                </div>
            
           

          


            </div>
          )
        })}
      </div>
    </div>
    // </div>
  )
}

export default ListProject
