import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';


const AddContact = ({url}) => {

    
    const [data, setData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        phone: "",
        message: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();  // Prevent page reload on form submit

        try {
            const response = await axios.post(`${url}/api/contacts/addContact`, data);
            if (response.data.success) {
                setData({
                    firstName: "",
        lastName:"",
        email: "",
        phone: "",
        message: ""
                });
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error submitting form. Please try again.");
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    }

    return (
        <div className="add">
        <form className="flex-col" onSubmit={onSubmitHandler}>
          <div className="add-product-name-container">
            <div className="add-product-name flex-col">
              <p>First Name</p>
              <input
                onChange={onChangeHandler}
                value={data.firstName}
                type="text"
                name="firstName"
                placeholder="Type here"
                required
              />
            </div>
            <div className="add-product-name flex-col">
              <p>Last Name</p>
              <input
                onChange={onChangeHandler}
                value={data.lastName}
                type="text"
                name="lastName"
                placeholder="Type here"
                required
              />
            </div>
          </div>
          <div className="add-product-name-container">
            <div className="add-product-name flex-col">
              <p>Email</p>
              <input
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                name="email"
                placeholder="Type here"
                required
              />
            </div>
            <div className="add-product-name flex-col">
              <p>Phone</p>
              <input
                onChange={onChangeHandler}
                value={data.phone}
                type="text"
                name="phone"
                placeholder="Type here"
                required
              />
            </div>
          </div>
          <div className="add-product-name flex-col">
            <p>Message</p>
            <input
              onChange={onChangeHandler}
              value={data.message}
              type="text"
              name="message"
              placeholder="Type here"
              required
            />
          </div>
          <button type="submit" className="add-btn">
            ADD
          </button>
        </form>
      </div>
      
    );
}

export default AddContact;

