import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns";
import contactRoutes from "./routes/contact.js";

// Override DNS servers to bypass Windows adapter/ISP DNS resolution issues with Atlas SRV records
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

// Database connection & Server startup
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://alammahtabph_db_user:portfolio123@cluster0.evhnu8v.mongodb.net/?appName=PortfolioCluster0";

if (!MONGO_URI) {
  console.error("FATAL ERROR: MONGO_URI is not defined in environment variables.");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Database Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed:", err.message);
    process.exit(1);
  });
