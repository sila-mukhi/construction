import fs from "fs/promises";
import testimonialModel from "../models/testimonialModel.js";

const addTestimonial = async (req, res) => {
    try {
        // Log request data for debugging
        console.log("File: ", req.file);
        console.log("Body: ", req.body);

        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const image_filename = `${req.file.filename}`;
        const testimonials = new testimonialModel({
            image: image_filename,
            reviews: req.body.reviews,
            name: req.body.name,
            company: req.body.company,
        });

        await testimonials.save();
        res.json({ success: true, message: "Testimonial Added" });
    } catch (error) {
        console.error("Error in addTestimonial:", error);
        res.status(500).json({ success: false, message: "Error adding Testimonial" });
    }
};

const listTestimonial = async (req, res) => {
    try {
        const testimonials = await testimonialModel.find({});
        res.json({ success: true, data: testimonials });
    } catch (error) {
        console.error("Error in listTestimonial:", error);
        res.status(500).json({ success: false, message: "Error listing testimonials" });
    }
};

const removeTestimonial = async (req, res) => {
    try {
        const testimonials = await testimonialModel.findById(req.body.id);
        if (!testimonials) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }

        try {
            await fs.unlink(`testimonialImages/${testimonials.image}`);
        } catch (err) {
            console.error("Error deleting file:", err.message);
        }

        await testimonialModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Testimonial Removed" });
    } catch (error) {
        console.error("Error in removeTestimonial:", error);
        res.status(500).json({ success: false, message: "Error removing testimonial" });
    }
};

const updateTestimonial = async (req, res) => {
    try {
        const image_filename = req.file ? `${req.file.filename}` : null;

        const updateData = {
            reviews: req.body.reviews,
            name: req.body.name,
            company: req.body.company,
        };

        if (image_filename) {
            updateData.image = image_filename;
        }

        const testimonial = await testimonialModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!testimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }

        res.json({ success: true, message: "Testimonial updated", data: testimonial });
    } catch (error) {
        console.error("Error in updateTestimonial:", error);
        res.status(500).json({ success: false, message: "Error updating testimonial" });
    }
};

const fetchTestimonial = async (req, res) => {
    try {
        const testimonial = await testimonialModel.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }
        res.json({ success: true, data: testimonial });
    } catch (error) {
        console.error("Error in fetchTestimonial:", error);
        res.status(500).json({ success: false, message: "Error fetching testimonial data" });
    }
};

export { addTestimonial, listTestimonial, removeTestimonial, updateTestimonial, fetchTestimonial };
