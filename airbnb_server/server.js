import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";
import propertyRoutes from "./routes/propertyRoutes.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Root route with attractive message
app.get("/", (req, res) => {
  res.send(`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f8ff; font-family: Arial, sans-serif;">
      <div style="text-align: center;">
        <h1 style="color: #333; font-size: 3rem;">Welcome to Our AirBnb Application!</h1>
        <p style="color: #666; font-size: 1.5rem;">Building modern web experiences with Express.js</p>
        <a href="/api/properties" style="text-decoration: none; padding: 10px 20px; background-color: #007bff; color: white; border-radius: 5px; font-size: 1.2rem;">Explore Properties</a>
      </div>
    </div>
  `);
});

// Routes
app.use("/api/properties", propertyRoutes);
// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
