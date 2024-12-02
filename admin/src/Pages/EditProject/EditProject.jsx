import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./EditCategory.css"

const EditProject = ({url}) => {
  const { id } = useParams(); // Get course ID from URL parameters
  const [project, setProject] = useState({

name:'',
place:'',

  });
  const [image, setImage] = useState(null); // For the new image
  const [currentImage, setCurrentImage] = useState(''); // For displaying the current image
  const navigate = useNavigate();
  // const url = "https://e-learning-project-backend.onrender.com";

  // Fetch course data by ID
  useEffect(() => {
    const fetchProjectById = async () => {
      try {
        const response = await axios.get(`${url}/api/projects/fetchProject/${id}`);
        if (response.data.success) {
          setProject(response.data.data);
          setCurrentImage(`${url}/projectImages/${response.data.data.image}`); // Set the current image URL
        } else {
          toast.error('Error fetching project data');
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
        toast.error('Error fetching project data');
      }
    };

    fetchProjectById();
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create a URL for the new image to display it in the preview
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setCurrentImage(newImageUrl); // Replace the current image with the new image preview
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image); // Add the new image file
    formData.append('name', project.name);
    formData.append('place', project.place);


    try {
      const response = await axios.put(`${url}/api/projects/updateProject/${id}`, formData);
      if (response.data.success) {
        toast.success('project updated successfully');
        navigate('/list-project'); // Redirect to the list after successful update
      } else {
        toast.error('Error updating project');
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error('Error updating project');
    }
  };

  return (
    <div className="edit3">
      <h2>Edit Project</h2>
      <form className="flex-col" onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Display current or new image */}
        {currentImage && (
          <div className="image-preview">
            {/* <p>Current/New Image Preview:</p> */}
            <img src={currentImage} alt="Category" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <div className="edit3-product-name flex-col">
          <p>Change Image</p>
          <input type="file" name="image" onChange={handleImageChange} />
        </div>

        <div className="edit3-product-name flex-col">
          <p>Name</p>
          <input type="text" name="name" value={project.name} onChange={handleInputChange} required />
        </div>

        <div className="edit3-product-name flex-col">
          <p>Place</p>
          <input type="text" name="place" value={project.place} onChange={handleInputChange} required />
        </div>
        <button type="submit" className='update-btn3'>Update Project</button>
      </form>
    </div>
  );
};

export default EditProject;
