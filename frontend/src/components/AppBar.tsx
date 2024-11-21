import { Link } from "react-router-dom";

export function AppBar({ name }: { name: string }) {
  return (
    <div className="shadow h-12 sm:h-14 flex justify-between items-center overflow-hidden bg-gradient-to-r from-red-300 to-blue-300 sticky">
      <Link
        to={"/"}
        className="sm:ml-16 text-lg ml-4 sm:text-2xl font-extrabold text-white hover:text-gray-200"
      >
        CommunityInk
      </Link>

      <a className="relative inline-flex items-center justify-center m-1 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden bg-white rounded-full mr-6 sm:mr-20">
        <span className="text-neutral-800 text-sm sm:text-lg font-extrabold">
          {name[0]}
        </span>
      </a>
    </div>
  );
}
