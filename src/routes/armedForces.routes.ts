import Router from "express";
import { getAllArmedForces, getArmedForce, createArmedForce, updateArmedForce, deleteArmedForce } from "../controllers/armedForces.controller";

const router = Router();

router.get("/", getAllArmedForces);
router.get("/:name", getArmedForce);
router.post("/", createArmedForce);
router.put("/:name", updateArmedForce);
router.delete("/name", deleteArmedForce);

export default router;