import express from 'express'
import orderModel from "../models/orderModel.js";

const orderRouter = express.Router()

orderRouter.get("/all", async (req, res) => {
  const order = await orderModel.find();
  res.json(order);
});

orderRouter.post("/odd", async (req, res) => {
  const { name, price } = req.body;
  const result = await orderModel.insertOne({ name, price });
  return res.json(result);
});

export default orderRouter