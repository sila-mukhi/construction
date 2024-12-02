// import carouselModel from "../models/carouselModel.js";
import fs from "fs/promises";
// import testimonialModel from "../models/testimonialModel.js";
import discoverModel from "../models/discoverModel.js";

const addDiscover = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const discovers = new discoverModel({
        image: image_filename,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
    });
    try {
        await discovers.save();
        res.json({ success: true, message: "Discover Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding Discover" });
    }
};

const listDiscover = async (req, res) => {
    try {
        const discovers = await discoverModel.find({});
        res.json({ success: true, data: discovers });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing discovers" });
    }
};

const removeDiscover = async (req, res) => {
    try {
        const discovers = await discoverModel.findById(req.body.id);
        if (!discovers) {

            return res.status(404).json({ success: false, message: "Discover not found" })
        }
        await fs.unlink(`discoverImages/${discovers.image}`);

        await discoverModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Discover Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing discover" });
    }
};

const updateDiscover = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null;

    const updateData = {
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
    };

    if (image_filename) {
        updateData.image = image_filename;
    }

    try {
        const discover = await discoverModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!discover) {
            return res.json({ success: false, message: "Discover not found" });
        }
        res.json({ success: true, message: "Discover updated", data: discover });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating Discover" });
    }
};

const fetchDiscover = async (req, res) => {
    try {
        const discover = await discoverModel.findById(req.params.id);
        if (!discover) {
            return res.status(404).json({ success: false, message: "Discover not found" });
        }
        res.json({ success: true, data: discover });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching Discover data" });
    }
};

export { addDiscover, listDiscover, removeDiscover, updateDiscover, fetchDiscover };
