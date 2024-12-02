import dotenv from 'dotenv';
dotenv.config(); 
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    try {
        // console.log("Request headers:", req.headers);

        // Fetch the token from the Authorization header
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
        // console.log("Fetching token:", token);

        // Check if token is not provided
        if (!token) {
            return res.status(401).json({ success: false, message: "Access denied. No token provided." });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id }; // Attach user ID to the request object

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // console.error("Token verification error:", error.message); // Log the error message
        res.status(400).json({ success: false, message: "Invalid token." }); // Use 401 for unauthorized access
    }
};

export default authMiddleware;
