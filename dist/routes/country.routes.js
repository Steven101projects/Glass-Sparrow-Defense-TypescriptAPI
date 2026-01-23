"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const country_controller_1 = require("../controllers/country.controller");
const router = (0, express_1.default)();
router.get("/", country_controller_1.getAllCountries);
router.get("/:isoCode", country_controller_1.getCountryByIsoCode);
router.post("/", country_controller_1.createCountry);
router.put("/:isoCode", country_controller_1.updateCountry);
router.delete(":isoCode", country_controller_1.deleteCountry);
exports.default = router;
