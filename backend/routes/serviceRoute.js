// import express from "express";
// import multer from "multer";
// // import { fetchInstructor, listInstructor, removeInstructor, updateInstructor } from "../controllers/instructorController.js";
// import {addService,  fetchService, listService, removeService, updateService } from "../controllers/serviceController.js";


// const serviceRouter=express.Router();

// //image storage engine

// const storage = multer.diskStorage({
//     destination:"serviceImages",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })

// const serviceImage = multer({storage:storage})

// serviceRouter.post("/addService",serviceImage.single("image"),addService)   // here imageb is field name
// serviceRouter.get("/listService",listService)
// // courseRouter.get("/listCourse",listCourse)
// serviceRouter.post("/removeService",removeService)
// serviceRouter.put("/updateService/:id", serviceImage.single("image"), updateService); // Added 'upload.single' for updating image
// // instructorRouter.put("/updateInstructor/:id", instructorImage.single("image"), updateInstructor);
// serviceRouter.get("/fetchService/:id",fetchService)

// export default instructorRouter;

import express from "express";
import multer from "multer";
import { addService, fetchService, listService, removeService, updateService } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

// Image and Icon storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "image") {
            cb(null, "serviceImages");
        } else if (file.fieldname === "icon") {
            cb(null, "serviceIcons");
        } else {
            cb(new Error("Invalid file field"), false);
        }
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

// Multer middleware for handling uploads
const serviceUpload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only .jpeg, .jpg, and .png formats are allowed"), false);
        }
    },
});

// Routes
serviceRouter.post(
    "/addService",
    serviceUpload.fields([
        { name: "image", maxCount: 1 },
        { name: "icon", maxCount: 1 }
    ]),
    addService
);

serviceRouter.get("/listService", listService);

serviceRouter.post("/removeService", removeService);

serviceRouter.put(
    "/updateService/:id",
    serviceUpload.fields([
        { name: "image", maxCount: 1 },
        { name: "icon", maxCount: 1 }
    ]),
    updateService
);

serviceRouter.get("/fetchService/:id", fetchService);

export default serviceRouter;
