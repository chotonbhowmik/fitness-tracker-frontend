import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { allClass } from "../../Api/Api";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { trainerData, selectedTime } = location.state || {};
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const [selectedClass, setSelectedClass] = React.useState(null);
  const { data: allClassData = [] } = useQuery({
    queryKey: ["allClassData"],
    queryFn: allClass,
  });

  const handleJoinNow = () => {
    if (!selectedPackage || !selectedClass) {
      toast.error("Please select a package and a class.");
      return;
    }
    navigate("/payment", {
      state: {
        trainerData,
        selectedTime,
        selectedPackage,
        selectedClass,
      },
    });
  };

  if (!trainerData) {
    return <div>Error: Trainer data is missing!</div>;
  }

  const packages = [
    {
      name: "Basic",
      description: "Ideal for individual developers.",
      price: 10,
      benefits: [
        "Access to gym facilities during regular operating hours.",
        "Use of cardio and strength training equipment.",
        "Access to locker rooms and showers.",
      ],
    },
    {
      name: "Standard",
      description: "Best for small teams.",
      price: 50,
      benefits: [
        "All benefits of the basic membership.",
        "Access to group fitness classes such as yoga, spinning, and Zumba.",
        "Use of additional amenities like a sauna or steam room.",
      ],
    },
    {
      name: "Premium",
      description: "Perfect for enterprises.",
      price: 100,
      benefits: [
        "All benefits of the standard membership.",
        "Access to personal training sessions with certified trainers.",
        "Discounts on additional services such as massage therapy or nutrition counseling.",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Booking Page</h1>
      <h2 className="text-xl font-semibold">Trainer: {trainerData.name}</h2>
      <h2 className="text-xl font-semibold">
        Years of Experience: {trainerData.yearExperience}
      </h2>
      <p className="text-lg">Selected Time: {selectedTime}</p>

      <div className="mt-4 flex gap-4">
        <h2 className="text-xl font-semibold">Classes: </h2>
        {allClassData.map((classItem, index) => (
          <div
            key={index}
            className="text-center cursor-pointer h-9 w-9 "
            onClick={() => setSelectedClass(classItem)}
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="rounded-full"
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg text-slate-500 shadow-slate-200 ${
                selectedPackage && selectedPackage.name === pkg.name
                  ? "border-4 border-emerald-500"
                  : ""
              }`}
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="flex flex-col">
                <header className="flex flex-col gap-6 p-6 text-slate-400">
                  <h3 className="text-xl font-bold text-slate-700">
                    {pkg.name}
                    <span className="block text-sm font-normal text-slate-400">
                      {pkg.description}
                    </span>
                  </h3>
                  <h4>
                    <span className="text-3xl">$</span>
                    <span className="text-5xl font-bold tracking-tighter transition-all duration-300 text-slate-700 lg:text-6xl">
                      {pkg.price}
                    </span>
                    <span className="text-sm">/month</span>
                  </h4>
                </header>
                <ul className="list-disc list-inside p-6">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded "
        onClick={handleJoinNow}
      >
        Join Now
      </button>
      <ToastContainer />
    </div>
  );
};

export default Booking;
