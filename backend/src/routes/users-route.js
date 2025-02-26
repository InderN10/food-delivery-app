import express from "express";
import { userSignUp } from "../resolvers/users/user-sign-up.js";

export const usersRouter = express.Router();

usersRouter.post("/", userSignUp)