// AI/server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { analyzeOutfitImage } from "./image-analyzer.js";

// ==========================================
// LOAD ENV FROM PROJECT ROOT
// ==========================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "../../..");

dotenv.config({
  path: path.join(projectRoot, "backend", ".env"),
});


// ==========================================
// SERVER
// ==========================================

const app = express();

const PORT = 5001;


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors());

app.use(
  express.json({
    limit: "15mb",
  })
);


// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Urban Raja AI Stylist Server is running!",
  });
});


// ==========================================
// IMAGE ANALYSIS API
// ==========================================

app.post("/api/analyze-outfit", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({
        success: false,
        message: "imageUrl is required.",
      });
    }

    const analysis = await analyzeOutfitImage(imageUrl);

    return res.status(200).json({
      success: true,
      data: analysis,
    });

  } catch (error) {
    console.error("Analyze Outfit Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong.",
    });
  }
});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(
    `Urban Raja AI Stylist Server running on http://localhost:${PORT}`
  );
});