import { AppBar } from "./AppBar";

export function BlogsSkeleton() {
  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/5">
          <div
            role="status"
            className="border-b border-b-neutral-200 p-4 max-w-2xl rounded animate-pulse"
          >
            <div className="flex items-center my-4">
              <svg
                className="w-5 h-5 me-3 text-gray-200 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>
            <div className="h-3 pt-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-3"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
        </div>
        <div className="w-3/5">
          <div
            role="status"
            className="border-b border-b-neutral-200 p-4 max-w-2xl rounded animate-pulse"
          >
            <div className="flex items-center my-4">
              <svg
                className="w-5 h-5 me-3 text-gray-200 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>
            <div className="h-3 pt-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-3"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
        </div>
        <div className="w-3/5">
          <div
            role="status"
            className="border-b border-b-neutral-200 p-4 max-w-2xl rounded animate-pulse"
          >
            <div className="flex items-center my-4">
              <svg
                className="w-5 h-5 me-3 text-gray-200 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
              </div>
            </div>
            <div className="h-3 pt-3 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-3"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
