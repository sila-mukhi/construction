
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    image: { type: String, required: true },
    service: { type: String, required: true },
    icon: { type: String, required: true },
});

const serviceModel = mongoose.models.services || mongoose.model("services", serviceSchema);

export default serviceModel;
