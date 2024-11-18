import { Blog } from "../hooks/useBlogs";
import { AppBar } from "./AppBar";

export function Post({ blog }: { blog: Blog }) {
  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-3/4 pt-7">
          <div className="col-span-9 pr-10">
            <h1 className="font-extrabold text-5xl my-4">{blog.title}</h1>
            <p className="text-xs text-gray-500">
              Posted on{" "}
              {new Intl.DateTimeFormat("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }).format(new Date(blog.date))}
            </p>
            <p className="pt-5">{blog.content}</p>
          </div>
          <div className="col-span-3 ml-9 mt-7">
            <h3 className="text-sm text-gray-500 font-semibold">Author</h3>
            <div className="pt-3 flex">
              <div className="relative inline-flex items-center justify-center m-1 w-6 h-6 overflow-hidden bg-gray-600 rounded-full mr-3">
                <span className="text-neutral-200 text-xs font-extrabold">
                  {blog.author.name[0]}
                </span>
              </div>
              <div className="flex items-center">
                <h2 className="font-semibold">{blog.author.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
