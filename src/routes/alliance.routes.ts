import Router from "express";
import { getAllAlliance, getOneAlliance, createAlliance, updateAlliance,deleteAlliance } from "../controllers/alliance.controller";

const router = Router();

router.get("/", getAllAlliance);
router.get("/:name", getOneAlliance);
router.post("/", createAlliance);
router.put("/:name", updateAlliance);
router.delete("/name", deleteAlliance);

export default router;