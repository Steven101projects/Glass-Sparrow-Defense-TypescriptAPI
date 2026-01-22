import Intel from "../models/intelligenceModel"
import { Request, Response} from "express";

export const getAllIntel = async (req: Request, res: Response): Promise<void> => {
    try {
        const intels = await Intel.find();

        res.status(200).json(intels);
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch intels"
        });
    }
}

export const getIntel = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.params;

        const intel = await Intel.findOne({ name });

        if(!intel){
            res.status(400).json({
                message: "Intel not found in the Database"
            });
            return;
        }
    } catch(error) {
        res.status(500).json({
             message: "Failed to fetch the intel you're looking for"
        })
    }
}

export const createIntel = async (req: Request, res: Response): Promise<void> => {
    try {
        const intel = new Intel(req.body);
        const savedIntel = await intel.save();

        res.status(200).json(savedIntel);
    } catch(error: any){
        if(error.code === 11000){
            res.status(409).json({
                message: "Intelligence already exists"
            });
            return;
        }

        res.status(500).json({
            message: "Failed to create Intelligence"
        });
    }
}

export const updateIntel = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.params;

        const updatedIntel = await Intel.findOneAndUpdate({ name }, req.body, {new: true, runValidators: true});
        if(!updatedIntel){
            res.status(400).json({
                message: "Intel not found"
            });
            return;
        }

        res.status(200).json(updatedIntel);
    } catch(error){
        res.status(500).json({
            message: "Failed to update selected Intel"
        });
    }
}

export const deleteIntel = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name} = req.params;
        const deletedIntel = await Intel.findOneAndDelete({name});

        if(!deletedIntel){
            res.status(404).json({
                message: "Intel not found"
            });
            return;
        }
        
        res.status(200).json({
            message: `WARNING: ${name ? name : "Selected Intel"} has been deleted from the database`
        });
    }catch(error){
        res.status(500).json({
            message: `Failed to delete selected Intel`
        });
    }
}