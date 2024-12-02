import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessVerification = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        // Redirect to Contact page with success message
        navigate('/contact', { state: { successMessage: "Your message was successfully sent!" } });
    };

    return (
        <div className="success-container">
            <h1 className="success-header">Email Verified Successfully</h1>
            <p className="success-message">Thank you! Your email has been verified, and you can now proceed.</p>
            <button className="success-button" onClick={handleContinue}>Continue</button>
        </div>
    );
};

export default SuccessVerification;
