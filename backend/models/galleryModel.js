import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({    
    image:{type:String,required:true},

})
const galleryModel = mongoose.models.galleries || mongoose.model("galleries",gallerySchema)

export default galleryModel 
