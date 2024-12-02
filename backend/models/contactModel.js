// // import mongoose from 'mongoose';

// // const contactSchema = new mongoose.Schema({
// //     firstname: { type:String, required: true },
// //     lastname: { type:String, required: true },    
// //     email: { type:String, required: true },
// //     phone:{type:String,required:true},
// //     message: { type: String, required: true },
// //     verificationToken: { type: String, required: false },
// //     tokenExpiry: { type: Date, required: false }, // Ensure this is defined
// //     isVerified: { type: Boolean, default: false } // Field to track verification status
// // }, { timestamps: true }); // Optional: Add timestamps if needed

// // const contactModel = mongoose.models.contacts || mongoose.model('Contacts', contactSchema);

// // export default contactModel;




// // import mongoose from "mongoose";

// // const userSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true }, // Unique email
// //     password: { type: String, required: true },
// // });

// // const userModel = mongoose.models.users || mongoose.model("users", userSchema);

// // export default userModel;


// import mongoose from "mongoose";
// c
// const contactSchema = new mongoose.Schema({
//     firstname: { type:String, required: true },
//         lastname: { type:String, required: true },    
//         email: { type:String, required: true },
//         phone:{type:String,required:true},
//         message: { type: String, required: true },
//     isVerified:{
//         type:Boolean,
//         default:false,
//     },
//     verificationCode:String
// },{timestamps:true})


// const contactModel = mongoose.models.contacts || mongoose.model('Contacts', contactSchema);
// // 
// export default contactModel;


// import mongoose from "mongoose";

// const contactSchema = new mongoose.Schema(
//   {
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     email: { type: String, required: true },
//     phone: { type: String, required: true },
//     message: { type: String, required: true },
//     isVerified: {
//       type: Boolean,
//       default: false,
//     },
//     verificationCode: String,
//     verificationExpiry: { type: Date }, // Expiry time for the verification token
//   },
//   { timestamps: true } // Automatically adds createdAt and updatedAt fields
// );

// const contactModel = mongoose.models.contacts || mongoose.model("contacts", contactSchema);

// export default contactModel;




// import mongoose from 'mongoose';

// const contactSchema = new mongoose.Schema(
//   {
//     firstname: { type: String, required: true },
//     lastname: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String, required: true },
//     message: { type: String, required: true },
//     verificationCode: { type: String, required: true },
//     isVerified: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// const Contact = mongoose.model('Contact', contactSchema);

// export default Contact;
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  verified: { type: Boolean, default: false }, // Verification status
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
