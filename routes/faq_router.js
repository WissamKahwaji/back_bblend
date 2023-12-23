import express from "express";
import { addFaqData, getFaqData } from "../controllers/faq_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getFaqData);
router.post("/add", auth, addFaqData);

export default router;
