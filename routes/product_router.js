import express from "express";
import {
  addProductData,
  deleteProductData,
  editProductData,
  getProductById,
  getProductData,
  getProductsByType,
} from "../controllers/product_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getProductData);

router.post("/add", auth, addProductData);
router.get("/by-type", getProductsByType);
router.get("/:id", getProductById);
router.put("/bb-edit/:id", auth, editProductData);
router.delete("/bb-remove/:id", auth, deleteProductData);
export default router;
