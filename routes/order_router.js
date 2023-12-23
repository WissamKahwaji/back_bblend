import express from "express";
import {
  addOrder,
  getOrderById,
  getOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/order_ctrl.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getOrders);
router.get("/:orderId", getOrderById);
router.get("/user/:userIdentifier", getUserOrders);
router.post("/:userIdentifier", auth, addOrder);
router.put("/:id/orderStatus", auth, updateOrderStatus);

export default router;
