import { Users } from "../../models/user.schema.js";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const getUserRegisterById = async (req, res) => {
  const { _id } = req.body;
  console.log(req.body);

  try {
    const users = await Users.findById(_id);
    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ users });
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: "An error occurred while getting the user" });
  }
};

export const getMe = async (req, res) => {
  const { email } = req.user;
  console.log(req.body);

  try {
    const user = await Users.findOne({ email });
    console.log(user);
    
    const { password, ...userWithoutPassword } = user._doc;
    console.log(userWithoutPassword);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(userWithoutPassword);
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: "An error occurred while getting the user" });
  }
};
