import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from "./config/database"

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

/* NOTE: A simulated safe async function that ensures that connection to DB
is established first before running the server.  */
const startServer = async() => {
    await connectDatabase();

    app.get("/", (req, res) => {
    res.send("Sending-signal-from-GSD-API");
   });

    app.listen(PORT, ()=>{
    console.log(`Succesfully receiving signal from GSD API PORT: ${PORT}`);
    console.log(`LIVE Locally on: http://localhost:3000/`);
})
};

startServer();