import express from "express";
import multer from "multer";
import fs from "fs";
import { addCarousel, fetchCarousel, listCarousel, removeCarousel, updateCarousel } from "../controllers/carouselController.js";

const carouselRouter = express.Router();

// Ensure the carouselImages folder exists
const carouselImageFolder = "carouselImages";
if (!fs.existsSync(carouselImageFolder)) {
    fs.mkdirSync(carouselImageFolder);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: carouselImageFolder,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const carouselImage = multer({ storage: storage });

// Define routes
carouselRouter.post("/addCarousel", carouselImage.single("image"), addCarousel); // "image" is the field name
carouselRouter.get("/listCarousel", listCarousel);
carouselRouter.post("/removeCarousel", removeCarousel); // Changed to DELETE method
carouselRouter.put("/updateCarousel/:id", carouselImage.single("image"), updateCarousel);
carouselRouter.get("/fetchCarousel/:id", fetchCarousel);

export default carouselRouter;

