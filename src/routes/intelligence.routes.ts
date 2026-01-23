import Router from "express"
import {getAllIntel, getIntel, createIntel , updateIntel, deleteIntel} from "../controllers/intelligence.controller"

const router = Router();

router.get("/", getAllIntel);
router.get("/:name", getIntel);
router.post("/", createIntel);
router.put("/:name", updateIntel);
router.delete("/name", deleteIntel);

export default router;