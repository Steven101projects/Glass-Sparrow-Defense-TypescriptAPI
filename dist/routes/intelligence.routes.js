"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const intelligence_controller_1 = require("../controllers/intelligence.controller");
const router = (0, express_1.default)();
router.get("/", intelligence_controller_1.getAllIntel);
router.get("/:name", intelligence_controller_1.getIntel);
router.post("/", intelligence_controller_1.createIntel);
router.put("/:name", intelligence_controller_1.updateIntel);
router.delete("/name", intelligence_controller_1.deleteIntel);
exports.default = router;
