"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCountry = exports.updateCountry = exports.createCountry = exports.getCountryByIsoCode = exports.getAllCountries = void 0;
const countryModel_1 = __importDefault(require("../models/countryModel"));
//Controllers: Receives a request, talks to the database, sends a response.
const getAllCountries = async (req, res) => {
    try {
        const countries = await countryModel_1.default.find();
        res.status(200).json(countries);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch countries"
        });
    }
};
exports.getAllCountries = getAllCountries;
const getCountryByIsoCode = async (req, res) => {
    try {
        const { isoCode } = req.params;
        const country = await countryModel_1.default.findOne({ isoCode });
        if (!country) {
            res.status(400).json({
                message: "Country not found in the Database"
            });
            return;
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch the country you're looking for"
        });
    }
};
exports.getCountryByIsoCode = getCountryByIsoCode;
const createCountry = async (req, res) => {
    try {
        const country = new countryModel_1.default(req.body);
        const savedCountry = await country.save();
        res.status(201).json(savedCountry);
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(409).json({
                message: "Country already exists"
            });
            return;
        }
        res.status(500).json({
            message: "Failed to create country"
        });
    }
};
exports.createCountry = createCountry;
const updateCountry = async (req, res) => {
    try {
        const { isoCode } = req.params;
        const updatedCountry = await countryModel_1.default.findOneAndUpdate({ isoCode }, req.body, { new: true, runValidators: true });
        if (!updatedCountry) {
            res.status(400).json({
                message: "Country not found"
            });
            return;
        }
        res.status(200).json(updatedCountry);
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to update selected country"
        });
    }
};
exports.updateCountry = updateCountry;
const deleteCountry = async (req, res) => {
    try {
        const { isoCode } = req.params;
        const deletedCountry = await countryModel_1.default.findOneAndDelete({ isoCode });
        if (!deletedCountry) {
            res.status(404).json({
                message: "Country not found"
            });
            return;
        }
        res.status(200).json({
            message: `WARNING: ${isoCode ? isoCode : "Selected Country"} has been deleted from the database`
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to delete selected Country"
        });
    }
    ;
};
exports.deleteCountry = deleteCountry;
