import express from "express";
import multer from "multer";
import fs from "fs";
// import { addCarousel, fetchCarousel, listCarousel, removeCarousel, updateCarousel } from "../controllers/carouselController.js";
// import { addTestimonial, fetchTestimonial, listTestimonial, removeTestimonial, updateTestimonial } from "../controllers/testimonialController.js";
import { fetchDiscover,addDiscover,listDiscover,removeDiscover,updateDiscover } from "../controllers/discoverContrller.js";

const discoverRouter = express.Router();

// Ensure the carouselImages folder exists
const discoverImageFolder = "discoverImages";
if (!fs.existsSync(discoverImageFolder)) {
    fs.mkdirSync(discoverImageFolder);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: discoverImageFolder,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const discoverImage = multer({ storage: storage });

// Define routes
discoverRouter.post("/addDiscover", discoverImage.single("image"), addDiscover); // "image" is the field name
discoverRouter.get("/listDiscover", listDiscover);
discoverRouter.post("/removeDiscover", removeDiscover); // Changed to DELETE method
discoverRouter.put("/updateDiscover/:id", discoverImage.single("image"), updateDiscover);
discoverRouter.get("/fetchDiscover/:id", fetchDiscover);
export default discoverRouter;

