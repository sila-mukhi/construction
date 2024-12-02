import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ListContact = ({ url }) => {
  const [contacts, setContacts] = useState([]);

  // Fetch all verified contacts
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${url}/api/contacts/list-contact`);
      // Directly access the 'contacts' array from the response
      if (response.data && response.data.contacts) {
        const verifiedContacts = response.data.contacts.filter(contact => contact.verified);
        setContacts(verifiedContacts);
      } else {
        toast.error("Failed to fetch verified contacts");
        console.log("Error: Data structure mismatch", response.data);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("An error occurred while fetching contacts.");
    }
  };
  

  // Delete a contact by ID
  const removeContact = async (contactId) => {
    try {
      const response = await axios.delete(`${url}/api/contacts/delete-contact/${contactId}`);
      if (response.data.success) {
        toast.success(response.data.message);
        fetchContacts(); // Refresh the contact list after deletion
      } else {
        toast.error("Failed to delete contact");
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("An error occurred while deleting the contact.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="list add flex-col">
      <div className="add-course">
        <span>All Verified Contacts List</span>
        <Link to="/add-contact">
          <button className="add-btn">Add Contact</button>
        </Link>
      </div>
      <div className="list-table">
        <div className="list-table-header">
          <b>First Name</b>
          <b>Last Name</b>
          <b>Email</b>
          <b>Phone</b>
          <b>Message</b>
          <b>Delete</b>
        </div>
        {contacts.length > 0 ? (
          contacts.map((item, index) => (
            <div key={index} className="list-table-row">
              <div className="list-table-cell">
                <p>{item.firstname}</p>
              </div>
              <div className="list-table-cell">
                <p>{item.lastname}</p>
              </div>
              <div className="list-table-cell">
                <p>{item.email}</p>
              </div>
              <div className="list-table-cell">
                <p>{item.phone}</p>
              </div>
              <div className="list-table-cell">
                <p>{item.message}</p>
              </div>
              {/* <div className="list-table-cell">
                <button
                  onClick={() => removeContact(item._id)}
                  className="delete-btn"
                >
                  Delete
                </button> */}
                              <div className="list-table-cell">
                <p onClick={() => removeContact(item._id)} className='delete-btn'>x</p>
              </div>

              </div>
            // </div>
          ))
        ) : (
          <div className="no-contacts">No verified contacts found.</div>
        )}
      </div>
    </div>
  );
};

export default ListContact;
