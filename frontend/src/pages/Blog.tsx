import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { Post } from "../components/Post";
import { BlogSkeleton } from "../components/BlogSkeleton";

export function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate("/error");
    return;
  }

  const { loading, blog } = useBlog(id);

  if (loading) {
    return <BlogSkeleton />;
  }

  if (!blog) {
    navigate("/error");
    return;
  }

  return (
    <div>
      <div>
        <Post blog={blog} />
      </div>
      <button
        onClick={() => navigate("/publish")}
        className="fixed bottom-8 right-8 sm:bottom-16 sm:right-20 z-50 text-lg sm:text-3xl bg-green-400 rounded-full w-8 h-8 sm:w-12 sm:h-12 text-white hover:text-green-400 hover:bg-white border border-green-400 shadow-lg flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}
