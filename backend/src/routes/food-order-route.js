import express from "express";
import { addFoodOrder } from "../resolvers/orders/create.order.js";
import { getOrder } from "../resolvers/orders/get.food.order.js";

export const foodOrderRouter = express.Router();

foodOrderRouter.post("/", addFoodOrder);
foodOrderRouter.get("/", getOrder);
