"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const country_routes_1 = __importDefault(require("./routes/country.routes"));
const armedForces_routes_1 = __importDefault(require("./routes/armedForces.routes"));
const intelligence_routes_1 = __importDefault(require("./routes/intelligence.routes"));
const alliance_routes_1 = __importDefault(require("./routes/alliance.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/countries/", country_routes_1.default);
app.use("/api/armedforces/", armedForces_routes_1.default);
app.use("/api/intel/", intelligence_routes_1.default);
app.use("/api/alliance/", alliance_routes_1.default);
exports.default = app;
