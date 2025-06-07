import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3001;

mongoose
  .connect("mongodb://127.0.0.1:27017/e-commerce") // .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Mongo connected!"))
  .catch((err) => console.log("Failed to connect!", err));

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
