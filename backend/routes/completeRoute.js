import express from "express";
import multer from "multer";
import fs from "fs";
import { addComplete, fetchComplete, listComplete, removeComplete, updateComplete } from "../controllers/completeController.js";

const completeRouter = express.Router();

// Ensure the completeImages folder exists
const completeImageFolder = "completeImages";
if (!fs.existsSync(completeImageFolder)) {
    fs.mkdirSync(completeImageFolder);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: completeImageFolder,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// multer configuration to handle multiple files
const completeImage = multer({ storage: storage }).fields([
    { name: 'image', maxCount: 1 },   // Handling the main image
    { name: 'map1', maxCount: 1 }     // Handling the map1 image
]);

// Define routes
completeRouter.post("/addComplete", completeImage, addComplete); // Handling both image and map1 upload
completeRouter.get("/listComplete", listComplete);
completeRouter.post("/removeComplete", removeComplete); // Removed method to DELETE
completeRouter.put("/updateComplete/:id", completeImage, updateComplete); // Handling both image and map1 upload
completeRouter.get("/fetchComplete/:id", fetchComplete);

export default completeRouter;
