import completeModel from "../models/completeModel.js";
import fs from "fs/promises";

// Add Complete Project
const addComplete = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null; // Handle image upload
    let map1_filename = req.files && req.files.map1 ? req.files.map1[0].filename : null; // Handle map1 image upload

    const completes = new completeModel({
        image: image_filename,
        name: req.body.name,
        place: req.body.place,
        details: req.body.details,
        map1: map1_filename, // Store map1 image filename
    });

    try {
        await completes.save();
        res.json({ success: true, message: "Complete Project Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding Complete project" });
    }
};

// List all Complete Projects
const listComplete = async (req, res) => {
    try {
        const completes = await completeModel.find({});
        res.json({ success: true, data: completes });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing complete projects" });
    }
};

// Remove Complete Project
const removeComplete = async (req, res) => {
    try {
        const completes = await completeModel.findById(req.body.id);
        if (!completes) {
            return res.status(404).json({ success: false, message: "Complete Project not found" });
        }

        // Remove the image files
        await fs.unlink(`completeImages/${completes.image}`);
        await fs.unlink(`completeImages/${completes.map1}`);

        await completeModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Project Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing Complete project" });
    }
};

// Update Complete Project
const updateComplete = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null; // Handle image upload
    let map1_filename = req.files && req.files.map1 ? req.files.map1[0].filename : null; // Handle map1 image upload

    const updateData = {
        name: req.body.name,
        place: req.body.place,
        details: req.body.details,
    };

    if (image_filename) {
        updateData.image = image_filename; // Update image if uploaded
    }
    if (map1_filename) {
        updateData.map1 = map1_filename; // Update map1 if uploaded
    }

    try {
        const complete = await completeModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!complete) {
            return res.json({ success: false, message: "Complete Project not found" });
        }
        res.json({ success: true, message: "Complete Project updated", data: complete });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating Complete Project" });
    }
};

// Fetch a Single Complete Project by ID
const fetchComplete = async (req, res) => {
    try {
        const complete = await completeModel.findById(req.params.id);
        if (!complete) {
            return res.status(404).json({ success: false, message: "Complete Project not found" });
        }
        res.json({ success: true, data: complete });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching complete project data" });
    }
};

export { addComplete, listComplete, removeComplete, updateComplete, fetchComplete };
