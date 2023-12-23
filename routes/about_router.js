import express from "express";
import { addAboutData, getAboutData } from "../controllers/about_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getAboutData);
router.post("/add", auth, addAboutData);

export default router;
