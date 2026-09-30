import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiLogIn,
  FiUserPlus,
  FiLogOut,
  FiLayout,
} from "react-icons/fi";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

      
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-xl font-bold text-white shadow-lg">
            B
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Blog<span className="text-blue-600">Sphere</span>
            </h1>

            <p className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
              Stories that matter
            </p>
          </div>
        </Link>


        <nav className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`
            }
          >
            Blogs
          </NavLink>

          {isAuthenticated && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              <FiLayout />
              Dashboard
            </NavLink>
          )}

        </nav>

        <div className="hidden items-center gap-3 md:flex">

          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 py-2 pl-2 pr-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <span className="max-w-28 truncate text-sm font-semibold text-gray-700">
                  {user?.name || "User"}
                </span>
              </div>

              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-xl border border-red-100 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
              >
                <FiLogOut />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                <FiLogIn />
                Login
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-gray-800"
              >
                <FiUserPlus />
                Get Started
              </Link>
            </>
          )}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-200 p-2.5 text-gray-700 md:hidden"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 md:hidden">

          <nav className="flex flex-col gap-2">

            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Home
            </Link>

            <Link
              to="/blogs"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
            >
              Blogs
            </Link>

            {isAuthenticated && (
              <Link
                to="/dashboard"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
              >
                Dashboard
              </Link>
            )}

            <div className="mt-3 border-t border-gray-100 pt-4">

              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="flex w-full items-center gap-2 rounded-xl px-4 py-3 font-semibold text-red-500 hover:bg-red-50"
                >
                  <FiLogOut />
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-center font-semibold"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="rounded-xl bg-black px-4 py-3 text-center font-semibold text-white"
                  >
                    Get Started
                  </Link>
                </div>
              )}

            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;