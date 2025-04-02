import express from "express";
import { userSignUp } from "../resolvers/users/user-sign-up.js";
import { getUserRegisterById, getMe } from "../resolvers/users/get.users.js";
import { loginUsers } from "../resolvers/users/login.users.js";
import { authorizationMiddleware } from "../middleware/authorization.js";
export const usersRouter = express.Router();

usersRouter.post("/", userSignUp);
usersRouter.get("/", authorizationMiddleware, getMe);
usersRouter.post("/login", loginUsers);
