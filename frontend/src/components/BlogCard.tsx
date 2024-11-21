import { Link } from "react-router-dom";

export function BlogCard({
  id,
  authorname,
  title,
  content,
  publishedDate,
}: {
  id: string;
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
}) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-b-neutral-200 p-4 hover:bg-gray-50">
        <div className="flex items-center">
          <div className="relative inline-flex items-center justify-center m-1 w-5 h-5 sm:w-6 sm:h-6 overflow-hidden bg-gradient-to-r from-violet-300 to-red-300 rounded-full">
            <span className="text-white text-xs sm:text-sm font-semibold">
              {authorname[0]}
            </span>
          </div>

          <div className="text-sm sm:text-lg font-semibold text-gray-500 flex items-center sm:ml-2">
            {authorname}{" "}
            <div className="rounded-full bg-gray-600 h-0.5 w-0.5 mx-1 sm:h-1 sm:w-1 sm:mx-2"></div>{" "}
            <p className="text-gray-400 text-[8px] sm:text-sm">
              {publishedDate}{" "}
            </p>
          </div>
        </div>
        <h3 className="font-extrabold ml-2 pt-2 text-sm mb-2 sm:text-2xl">
          {title}
        </h3>
        <p className="text-xs ml-2 font-light text-gray-500 pb-2 font-serif sm:hidden">
          {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </p>
        <p className="text-lg ml-2 font-light text-gray-500 pb-2 font-serif hidden sm:block">
          {content.length > 150 ? content.slice(0, 150) + "..." : content}
        </p>
      </div>
    </Link>
  );
}
