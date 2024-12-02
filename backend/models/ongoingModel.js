import mongoose from "mongoose";

const ongoingSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    name:{type:String,required:true},
    place:{type:String,required:true},  
    details:{type:String,required:true},
    map1:{type:String,required:true} ,
    map2:{type:String,required:true} ,
})
const ongoingModel = mongoose.models.ongoings || mongoose.model("ongoings",ongoingSchema)

export default ongoingModel 
