// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         phone: '',
//         message: ''
//     });
//     const [isSent, setIsSent] = useState(false);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:4300/api/contacts/addContact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 setIsSent(true);
//                 toast.success("Your message has been sent successfully! Please check your email for verification.");
//                 setFormData({ firstname: '', lastname: '', email: '', phone: '', message: '' });
//             } else {
//                 toast.error(result.message || 'Error sending message');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error('An error occurred while sending the message. Please try again later.');
//         }
//     };

//     return (
//         <>
//             <div id="banner-area" className="banner-area" style={{ backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/projects/project1.jpg')` }}>
//                 <div className="banner-text">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="banner-heading">
//                                     <h1 className="banner-title">Contact Us</h1>
//                                     <nav aria-label="breadcrumb">
//                                         <ol className="breadcrumb justify-content-center">
//                                             <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                                             <li className="breadcrumb-item active"><Link to="/contact">Contact Us</Link></li>
//                                         </ol>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section id="main-container" className="contact-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <h3>We <br /> <span>Love To Hear </span></h3>

//                             <form id="contact-form" onSubmit={handleSubmit}>
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label>First Name</label>
//                                             <input
//                                                 className="form-control form-control-name"
//                                                 name="firstname"
//                                                 value={formData.firstname}
//                                                 onChange={handleChange}
//                                                 placeholder=""
//                                                 type="text"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label>Last Name</label>
//                                             <input
//                                                 className="form-control form-control-name"
//                                                 name="lastname"
//                                                 value={formData.lastname}
//                                                 onChange={handleChange}
//                                                 placeholder=""
//                                                 type="text"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label>Email Address</label>
//                                             <input
//                                                 className="form-control form-control-email"
//                                                 name="email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 placeholder=""
//                                                 type="email"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="col-md-6">
//                                         <div className="form-group">
//                                             <label>Phone No</label>
//                                             <input
//                                                 className="form-control form-control-subject"
//                                                 name="phone"
//                                                 value={formData.phone}
//                                                 onChange={handleChange}
//                                                 placeholder=""
//                                                 type="text"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="form-group">
//                                     <label>Message</label>
//                                     <textarea
//                                         className="form-control form-control-message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         placeholder=""
//                                         rows="10"
//                                         required
//                                     ></textarea>
//                                 </div>

//                                 <div className="text-right"><br />
//                                     <button className="btn btn-primary solid blank text-center" type="submit" name="submit">Submit Now</button>
//                                 </div>
//                             </form>

//                             {isSent && (
//                                 <div className="mt-3">
//                                     <div className="alert alert-success">A verification email has been sent to your email address. Please check your inbox.</div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <div className="google-map">
//             {/* <iframe
//              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81986.19829642458!2d85.76356848340266!3d20.192614962462635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a17e501f98af%3A0x78e8d62eafe7a72c!2sTHYO%20SOFTECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1732606400801!5m2!1sen!2sin" ></iframe> */}
//                 <iframe

//                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14968.914094670348!2d85.8567351!3d20.290806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a13aaaaaaab%3A0x56e2f0bd1100c86e!2sArya%20Construction!5e0!3m2!1sen!2in!4v1694259649153"
//                     width="100%"
//                     height="450"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                 ></iframe>
//             </div>
//         </>
//     );
// };

// export default Contact;

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         firstname: '',
//         lastname: '',
//         email: '',
//         phone: '',
//         message: '',
//     });
//     const [verificationCode, setVerificationCode] = useState('');
//     const [isVerificationSent, setIsVerificationSent] = useState(false);
//     const [isVerified, setIsVerified] = useState(false);

//     const API_URL = 'http://localhost:4300';

//     // Handle form data change
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Handle OTP input change
//     const handleVerificationChange = (e) => {
//         setVerificationCode(e.target.value);
//     };

//     // Submit contact form and request OTP
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`${API_URL}/api/contacts/addContact`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData),
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 setIsVerificationSent(true); // Show OTP verification form
//                 toast.success(result.message || 'Verification email sent. Please check your inbox.');
//             } else {
//                 toast.error(result.message || 'Failed to send OTP. Please try again.');
//             }
//         } catch (error) {
//             toast.error('An error occurred. Please try again later.');
//         }
//     };

//     // Submit OTP for verification
//     const handleVerificationSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`${API_URL}/api/contacts/verify-email`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email: formData.email, code: verificationCode }),
//             });

//             const result = await response.json();
//             if (response.ok) {
//                 setIsVerified(true); // Verification successful
//                 toast.success(result.message || 'Email verified successfully.');

//                 // Now save the data after verification
//                 const saveResponse = await fetch(`${API_URL}/api/contacts/saveContact`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(formData),
//                 });

//                 const saveResult = await saveResponse.json();
//                 if (saveResponse.ok) {
//                     toast.success(saveResult.message || 'Successfully registered.');
//                 } else {
//                     toast.error(saveResult.message || 'Failed to register. Please try again.');
//                 }
//             } else {
//                 toast.error(result.message || 'Invalid verification code. Please try again.');
//             }
//         } catch (error) {
//             toast.error('An error occurred. Please try again later.');
//         }
//     };

//     return (
//         <>
//             <div
//                 id="banner-area"
//                 className="banner-area"
//                 style={{
//                     backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/projects/project1.jpg')`,
//                 }}
//             >
//                 <div className="banner-text">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="banner-heading">
//                                     <h1 className="banner-title">Contact Us</h1>
//                                     <nav aria-label="breadcrumb">
//                                         <ol className="breadcrumb justify-content-center">
//                                             <li className="breadcrumb-item">
//                                                 <Link to="/">Home</Link>
//                                             </li>
//                                             <li className="breadcrumb-item active">
//                                                 <Link to="/contact">Contact Us</Link>
//                                             </li>
//                                         </ol>
//                                     </nav>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section id="main-container" className="contact-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <h3>We <br /> <span>Love To Hear</span></h3>

//                             {!isVerificationSent ? (
//                                 // Contact Form
//                                 <form id="contact-form" onSubmit={handleSubmit}>
//                                     <div className="row">
//                                         {['firstname', 'lastname', 'email', 'phone'].map((field, index) => (
//                                             <div className="col-md-6" key={index}>
//                                                 <div className="form-group">
//                                                     <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//                                                     <input
//                                                         className="form-control"
//                                                         name={field}
//                                                         value={formData[field]}
//                                                         onChange={handleChange}
//                                                         type={field === 'email' ? 'email' : 'text'}
//                                                         required
//                                                     />
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>

//                                     <div className="form-group">
//                                         <label>Message</label>
//                                         <textarea
//                                             className="form-control"
//                                             name="message"
//                                             value={formData.message}
//                                             onChange={handleChange}
//                                             rows="10"
//                                             required
//                                         ></textarea>
//                                     </div>

//                                     <div className="text-right"><br />
//                                         <button className="btn btn-primary solid blank text-center" type="submit">
//                                             Submit Now
//                                         </button>
//                                     </div>
//                                 </form>
//                             ) : !isVerified ? (
//                                 // OTP Verification Form
//                                 <form onSubmit={handleVerificationSubmit}>
//                                     <div className="form-group">
//                                         <label>Verification Code</label>
//                                         <input
//                                             className="form-control"
//                                             type="text"
//                                             value={verificationCode}
//                                             onChange={handleVerificationChange}
//                                             placeholder="Enter your verification code"
//                                             required
//                                         />
//                                     </div>

//                                     <div className="text-right"><br />
//                                         <button className="btn btn-primary solid blank text-center" type="submit">
//                                             Verify Code
//                                         </button>
//                                     </div>
//                                 </form>
//                             ) : (
//                                 // Success Message
//                                 <div className="mt-3">
//                                     <div className="alert alert-success">
//                                         Thank you for verifying your email! We have received your message.
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Contact;







import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import Discover from "../../Components/Discover/Discover";

const Contact = () => {
  const API_URL = "https://construction-backend-wp9o.onrender.com";
  
  const [step, setStep] = useState(1); // Step 1: Contact Form, Step 2: OTP Verification, Step 3: Success
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Contact Form and request OTP
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/contacts/send-otp`, formData);
      setMessage("OTP has been sent to your email.");
      setStep(2); // Move to OTP verification step
      toast.success(response.data.message || "OTP sent successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      toast.error(error);
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/contacts/verify-otp`, {
        ...formData, // Include all form data
        otp,         // Add the OTP field
      });
      setMessage(response.data.message);
      setStep(3); // Move to success step
      toast.success("OTP verified successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP.");
      toast.error(err.response?.data?.message || "Invalid OTP.");
    }
  };
  

  return (
    <>
      {/* Banner Area */}
      <div
        id="banner-area"
        className="banner-area"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 53, 88, 0.409), rgba(0, 0, 0, 0.728)), url('images/projects/project1.jpg')`,
        }}
      >
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-heading">
                  <h1 className="banner-title">Contact Us</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Area */}
      <section id="main-container" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>
                We <br />
                <span>Love To Hear</span>
              </h3>

              {step === 1 && (
                <form id="contact-form" onSubmit={handleSubmitForm}>
                  <div className="row">
                    {["firstname", "lastname", "email", "phone"].map((field, index) => (
                      <div className="col-md-6" key={index}>
                        <div className="form-group">
                          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                          <input
                            className="form-control"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            type={field === "email" ? "email" : "text"}
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="10"
                      required
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <br />
                    <button className="btn btn-primary solid blank text-center" type="submit">
                      Submit Now
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmitOTP}>
                  <div className="form-group">
                    <label>Verification Code</label>
                    <input
                      className="form-control"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter your verification code"
                      required
                    />
                  </div>
                  <div className="text-right">
                    <br />
                    <button className="btn btn-primary solid blank text-center" type="submit">
                      Verify Code
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="mt-3">
                  <div className="alert alert-success">
                    Thank you for verifying your email! We have received your message.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14968.914094670348!2d85.8567351!3d20.290806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a13aaaaaaab%3A0x56e2f0bd1100c86e!2sArya%20Construction!5e0!3m2!1sen!2in!4v1694259649153"
          width="100%"
          height="450"
          style={{ border: 0 }} allowFullScreen
          loading="lazy">
        </iframe>
      </div>
      <Discover/>
    </>
  );
};

export default Contact;

