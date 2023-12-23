import express from "express";
import { addFooterData, getFooterData } from "../controllers/footer_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getFooterData);
router.post("/bb-add", auth, addFooterData);

export default router;
