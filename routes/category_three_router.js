import express from "express";
import {
  addCategoryThreeData,
  getCategoryThreeData,
} from "../controllers/category_three_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getCategoryThreeData);
router.post("/bb-add", auth, addCategoryThreeData);

export default router;
