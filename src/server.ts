import express from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from "./config/database"

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

/* NOTE: A simulated safe function that ensures that connection to DB
is established first before running the server.  */
const startServer = async() => {
    await connectDatabase();

    app.get("/", (req, res) => {
    res.send("Sending-signal-from-GSD-API");
   });

    app.listen(PORT, ()=>{
    console.log(`Receiving Signal from GSP API PORT: ${PORT}`);
    console.log(`Locally LIVE on: http://localhost:3000/`);
})
};

startServer();