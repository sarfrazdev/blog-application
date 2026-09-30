import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f3ef] flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

      
        <div className="hidden lg:flex bg-black text-white p-12 xl:p-16 flex-col justify-between min-h-[720px]">

          <div>
            <Link
              to="/"
              className="text-2xl font-black tracking-tight"
            >
              Blog<span className="text-gray-400">Sphere.</span>
            </Link>

            <div className="mt-28">

              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-5">
                Join the community
              </p>

              <h1 className="text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight">
                Your ideas
                <br />
                belong here.
              </h1>

              <p className="mt-7 text-gray-400 max-w-md leading-7">
                Create your account and start reading, sharing and
                publishing stories that are worth remembering.
              </p>

            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-sm text-gray-500">
              Your voice. Your stories. Your space.
            </p>
          </div>

        </div>

       
        <div className="p-7 sm:p-10 lg:p-14 xl:p-16">

          <div className="w-full max-w-md mx-auto">

            <Link
              to="/"
              className="lg:hidden text-2xl font-black tracking-tight text-black"
            >
              Blog<span className="text-gray-400">Sphere.</span>
            </Link>

            <div className="mt-10 lg:mt-0">

              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4">
                Create account
              </p>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                Join us.
              </h2>

              <p className="mt-4 text-gray-500">
                Create your account and start your journey.
              </p>

            </div>

            <form className="mt-9 space-y-5">

            
              <div>

                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Full name
                </label>

                <div className="relative">

                  <FiUser
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-black focus:bg-white"
                  />

                </div>

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email address
                </label>

                <div className="relative">

                  <FiMail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-black focus:bg-white"
                  />

                </div>

              </div>

            
              <div>

                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone number
                </label>

                <div className="relative">

                  <FiPhone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-black focus:bg-white"
                  />

                </div>

              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Password
                </label>

                <div className="relative">

                  <FiLock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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

             
              <div>

                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Confirm password
                </label>

                <div className="relative">

                  <FiLock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full h-14 pl-12 pr-12 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-black focus:bg-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition"
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff size={19} />
                    ) : (
                      <FiEye size={19} />
                    )}
                  </button>

                </div>

              </div>

              
              <button
                type="submit"
                className="w-full h-14 bg-black text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition group"
              >
                Create account

                <FiArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </form>

           
            <div className="mt-8 text-center text-sm text-gray-500">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-black hover:underline"
              >
                Sign in
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;