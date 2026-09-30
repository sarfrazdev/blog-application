import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiEdit3,
  FiLock,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] px-5 py-10 sm:px-8 lg:px-12">

      <div className="max-w-5xl mx-auto">

        {/* BACK */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition mb-8"
        >
          <FiArrowLeft size={18} />
          Back to dashboard
        </Link>

        {/* HEADER */}
        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            Account
          </p>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Your profile.
          </h1>

          <p className="mt-3 text-gray-500">
            Manage your personal information and account settings.
          </p>

        </div>

        {/* PROFILE CARD */}
        <div className="bg-white rounded-3xl border border-black/5 overflow-hidden">

          {/* PROFILE TOP */}
          <div className="bg-black text-white p-7 sm:p-10">

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">

              {/* AVATAR */}
              <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-3xl font-black">
                SA
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
                  Profile
                </p>

                <h2 className="text-3xl font-black">
                  Sarfraz Ahmad
                </h2>

                <p className="text-gray-400 mt-1">
                  Blog author
                </p>
              </div>

            </div>

          </div>

          {/* INFORMATION */}
          <div className="p-7 sm:p-10">

            <div className="flex items-center justify-between mb-7">

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Personal information
                </p>

                <h2 className="text-2xl font-black">
                  Account details
                </h2>
              </div>

              <button
                type="button"
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold hover:border-black transition"
              >
                <FiEdit3 size={17} />
                Edit
              </button>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {/* NAME */}
              <div className="p-5 rounded-2xl bg-[#f8f7f4]">

                <div className="flex items-center gap-3 text-gray-400 mb-3">
                  <FiUser size={18} />
                  <span className="text-xs uppercase tracking-wider">
                    Full name
                  </span>
                </div>

                <p className="font-semibold text-black">
                  Sarfraz Ahmad
                </p>

              </div>

              {/* EMAIL */}
              <div className="p-5 rounded-2xl bg-[#f8f7f4]">

                <div className="flex items-center gap-3 text-gray-400 mb-3">
                  <FiMail size={18} />
                  <span className="text-xs uppercase tracking-wider">
                    Email
                  </span>
                </div>

                <p className="font-semibold text-black break-all">
                  ahmadsarfraz6760@gmail.com
                </p>

              </div>

              {/* PHONE */}
              <div className="p-5 rounded-2xl bg-[#f8f7f4]">

                <div className="flex items-center gap-3 text-gray-400 mb-3">
                  <FiPhone size={18} />
                  <span className="text-xs uppercase tracking-wider">
                    Phone
                  </span>
                </div>

                <p className="font-semibold text-black">
                  +91 XXXXX XXXXX
                </p>

              </div>

              {/* ACCOUNT */}
              <div className="p-5 rounded-2xl bg-[#f8f7f4]">

                <div className="flex items-center gap-3 text-gray-400 mb-3">
                  <FiLock size={18} />
                  <span className="text-xs uppercase tracking-wider">
                    Account
                  </span>
                </div>

                <p className="font-semibold text-black">
                  Active
                </p>

              </div>

            </div>

            {/* MOBILE EDIT */}
            <button
              type="button"
              className="sm:hidden w-full mt-5 h-12 flex items-center justify-center gap-2 rounded-xl border border-gray-200 font-semibold hover:border-black transition"
            >
              <FiEdit3 size={17} />
              Edit profile
            </button>

          </div>

        </div>

        {/* SECURITY */}
        <div className="bg-white rounded-3xl border border-black/5 p-7 sm:p-10 mt-6">

          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
            Security
          </p>

          <h2 className="text-2xl font-black">
            Password & security
          </h2>

          <p className="text-gray-500 mt-2">
            Keep your account secure by regularly updating your password.
          </p>

          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            <FiLock size={18} />
            Change password
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;