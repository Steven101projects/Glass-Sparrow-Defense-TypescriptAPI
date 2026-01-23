import mongoose from "mongoose";


const armedForcesModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    country: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country"
    }
    ]
})

export default mongoose.model("ArmedForces", armedForcesModel);