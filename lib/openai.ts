import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("❌ OPENAI_API_KEY is not defined in the .env file");
}

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Generates an embedding for a given text using OpenAI.
 * @param text The input text to generate an embedding for.
 * @returns The generated embedding as an array of numbers.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  const embedding = response.data[0]?.embedding;

  if (!embedding) {
    throw new Error("Failed to generate embedding");
  }

  return embedding;
}
