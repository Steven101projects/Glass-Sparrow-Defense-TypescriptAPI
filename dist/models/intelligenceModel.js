"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const intelligenceModel = new mongoose_1.default.Schema({
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
    },
    country: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Country"
        }
    ]
});
exports.default = mongoose_1.default.model("Intel", intelligenceModel);
