import OpenAI from "openai";
import "dotenv/config";

// In development, don’t crash if the key is missing; warn instead.
if (!process.env.OPENROUTER_API_KEY) {
  console.warn("OPENROUTER_API_KEY is not set; OpenRouter calls will fail if invoked.");
}

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY || "",
});

export default openai;
