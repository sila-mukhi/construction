import React, { useState } from 'react';
import axios from 'axios';
import "./ChangePassword.css"

const ChangePassword = ({url}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();
    
        // Check if both fields are filled
        if (!oldPassword || !newPassword) {
            setMessage("Both fields are required.");
            return;
        }

        // Check for minimum password length
        if (newPassword.length < 6) {
            setMessage("New password must be at least 6 characters long.");
            return;
        }

        console.log('Sending Password Change:', { oldPassword, newPassword });
        setLoading(true); // Start loading

        try {
            const response = await axios.put(`${url}/api/users/changePassword`, {
                oldPassword,
                newPassword
            }, { headers: { Authorization:`Bearer ${localStorage.getItem('token')}` } });

            setMessage(response.data.message); // Success message
            
            // Clear input fields
            setOldPassword('');
            setNewPassword('');
        } catch (error) {
            console.log('Error:', error); // Log the error for debugging
            if (error.response) {
                setMessage(error.response.data.message); // Display server error message
            } else {
                setMessage("An unexpected error occurred."); // Handle unexpected errors
            }
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className='password-container'>
            <h2 className='password-heading'>Change Password</h2>
            <form className="password-form" onSubmit={handleChangePassword}>
                <div className='password-container'>
                    <label className='old-password'>Old Password:</label>
                    <input 
                    className='password-input'
                        type="password" 
                        value={oldPassword} 
                        onChange={(e) => setOldPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div className='password-container'>
                    <label className='old-password'>New Password:</label>
                    <input 
                    className='password-input'
                        type="password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button  className="password-button" type="submit" disabled={loading}>
                    {loading ? 'Changing...' : 'Change Password'}
                </button>
            </form>
            {message && <p className="password-message">{message}</p>} {/* Display success/error message */}
        </div>
    );
};

export default ChangePassword;
