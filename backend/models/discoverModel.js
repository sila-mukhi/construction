import mongoose from "mongoose";

const discoverSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},  
    phone:{type:String,required:true},  
})
const discoverModel = mongoose.models.discovers || mongoose.model("discovers",discoverSchema)

export default discoverModel 
