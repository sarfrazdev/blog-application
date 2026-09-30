import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiEdit3,
  FiEye,
  FiPlus,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";

const ManageBLog = () => {
  const blogs = [
    {
      id: 1,
      title: "The art of slowing down",
      description:
        "Sometimes doing less gives us more space to think, create and live better.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80",
      date: "Sep 24, 2026",
    },
    {
      id: 2,
      title: "Building better habits",
      description:
        "Small changes repeated consistently can completely change the way we live.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80",
      date: "Sep 21, 2026",
    },
    {
      id: 3,
      title: "Why good writing matters",
      description:
        "Good writing is not about using complicated words. It is about communicating clearly.",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=500&q=80",
      date: "Sep 18, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3ef] px-5 py-10 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition mb-6"
            >
              <FiArrowLeft size={17} />
              Dashboard
            </Link>

            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
              Content manager
            </p>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Your stories.
            </h1>

            <p className="mt-3 text-gray-500">
              Create, edit and manage everything you've published.
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


        {/* SEARCH + FILTER */}
        <div className="bg-white rounded-2xl border border-black/5 p-4 mb-6">

          <div className="relative">

            <FiSearch
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search your stories..."
              className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#f8f7f4] border border-transparent outline-none focus:border-black focus:bg-white transition"
            />

          </div>

        </div>


        {/* BLOG LIST */}
        <div className="space-y-5">

          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl border border-black/5 p-5 sm:p-6"
            >

              <div className="flex flex-col md:flex-row gap-6">

                {/* IMAGE */}
                <div className="w-full md:w-56 h-48 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-500"
                  />

                </div>


                {/* CONTENT */}
                <div className="flex-1 flex flex-col">

                  <div className="flex-1">

                    <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Published · {blog.date}
                    </p>

                    <h2 className="text-2xl font-black tracking-tight">
                      {blog.title}
                    </h2>

                    <p className="text-gray-500 mt-3 leading-6 max-w-2xl">
                      {blog.description}
                    </p>

                  </div>


                  {/* ACTIONS */}
                  <div className="flex flex-wrap gap-3 mt-6">

                    <Link
                      to={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold hover:border-black transition"
                    >
                      <FiEye size={16} />
                      View
                    </Link>

                    <Link
                      to={`/dashboard/edit/${blog.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
                    >
                      <FiEdit3 size={16} />
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-red-200 text-red-600 text-sm font-semibold hover:bg-red-50 transition"
                    >
                      <FiTrash2 size={16} />
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ManageBLog;