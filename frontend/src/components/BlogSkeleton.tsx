import { AppBar } from "./AppBar";

export function BlogSkeleton() {
  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div
        className="rounded animate-pulse flex justify-center h-screen pt-5"
        role="status"
      >
        <div className="flex justify-center mt-5 sm:mt-8 sm:ml-4 lg:ml-0 w-4/5">
          <div className="flex flex-col sm:grid grid-cols-12 max-w-sm sm:max-w-3xl lg:max-w-4xl sm:w-4/5 sm:pt-7">
            <div className="col-span-9 px-5 sm:pr-10">
              <h1 className="bg-gray-200 rounded-full dark:bg-gray-400 my-4 h-3 w-64"></h1>
              <h2 className="bg-gray-200 rounded-full dark:bg-gray-400 my-4 h-3 w-64 mb-8"></h2>
              <p className="bg-gray-200 rounded-full dark:bg-gray-400 w-20 h-2 mb-6"></p>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-6"></div>
            </div>
            <div className="col-span-3 ml-5 mt-5 sm:ml-9 sm:mt-7">
              <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              <div className="pt-2 sm:pt-3 flex">
                <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden rounded-full mr-3">
                  <svg
                    className="w-5 h-5 me-3 text-gray-200 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
