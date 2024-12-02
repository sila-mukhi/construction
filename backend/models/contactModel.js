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
