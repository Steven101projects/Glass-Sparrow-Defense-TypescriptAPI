"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alliance_controller_1 = require("../controllers/alliance.controller");
const router = (0, express_1.default)();
router.get("/", alliance_controller_1.getAllAlliance);
router.get("/:name", alliance_controller_1.getOneAlliance);
router.post("/", alliance_controller_1.createAlliance);
router.put("/:name", alliance_controller_1.updateAlliance);
router.delete("/name", alliance_controller_1.deleteAlliance);
exports.default = router;
