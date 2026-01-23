"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./config/database");
const app_1 = __importDefault(require("./app"));
// const app = express();
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
/* NOTE:
A simulated safe async function that ensures that connection to DB
is established first before running the server.  */
const startServer = async () => {
    await (0, database_1.connectDatabase)();
    app_1.default.get("/", (req, res) => {
        res.send("Sending-signal-from-GSD-API");
    });
    app_1.default.listen(PORT, () => {
        console.log(`Succesfully receiving signal from GSD API PORT: ${PORT}`);
        console.log(`LIVE Locally on: http://localhost:3000/`);
    });
};
startServer();
