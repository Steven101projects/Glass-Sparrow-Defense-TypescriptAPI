"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const armedForces_controller_1 = require("../controllers/armedForces.controller");
const router = (0, express_1.default)();
router.get("/", armedForces_controller_1.getAllArmedForces);
router.get("/:name", armedForces_controller_1.getArmedForce);
router.post("/", armedForces_controller_1.createArmedForce);
router.put("/:name", armedForces_controller_1.updateArmedForce);
router.delete("/name", armedForces_controller_1.deleteArmedForce);
exports.default = router;
