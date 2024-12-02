import express from "express";
import multer from "multer";
import fs from "fs";
import { addGallery, fetchGallery, listGallery, updateGallery,removeGallery } from "../controllers/galleryController.js";

const galleryRouter = express.Router();

// Ensure the carouselImages folder exists
const galleryImageFolder = "galleryImages";
if (!fs.existsSync(galleryImageFolder)) {
    fs.mkdirSync(galleryImageFolder);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: galleryImageFolder,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const galleryImage = multer({ storage: storage });

// Define routes
galleryRouter.post("/addGallery", galleryImage.single("image"), addGallery); // "image" is the field name
galleryRouter.get("/listGallery", listGallery);
galleryRouter.post("/removeGallery", removeGallery); // Changed to DELETE method
galleryRouter.put("/updateGallery/:id", galleryImage.single("image"), updateGallery);
galleryRouter.get("/fetchGallery/:id", fetchGallery);

export default galleryRouter;

