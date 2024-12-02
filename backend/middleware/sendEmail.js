import dotenv from 'dotenv';
dotenv.config(); 
import nodemailer from 'nodemailer';

// Log the email user (but not the password for security)
console.log("EMAIL_USER6:", process.env.EMAIL_USER);

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    logger: true,  // Log SMTP messages
    debug: true,   // Log SMTP debug information
});


// sendEmail()
// Export the sendEmail function for use in other modules
// export default sendEmail;
