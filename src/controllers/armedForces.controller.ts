import ArmedForces from "../models/armedforcesModel";
import {Request, Response} from "express";

export const getAllArmedForces = async (req: Request, res: Response): Promise<void> => {
    try {
        const armedforces = ArmedForces.find();

        res.status(200).json(armedforces);
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch armed forces"
        })
    }
}

export const getArmedForce = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.params;

        const armedForce = ArmedForces.findOne({ name });

        if(!name){
            res.status(400).json({
                message: "Armed Force not found in the Database"
            });
            return;
        }
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch AF you're looking for"
        })
    }
}


