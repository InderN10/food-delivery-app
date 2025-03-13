import express from "express";
import { addFood } from "../resolvers/admins/add.food.js";
import { getFoods } from "../resolvers/admins/get.food.js";
import { createFoodCategory } from "../resolvers/categories/create.food.category.js";
import { getAllCategories } from "../resolvers/categories/get.food.category.js";
import { deleteFoodCategory } from "../resolvers/categories/delete.food.category.js";
import { deleteFood } from "../resolvers/admins/delete.food.js";

export const foodsRouter = express.Router();

foodsRouter.post("/", addFood)
foodsRouter.get("/", getFoods);
foodsRouter.delete("/", deleteFood);

foodsRouter.get("/category", getAllCategories);
foodsRouter.post("/category", createFoodCategory);
foodsRouter.delete("/category", deleteFoodCategory);