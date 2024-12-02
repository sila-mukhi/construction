import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({    
    image:{type:String,required:true},
    reviews:{type:String,required:true},
    name:{type:String,required:true},  
    company:{type:String,required:true},  
})
const testimonialModel = mongoose.models.testimonials || mongoose.model("testimonials",testimonialSchema)

export default testimonialModel 
// export default carrousel model