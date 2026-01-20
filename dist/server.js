"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
/* NOTE: A simulated safe async function that ensures that connection to DB
is established first before running the server.  */
const startServer = async () => {
    await (0, database_1.connectDatabase)();
    app.get("/", (req, res) => {
        res.send("Sending-signal-from-GSD-API");
    });
    app.listen(PORT, () => {
        console.log(`Succesfully receiving signal from GSD API PORT: ${PORT}`);
        console.log(`LIVE Locally on: http://localhost:3000/`);
    });
};
startServer();
