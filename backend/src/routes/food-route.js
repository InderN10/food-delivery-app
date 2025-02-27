import express from "express";
import { addFood } from "../resolvers/admins/add.food.js";
import { getFoods } from "../resolvers/admins/get.food.js";

export const foodsRouter = express.Router();

foodsRouter.post("/", addFood)
foodsRouter.get("/", getFoods);