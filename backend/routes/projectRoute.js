import express from "express";
import multer from "multer";
import fs from "fs";
import { addProject, fetchProject, listProject, removeProject, updateProject } from "../controllers/projectController.js";


const projectRouter = express.Router();

// Ensure the carouselImages folder exists
const projectImageFolder = "projectImages";
if (!fs.existsSync(projectImageFolder)) {
    fs.mkdirSync(projectImageFolder);
}

// Image storage engine
const storage = multer.diskStorage({
    destination: projectImageFolder,
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const projectImage = multer({ storage: storage });

// Define routes
projectRouter.post("/addProject", projectImage.single("image"), addProject); // "image" is the field name
projectRouter.get("/listProject", listProject);
projectRouter.post("/removeProject", removeProject); // Changed to DELETE method
projectRouter.put("/updateProject/:id", projectImage.single("image"), updateProject);
projectRouter.get("/fetchProject/:id", fetchProject);

export default projectRouter;

