import Alliance from "../models/allianceModel"
import { Request, Response } from "express"

export const getAllAlliance = async (req: Request, res: Response): Promise<void> => {
    try {
        const alliances = Alliance.find();

        res.status(200).json(alliances);
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch Alliances"
        })
    }
}

export const getOneAlliance = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.params;
        const alliance = Alliance.findOne({ name });

        if(!alliance){
            res.status(400).json({
                message: "Aliance did not found in the Database"
            })
            return;
        }
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch alliance you're looking for"
        })
    }
}