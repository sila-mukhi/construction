import galleryModel from "../models/galleryModel.js";
import fs from "fs/promises";

const addGallery = async (req, res) => {
    let image_filename = `${req.file.filename}`; 

    const gallery = new galleryModel({
        image: image_filename,
    });
    try {
        await gallery.save();
        res.json({ success: true, message: "Gallery Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding Gallery" });
    }
};

const listGallery = async (req, res) => {
    try {
        const galleries = await galleryModel.find({});
        res.json({ success: true, data: galleries });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing galleries" });
    }
};

const removeGallery = async (req, res) => {
    try {
        const gallery = await galleryModel.findById(req.body.id);
        if (!gallery) {
          
            return res.status(404).json({success:false,message:"gallery not found"})
        }           
          await fs.unlink(`galleryImages/${gallery.image}`);

        await galleryModel.findByIdAndDelete(req.body.id);
             res.json({ success: true, message: "gallery Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing gallery" });
    }
};

const updateGallery = async (req, res) => {
    try {
        // Find the gallery by ID
        const gallery = await galleryModel.findById(req.params.id);
        if (!gallery) {
            return res.status(404).json({ success: false, message: "Gallery not found" });
        }

        // If a new image is uploaded, delete the old one and update with the new one
        if (req.file) {
            // Delete the old image from the file system
            await fs.unlink(`galleryImages/${gallery.image}`);

            // Update the gallery with the new image filename
            gallery.image = req.file.filename;
        }

        // Update other fields if needed (you can add more fields if required)
        await gallery.save();

        res.json({ success: true, message: "Gallery updated successfully", data: gallery });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error updating gallery" });
    }
};

const fetchGallery = async (req, res) => {
    try {
        const gallery = await galleryModel.findById(req.params.id);
        if (!gallery) {
            return res.status(404).json({ success: false, message: "gallery not found" });
        }
        res.json({ success: true, data: gallery });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching gallery data" });
    }
};

export { addGallery, listGallery, updateGallery,removeGallery,fetchGallery };
