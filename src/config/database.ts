import mongoose from "mongoose";

export const connectDatabase = async (): Promise<void> =>{
    try {
        const uri = process.env.MONGO_URI;

        if(!uri) {
            throw new Error("MONGO_URI is not defined");
        }

        await mongoose.connect(uri);
        console.log("MONGODB Connected");
    } catch(error) {
        console.error("MONGODB Connection Failed");
        process.exit(1);
    }
};