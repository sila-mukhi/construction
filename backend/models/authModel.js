import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    verificationCode:String
},{timestamps:true})

const authModel = mongoose.model("auth",authSchema) 
export default authModel;