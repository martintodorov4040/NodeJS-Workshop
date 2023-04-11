import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import router from "./router.const.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const MONGO_URI = `mongodb+srv://martintodorov4040:aZ5uPHM86LXLzfMG@cluster0.ahxvd8m.mongodb.net/?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOST, async (error) => {
  if (error) console.log("Error while starting server:", error);

  await mongoose.connect(MONGO_URI);

  console.log(`Server running on http://${HOST}:${PORT}`);
});
