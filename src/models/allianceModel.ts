import mongoose from "mongoose";

const allianceModel = new mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   fullName: {
    type: String
   },
   description: {
    type: String,
    required: true
   },
   website: {
    type: String,
    required: true
   }
})

export default mongoose.model("Alliance", allianceModel);