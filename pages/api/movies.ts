import { NextApiRequest, NextApiResponse } from "next";
import { generateEmbedding } from "../../lib/openai";
import { getRecommendedMovie } from "../../database/queries";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed, use POST" });
  }

  const { userResponse } = req.body as { userResponse?: string };

  if (!userResponse) {
    return res.status(400).json({ error: "The 'userResponse' field is required" });
  }

  try {
    const userEmbedding = await generateEmbedding(userResponse); // Generating the embedding with OpenAI
    const recommendedMovie = await getRecommendedMovie(userEmbedding); // Get recommended movie

    if (!recommendedMovie) {
      return res.status(404).json({ message: "No matches found" });
    }

    return res.status(200).json(recommendedMovie);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Error generating embedding or consulting the DB" });
  }
}
