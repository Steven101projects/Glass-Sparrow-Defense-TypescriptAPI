import mongoose from "mongoose";

//A Database Blueprint for the data to take shape.

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
     },
    isoCode: {
        type: String,
        required: true,
        unique: true
    },
    region: {
        type: String,
        required: true
    },
    governmentType: {
        type: String,
        required: true
    },
    economicSystem: {
        type: String,
        required: true
    },
    defense: {
        defenseBudgetUSD: {
            type: Number, 
            required: true
        },
        activePersonnel: {
        type: Number,
        required: true
        },
        reservePersonnel: {
        type: Number,
        required: true
        },
        conscription: {
        type: Boolean,
        required: true
        },
         defenseDoctrine: {
        type: String,
        required: true
        }
    },
    alliances: {
        ids: [
            {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Alliance"
            }
        ]
    },
    armedForces: {
        branches: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ArmedForces"
            }
        ]
    },
    intelligences: {
        agencies: [
           {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Intel"
            }
        ]
    },
    metadata: {    
        lastUpdated: {
            type: Date, 
            default: Date.now 
        },
        source: {
            type: String,
            required: true,
        },
        classification: {
            type: String,
            required: true
        }
    }

})

export default mongoose.model("Country", countrySchema);