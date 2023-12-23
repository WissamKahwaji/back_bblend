import express from "express";
import {
  addContactData,
  editContactData,
  getContactUsData,
} from "../controllers/contact_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getContactUsData);
router.post("/add", auth, addContactData);
router.put("/edit", auth, editContactData);

export default router;
