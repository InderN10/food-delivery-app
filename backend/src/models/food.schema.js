import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const foodSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  foodName: { type: String },
  price: { type: Number },
  image: { type: String },
  ingredients: { type: String },
  // catgory: { type: ObjectId },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  address: String,
});

export const foods = mongoose.model("Users", foodSchema);
