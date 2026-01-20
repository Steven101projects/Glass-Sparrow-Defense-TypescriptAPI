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