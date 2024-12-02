import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Unique email
    password: { type: String, required: true },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;


// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     isVerified:{
//         type:Boolean,
//         default:false,
//     },
//     verificationCode:String
// },{timestamps:true})

// const userModel = mongoose.model("user",userSchema) 
// export default userModel;