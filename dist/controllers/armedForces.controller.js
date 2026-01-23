"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArmedForce = exports.updateArmedForce = exports.createArmedForce = exports.getArmedForce = exports.getAllArmedForces = void 0;
const armedforcesModel_1 = __importDefault(require("../models/armedforcesModel"));
const getAllArmedForces = async (req, res) => {
    try {
        const armedforces = await armedforcesModel_1.default.find();
        res.status(200).json(armedforces);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch armed forces"
        });
    }
};
exports.getAllArmedForces = getAllArmedForces;
const getArmedForce = async (req, res) => {
    try {
        const name = req.params;
        const armedForce = await armedforcesModel_1.default.findOne({ name });
        if (!armedForce) {
            res.status(400).json({
                message: "Armed Force not found in the Database"
            });
            return;
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch AF you're looking for"
        });
    }
};
exports.getArmedForce = getArmedForce;
const createArmedForce = async (req, res) => {
    try {
        const armedForce = new armedforcesModel_1.default(req.body);
        const savedArmedForce = await armedForce.save();
        res.status(200).json(savedArmedForce);
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(409).json({
                message: "Armed Force already exists"
            });
            return;
        }
        res.status(500).json({
            message: "Failed to create Armed Force"
        });
    }
};
exports.createArmedForce = createArmedForce;
const updateArmedForce = async (req, res) => {
    try {
        const { name } = req.params;
        const updatedArmedForce = armedforcesModel_1.default.findOneAndUpdate({ name }, req.body, { new: true, runValidators: true });
        if (!updatedArmedForce) {
            res.status(400).json({
                message: "ArmedForce not found"
            });
            return;
        }
        res.status(200).json(updatedArmedForce);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update selected ArmedForce"
        });
    }
};
exports.updateArmedForce = updateArmedForce;
const deleteArmedForce = async (req, res) => {
    try {
        const { name } = req.params;
        const deletedArmedForce = armedforcesModel_1.default.findOneAndDelete({ name });
        if (!deletedArmedForce) {
            res.status(404).json({
                message: "ArmedForce not found"
            });
            return;
        }
        res.status(200).json({
            message: `WARNING: ${name ? name : "Selected Armed Force"} has been deleted from the database`
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete selected Armed Force"
        });
    }
};
exports.deleteArmedForce = deleteArmedForce;
