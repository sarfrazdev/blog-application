import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiImage,
  FiSave,
  FiX,
} from "react-icons/fi";

const EditBlog = () => {
  const { id } = useParams();

  // Temporary data — API integration ke baad yahan backend se blog aayega
  const [title, setTitle] = useState("The art of slowing down");

  const [description, setDescription] = useState(
    "Sometimes doing less gives us more space to think, create and live better."
  );

  const [imagePreview, setImagePreview] = useState(
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80"
  );

  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setNewImage(null);
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      id,
      title,
      description,
      newImage,
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f3ef] px-5 py-10 sm:px-8 lg:px-12">

      <div className="max-w-5xl mx-auto">

        {/* BACK */}
        <Link
          to="/dashboard/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition mb-8"
        >
          <FiArrowLeft size={18} />
          Back to stories
        </Link>


        {/* HEADER */}
        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-3">
            Edit story
          </p>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
            Refine your story.
          </h1>

          <p className="mt-3 text-gray-500">
            Update your story and keep your content fresh.
          </p>

        </div>


        {/* FORM */}
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 lg:p-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* TITLE */}
            <div>

              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Story title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-5 py-5 rounded-xl border border-gray-200 bg-[#faf9f7] resize-none outline-none leading-7 transition focus:border-black focus:bg-white"
              />

            </div>


            {/* IMAGE */}
            <div>

              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Featured image
              </label>

              {imagePreview ? (
                <div className="relative rounded-2xl overflow-hidden">

                  <img
                    src={imagePreview}
                    alt={title}
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
              ) : (
                <label className="block cursor-pointer">

                  <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center hover:border-black transition">

                    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#f5f3ef] flex items-center justify-center">
                      <FiImage size={25} />
                    </div>

                    <h3 className="font-bold mt-5">
                      Upload new image
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      PNG, JPG or JPEG
                    </p>

                  </div>

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/jpg"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                </label>
              )}

            </div>


            {/* BUTTONS */}
            <div className="border-t border-gray-100 pt-7 flex flex-col sm:flex-row gap-3 sm:justify-end">

              <Link
                to="/dashboard/blogs"
                className="h-12 px-6 rounded-xl border border-gray-200 flex items-center justify-center font-semibold text-gray-600 hover:border-black hover:text-black transition"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="h-12 px-7 rounded-xl bg-black text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition"
              >
                <FiSave size={18} />
                Save changes
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default EditBlog;