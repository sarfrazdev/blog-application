import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-5">

      <div className="text-center max-w-xl">

        <p className="text-8xl sm:text-9xl font-black tracking-tight text-black">
          404
        </p>

        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mt-4">
          Page not found
        </p>

        <h1 className="text-3xl sm:text-4xl font-black mt-5">
          Looks like you took a wrong turn.
        </h1>

        <p className="text-gray-500 mt-4 leading-7">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            <FiHome size={18} />
            Go home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 bg-white font-semibold hover:border-black transition"
          >
            <FiArrowLeft size={18} />
            Go back
          </button>

        </div>

      </div>

    </div>
  );
};

export default NotFound;