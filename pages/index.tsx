import AddMovie from "@/components/AddMovie";
import MovieRecommender from "@/components/MovieRecommender";

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Pop Choice 🍿
      </h1>
      <AddMovie />
      <MovieRecommender />
    </section>
  );
}
