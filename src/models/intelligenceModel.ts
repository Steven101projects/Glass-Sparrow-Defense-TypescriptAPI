import mongoose from "mongoose";

const intelligenceModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    focus: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
})

export default mongoose.model("Intel", intelligenceModel);