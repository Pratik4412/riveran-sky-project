import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bookRoture from "./routes/bookARoom.route.js";
import roomBookRouture from "./routes/getInTech.route.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", bookRoture);
app.use("/api", roomBookRouture);
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
