import Router from "express";
import { getAllAlliance, getOneAlliance } from "../controllers/alliance.controller";

const router = Router();

router.get("/", getAllAlliance);
router.get("/:name", getOneAlliance);

export default router;