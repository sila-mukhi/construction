import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const register = async (req, resp) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });

        if (existingUser) {
            return resp.status(400).send({ success: false, message: "User with this email already exists." });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);

        let user = new userModel(req.body);
        let result = await user.save();
        result = result.toObject();

        delete result.password; // Remove password from response

        resp.send({ success: true, data: result });
    } catch (error) {
        resp.status(500).send({ success: false, message: "Internal server error", error });
    }
};

// // Login function
const login = async (req, resp) => {
    try {
        const { email, password } = req.body;
         // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return resp.status(400).send({ success: false, message: "No user found with this email" });
        }

//         // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return resp.status(400).send({ success: false, message: "Incorrect password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1y" });
        resp.send({ success: true, data: user, token });
    } catch (error) {
        resp.status(500).send({ success: false, message: "Login error", error });
    }
};

// List registered users
const listRegister = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.json({ success: true, data: users });
    } catch (error) {
        console.error("Error fetching users:", error); // Log the actual error
        res.status(500).json({ success: false, message: "Error fetching users" });
    }
};

// Profile route to get user details
const getProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).select("-password");
        if (user) {
            res.json({ success: true, data: user });
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ success: false, message: "Error fetching user profile" });
    }
};

// Change password route
const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id; // Assume user ID is available from authentication middleware

    try {
        // Find the user by ID
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Check if the old password matches the current password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Old password is incorrect.' });
        }

        // Hash the new password and update it
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        return res.status(200).json({ success: true, message: 'Password changed successfully.' });
    } catch (error) {
        console.error("Error changing password:", error);
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
};

export { register, login, listRegister, getProfile, changePassword };

