// import serviceModel from "../models/serviceModel.js";
// // import instructorModel from "../models/serviceModel.js";
// import fs from "fs/promises"

// const addService = async(req,res)=>{
//     let image_filename = `${req.file.filename}`;
//     let icon_filename = `${req.file.filename}`;
    

//     const services = new serviceModel({
//         image:image_filename,
//         icon:icon_filename,
//         service:req.body.service,     
//     })
//     try{
//         await services.save();
//         res.json({success:true,message:"Service Added"})
//     } catch(error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }



// //add all instructors list
// const listService= async (req,res)=>{
//     try{
//         const services = await serviceModel.find({});
//         res.json({success:true,data:services})
//     }
//     catch(error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }

// }


// //remove instructors

// const removeService  = async(req,res)=>{
//     try{
//         const services = await serviceModel.findById(req.body.id);
//         fs.unlink(`serviceImages/${services.image}`,()=>{})
//         fs.unlink(`serviceIcons/${services.image}`,()=>{})

//         await serviceModel.findByIdAndDelete(req.body.id);
//         res.json({success:true,message:"Service Removed"})
//     }
//     catch(error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }

// }


// const updateService = async (req, res) => {
//     let image_filename = req.file ? `${req.file.filename}` : null; // Optional: only update image if provided
//     let icon_filename = req.file ? `${req.file.filename}` : null;

//     const updateData = {
//         service: req.body.service,      
//     };

//     if (image_filename) {
//         updateData.image = image_filename; // Update image only if new image is provided
//         updateData.image = icon_filename; 
//     }

//     try {
//         const service = await serviceModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
//         if (!service) {
//             return res.json({ success: false, message: "Service not found" });
//         }
//         res.json({ success: true, message: "Service updated", data: service });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };

// const fetchService=  async (req, res) => {
//     try {
//         const service = await serviceModel.findById(req.params.id);
//         if (!service) {
//             return res.status(404).json({ success: false, message: "service not found" });
//         }
//         res.json({ success: true, data: service });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Error fetching service data" });
//     }
// }


// export {addService, listService,removeService,updateService,fetchService}



import serviceModel from "../models/serviceModel.js";
import fs from "fs/promises";


const addService = async (req, res) => {
    const image_file = req.files?.image?.[0]?.filename || null; // Safely get image filename
    const icon_file = req.files?.icon?.[0]?.filename || null;   // Safely get icon filename

    const services = new serviceModel({
        image: image_file,
        icon: icon_file,
        service: req.body.service,
    });

    try {
        await services.save();
        res.json({ success: true, message: "Service Added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding service" });
    }
};

const updateService = async (req, res) => {
    const image_file = req.files?.image?.[0]?.filename || null; // Safely get image filename
    const icon_file = req.files?.icon?.[0]?.filename || null;   // Safely get icon filename

    const updateData = { service: req.body.service };

    if (image_file) updateData.image = image_file;
    if (icon_file) updateData.icon = icon_file;

    try {
        const service = await serviceModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!service) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }
        res.json({ success: true, message: "Service updated", data: service });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error updating service" });
    }
};


const listService = async (req, res) => {
    try {
        const services = await serviceModel.find({});
        res.json({ success: true, data: services });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const removeService = async (req, res) => {
    try {
        const service = await serviceModel.findById(req.body.id);
        if (service) {
            if (service.image) await fs.unlink(`serviceImages/${service.image}`);
            if (service.icon) await fs.unlink(`serviceIcons/${service.icon}`);
        }

        await serviceModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Service Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// const updateService = async (req, res) => {
//     const image_filename = req.files.image ? req.files.image[0].filename : null;
//     const icon_filename = req.files.icon ? req.files.icon[0].filename : null;

//     const updateData = {
//         service: req.body.service,
//     };

//     if (image_filename) updateData.image = image_filename;
//     if (icon_filename) updateData.icon = icon_filename;

//     try {
//         const service = await serviceModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
//         if (!service) {
//             return res.json({ success: false, message: "Service not found" });
//         }
//         res.json({ success: true, message: "Service updated", data: service });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" });
//     }
// };

const fetchService = async (req, res) => {
    try {
        const service = await serviceModel.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }
        res.json({ success: true, data: service });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching service data" });
    }
};

export { addService, listService, removeService, updateService, fetchService };
