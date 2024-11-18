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
      <div className="border-b border-b-neutral-200 p-4 max-w-2xl">
        <div className="flex items-center">
          <div className="relative inline-flex items-center justify-center m-1 w-5 h-5 overflow-hidden bg-gradient-to-r from-violet-300 to-red-300 rounded-full">
            <span className="text-black text-xs font-semibold">
              {authorname[0]}
            </span>
          </div>

          <div className="text-xs font-medium text-gray-600 flex items-center">
            {authorname}{" "}
            <div className="rounded-full bg-gray-600 h-0.5 w-0.5 mx-2"></div>{" "}
            <p className="text-gray-400">{publishedDate} </p>
          </div>
        </div>
        <h3 className="font-extrabold ml-2 pt-2">{title}</h3>
        <p className="text-sm ml-2 font-light text-gray-500 pb-2 font-serif">
          {content.length > 150 ? content.slice(0, 150) + "..." : content}
        </p>
      </div>
    </Link>
  );
}
