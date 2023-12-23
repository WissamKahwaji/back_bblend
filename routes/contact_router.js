import express from "express";
import {
  addContactData,
  editContactData,
  getContactUsData,
} from "../controllers/contact_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getContactUsData);
router.post("/bb-add", auth, addContactData);
router.put("/bb-edit", auth, editContactData);

export default router;
