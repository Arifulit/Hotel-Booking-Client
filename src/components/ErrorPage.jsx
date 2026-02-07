import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-50 px-4">
      <div className="text-center card-surface p-10 max-w-lg">
        <p className="badge-pill mx-auto">Error</p>
        <h1 className="text-4xl font-semibold text-ink-900 mt-4">404 - Not Found</h1>
        <p className="text-base text-ink-600 mt-4">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn-primary mt-6"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
