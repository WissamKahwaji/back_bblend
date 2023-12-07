import express from "express";
import {
  addOrder,
  getOrderById,
  getOrders,
  getUserOrders,
  updateOrderStatus,
} from "../controllers/order_ctrl.js";

const router = express.Router();

router.get("/", getOrders);
router.get("/:orderId", getOrderById);
router.get("/user/:userIdentifier", getUserOrders);
router.post("/:userIdentifier", addOrder);
router.put("/:id/orderStatus", updateOrderStatus);

export default router;
