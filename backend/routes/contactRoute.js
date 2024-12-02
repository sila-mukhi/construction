import express from "express";
import { deleteContact, getAllContacts, sendOTP, verifyOTP } from "../controllers/contactController.js";

const contactRouter = express.Router();

// Send OTP for email verification
contactRouter.post("/send-otp", sendOTP);

// Verify OTP for email verification
contactRouter.post("/verify-otp", verifyOTP);

// Delete contact (changed to DELETE method)
contactRouter.post("/delete-contact", deleteContact);

// Get all verified contacts
contactRouter.get("/list-contact", getAllContacts);

export default contactRouter;
