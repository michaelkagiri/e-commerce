import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("db Connected!"))
    .catch(() => console.log("Database connection failed!"));
};
