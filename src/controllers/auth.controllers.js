import userModel from "../models/user.models.js";
import jwt from "jsonwebtoken";

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
      email,
    });

    if (isUserAlreadyExist) {
      return res.status(409).json({
        message: "User already exist with this email address",
      });
    }

    const user = await userModel.create({
      username,
      email,
      password,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);
    res.status(201).json({
      statusCode: 201,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.error("error occur during registerUser: ", error);
  }
}

export { registerUser };
