import express from "express";
import { register, login, listRegister, getProfile, changePassword } from "../controllers/userController.js"; 
import authMiddleware from "../middleware/authMiddleware.js"; 

const userRouter = express.Router();

// User Registration Route
userRouter.post("/register", register);

// User Login Route
userRouter.post("/login", login);

// List Registered Users Route (for admin use)
userRouter.get("/listRegister", listRegister);

// Route to get user profile
userRouter.get("/profile", authMiddleware, getProfile); // Use the getProfile function from the controller

// Change Password Route (requires authentication)
userRouter.put("/changePassword", authMiddleware, changePassword); // Updated to use PUT for changing password

export default userRouter;


