// AI/image-analyzer.js

import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ==========================================
// LOAD ENV FROM BACKEND
// ==========================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "../../..");

dotenv.config({
  path: path.join(projectRoot, "backend", ".env"),
});


// ==========================================
// GEMINI AI
// ==========================================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

console.log(
  "Gemini API Key:",
  process.env.GEMINI_API_KEY ? "LOADED" : "NOT LOADED"
);

// ==========================================
// URBAN RAJA AI STYLIST
// IMAGE ANALYZER
// ==========================================

export async function analyzeOutfitImage(imageUrl) {

  if (!imageUrl) {
    throw new Error("Image URL is required.");
  }

  try {

    // ------------------------------------------
    // 1. IMAGE URL SE IMAGE DOWNLOAD KARO
    // ------------------------------------------

    const imageResponse = await fetch(imageUrl);

    if (!imageResponse.ok) {
      throw new Error(
        `Unable to download image. Status: ${imageResponse.status}`
      );
    }

    const imageBuffer = Buffer.from(
      await imageResponse.arrayBuffer()
    );


    // ------------------------------------------
    // 2. IMAGE MIME TYPE
    // ------------------------------------------

    const contentType =
      imageResponse.headers.get("content-type") ||
      "image/jpeg";


    // ------------------------------------------
    // 3. IMAGE KO BASE64 ME CONVERT KARO
    // ------------------------------------------

    const base64Image = imageBuffer.toString("base64");


    // ------------------------------------------
    // 4. AI PROMPT
    // ------------------------------------------

    const prompt = `
You are the image analysis system for Urban Raja AI Stylist.

Analyze the uploaded men's fashion outfit image carefully.

Your job is ONLY to identify what is visible in the image.

DO NOT give fashion advice yet.
DO NOT recommend clothes yet.
DO NOT invent anything that is not visible.

Analyze:

1. TOP
- type
- color
- pattern
- fit
- material if reasonably visible

2. BOTTOM
- type
- color
- pattern
- fit
- material if reasonably visible

3. FOOTWEAR
- type
- color
- style

4. ACCESSORIES
Identify only visible accessories:
- watch
- chain
- bracelet
- rings
- sunglasses
- cap
- bag
- belt
- other visible accessories

5. OUTFIT
- dominant colors
- secondary colors
- overall style
- estimated occasion
- season if reasonably identifiable

6. GROOMING
Only identify visible information:
- hairstyle
- beard
- moustache
- sunglasses

7. CONFIDENCE
Give confidence between 0 and 1.

IMPORTANT RULES:

- Never assume something that cannot be seen.
- If something is unclear, use "unknown".
- If something is not present, use null or [].
- Do not identify the person's identity.
- Do not make assumptions about personality.
- Do not give recommendations.
- Focus only on visible clothing, footwear, accessories and grooming.
- Return ONLY valid JSON.
- Do not use markdown.
- Do not put JSON inside code blocks.

Return EXACTLY this structure:

{
  "top": {
    "type": "",
    "color": "",
    "pattern": "",
    "fit": "",
    "material": ""
  },

  "bottom": {
    "type": "",
    "color": "",
    "pattern": "",
    "fit": "",
    "material": ""
  },

  "footwear": {
    "type": "",
    "color": "",
    "style": ""
  },

  "accessories": [],

  "outfit": {
    "dominantColors": [],
    "secondaryColors": [],
    "style": "",
    "occasion": "",
    "season": ""
  },

  "grooming": {
    "hairstyle": "",
    "beard": "",
    "moustache": "",
    "sunglasses": ""
  },

  "confidence": {
    "top": 0,
    "bottom": 0,
    "footwear": 0,
    "accessories": 0,
    "style": 0,
    "occasion": 0
  }
}
`;


    // ------------------------------------------
    // 5. GEMINI KO IMAGE + PROMPT BHEJO
    // ------------------------------------------

    const response = await ai.models.generateContent({

      model: "gemini-3.8-flash",

      contents: [

        {
          inlineData: {
            mimeType: contentType,
            data: base64Image,
          },
        },

        {
          text: prompt,
        },

      ],

      config: {
        responseMimeType: "application/json",
      },

    });


    // ------------------------------------------
    // 6. GEMINI RESPONSE
    // ------------------------------------------

    const resultText = response.text;

    if (!resultText) {
      throw new Error(
        "Gemini returned an empty response."
      );
    }


    // ------------------------------------------
    // 7. JSON PARSE
    // ------------------------------------------

    let analysis;

    try {

      analysis = JSON.parse(resultText);

    } catch (parseError) {

      console.error(
        "Gemini returned invalid JSON:",
        resultText
      );

      throw new Error(
        "Gemini returned invalid JSON."
      );
    }


    // ------------------------------------------
    // 8. FINAL RESULT
    // ------------------------------------------

    return analysis;


  } catch (error) {

    console.error(
      "Urban Raja Gemini Image Analyzer Error:",
      error
    );

    throw new Error(
      `Image analysis failed: ${error.message}`
    );

  }

}