import Contact from "../models/contactModel.js";
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
