import Router from "express";
import { getAllCountries, getCountryByIsoCode } from "../controllers/country.controller";


const router = Router();

router.get("/", getAllCountries);

router.get("/:isoCode", getCountryByIsoCode);

export default router;