
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchForum } from "../../../Api/Api";
import { Link } from "react-router-dom";
const ForumSection = () => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const { data, isLoading, error } = useQuery({
    queryKey: ["allForum", { page, limit }],
    queryFn: fetchForum,
    keepPreviousData: true,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { forums, pages } = data;



 
    return (
      <div className="my-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-4">
          {forums?.map((forum) => (
            <div
              className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
              key={forum._id}
            >
              {/*  <!-- Image --> */}
              <figure>
                <img
                  src={forum.image}
                  alt="card image"
                  className="aspect-video w-full"
                />
              </figure>
              {/*  <!-- Body--> */}
              <div className="p-6">
                <header className="mb-4 flex gap-4">
                  <a
                    href="#"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src="https://i.pravatar.cc/48?img=24"
                      alt="user name"
                      title="user name"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <div>
                    <h3 className="text-xl font-medium text-slate-700">
                      {forum.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      By {forum.publisher}
                    </p>
                  </div>
                </header>
                <p>{forum.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mx-auto">
          <div className="flex justify-between items-center mt-4">
            <Link to="/forum">
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-green-400 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ForumSection;