import Router from "express";
import { getAllCountries, getCountryByIsoCode, createCountry,updateCountry,deleteCountry } from "../controllers/country.controller";


const router = Router();

router.get("/", getAllCountries);

router.get("/:isoCode", getCountryByIsoCode);
router.post("/", createCountry);
router.put("/:isoCode", updateCountry);
router.delete(":isoCode",deleteCountry);

export default router;