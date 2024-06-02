import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const AllTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allTrainers = [] } = useQuery({
    queryKey: ["allTrainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/alltrainer");
      return res.data;
    },
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto my-5 gap-4">
      {allTrainers.map((allTrainer, index) => (
        <div
          className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
          key={allTrainer._id}
        >
          <figure>
            <img
              src={allTrainer.image}
              alt="card image"
              className="aspect-video w-full"
            />
          </figure>

          <div className="p-6">
            <header className="mb-4 flex justify-between">
              <h3 className="text-xl font-medium text-slate-700">
                {allTrainer.name}
              </h3>
              <p className="text-sm text-slate-400">
                Year of Experience: {allTrainer.yearExperience}
              </p>
            </header>
            <div className="flex gap-1 ">
              {allTrainer.availableTime.map((time) => (
                <p
                  key="time._id"
                  className="bg-green-400 text-white p-2 rounded"
                >
                  {time}
                </p>
              ))}
            </div>
            <div className="flex justify-center p-6 pt-0 mt-4">
              <button className="inline-flex items-center justify-center  h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-green-400 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <Link to={`/details/${allTrainer._id}`}>
                  <span>Know more</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTrainer;
