import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiEdit3,
  FiFileText,
  FiPlus,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] px-5 py-10 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto">


        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
              Dashboard
            </p>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
              Welcome back.
            </h1>

            <p className="mt-3 text-gray-500">
              Manage your stories and keep your content moving.
            </p>
          </div>

          <Link
            to="/dashboard/create"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition group"
          >
            <FiPlus size={19} />

            Create story

            <FiArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
            />
          </Link>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <div className="flex items-center justify-between">

              <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center">
                <FiFileText size={20} />
              </div>

              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Stories
              </span>

            </div>

            <h2 className="text-3xl font-black mt-7">
              12
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Total published stories
            </p>
          </div>


          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <div className="flex items-center justify-between">

              <div className="w-11 h-11 rounded-xl bg-[#f1efe9] text-black flex items-center justify-center">
                <FiBookOpen size={20} />
              </div>

              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Views
              </span>

            </div>

            <h2 className="text-3xl font-black mt-7">
              2.4K
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Total story views
            </p>
          </div>


          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <div className="flex items-center justify-between">

              <div className="w-11 h-11 rounded-xl bg-[#f1efe9] text-black flex items-center justify-center">
                <FiUsers size={20} />
              </div>

              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Readers
              </span>

            </div>

            <h2 className="text-3xl font-black mt-7">
              846
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              People reading your work
            </p>
          </div>


          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <div className="flex items-center justify-between">

              <div className="w-11 h-11 rounded-xl bg-[#f1efe9] text-black flex items-center justify-center">
                <FiTrendingUp size={20} />
              </div>

              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Growth
              </span>

            </div>

            <h2 className="text-3xl font-black mt-7">
              +18%
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Compared to last month
            </p>
          </div>

        </div>


        <div className="grid lg:grid-cols-3 gap-6">


          <div className="lg:col-span-1 bg-black text-white rounded-3xl p-7">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
              Quick actions
            </p>

            <h2 className="text-2xl font-black">
              What would you like to do?
            </h2>

            <div className="mt-7 space-y-3">

              <Link
                to="/dashboard/create"
                className="flex items-center justify-between p-4 rounded-xl bg-white text-black hover:bg-gray-200 transition"
              >
                <div className="flex items-center gap-3">
                  <FiEdit3 size={19} />
                  <span className="font-semibold">
                    Write a story
                  </span>
                </div>

                <FiArrowUpRight />
              </Link>


              <Link
                to="/dashboard/blogs"
                className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/15 transition"
              >
                <div className="flex items-center gap-3">
                  <FiFileText size={19} />
                  <span className="font-semibold">
                    Manage stories
                  </span>
                </div>

                <FiArrowUpRight />
              </Link>
              <Link
                to="/dashboard/profile"
                className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/15 transition"
              >
                <div className="flex items-center gap-3">
                  <FiUser size={19} />

                  <span className="font-semibold">
                    My Profile
                  </span>
                </div>

                <FiArrowUpRight />
              </Link>

            </div>

          </div>



          <div className="lg:col-span-2 bg-white rounded-3xl p-7 border border-black/5">

            <div className="flex items-center justify-between gap-4 mb-7">

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                  Content
                </p>

                <h2 className="text-2xl font-black">
                  Recent stories
                </h2>
              </div>

              <Link
                to="/dashboard/blogs"
                className="text-sm font-semibold text-gray-500 hover:text-black transition"
              >
                View all
              </Link>

            </div>


            <div className="space-y-4">


              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8f7f4]">

                <div className="w-16 h-16 rounded-xl bg-black flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=300&q=80"
                    alt="Story"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">

                  <h3 className="font-bold truncate">
                    The art of slowing down
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Published 2 days ago
                  </p>

                </div>

                <span className="hidden sm:block text-xs font-semibold px-3 py-1.5 rounded-full bg-black text-white">
                  Published
                </span>

              </div>


              {/* STORY 2 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8f7f4]">

                <div className="w-16 h-16 rounded-xl bg-black flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=300&q=80"
                    alt="Story"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">

                  <h3 className="font-bold truncate">
                    Building better habits
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Published 5 days ago
                  </p>

                </div>

                <span className="hidden sm:block text-xs font-semibold px-3 py-1.5 rounded-full bg-black text-white">
                  Published
                </span>

              </div>


              {/* STORY 3 */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8f7f4]">

                <div className="w-16 h-16 rounded-xl bg-black flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=300&q=80"
                    alt="Story"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">

                  <h3 className="font-bold truncate">
                    Why good writing matters
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Published 1 week ago
                  </p>

                </div>

                <span className="hidden sm:block text-xs font-semibold px-3 py-1.5 rounded-full bg-black text-white">
                  Published
                </span>

              </div>

            </div>

          </div>

        </div>


        <div className="mt-6 bg-[#e8e5dd] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
              Keep creating
            </p>

            <h2 className="text-3xl font-black tracking-tight">
              Have an idea worth sharing?
            </h2>

            <p className="text-gray-500 mt-2">
              Turn your next idea into a story.
            </p>
          </div>

          <Link
            to="/dashboard/create"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            <FiPlus size={19} />
            Create story
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;