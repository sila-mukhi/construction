
// import express from "express";
// import { addContact, listContact, removeContact, verifyEmail } from "../controllers/contactController.js";

// const contactRouter = express.Router();

// // // Route for adding a contact
// contactRouter.post("/addContact", addContact);

// // Route for listing all contacts
// contactRouter.get("/listContact", listContact);

// // Route for removing a contact
// contactRouter.post("/removeContact", removeContact);

// // Route for email verification
// contactRouter.post("/verify-email", verifyEmail); // Here, token will be passed as a query parameter

// export default contactRouter;


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
