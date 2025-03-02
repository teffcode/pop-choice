import { useState } from "react";
import axios from "axios";

const MovieRecommender = () => {
  const [userResponse, setUserResponse] = useState("");
  const [recommendedMovie, setRecommendedMovie] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRecommendMovie = async () => {
    setLoading(true);
    setError("");
    setRecommendedMovie(null);

    try {
      const response = await axios.post("/api/movies", { userResponse });
      setRecommendedMovie(response.data.title);
    } catch (error) {
      console.error(error);
      setError(`Error fetching recommendation. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        🔍 Find a Movie Recommendation
      </h2>
      <textarea
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Describe what kind of movie you'd like to watch..."
        value={userResponse}
        onChange={(e) => setUserResponse(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-3 transition-all duration-300 hover:bg-blue-600 disabled:opacity-50"
        onClick={handleRecommendMovie}
        disabled={loading || !userResponse.trim()}
      >
        {loading ? "Searching..." : "Get Recommendation"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {recommendedMovie && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <h3 className="font-bold text-gray-700">Recommended Movie:</h3>
          <p className="text-lg text-blue-600">{recommendedMovie}</p>
        </div>
      )}
    </div>
  );
};

export default MovieRecommender;
