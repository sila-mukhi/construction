import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get('token');

        const verifyEmail = async () => {
            try {
                const response = await axios.get(`http://localhost:4300/api/contacts/verify-email?token=${token}`);
                setMessage(response.data.message);
            } catch (error) {
                console.error("Verification error:", error);
                setMessage(error.response?.data?.message || "Verification failed. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            verifyEmail();
        } else {
            setMessage("No verification token provided.");
            setLoading(false);
        }
    }, [location]);

    const handleRedirect = () => {
        navigate('/contact');
    };

    return (
        <div className="valid-container">
            <h1 className="valid-header">Email Verification</h1>
            {loading ? (
                <p className="valid-loading">Please wait while we verify your email...</p>
            ) : (
                <>
                    <p className="valid-message">{message}</p>
                    <button onClick={handleRedirect} className="valid-button">Go to Contact Form</button>
                </>
            )}
        </div>
    );
};
export default VerifyEmail;
