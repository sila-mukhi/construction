import mongoose from "mongoose";

const completeSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    name:{type:String,required:true},
    place:{type:String,required:true},  
    details:{type:String,required:true},
    map1:{type:String,required:true} , 
})
const completeModel = mongoose.models.completes || mongoose.model("completes",completeSchema)

export default completeModel 
