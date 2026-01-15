"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDatabase = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is not defined");
        }
        await mongoose_1.default.connect(uri);
        console.log("MONGODB Connected");
    }
    catch (error) {
        console.error("MONGODB Connection Failed");
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
