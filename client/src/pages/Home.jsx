import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiClock,
  FiPenTool,

} from "react-icons/fi";


const latestStories = [
  {
    id: 1,
    image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
    imageAlt: "JavaScript development",
    category: "JavaScript",
    readTime: "6 min read",
    title: "Understanding JavaScript beyond the basics.",
    description:
      "A practical look at the concepts every developer should understand before building bigger applications.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Web design",
    category: "Design",
    readTime: "4 min read",
    title: "Designing interfaces people actually enjoy.",
    description:
      "Simple principles that can turn an ordinary interface into a polished and enjoyable experience.",
  },
  {
    id: 3,
    image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Programming",
    category: "Development",
    readTime: "8 min read",
    title: "From idea to a real-world web application.",
    description:
      "A developer's journey from planning an idea to turning it into something people can actually use.",
  },
];


const Home = () => {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#111111]">


      <section className="border-b border-black/10">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>

              <div className="mb-7 flex items-center gap-3">

                <span className="h-[1px] w-10 bg-black"></span>

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/55">
                  Ideas · Stories · Knowledge
                </span>

              </div>


              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-8xl">

                Write something

                <span className="block text-black/40">
                  worth reading.
                </span>

              </h1> 


              <p className="mt-8 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
                Discover thoughtful articles, practical tutorials and''
                '
                stories created by people who love to learn, build and
                share.
              </p>


              

              <div className="mt-9 flex flex-wrap gap-3">

                <Link
                  to="/blogs"
                  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#292929]"
                >
                  Explore Stories

                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>


                <Link
                  to="/register"
                  className="inline-flex items-center gap-3 rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:border-black/30"
                >
                  <FiPenTool size={16} />

                  Start Writing
                </Link>

              </div>

            </div>



            <div>

              <div className="group overflow-hidden rounded-[3rem] bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">


                <div className="relative h-[320px] overflow-hidden rounded-[2rem] bg-[#dedbd3] sm:h-[380px]">

                  <img
                    src={latestStories[0].image}
                    alt={latestStories[0].imageAlt}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                  

                </div>

                <div className="px-3 pb-3 pt-5">

                  <div className="mb-3 flex items-center gap-3 text-xs font-medium text-black/45">

                    <span>
                      {latestStories[0].category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-black/30"></span>

                    <span className="flex items-center gap-1">
                      <FiClock size={12} />
                      {latestStories[0].readTime}
                    </span>

                  </div>


                  <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    {latestStories[0].title}
                  </h2>


                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/55">
                    {latestStories[0].description}
                  </p>


                  <div className="mt-5 flex items-center justify-between">

                    <div className="flex items-center gap-3">


                      <div>

                        <p className="text-sm font-semibold">
                       
                        </p>

                      

                      </div>

                    </div>


                    <Link
                      to={`/blogs/${latestStories[0].id}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
                    >
                      <FiArrowUpRight size={18} />
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="border-b border-black/10 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">

            <span className="mr-2 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
              Explore
            </span>


            <Link
              to="/blogs"
              className="text-sm font-medium text-black/60 transition hover:text-black"
            >
              All Stories
            </Link>


            <Link
              to="/blogs"
              className="text-sm font-medium text-black/60 transition hover:text-black"
            >
              Development
            </Link>


            <Link
              to="/blogs"
              className="text-sm font-medium text-black/60 transition hover:text-black"
            >
              JavaScript
            </Link>


            <Link
              to="/blogs"
              className="text-sm font-medium text-black/60 transition hover:text-black"
            >
              Design
            </Link>


            <Link
              to="/blogs"
              className="text-sm font-medium text-black/60 transition hover:text-black"
            >
              Tutorials
            </Link>

          </div>

        </div>

      </section>



      <section className="bg-[#f7f7f5]">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

         

          <div className="mb-10 flex items-end justify-between gap-5">

            <div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                From the community
              </p>

              <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">
                Latest stories
              </h2>

            </div>


            <Link
              to="/blogs"
              className="group hidden items-center gap-2 text-sm font-semibold sm:flex"
            >
              View all

              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

          </div>


   
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {latestStories.map((story) => (

              <article
                key={story.id}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >

            

                <div className="h-64 overflow-hidden bg-[#dedbd3]">

                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />

                </div>


               

                <div className="p-6">

                

                  <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-black/40">

                    <span>
                      {story.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-black/30"></span>

                    <span className="flex items-center gap-1">
                      <FiClock size={12} />
                      {story.readTime}
                    </span>

                  </div>


                

                  <h3 className="line-clamp-2 text-2xl font-bold leading-tight tracking-tight">
                    {story.title}
                  </h3>


               

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/55">
                    {story.description}
                  </p>


                  

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-sm font-semibold">
                      Read story
                    </span>


                    <Link
                      to={`/blogs/${story.id}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition group-hover:bg-black group-hover:text-white"
                    >
                      <FiArrowUpRight />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* Mobile View All */}

          <div className="mt-8 sm:hidden">

            <Link
              to="/blogs"
              className="flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-semibold"
            >
              View all stories

              <FiArrowRight />

            </Link>

          </div>

        </div>

      </section>


   

      <section className="bg-black text-white">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                Have something to say?
              </p>


              <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">

                Your ideas deserve

                <span className="block text-white/40">
                  to be read.
                </span>

              </h2>


              <p className="mt-5 max-w-xl leading-7 text-white/55">
                Create an account, write your first story and share
                your knowledge with the community.
              </p>

            </div>


            <Link
              to="/register"
              className="group flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#e8e8e5]"
            >
              Start Writing

              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};


export default Home;