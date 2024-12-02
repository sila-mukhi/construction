import mongoose from "mongoose";
export const connectDB = async () =>{
    // await mongoose.connpect('mongodb://localhost:27017/construction').then(()=>console.log("db connected"));
    await mongoose.connect('mongodb+srv://silamukhi:sila123@cluster0.zz9kz.mongodb.net/construction').then(()=>console.log("db connected"));
    // mongodb+srv://silamukhi:<db_password>@cluster0.zz9kz.mongodb.net/construction
    // mongodb+srv://silamukhi:sila1234@cluster0.zz9kz.mongodb.net/?

}

