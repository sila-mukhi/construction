import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ListOngoing = ({ url }) => {
  const [ongoing, setOngoing] = useState([]);

  // Function to truncate text to 4 characters and add "..."
  const truncateText = (le) => {
    return le.length > 4 ? le.slice(0, 4) + '...' : le;
  };

  const fetchOngoings = async () => {
    const response = await axios.get(`${url}/api/ongoings/listOngoing`);
    if (response.data.success) {
      setOngoing(response.data.data);
    } else {
      toast.error("Error fetching ongoing data");
    }
  };

  const removeOngoing = async (ongoingId) => {
    const response = await axios.post(`${url}/api/ongoings/removeOngoing`, { id: ongoingId });
    await fetchOngoings();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error deleting the ongoing item");
    }
  };

  useEffect(() => {
    fetchOngoings();
  }, []);

  return (
    <div className="list add flex-col">
      <div className="add-course">
        <span>All Ongoing List</span>
        <Link to="/add-ongoing">
          <button className="add-btn">Add Ongoing</button>
        </Link>
      </div>
      <div className="list-table">
        <div className="list-table-header">
          <b>Image</b>
          <b>Map 1</b>
          <b>Map 2</b>
          <b>Name</b>
          <b>Place</b>
          <b>Details</b>
          <b>Delete</b>
          <b>Edit</b>
        </div>
        {ongoing.map((item, index) => {
          return (
            <div key={index} className="list-table-row">
              {/* Main Image */}
              <div className="list-table-cell">
                <img className="list-img" src={`${url}/ongoingImages/` + item.image} alt="Main" />
              </div>

              {/* Map 1 Image */}
              <div className="list-table-cell">
                {item.map1 ? (
                  <img className="list-img" src={`${url}/ongoingImages/` + item.map1} alt="Map 1" />
                ) : (
                  <p>No Map 1</p>
                )}
              </div>

              {/* Map 2 Image */}
              <div className="list-table-cell">
                {item.map2 ? (
                  <img className="list-img" src={`${url}/ongoingImages/` + item.map2} alt="Map 2" />
                ) : (
                  <p>No Map 2</p>
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
              <div className="list-table-cell ">
                <p>{truncateText(item.details)}</p>
              </div>

              {/* Delete Button */}
              <div className="list-table-cell">
                <p onClick={() => removeOngoing(item._id)} className="delete-btn">
                  x
                </p>
              </div>

              {/* Edit Button */}
              <div className="list-table-cell">
                <Link to={`/edit-ongoing/${item._id}`} className="edit-btn">
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOngoing;
