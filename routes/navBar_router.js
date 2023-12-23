import express from "express";
import { addNavBarData, getNavBarData } from "../controllers/navBar_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getNavBarData);
router.post("/bb-add", auth, addNavBarData);

export default router;
