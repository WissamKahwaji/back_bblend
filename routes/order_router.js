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
router.get("/:userId/:orderId", getOrderById);
router.get("/:userIdentifier", getUserOrders);
router.post("/:userIdentifier", addOrder);
router.put("/:userIdentifier/:orderIdInDB/orderStatus", updateOrderStatus);

export default router;
