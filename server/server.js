import express from "express";
import cors from "cors"
import "dotenv/config"
import { getHome } from "./src/controllers/home.js";
import { v1Router } from "./src/routes/v1/index.js";
import { connectDB } from "./src/database/config.js";
import connectCloudinary from "./src/database/cloudinary.js";
import userRouter from "./src/routes/userRoute.js";
import productRouter from "./src/routes/productRoute.js";


// app configurations
const app = express();
connectDB();
connectCloudinary()


// middlewares
app.use(express.json());
app.use(cors())


// api endpoints

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.get("/", getHome);

app.use("/v1", v1Router);

app.listen(3001, () => {
  console.log("localhost:3001");
});
