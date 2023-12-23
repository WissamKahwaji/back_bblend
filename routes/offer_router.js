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
router.post("/bb-add", auth, addOfferData);
router.put("/bb-edit/:id", auth, editOfferData);
router.delete("/bb-delete/:id", auth, deleteOffer);

export default router;
