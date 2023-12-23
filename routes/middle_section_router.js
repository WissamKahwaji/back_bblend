import express from "express";
import {
  addMiddleData,
  getMiddleSection,
} from "../controllers/middle_section_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getMiddleSection);
router.post("/add", auth, addMiddleData);

export default router;
