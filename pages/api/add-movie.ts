import { NextApiRequest, NextApiResponse } from "next";
import { generateEmbedding } from "../../lib/openai";
import { saveMovie } from "../../database/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, use POST" });
  }

  const { title, description } = req.body as { title?: string; description?: string; };

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  try {
    const movieEmbedding = await generateEmbedding(`${title} ${description}`); // Generating the embedding with OpenAI
    const newMovie = await saveMovie(title, description || "Unknown", movieEmbedding); // Save to database

    return res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error adding movie:", error);
    return res.status(500).json({ error: "Error processing request" });
  }
}
