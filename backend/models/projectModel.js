import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    name:{type:String,required:true},
    place:{type:String,required:true},  
})
const projectModel = mongoose.models.projects || mongoose.model("projects",projectSchema)

export default projectModel 
