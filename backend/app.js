import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

import authRouter from "./routes/authRouter.js";

// Parent Router
app.use("/api/v1/auth", authRouter);

// Server
app.listen(port, () => {
  console.log(`aplikasi berjalan di port ${port}`);
});

// Connection DB
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("Database Connect");
  })
  .catch((err) => {
    console.log(`Error connection to MongoDB:`, err.message);
  });
