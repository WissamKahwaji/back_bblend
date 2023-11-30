import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  // orderId: String,
  // id: String,
  // idInDB: String,
  userId: String,
  userName: String,
  userCountry: String,
  userCity: String,
  userStreet: String,
  userBuilding: String,
  userNearby: String,
  userMobileNumber: String,
  userNote: String,
  orderPaymentStatus: String,
  cartItemsTotalPrice: String,
  orderStatus: String,
  orderPlacedAt: String,
  cartItemsTotalPrice: String,
  paymentMethod: String,
  cartItems: [
    {
      id: String,
      img: String,
      title: String,
      price: String,
      quantity: String,
    },
  ],
});

export const orderModel = mongoose.model("Order", orderSchema);
