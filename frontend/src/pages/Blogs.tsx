import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlogs";
import { BlogsSkeleton } from "../components/BlogsSkeleton";

export function Blogs() {
  const { loading, blogs } = useBlogs();
  const navigate = useNavigate();

  if (loading) {
    return <BlogsSkeleton />;
  }

  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div className="flex flex-col justify-between h-screen mt-6">
        <div className="flex justify-center">
          <div className="mx-8 sm:max-w-md lg:max-w-3xl">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorname={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(blog.date))}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => navigate("/publish")}
          className="fixed bottom-8 right-8 sm:bottom-16 sm:right-20 z-50 text-lg sm:text-3xl bg-green-400 rounded-full w-8 h-8 sm:w-12 sm:h-12 text-white hover:text-green-400 hover:bg-white border border-green-400 shadow-lg flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
}
