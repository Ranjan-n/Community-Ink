import { useNavigate } from "react-router-dom";

export function ErrorPage({ message = "Something went wrong!" }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center shadow-md p-10">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! {message}
        </h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for doesn't exist or an error occurred.
        </p>
        <button
          onClick={handleGoBack}
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
