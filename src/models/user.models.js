import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("Users", userSchema);

export default userModel;
