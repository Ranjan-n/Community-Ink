import { useNavigate } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlogs";

export function Blogs() {
  const { loading, blogs } = useBlogs();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div className="flex flex-col justify-between h-screen">
        <div className="flex justify-center">
          <div className="w-3/5">
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
        <div className="flex justify-end">
          <button
            onClick={() => {
              navigate("/publish");
            }}
            className="text-3xl mb-20 mr-16 bg-green-400 rounded-full w-10 h-10 text-white hover:text-green-400 hover:bg-white border border-green-400"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
