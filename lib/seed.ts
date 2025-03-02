import pool from "../database";
import { generateEmbedding } from "./openai";
import { saveMovie } from "../database/queries";

const movies = [
  { title: "Inception", description: "A mind-bending thriller about dreams within dreams." },
  { title: "The Matrix", description: "A hacker discovers the truth about reality." },
  { title: "Interstellar", description: "A space journey beyond time and dimensions." },
  { title: "The Dark Knight", description: "A battle between Batman and the Joker in Gotham City." },
  { title: "Blade Runner 2049", description: "A futuristic detective story about artificial humans." },
];

async function seedDatabase() {
  console.log("👩🏻‍🔧 Generating embeddings and inserting movies...");

  for (const movie of movies) {
    const embedding = await generateEmbedding(movie.description); // Generating the embedding with OpenAI
    await saveMovie(movie.title, movie.description, embedding); // Save to database

    console.log(`Inserted: ${movie.title}`);
  }

  console.log("✅ Seeding completed !");
  await pool.end();
}

seedDatabase().catch(console.error);
