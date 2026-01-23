"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIntel = exports.updateIntel = exports.createIntel = exports.getIntel = exports.getAllIntel = void 0;
const intelligenceModel_1 = __importDefault(require("../models/intelligenceModel"));
const getAllIntel = async (req, res) => {
    try {
        const intels = await intelligenceModel_1.default.find();
        res.status(200).json(intels);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch intels"
        });
    }
};
exports.getAllIntel = getAllIntel;
const getIntel = async (req, res) => {
    try {
        const { name } = req.params;
        const intel = await intelligenceModel_1.default.findOne({ name });
        if (!intel) {
            res.status(400).json({
                message: "Intel not found in the Database"
            });
            return;
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch the intel you're looking for"
        });
    }
};
exports.getIntel = getIntel;
const createIntel = async (req, res) => {
    try {
        const intel = new intelligenceModel_1.default(req.body);
        const savedIntel = await intel.save();
        res.status(200).json(savedIntel);
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(409).json({
                message: "Intelligence already exists"
            });
            return;
        }
        res.status(500).json({
            message: "Failed to create Intelligence"
        });
    }
};
exports.createIntel = createIntel;
const updateIntel = async (req, res) => {
    try {
        const { name } = req.params;
        const updatedIntel = await intelligenceModel_1.default.findOneAndUpdate({ name }, req.body, { new: true, runValidators: true });
        if (!updatedIntel) {
            res.status(400).json({
                message: "Intel not found"
            });
            return;
        }
        res.status(200).json(updatedIntel);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update selected Intel"
        });
    }
};
exports.updateIntel = updateIntel;
const deleteIntel = async (req, res) => {
    try {
        const { name } = req.params;
        const deletedIntel = await intelligenceModel_1.default.findOneAndDelete({ name });
        if (!deletedIntel) {
            res.status(404).json({
                message: "Intel not found"
            });
            return;
        }
        res.status(200).json({
            message: `WARNING: ${name ? name : "Selected Intel"} has been deleted from the database`
        });
    }
    catch (error) {
        res.status(500).json({
            message: `Failed to delete selected Intel`
        });
    }
};
exports.deleteIntel = deleteIntel;
