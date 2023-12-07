import express from "express";
import {
  addContactData,
  editContactData,
  getContactUsData,
} from "../controllers/contact_ctrl.js";

const router = express.Router();

router.get("/", getContactUsData);
router.post("/add", addContactData);
router.put("/edit", editContactData);

export default router;
