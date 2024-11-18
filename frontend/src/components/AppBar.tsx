import { Link } from "react-router-dom";

export function AppBar({ name }: { name: string }) {
  return (
    <div className="shadow h-10 flex justify-between items-center overflow-hidden bg-gradient-to-r from-red-300 to-blue-300 sticky">
      <Link
        to={"/"}
        className="sm:ml-6 text-lg ml-2 sm:text-xl font-extrabold text-white"
      >
        CommunityInk
      </Link>

      <a className="relative inline-flex items-center justify-center m-1 w-8 h-8 overflow-hidden bg-white rounded-full mr-14">
        <span className="text-neutral-800 text-sm font-extrabold">
          {name[0]}
        </span>
      </a>
    </div>
  );
}
