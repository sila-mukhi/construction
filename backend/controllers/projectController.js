// import projectModel from "../models/projectModel.js";
// // import carouselModel from "../models/projectModel.js";
// import fs from "fs/promises";

// const addProject = async (req, res) => {
//     let image_filename = `${req.file.filename}`; 

//     const projects = new projectModel({
//         image: image_filename,
//         name: req.body.name,
//         place: req.body.place,
//     });
//     try {
//         await projects.save();
//         res.json({ success: true, message: "Project Added" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error adding project" });
//     }
// };

// const listProject = async (req, res) => {
//     try {
//         const projects = await projectModel.find({});
//         res.json({ success: true, data: projects });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error listing projects" });
//     }
// };

// const removeProject = async (req, res) => {
//     try {
//         const projects = await projectModel.findById(req.body.id);
//         if (!projects) {
          
//             return res.status(404).json({success:false,message:"Project not found"})
//         }           
//           await fs.unlink(`projectImages/${projects.image}`);

//         await projectModel.findByIdAndDelete(req.body.id);
//              res.json({ success: true, message: "Project Removed" });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Error removing project" });
//     }
// };

// const updateProject = async (req, res) => {
//     let image_filename = req.file ? `${req.file.filename}` : null;

//     const updateData = {
//         name: req.body.name,
//         place: req.body.place,
//     };

//     if (image_filename) {
//         updateData.image = image_filename;
//     }

//     try {
//         const project = await projectModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
//         if (!project) {
//             return res.json({ success: false, message: "Project not found" });
//         }
//         res.json({ success: true, message: "Project updated", data: Project });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error updating Project" });
//     }
// };

// const fetchProject = async (req, res) => {
//     try {
//         const project = await projectModel.findById(req.params.id);
//         if (!project) {
//             return res.status(404).json({ success: false, message: "Project not found" });
//         }
//         res.json({ success: true, data: project });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Error fetching project data" });
//     }
// };

// export { addProject, listProject, removeProject, updateProject, fetchProject };


import projectModel from "../models/projectModel.js";
import fs from "fs/promises";

const addProject = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        const image_filename = req.file.filename;

        const projects = new projectModel({
            image: image_filename,
            name: req.body.name,
            place: req.body.place,
        });

        await projects.save();
        res.json({ success: true, message: "Project Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding project" });
    }
};

const listProject = async (req, res) => {
    try {
        const projects = await projectModel.find({});
        res.json({ success: true, data: projects });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error listing projects" });
    }
};

const removeProject = async (req, res) => {
    try {
        const project = await projectModel.findById(req.body.id);

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        // Attempt to delete the associated image file
        try {
            await fs.unlink(`projectImages/${project.image}`);
        } catch (error) {
            console.log(`Error deleting image file: ${error.message}`);
        }

        await projectModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Project Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing project" });
    }
};

const updateProject = async (req, res) => {
    try {
        const image_filename = req.file ? req.file.filename : null;

        const updateData = {
            name: req.body.name,
            place: req.body.place,
        };

        if (image_filename) {
            updateData.image = image_filename;
        }

        const project = await projectModel.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.json({ success: true, message: "Project updated", data: project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error updating Project" });
    }
};

const fetchProject = async (req, res) => {
    try {
        const project = await projectModel.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.json({ success: true, data: project });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching project data" });
    }
};

export { addProject, listProject, removeProject, updateProject, fetchProject };
