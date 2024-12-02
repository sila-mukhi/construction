import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const ListComplete = ({ url }) => {
  const [complete, setComplete] = useState([]);

  // Function to truncate text to 4 characters and add "..."
  const truncateText = (le) => {
    return le.length > 4 ? le.slice(0, 4) + '...' : le;
  };

  const fetchCompletes = async () => {
    const response = await axios.get(`${url}/api/completes/listComplete`);
    if (response.data.success) {
      setComplete(response.data.data);
    } else {
      toast.error("Error fetching complete data");
    }
  };

  const removeComplete = async (completeId) => {
    const response = await axios.post(`${url}/api/completes/removeComplete`, { id: completeId });
    await fetchCompletes();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error deleting the complete item");
    }
  };

  useEffect(() => {
    fetchCompletes();
  }, []);

  return (
    <div className='list add flex-col'>
      <div className='add-course'>
        <span>All Complete List</span>
        <Link to="/add-complete">
          <button className='add-btn'>Add Complete Project</button>
        </Link>
      </div>
      <div className="list-table">
        <div className="list-table-header">
          <b>Image</b>
          <b>Name</b>
          <b>Place</b>
          <b>Details</b>
          <b>Delete</b>
          <b>Edit</b>
        </div>
        {complete.map((item, index) => {
          return (
            <div key={index} className="list-table-row">
              {/* Main Image */}
              <div className="list-table-cell">
                <img className="list-img" src={`${url}/completeImages/` + item.image} alt="Main" />
              </div>

              {/* Map 1 Image */}
              <div className="list-table-cell">
                {item.map1 ? (
                  <img className="list-img" src={`${url}/completeImages/` + item.map1} alt="Map 1" />
                ) : (
                  <p>No Map 1</p>
                )}
              </div>

              {/* Name */}
              <div className="list-table-cell">
                <p>{item.name}</p>
              </div>

              {/* Place */}
              <div className="list-table-cell">
                <p>{item.place}</p>
              </div>

              {/* Details with truncation */}
              <div className="list-table-cell">
                <p>{truncateText(item.details)}</p>
              </div>

              {/* Delete Button */}
              <div className="list-table-cell">
                <p onClick={() => removeComplete(item._id)} className='delete-btn'>x</p>
              </div>

              {/* Edit Button */}
              <div className="list-table-cell">
                <Link to={`/edit-complete/${item._id}`} className='edit-btn'>Edit</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListComplete;
