import express from "express";
import {
  addOfferData,
  deleteOffer,
  editOfferData,
  getOfferByIdData,
  getOfferData,
} from "../controllers/offer_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getOfferData);
router.get("/:id", getOfferByIdData);
router.post("/add", auth, addOfferData);
router.put("/:id", auth, editOfferData);
router.delete("/:id", auth, deleteOffer);

export default router;
