import { Blog } from "../hooks/useBlogs";
import { AppBar } from "./AppBar";

export function Post({ blog }: { blog: Blog }) {
  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div className="flex justify-center mt-5 sm:mt-8 sm:ml-4 lg:ml-0">
        <div className="flex flex-col sm:grid grid-cols-12 max-w-sm sm:max-w-3xl lg:max-w-4xl sm:pt-7">
          <div className="col-span-9 px-5 sm:pr-10">
            <h1 className="font-extrabold text-2xl sm:text-5xl my-2 sm:my-4">
              {blog.title}
            </h1>
            <p className="text-xs text-gray-500">
              Posted on{" "}
              {new Intl.DateTimeFormat("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }).format(new Date(blog.date))}
            </p>
            <p className="pt-5 text-xs sm:text-lg sm:pt-8">{blog.content}</p>
          </div>
          <div className="col-span-3 ml-5 mt-5 sm:ml-9 sm:mt-7">
            <h3 className="text-gray-500 text-sm sm:text-lg font-semibold">
              Author
            </h3>
            <div className="pt-2 sm:pt-3 flex">
              <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-600 rounded-full mr-3">
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
