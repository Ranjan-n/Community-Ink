import { AppBar } from "./AppBar";

export function BlogsSkeleton() {
  return (
    <div>
      <AppBar name={localStorage.getItem("name") || "Anonymous"} />
      <div className="flex flex-col justify-between h-screen mt-6">
        <div className="flex justify-center">
          <div className="sm:w-[448px] lg:w-[768px]">
            <div
              role="status"
              className="border-b border-b-neutral-200 p-4 rounded animate-pulse mb-5"
            >
              <div className="flex items-center">
                <div className="relative inline-flex items-center justify-center m-1 w-5 h-5 sm:w-8 sm:h-8 rounded-full">
                  <svg
                    className="w-5 h-5 sm:w-8 sm:h-8 me-3 text-gray-200 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>

                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
              </div>
              <div className="h-3 pt-3 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
            <div
              role="status"
              className="border-b border-b-neutral-200 p-4 rounded animate-pulse mb-5"
            >
              <div className="flex items-center">
                <div className="relative inline-flex items-center justify-center m-1 w-5 h-5 sm:w-8 sm:h-8 rounded-full">
                  <svg
                    className="w-5 h-5 sm:w-8 sm:h-8 me-3 text-gray-200 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>

                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
              </div>
              <div className="h-3 pt-3 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
            <div
              role="status"
              className="border-b border-b-neutral-200 p-4 rounded animate-pulse"
            >
              <div className="flex items-center">
                <div className="relative inline-flex items-center justify-center m-1 w-5 h-5 sm:w-8 sm:h-8 rounded-full">
                  <svg
                    className="w-5 h-5 sm:w-8 sm:h-8 me-3 text-gray-200 dark:text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>

                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
              </div>
              <div className="h-3 pt-3 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-3"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
