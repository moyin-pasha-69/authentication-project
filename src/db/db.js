import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected Successfully! ✅");
  } catch (error) {
    console.error("DB not Connected ❌", error);
  }
};

export default connectDB;
