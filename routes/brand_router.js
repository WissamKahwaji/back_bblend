import express from "express";
import { addBrandData, getBrandData } from "../controllers/brand_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getBrandData);
router.post("/add", auth, addBrandData);

export default router;
