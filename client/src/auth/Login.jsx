import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
} from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex bg-black text-white p-12 xl:p-16 flex-col justify-between min-h-[650px]">

          <div>
            <Link to="/" className="text-2xl font-black tracking-tight">
              Blog<span className="text-gray-400">Sphere.</span>
            </Link>

            <div className="mt-28">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-5">
                Welcome back
              </p>

              <h1 className="text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight">
                Ideas worth
                <br />
                coming back to.
              </h1>

              <p className="mt-7 text-gray-400 max-w-md leading-7">
                Continue exploring thoughtful stories, useful ideas and
                perspectives from our growing community of writers.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500">
              Read. Think. Create. Repeat.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-7 sm:p-10 lg:p-14 xl:p-16 flex items-center">

          <div className="w-full max-w-md mx-auto">

            {/* Mobile Logo */}
            <Link
              to="/"
              className="lg:hidden text-2xl font-black tracking-tight text-black"
            >
              Blog<span className="text-gray-400">Sphere.</span>
            </Link>

            <div className="mt-10 lg:mt-0">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4">
                Sign in
              </p>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                Welcome back.
              </h2>

              <p className="mt-4 text-gray-500">
                Sign in to continue to your account.
              </p>
            </div>

            <form className="mt-10 space-y-6">

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email address
                </label>

                <div className="relative">
                  <FiMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={19}
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-black focus:bg-white"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-gray-500 hover:text-black transition"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <FiLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={19}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-14 pl-12 pr-12 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-black focus:bg-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition"
                  >
                    {showPassword ? (
                      <FiEyeOff size={19} />
                    ) : (
                      <FiEye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full h-14 bg-black text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition group"
              >
                Sign in

                <FiArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            {/* REGISTER */}
            <div className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-black hover:underline"
              >
                Create account
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;