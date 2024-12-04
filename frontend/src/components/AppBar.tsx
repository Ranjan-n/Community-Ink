import { useState } from "react";
import { Link } from "react-router-dom";

export function AppBar({ name }: { name: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="shadow h-12 sm:h-14 flex justify-between items-center overflow-hidden bg-gradient-to-r from-red-300 to-blue-300 sticky top-0 z-50">
        <Link
          to="/"
          className="sm:ml-16 text-lg ml-4 sm:text-2xl font-extrabold text-white hover:text-gray-200"
        >
          CommunityInk
        </Link>
        <button
          onClick={toggleMenu}
          className="relative inline-flex items-center justify-center m-1 w-8 h-8 sm:w-10 sm:h-10 overflow-hidden bg-white hover:bg-gray-700 rounded-full mr-6 sm:mr-20 cursor-pointer"
        >
          <span className="text-neutral-800 text-sm sm:text-lg font-extrabold hover:text-white">
            {name[0]}
          </span>
        </button>
      </div>

      <div
        onClick={toggleMenu}
        className={`fixed top-12 right-4 sm:top-14 sm:right-6 w-24 h-8 sm:w-40 sm:h-12 bg-gray-700 text-white rounded-lg shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="flex items-center justify-center h-full">
          <Link
            to="/login"
            className="text-sm sm:text-lg font-semibold hover:underline"
            onClick={() => {
              localStorage.removeItem("token");
              setIsMenuOpen(false);
            }}
          >
            Log Out
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
