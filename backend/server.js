import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db";
import morgan from "morgan";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("SErv"));
