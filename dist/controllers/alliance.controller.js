"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlliance = exports.updateAlliance = exports.createAlliance = exports.getOneAlliance = exports.getAllAlliance = void 0;
const allianceModel_1 = __importDefault(require("../models/allianceModel"));
const getAllAlliance = async (req, res) => {
    try {
        const alliances = await allianceModel_1.default.find();
        res.status(200).json(alliances);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch Alliances"
        });
    }
};
exports.getAllAlliance = getAllAlliance;
const getOneAlliance = async (req, res) => {
    try {
        const name = req.params;
        const alliance = await allianceModel_1.default.findOne({ name });
        if (!alliance) {
            res.status(400).json({
                message: "Aliance did not found in the Database"
            });
            return;
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch alliance you're looking for"
        });
    }
};
exports.getOneAlliance = getOneAlliance;
const createAlliance = async (req, res) => {
    try {
        const alliance = new allianceModel_1.default(req.body);
        const savedAlliance = await alliance.save();
        res.status(200).json(savedAlliance);
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(409).json({
                message: "Alliance already exists"
            });
            return;
        }
        res.status(500).json({
            message: "Failed to create Alliance"
        });
    }
};
exports.createAlliance = createAlliance;
const updateAlliance = async (req, res) => {
    try {
        const { name } = req.params;
        const updatedAlliance = allianceModel_1.default.findOneAndUpdate({ name }, req.body, { new: true, runValidators: true });
        if (!updatedAlliance) {
            res.status(400).json({
                message: "Alliance not found"
            });
            return;
        }
        res.status(200).json(updatedAlliance);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update selected Alliance"
        });
    }
};
exports.updateAlliance = updateAlliance;
const deleteAlliance = async (req, res) => {
    try {
        const { name } = req.params;
        const deletedAlliance = allianceModel_1.default.findOneAndDelete({ name });
        if (!deletedAlliance) {
            res.status(404).json({
                message: "Alliance not found"
            });
            return;
        }
        res.status(200).json({
            message: `WARNING: ${name ? name : "Selected Alliance"} has been deleted from the database`
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete selected Alliance"
        });
    }
};
exports.deleteAlliance = deleteAlliance;
