import fs from "fs/promises";
import ongoingModel from "../models/ongoingModel.js";

const addOngoing = async (req, res) => {
    let { image, map1, map2 } = req.files; // Expecting `image`, `map1`, and `map2` to be uploaded files

    if (!image || !map1 || !map2) {
        return res.status(400).json({ success: false, message: "All images are required" });
    }

    const ongoings = new ongoingModel({
        image: image[0].filename,
        map1: map1[0].filename,
        map2: map2[0].filename,
        name: req.body.name,
        place: req.body.place,
        details: req.body.details,
    });

    try {
        await ongoings.save();
        res.json({ success: true, message: "Ongoing Project Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding Ongoing project" });
    }
};


const listOngoing = async (req, res) => {
    try {
        const ongoings = await ongoingModel.find({});
        res.json({ success: true, data: ongoings });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing ongoing projects" });
    }
};

const removeOngoing = async (req, res) => {
    try {
        const ongoing = await ongoingModel.findById(req.body.id);
        if (!ongoing) {
            return res.status(404).json({ success: false, message: "Ongoing Project not found" });
        }

        // Delete associated files
        await fs.unlink(`ongoingImages/${ongoing.image}`);
        await fs.unlink(`ongoingImages/${ongoing.map1}`);
        await fs.unlink(`ongoingImages/${ongoing.map2}`);

        await ongoingModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Project Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing Ongoing project" });
    }
};


const updateOngoing = async (req, res) => {
    const updateData = {
        name: req.body.name,
        place: req.body.place,
        details: req.body.details,
    };

    let { image, map1, map2 } = req.files; // Updated files, if any

    if (image) updateData.image = image[0].filename;
    if (map1) updateData.map1 = map1[0].filename;
    if (map2) updateData.map2 = map2[0].filename;

    try {
        const ongoing = await ongoingModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!ongoing) {
            return res.status(404).json({ success: false, message: "Ongoing Project not found" });
        }
        res.json({ success: true, message: "Ongoing Project updated", data: ongoing });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error updating Ongoing project" });
    }
};


const fetchOngoing = async (req, res) => {
    try {
        const ongoing = await ongoingModel.findById(req.params.id);
        if (!ongoing) {
            return res.status(404).json({ success: false, message: "ongoing Project not found" });
        }
        res.json({ success: true, data: ongoing });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching ongoing project data" });
    }
};

export { addOngoing, listOngoing, removeOngoing, updateOngoing, fetchOngoing };
