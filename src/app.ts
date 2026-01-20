import express from "express";


import countryRoutes from "./routes/country.routes";
import armedForcesRoutes from "./routes/armedForces.routes";
import intelligenceRoutes from "./routes/intelligence.routes";
import allianceRoutes from "./routes/alliance.routes";

const app = express();

app.use(express.json());

app.use("/api/countries/", countryRoutes);
app.use("/api/armedforces/", armedForcesRoutes);
app.use("/api/intel/", intelligenceRoutes);
app.use("/api/alliance/", allianceRoutes);

export default app;