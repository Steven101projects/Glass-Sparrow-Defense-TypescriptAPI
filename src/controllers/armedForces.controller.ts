import armedforcesModel from "../models/armedforcesModel";
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

        if(!armedForce){
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

export const createArmedForce = async (req: Request, res: Response): Promise<void> => {
    try {
        const armedForce = new ArmedForces(req.body);
        const savedArmedForce = await armedForce.save();

        res.status(200).json(savedArmedForce);
    } catch (error: any) {
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
}

export const updateArmedForce = async (req: Request, res: Response): Promise<void> => {
    try{
        const {name} = req.params;
        const updatedArmedForce = ArmedForces.findOneAndUpdate({name}, req.body, {new: true, runValidators: true})
        if(!updatedArmedForce){
            res.status(400).json({
                message: "ArmedForce not found"
            });
            return;
        }

        res.status(200).json(updatedArmedForce);
    }catch(error){
        res.status(500).json({
            message: "Failed to update selected ArmedForce"
        });
    }
}

export const deleteArmedForce = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name} = req.params;
        const deletedArmedForce = ArmedForces.findOneAndDelete({name});

        if(!deletedArmedForce){
            res.status(404).json({
                message: "ArmedForce not found"
            });
            return;
        }

        res.status(200).json({
              message: `WARNING: ${name ? name : "Selected Armed Force"} has been deleted from the database`
        })
    }catch(error){
        res.status(500).json({
            message: "Failed to delete selected Armed Force"
        })
    }
}

