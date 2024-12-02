import express from "express";
import multer from "multer";
import fs from "fs";
import { addTestimonial, fetchTestimonial, listTestimonial, removeTestimonial, updateTestimonial } from "../controllers/testimonialController.js";

const testimonialRouter = express.Router();


const testimonialImageFolder = "testimonialImages";
if (!fs.existsSync(testimonialImageFolder)) {
    fs.mkdirSync(testimonialImageFolder);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: testimonialImageFolder,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const testimonialImage = multer({ storage: storage });

// Define routes
testimonialRouter.post("/addTestimonial", testimonialImage.single("image"), addTestimonial); // "image" is the field name
testimonialRouter.get("/listTestimonial", listTestimonial);
testimonialRouter.post("/removeTestimonial", removeTestimonial); // Changed to DELETE method
testimonialRouter.put("/updateTestimonial/:id", testimonialImage.single("image"), updateTestimonial);
testimonialRouter.get("/fetchTestimonial/:id", fetchTestimonial);

export default testimonialRouter;

