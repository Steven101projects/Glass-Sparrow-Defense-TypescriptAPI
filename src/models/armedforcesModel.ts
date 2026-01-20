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
    }
})

export default mongoose.model("ArmedForces", armedForcesModel);