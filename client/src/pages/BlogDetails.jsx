import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiClock,
} from "react-icons/fi";

const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=85",
    category: "JavaScript",
    readTime: "6 min read",
    title: "Understanding JavaScript beyond the basics.",
    description:
      "JavaScript is much more than variables, functions and loops. Once you understand how the language actually works, building larger applications becomes much easier.",
    content: [
      "When you start learning JavaScript, it is common to focus on syntax. You learn variables, functions, arrays, objects and conditions. These are important, but they are only the beginning.",
      "As your applications become larger, understanding how JavaScript behaves becomes much more important. Concepts such as scope, closures, asynchronous programming and the event loop help you write better code.",
      "The best way to learn these concepts is by building real projects. Instead of simply reading about a feature, try using it in an application and understand why it works.",
    ],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85",
    category: "Design",
    readTime: "4 min read",
    title: "Designing interfaces people actually enjoy.",
    description:
      "Good design is not about adding more elements. It is about making the experience simple, clear and enjoyable.",
    content: [
      "A good interface should help users understand what they can do without making them think too much.",
      "Spacing, typography, contrast and consistency play a major role in creating a polished interface.",
      "The goal is not to make every section visually complicated. The goal is to create a clear hierarchy that guides the user naturally.",
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
    category: "Development",
    readTime: "8 min read",
    title: "From idea to a real-world web application.",
    description:
      "Turning an idea into a working application requires planning, development and continuous improvement.",
    content: [
      "Every application starts with an idea. The challenge is turning that idea into something people can actually use.",
      "Before writing code, define the main features and understand what problem your application is trying to solve.",
      "Once the foundation is ready, you can gradually add features while keeping the application simple and maintainable.",
    ],
  },
];

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f7f5] px-5">
        <div className="text-center">

          <h1 className="text-4xl font-black">
            Story not found
          </h1>

          <p className="mt-3 text-black/50">
            The story you are looking for does not exist.
          </p>

          <Link
            to="/blogs"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
          >
            <FiArrowLeft />
            Back to stories
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">

   

      <section className="border-b border-black/10 bg-white">

        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:py-20">

          

          <Link
            to="/blogs"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-semibold text-black/50 transition hover:text-black"
          >
            <FiArrowLeft className="transition group-hover:-translate-x-1" />
            Back to stories
          </Link>


          

          <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/40">

            <span>{blog.category}</span>

            <span className="h-1 w-1 rounded-full bg-black/30"></span>

            <span className="flex items-center gap-1">
              <FiClock size={12} />
              {blog.readTime}
            </span>

          </div>


      

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            {blog.title}
          </h1>


        

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/55">
            {blog.description}
          </p>


         
          <div className="mt-8 flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
              S
            </div>

            <div>

              <p className="text-sm font-bold">
                Student Writer
              </p>

              <p className="text-xs text-black/45">
                Published recently
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="border-b border-black/10 bg-[#f7f7f5]">

        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-14">

          <div className="overflow-hidden rounded-[2rem] bg-[#dedbd3]">

            <img
              src={blog.image}
              alt={blog.title}
              className="max-h-[650px] w-full object-cover grayscale"
            />

          </div>

        </div>

      </section>


    

      <section className="bg-white">

        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">

          <div className="space-y-8">

            {blog.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-9 text-black/70 sm:text-xl"
              >
                {paragraph}
              </p>
            ))}

          </div>


          {/* Bottom */}

          <div className="mt-16 border-t border-black/10 pt-8">

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                  Enjoyed this story?
                </p>

                <p className="mt-2 font-semibold">
                  Explore more stories from the community.
                </p>

              </div>


              <Link
                to="/blogs"
                className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                Explore more

                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BlogDetails;