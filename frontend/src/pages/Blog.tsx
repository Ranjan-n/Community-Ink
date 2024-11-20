import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { Post } from "../components/Post";
import { BlogSkeleton } from "../components/BlogSkeleton";

export function Blog() {
  const { id } = useParams();

  if (!id) {
    return <div>ERRORRR!!</div>;
  }

  const { loading, blog } = useBlog(id);

  if (loading) {
    return <BlogSkeleton />;
  }

  if (!blog) {
    return <div>ERRORRR!!</div>;
  }

  return (
    <div>
      <div>
        <Post blog={blog} />
      </div>
    </div>
  );
}
