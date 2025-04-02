import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.json({ message: "unauthorized!!!" });
  }
console.log("authorization", authorization);

  const token = authorization.split(" ")[1];

  const user = jwt.verify(token, SECRET_KEY);
  if (!user) {
    return res.json({ message: "user not found !!!" });
  }
  req.user = user;

  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    return res.json({ message: "unauthorized!!!" });
  }
};
