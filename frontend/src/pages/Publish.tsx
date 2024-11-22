import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { useBlogs } from "../hooks/useBlogs";

export function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const navigate = useNavigate();
  const { fetchBlogs } = useBlogs();

  const handlePublish = async () => {
    try {
      setIsPublishing(true);
      if (title.length == 0 || content.length == 0) {
        throw new Error("Title and Description Can't be empty");
      }

      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      await fetchBlogs();
      navigate(`/blog/${res.data.id}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Error publishing. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div className="min-w-2xl max-w-2xl mx-auto p-6">
        <h1 className="text-xl sm:text-3xl font-bold mb-4 text-center text-gray-700">
          Create a new Blog
        </h1>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block font-medium mb-1 text-sm sm:text-lg"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md shadow-sm border border-gray-200 p-1 focus:border-slate-300 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm sm:text-lg font-medium mb-1"
          >
            Description
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-md shadow-sm border border-gray-200 p-1 focus:border-slate-300 focus:outline-none"
            rows={7}
            required
          />
        </div>

        <button
          onClick={handlePublish}
          className="bg-green-500 text-white text-xs sm:text-lg px-4 py-2 rounded-md hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed"
          disabled={isPublishing}
        >
          {isPublishing ? "Publishing..." : "Publish"}
        </button>
      </div>
    </div>
  );
}
