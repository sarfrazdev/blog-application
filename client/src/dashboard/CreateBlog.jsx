import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiImage,
  FiUpload,
  FiX,
} from "react-icons/fi";

const CreateBlog = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

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
            Create
          </p>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
            Write a new story.
          </h1>

          <p className="mt-3 text-gray-500 max-w-xl">
            Share an idea, experience or perspective with your readers.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 lg:p-10">

          <form className="space-y-8">

            {/* TITLE */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Story title
              </label>

              <input
                type="text"
                placeholder="Give your story a meaningful title..."
                className="w-full h-16 px-5 rounded-xl border border-gray-200 bg-[#faf9f7] text-lg font-medium outline-none transition focus:border-black focus:bg-white"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Story description
              </label>

              <textarea
                rows="10"
                placeholder="Start writing your story..."
                className="w-full px-5 py-5 rounded-xl border border-gray-200 bg-[#faf9f7] resize-none outline-none leading-7 transition focus:border-black focus:bg-white"
              ></textarea>

              <p className="text-xs text-gray-400 mt-2">
                Write a clear and engaging description for your readers.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Featured image
              </label>

              {!imagePreview ? (
                <label className="block cursor-pointer">

                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-black transition">

                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#f5f3ef] flex items-center justify-center">
                      <FiImage size={25} />
                    </div>

                    <h3 className="font-bold mt-5">
                      Upload an image
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      PNG, JPG or JPEG
                    </p>

                    <div className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-lg bg-black text-white text-sm font-semibold">
                      <FiUpload size={17} />
                      Choose image
                    </div>

                  </div>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>
              ) : (
                <div className="relative rounded-2xl overflow-hidden">

                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-[350px] object-cover"
                  />

                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <FiX size={19} />
                  </button>

                </div>
              )}
            </div>

            {/* BUTTONS */}
            <div className="border-t border-gray-100 pt-7 flex flex-col sm:flex-row gap-3 sm:justify-end">

              <Link
                to="/dashboard"
                className="h-12 px-6 rounded-xl border border-gray-200 flex items-center justify-center font-semibold text-gray-600 hover:border-black hover:text-black transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="h-12 px-7 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
              >
                Publish story
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CreateBlog;