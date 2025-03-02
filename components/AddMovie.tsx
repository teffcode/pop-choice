import { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddMovie = async () => {
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/add-movie", { title, description });
      setTitle("");
      setDescription("");
      alert("Movie added successfully!");
    } catch (error) {
      console.error(error);
      setError(`Error adding the movie. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">🎬 Add a Movie</h2>
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Movie Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="w-full bg-green-500 text-white px-4 py-2 rounded mt-2 transition-all duration-300 hover:bg-green-600 disabled:opacity-50"
        onClick={handleAddMovie}
        disabled={loading || !title.trim() || !description.trim()}
      >
        {loading ? "Adding..." : "Add Movie"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AddMovie;
