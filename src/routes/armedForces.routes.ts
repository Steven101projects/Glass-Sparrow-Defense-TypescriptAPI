import Router from "express";
import { getAllArmedForces, getArmedForce } from "../controllers/armedForces.controller";

const router = Router();

router.get("/", getAllArmedForces);
router.get("/:name", getArmedForce);

export default router;