import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BeATrainer from "./BeATrainer";

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainerData, setTrainerData] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    axiosPublic.get(`/alltrainer/${id}`).then((res) => {
      setTrainerData(res.data);
    });
  }, [axiosPublic, id]);

  if (!trainerData) {
    return <div>Loading...</div>;
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    navigate("/booking", { state: { trainerData, selectedTime: time } });
  };

  return (
    <div className="max-w-4xl  mx-auto">
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row  my-5">
        <figure className="flex-1">
          <img
            src={trainerData.image}
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
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
                {trainerData.name}
              </h3>
              <p className="text-sm text-slate-400">
                Year of Experience: {trainerData.yearExperience}
              </p>
            </div>
          </header>
          <div className="flex flex-row gap-2 my-5">
            <p>Available times: </p>
            {trainerData?.available_time.map((time, index) => (
              <button
                key={index}
                className="inline-flex items-center justify-center h-8 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <p>Total Hours: </p>

            <button className="inline-flex items-center justify-center h-8 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              {trainerData.time} H
            </button>
          </div>
        </div>
      </div>
      <BeATrainer></BeATrainer>
    </div>
  );
};

export default TrainerDetails;
