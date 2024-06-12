import { useQuery } from "@tanstack/react-query";
import  { useState } from "react";
import { allClass } from "../../Api/Api";

const AllClass = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allClassData", { page, limit }],
    queryFn: allClass,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const { response: classData = [], pages = 1 } = data || {};

  const handleNextPage = () => {
    if (page < pages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto my-5 gap-4">
        {classData.map((allclass) => (
          <div
            className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
            key={allclass._id}
          >
            <figure>
              <img
                src={allclass.image}
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>

            <div className="p-6">
              <header className="mb-4 flex justify-between">
                <h3 className="text-xl font-medium text-slate-700">
                  {allclass.name}
                </h3>
                <p className="text-sm text-slate-400">{allclass.details}</p>
              </header>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-xl mx-auto my-5">
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-green-400 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            Previous
          </button>
          <span>
            Page {page} of {pages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page === pages}
            className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-green-400 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClass;
