import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css"
import { Link } from "react-router-dom";

const Profile = ({url}) => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token"); // Get the token from localStorage
            const response = await axios.get(`${url}/api/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the Authorization header
                }
            });
            if (response.data.success) {
                setProfile(response.data.data); // Expecting user data under `data`
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            setError("Error fetching profile.");
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="profile-container">
            {profile ? (
                <div>
                    <h1 className="profile-title">{profile.name}'s Profile</h1>
                    <p className="profile-email">Email: {profile.email}</p>
                    <Link className="change-password-link" to="/change-password">To Change password</Link>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
