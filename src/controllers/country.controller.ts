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

export const createCountry = async (req: Request, res: Response): Promise<void> => {
    try {
        const country = new Country(req.body);
        const savedCountry = await country.save();

        res.status(201).json(savedCountry);
    } catch(error: any){
        if(error.code === 11000){
            res.status(409).json({
                message: "Country already exists"
            });
            return;
        }

        res.status(500).json({
            message: "Failed to create country"
        })
    }
}

export const updateCountry = async ( req: Request, res: Response ): Promise<void> => {
    try {
      const { isoCode } = req.params;

      const updatedCountry = await Country.findOneAndUpdate(
        { isoCode },
        req.body,
        {new: true, runValidators: true}
      );

      if (!updatedCountry) {
        res.status(400).json({
            message: "Country not found"
        });
        return;
      }

      res.status(200).json(updatedCountry);
    } catch(error) {
        res.status(500).json({
            message: "Failed to update selected country"
        });
    }
}

export const deleteCountry = async (req: Request, res: Response ): Promise<void> => {
    try {
        const {isoCode} = req.params;

        const deletedCountry = await Country.findOneAndDelete({ isoCode });

        if(!deletedCountry) {
            res.status(404).json({
                message: "Country not found"
            });
            return;
        }

        res.status(200).json({
             message: `WARNING: ${isoCode ? isoCode : "Selected Country"} has been deleted from the database`
        });
    } catch(error) {
        res.status(500).json({
            message: "Failed to delete selected Country"
        });
    };
}
