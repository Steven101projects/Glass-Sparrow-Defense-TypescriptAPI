import Country from "../models/countryModel";
import {Request, Response } from "express";

//Controllers: Receives a request, talks to the database, sends a response.

export const getAllCountries = async ( req: Request, res: Response): Promise<void> => {
    try {
        const countries = await Country.find();

        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch countries"
        });
    }
}

export const getCountryByIsoCode = async ( req: Request, res: Response): Promise<void> => {
    try {
        const { isoCode } = req.params;

        const country = await Country.findOne({ isoCode });

        if(!country) {
            res.status(400).json({
                message: "Country not found in the Database"
            });
            return;
            }
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch the country you're looking for"
        })
    }
}
