import express from "express";
import { addColor, getColorData } from "../controllers/color_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getColorData);
router.post("/add", auth, addColor);

export default router;
