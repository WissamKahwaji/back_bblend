import express from "express";
import {
  addOfferData,
  deleteOffer,
  editOfferData,
  getOfferByIdData,
  getOfferData,
} from "../controllers/offer_ctrl.js";

const router = express.Router();

router.get("/", getOfferData);
router.get("/:id", getOfferByIdData);
router.post("/add", addOfferData);
router.put("/:id", editOfferData);
router.delete("/:id", deleteOffer);

export default router;
