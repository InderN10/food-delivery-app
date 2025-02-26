import { Users } from "../../models/user.schema.js";

export const userSignUp = async (req, res) => {
  const { phoneNumber, password, email, address } = req.body;
  const newUser = await Users.create({ email, password, phoneNumber });

  res.json({ massage: "succesfuly created account", user: newUser });
};
