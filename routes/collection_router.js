import express from "express";
import {
  addCollection,
  getCollection,
} from "../controllers/collection_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getCollection);
router.post("/add", auth, addCollection);

export default router;
