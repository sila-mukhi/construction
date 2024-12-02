import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Create the transporter for Nodemailer to send emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Add your email user
    pass: process.env.EMAIL_PASS,  // Add your email password or app password
  },
});

// Middleware to generate OTP and send it to the user's email
export const sendOtp = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Contact Form Submission Verification',
      text: `Your OTP is: ${otp}. Please use this to verify your submission.`,
    };zz

    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('Failed to send OTP');
  }
};

// Generate OTP function
export const generateOtp = () => {
  return crypto.randomBytes(3).toString('hex');  // 6 characters long OTP
};
