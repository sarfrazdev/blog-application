import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiClock,
  FiSearch,
} from "react-icons/fi";

const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
    category: "JavaScript",
    readTime: "6 min read",
    title: "Understanding JavaScript beyond the basics.",
    description:
      "A practical look at the concepts every developer should understand before building bigger applications.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
    category: "Design",
    readTime: "4 min read",
    title: "Designing interfaces people actually enjoy.",
    description:
      "Simple principles that can turn an ordinary interface into a polished and enjoyable experience.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85",
    category: "Development",
    readTime: "8 min read",
    title: "From idea to a real-world web application.",
    description:
      "A developer's journey from planning an idea to turning it into something people can actually use.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    category: "Development",
    readTime: "7 min read",
    title: "How to build a better developer workflow.",
    description:
      "Practical habits that can make your development process cleaner, faster and more enjoyable.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    category: "Technology",
    readTime: "5 min read",
    title: "Technology that is changing the way we build.",
    description:
      "Explore some of the tools and ideas shaping modern software development.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85",
    category: "Tutorial",
    readTime: "9 min read",
    title: "A practical guide to learning web development.",
    description:
      "A simple approach to learning the skills needed to start building real-world websites.",
  },
];

const categories = [
  "All",
  "Development",
  "JavaScript",
  "Design",
  "Technology",
  "Tutorial",
];

const Blogs = () => {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">

      

      <section className="border-b border-black/10 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="max-w-3xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-black"></span>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/45">
                Explore the community
              </span>

            </div>

            <h1 className="text-5xl font-black leading-none tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Stories worth
              <span className="block text-black/35">
                your time.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
              Explore ideas, tutorials and experiences shared by
              developers, creators and curious minds.
            </p>

          </div>


          {/* Search */}

          <div className="mt-10 max-w-xl">

            <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-[#f7f7f5] px-5 py-4">

              <FiSearch
                size={20}
                className="shrink-0 text-black/40"
              />

              <input
                type="text"
                placeholder="Search stories..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
              />

            </div>

          </div>

        </div>

      </section>


      <section>

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

  

          <div className="mb-12 flex flex-wrap gap-3">

            {categories.map((category) => (

              <button
                key={category}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  category === "All"
                    ? "bg-black text-white"
                    : "border border-black/10 bg-white text-black/60 hover:border-black/30 hover:text-black"
                }`}
              >
                {category}
              </button>

            ))}

          </div>


    

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog) => (

              <article
                key={blog.id}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >

          

                <Link to={`/blogs/${blog.id}`}>

                  <div className="h-64 overflow-hidden bg-[#dedbd3]">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />

                  </div>

                </Link>


               

                <div className="p-6">

                  <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-black/40">

                    <span>{blog.category}</span>

                    <span className="h-1 w-1 rounded-full bg-black/25"></span>

                    <span className="flex items-center gap-1">
                      <FiClock size={12} />
                      {blog.readTime}
                    </span>

                  </div>


                  <Link to={`/blogs/${blog.id}`}>

                    <h2 className="line-clamp-2 text-2xl font-bold leading-tight tracking-tight transition group-hover:text-black/60">
                      {blog.title}
                    </h2>

                  </Link>


                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-black/55">
                    {blog.description}
                  </p>



                  <div className="mt-6 flex items-center justify-between">

                    <Link
                      to={`/blogs/${blog.id}`}
                      className="text-sm font-semibold"
                    >
                      Read story
                    </Link>

                    <Link
                      to={`/blogs/${blog.id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition duration-300 group-hover:bg-black group-hover:text-white"
                    >
                      <FiArrowUpRight />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Blogs;