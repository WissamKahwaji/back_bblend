import express from "express";
import {
  addOfferData,
  getOfferByIdData,
  getOfferData,
} from "../controllers/offer_ctrl.js";

const router = express.Router();

router.get("/", getOfferData);
router.get("/:id", getOfferByIdData);
router.post("/add", addOfferData);

export default router;
