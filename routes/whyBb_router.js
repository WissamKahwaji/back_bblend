import express from "express";
import { addWhyBbData, getWhyBbData } from "../controllers/why_bb_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getWhyBbData);
router.post("/add", auth, addWhyBbData);

export default router;
