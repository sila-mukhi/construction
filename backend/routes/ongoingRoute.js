import express from "express";
import multer from "multer";
import fs from "fs";
import { 
    addOngoing, 
    fetchOngoing, 
    listOngoing, 
    removeOngoing, 
    updateOngoing 
} from "../controllers/ongoingController.js";

const ongoingRouter = express.Router();

// Ensure the ongoingImages folder exists
const ongoingImageFolder = "ongoingImages";
if (!fs.existsSync(ongoingImageFolder)) {
    fs.mkdirSync(ongoingImageFolder);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: ongoingImageFolder,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Multer configuration for handling multiple files
const ongoingImage = multer({ storage });

// Define routes
ongoingRouter.post(
    "/addOngoing", 
    ongoingImage.fields([
        { name: "image", maxCount: 1 }, 
        { name: "map1", maxCount: 1 }, 
        { name: "map2", maxCount: 1 }
    ]), 
    addOngoing
); // Handles three images: image, map1, map2

ongoingRouter.get("/listOngoing", listOngoing);

ongoingRouter.post("/removeOngoing", removeOngoing); // Changed to POST for compatibility

ongoingRouter.put(
    "/updateOngoing/:id", 
    ongoingImage.fields([
        { name: "image", maxCount: 1 }, 
        { name: "map1", maxCount: 1 }, 
        { name: "map2", maxCount: 1 }
    ]), 
    updateOngoing
); // Handles three images for updates

ongoingRouter.get("/fetchOngoing/:id", fetchOngoing);

export default ongoingRouter;
