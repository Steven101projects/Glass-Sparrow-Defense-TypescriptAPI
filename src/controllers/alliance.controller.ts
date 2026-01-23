import Alliance from "../models/allianceModel"
import { Request, Response } from "express"

export const getAllAlliance = async (req: Request, res: Response): Promise<void> => {
    try {
        const alliances = await Alliance.find();

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
        const alliance = await Alliance.findOne({ name });

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

export const createAlliance = async (req: Request, res: Response): Promise<void> => {
    try {
        const alliance = new Alliance(req.body);
        const savedAlliance = await alliance.save();

        res.status(200).json(savedAlliance);
    } catch (error: any) {
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
}

export const updateAlliance = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name} = req.params;
        const updatedAlliance = Alliance.findOneAndUpdate({name}, req.body, {new: true, runValidators: true})

        if(!updatedAlliance){
            res.status(400).json({
                message: "Alliance not found"
            });
            return;
        }

        res.status(200).json(updatedAlliance);
    } catch(error){
        res.status(500).json({
            message: "Failed to update selected Alliance"
        });
    }
}

export const deleteAlliance = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.params;
        const deletedAlliance = Alliance.findOneAndDelete({name});

        if(!deletedAlliance){
            res.status(404).json({
                message: "Alliance not found"
            });
            return;
        }

        res.status(200).json({
        message: `WARNING: ${name ? name : "Selected Alliance"} has been deleted from the database`
        })
    }catch(error){
        res.status(500).json({
            message: "Failed to delete selected Alliance"
        })
    }
}