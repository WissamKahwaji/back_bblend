import express from "express";
import { addTipsData, getTipsData } from "../controllers/tip_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getTipsData);
router.post("/bb-add", auth, addTipsData);
export default router;
