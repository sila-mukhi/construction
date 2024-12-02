import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const ListService = ({ url }) => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all services
  const fetchServices = async () => {
    try {
      const response = await axios.get(`${url}/api/services/listService`);
      if (response.data.success) {
        setService(response.data.data);
      } else {
        toast.error("Failed to fetch services");
      }
    } catch (error) {
      toast.error("Error fetching services");
    } finally {
      setLoading(false);
    }
  };

  // Remove a specific service
  const removeService = async (serviceId) => {
    try {
      const response = await axios.post(`${url}/api/services/removeService`, { id: serviceId });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchServices(); // Refresh the list after deletion
      } else {
        toast.error("Failed to delete service");
      }
    } catch (error) {
      toast.error("Error deleting service");
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return <div className="loading">Loading services...</div>;
  }

  return (
    <div className="list add flex-col">
      <div className="add-course">
        <span>All Service List</span>
        <Link to="/add-service">
          <button className="add-btn">Add Service</button>
        </Link>
      </div>

      <div className="list-table">
        <div className="list-table-header">
          <b>Image</b>
          <b>Icon</b>
          <b>Service</b>
          <b>Delete</b>
          <b>Edit</b>
        </div>

        {service.map((item) => (
          <div key={item._id} className="list-table-row">
            {/* Service Image */}
            <div className="list-table-cell">
              <img
                className="list-img"
                src={`${url}/serviceImages/${item.image}`}
                alt={`${item.service} image`}
              />
            </div>

            {/* Service Icon */}
            <div className="list-table-cell icon-cell">
              <img
                className="service-icon"
                src={`${url}/serviceIcons/${item.icon}`}
                alt={`${item.service} icon`}
              />
            </div>

            {/* Service Name */}
            <div className="list-table-cell service-cell">
              <p>{item.service}</p>
            </div>

            {/* Delete Button */}
            <div className="list-table-cell delete-cell">
              <p onClick={() => removeService(item._id)} className="delete-btn">x</p>
            </div>

            {/* Edit Button */}
            <div className="list-table-cell edit-cell">
              <Link to={`/edit-service/${item._id}`} className="edit-btn">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListService;
