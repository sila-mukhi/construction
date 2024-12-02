// import dotenv from 'dotenv';
// dotenv.config();
// // import crypto from 'crypto';
// import contactModel from "../models/contactModel.js";
// // import sendEmail from "../middleware/sendEmail.js";

// // const addContact = async (req, res) => {
// //     const verificationToken = crypto.randomBytes(32).toString("hex");
// //     const tokenExpiry = new Date(Date.now() + 4 * 60 * 1000); // 4 minutes expiry

// //     const contact = new contactModel({
// //         firstname: req.body.firstname,
// //         lastname: req.body.lastname,
// //         email: req.body.email,
// //         phone: req.body.phone,
// //         message: req.body.message,
// //         verificationToken,
// //         tokenExpiry,
// //         isVerified: false // Initially set to false
// //     });

// //     try {
// //         // Generate verification link
// //         const verificationLink = `${req.protocol}://${req.get('host')}/api/contacts/verify-email?token=${verificationToken}`;
// //         // const verificationLink = `http://e-learning-project-backend.onrender.com/verify-email?token=${verificationToken}`;

// //         // Send verification email
// //         await sendEmail(
// //             req.body.email,
// //             "Email Verification",
// //             `Please verify your email by clicking on this link: ${verificationLink}`
// //         );

// //         // Save contact temporarily for verification
// //         await contact.save();

// //         // Set a mechanism to delete unverified contacts after expiry
// //         setTimeout(async () => {
// //             const now = new Date();
// //             // Remove any unverified contact whose token has expired
// //             await contactModel.deleteMany({
// //                 isVerified: false,
// //                 tokenExpiry: { $lt: now }
// //             });
// //         }, 4 * 60 * 1000); // Check after 4 minutes

// //         res.status(201).json({ success: true, message: "Contact added, please verify your email." });
// //     } catch (error) {
// //         console.error("Error adding contact:", error);
// //         res.status(500).json({ success: false, message: "Failed to add contact" });
// //     }
// // };

// // const verifyEmail = async (req, res) => {
// //     const { token } = req.query;

// //     if (!token) {
// //         return res.status(400).json({ success: false, message: "Token is required." });
// //     }

// //     try {
// //         // Fetch contact using the verification token
// //         const contact = await contactModel.findOne({ verificationToken: token });

// //         if (!contact) {
// //             return res.status(400).json({ success: false, message: "Invalid or expired token." });
// //         }

// //         if (contact.tokenExpiry < new Date()) {
// //             return res.status(400).json({ success: false, message: "Token has expired." });
// //         }

// //         // Update verification status and clear token fields
// //         contact.isVerified = true;
// //         contact.verificationToken = undefined;
// //         contact.tokenExpiry = undefined;

// //         await contact.save();

// //         const frontendUrl ='http://localhost:3000';
// //         return res.redirect(`${frontendUrl}/success-verification?verified=true`);
// //     } catch (error) {
// //         console.error("Verification error:", error);
// //         return res.status(500).json({ success: false, message: "Internal server error." });
// //     }
// // };

// // const listContact = async (req, res) => {
// //     try {
// //         const contacts = await contactModel.find({ isVerified: true });
// //         if (contacts.length === 0) {
// //             return res.status(404).json({ success: false, message: "No verified contacts found." });
// //         }
// //         return res.status(200).json({ success: true, data: contacts });
// //     } catch (error) {
// //         console.error("Error listing contacts:", error);
// //         return res.status(500).json({ success: false, message: "Failed to list contacts." });
// //     }
// // };


// // const removeContact = async (req, res) => {
// //     try {
// //         const deletedContact = await contactModel.findOneAndDelete({ _id: req.body.id, isVerified: true });
        
// //         if (!deletedContact) {
// //             return res.status(404).json({ success: false, message: "Verified contact not found." });
// //         }

// //         res.json({ success: true, message: "Verified contact removed." });
// //     } catch (error) {
// //         console.error("Error removing contact:", error);
// //         res.status(500).json({ success: false, message: "Error removing contact." });
// //     }
// // };

// // export { addContact, listContact, removeContact, verifyEmail };


// import { SendVerificationCode, WelcomeEmail } from "../middleware/Email.js";
// // import userModel from "../models/userModel.js";
// // import bcryptjs from 'bcryptjs';

// const addContact = async (req, res) => {
//     try {

        
//         const { firstname,lastname,email,phone,message } = req.body;

//         // Check if all fields are provided
//         if (!firstname || !lastname || !email || !phone || !message) {
//             return res.status(400).json({ success: false, message: "All fields are required" });
//         }

//         // Check if user already exists
//         // const existingUser = await userModel.findOne({ email });
//         // if (existingUser) {
//         //     return res.status(400).json({ success: false, message: "User already exists, please login" });
//         // }

//         // Hash the password
//         // const hashedPassword = bcryptjs.hashSync(password, 10);

//         // Generate a random verification code
//         const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

//         // Create a new user
//         const contact = new contactModel({
//             firstname,
//             lastname,
//             email,
//             phone,
//             message,
//             // password: hashedPassword,        
//             verificationCode
//         });

//         // Save the user to the database
//         await contact.save();
//         SendVerificationCode(contact.email, verificationCode)
//         // Respond with success message
//         return res.status(200).json({ success: true, message: "contact added please verify your email", contact });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };

// const verifyEmail = async (req,res)=>{
//     try{
//        const {code}= req.body
//        const contact= await contactModel.findOne({
//         verificationCode:code
//        })
//        if(!contact){
//         return res.status(400).json({success:false,message:"Invalid or Expired code"})
//        }
//        contact.isVerified=true,
//        contact.verificationCode = undefined
//        await contact.save()
//        await WelcomeEmail(contact.email,contact.name)
//        return res.status(200).json({success:true,message:"email verified successfullly"})

//     }
//     catch(error){
//         console.log(error)
//             return res.status(500).json({success:false,message:"internal server error"})
//         }

    
// }


// const listContact = async (req, res) => {
//     try {
//         const contacts = await contactModel.find({ isVerified: true });
//         if (contacts.length === 0) {
//             return res.status(404).json({ success: false, message: "No verified contacts found." });
//         }
//         return res.status(200).json({ success: true, data: contacts });
//     } catch (error) {
//         console.error("Error listing contacts:", error);
//         return res.status(500).json({ success: false, message: "Failed to list contacts." });
//     }
// };


// const removeContact = async (req, res) => {
//     try {
//         const deletedContact = await contactModel.findOneAndDelete({ _id: req.body.id, isVerified: true });
        
//         if (!deletedContact) {
//             return res.status(404).json({ success: false, message: "Verified contact not found." });
//         }

//         res.json({ success: true, message: "Verified contact removed." });
//     } catch (error) {
//         console.error("Error removing contact:", error);
//         res.status(500).json({ success: false, message: "Error removing contact." });
//     }
// };









// export { register ,verifyEmail,addContact,listContact,removeContact};

// import dotenv from "dotenv";
// dotenv.config();
// import contactModel from "../models/contactModel.js";
// import { SendVerificationCode, WelcomeEmail } from "../middleware/Email.js";

// const addContact = async (req, res) => {
//     try {
//         const { firstname, lastname, email, phone, message } = req.body;

//         // Check if all fields are provided
//         if (!firstname || !lastname || !email || !phone || !message) {
//             return res.status(400).json({ success: false, message: "All fields are required" });
//         }

//         // Generate a random verification code
//         const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

//         // Set token expiry (e.g., 4 minutes)
//         const tokenExpiry = new Date(Date.now() + 4 * 60 * 1000);

//         // Create a new contact
//         const contact = new contactModel({
//             firstname,
//             lastname,
//             email,
//             phone,
//             message,
//             verificationCode,
//             isVerified: false,
//             tokenExpiry
//         });

//         // Save the contact to the database
//         await contact.save();

//         // Send verification code via email
//         try {
//             await SendVerificationCode(contact.email, verificationCode);
//         } catch (error) {
//             console.error('Error sending verification email:', error);
//             return res.status(500).json({ success: false, message: "Failed to send verification email." });
//         }

//         // Set a mechanism to delete expired tokens
//         setTimeout(async () => {
//             const now = new Date();
//             await contactModel.deleteMany({
//                 isVerified: false,
//                 tokenExpiry: { $lt: now }
//             });
//         }, 4 * 60 * 1000); // Check after 4 minutes

//         // Respond with success message
//         return res.status(200).json({
//             success: true,
//             message: "Contact added, please verify your email.",
//             contact
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };

// const verifyEmail = async (req, res) => {
//     const { email, code } = req.body; // Destructure email and code from request body
//     console.log("Received email:", email);  // Log received email
//     console.log("Received verification code:", code); // Log received verification code

//     try {
//         // Validate if the code is provided
//         if (!code) {
//             console.error("Error: Verification code not provided.");
//             return res.status(400).json({ success: false, message: "Verification code is required." });
//         }

//         // Find the contact using the verification code
//         const contact = await contactModel.findOne({
//             email: email,  // Ensure that we search by email as well
//             verificationCode: code,
//             tokenExpiry: { $gte: new Date() } // Ensure the token is not expired
//         });

//         if (!contact) {
//             console.error("Error: Invalid or expired verification code.");
//             return res.status(400).json({ success: false, message: "Invalid or expired verification code." });
//         }

//         console.log("Contact found for verification:", contact);

//         // Mark the contact as verified and clear token fields
//         contact.isVerified = true;
//         contact.verificationCode = undefined;
//         contact.tokenExpiry = undefined;

//         console.log("Marking contact as verified:", contact);

//         await contact.save();

//         // Send a welcome email
//         try {
//             console.log("Sending welcome email to:", contact.email);
//             await WelcomeEmail(contact.email, contact.firstname);
//         } catch (error) {
//             console.error('Error sending welcome email:', error);
//             return res.status(500).json({ success: false, message: "Failed to send welcome email." });
//         }

//         console.log("Email verified successfully.");
//         return res.status(200).json({
//             success: true,
//             message: "Email verified successfully. You can now contact us."
//         });
//     } catch (error) {
//         console.error("Error during verification:", error);
//         return res.status(500).json({ success: false, message: "Internal server error." });
//     }
// };

// const listContact = async (req, res) => {
//     try {
//         const contacts = await contactModel.find({ isVerified: true });
//         if (contacts.length === 0) {
//             return res.status(404).json({ success: false, message: "No verified contacts found." });
//         }
//         return res.status(200).json({ success: true, data: contacts });
//     } catch (error) {
//         console.error("Error listing contacts:", error);
//         return res.status(500).json({ success: false, message: "Failed to list contacts." });
//     }
// };

// const removeContact = async (req, res) => {
//     try {
//         const deletedContact = await contactModel.findOneAndDelete({ _id: req.body.id, isVerified: true });
//         if (!deletedContact) {
//             return res.status(404).json({ success: false, message: "Verified contact not found." });
//         }

//         res.json({ success: true, message: "Verified contact removed." });
//     } catch (error) {
//         console.error("Error removing contact:", error);
//         res.status(500).json({ success: false, message: "Error removing contact." });
//     }
// };

// export { addContact, verifyEmail, listContact, removeContact };

import Contact from "../Models/contactModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Temporary store for OTPs
const otpStore = new Map(); // Map to store email and OTP temporarily

// Generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP
export const sendOTP = async (req, res) => {
  const { firstname, lastname, email, phone, message } = req.body;

  try {
    // Check if the email is already verified
    const existingContact = await Contact.findOne({ email });
    if (existingContact && existingContact.verified) {
      return res.status(400).json({ message: "Email is already verified." });
    }

    // Generate and store OTP
    const otp = generateOTP();
    otpStore.set(email, otp);

    // Styled Email Content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="text-align: center; color: #4CAF50;">Verify Your Email</h2>
        <p>Hi <strong>${firstname}</strong>,</p>
        <p>Thank you for reaching out to us. To verify your email address, please use the OTP below:</p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="font-size: 24px; font-weight: bold; color: #333; padding: 10px 20px; border: 1px solid #4CAF50; border-radius: 5px; display: inline-block;">${otp}</span>
        </div>
        <p>If you did not request this email, please ignore it.</p>
        <p style="color: #999; font-size: 12px;">This OTP is valid for 10 minutes.</p>
        <hr>
        <p style="text-align: center; font-size: 14px; color: #555;">&copy; ${new Date().getFullYear()} Arya Construction</p>
      </div>
    `;

    // Send OTP email
    await transporter.sendMail({
      from: `"Arya Construction" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP for Verification",
      html: htmlContent,
    });

    res.status(200).json({ message: "OTP sent successfully", email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Verify OTP
export const verifyOTP = async (req, res) => {
  const { email, otp, firstname, lastname, phone, message } = req.body;

  try {
    const storedOtp = otpStore.get(email);

    if (!storedOtp) return res.status(400).json({ message: "OTP expired or not found." });

    if (storedOtp === otp) {
      // Clear OTP from store after verification
      otpStore.delete(email);

      // Save verified user to database with additional details
      const contact = await Contact.findOneAndUpdate(
        { email },
        { 
          firstname, 
          lastname, 
          phone, 
          message, 
          verified: true 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true } // Upsert ensures saving new if not exists
      );

      res.status(200).json({ message: "OTP verified successfully and user saved.", contact });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
