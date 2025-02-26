import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const UserRoleEnum = new Schema({
  USER: { type: USER },
  ADMIN: { type: ADMIN },
});

export const UserRole = mongoose.model("Users", UserRoleEnum);