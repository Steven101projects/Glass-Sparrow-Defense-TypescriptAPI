import Router from "express"
import {getAllIntel, getIntel} from "../controllers/intelligence.controller"

const router = Router();

router.get("/", getAllIntel);
router.get("/:name", getIntel);

export default router;