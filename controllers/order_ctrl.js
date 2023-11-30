import { orderModel } from "../models/order/order_model.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();

    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const { userIdentifier } = req.params;
    const orders = await orderModel.find({ userId: userIdentifier });

    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const addOrder = async (req, res) => {
  try {
    const { userIdentifier } = req.params;
    const {
      userName,
      userCountry,
      userCity,
      userStreet,
      userBuilding,
      userNearby,
      userMobileNumber,
      userNote,
      orderPaymentStatus,
      cartItemsTotalPrice,
      orderStatus,
      orderPlacedAt,
      paymentMethod,
      cartItems,
    } = req.body;

    const newOrder = new orderModel({
      userId: userIdentifier,
      userName,
      userCountry,
      userCity,
      userStreet,
      userBuilding,
      userNearby,
      userMobileNumber,
      userNote,
      orderPaymentStatus,
      cartItemsTotalPrice,
      orderStatus,
      orderPlacedAt,
      paymentMethod,
      cartItems,
    });

    await newOrder.save();

    return res.status(201).json("Order added successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { userId, orderId } = req.params;

    const order = await orderModel.findOne({ orderId });

    if (!order) {
      return res.status(404).json("Order not found");
    }

    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { userIdentifier, orderIdInDB } = req.params.orderId;
    const { status } = req.body;

    const order = await orderModel.findById(orderIdInDB);

    if (!order) {
      return res.status(404).json("Order not found");
    }

    order.orderStatus = status;

    await order.save();

    return res.status(200).json("OrderStatus updated successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Something went wrong");
  }
};
