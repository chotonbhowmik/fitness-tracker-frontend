import { useContext, useState } from "react";
import axios from "axios";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addSlot, allClass } from "../../Api/Api";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const animatedComponents = makeAnimated();

const availableDayOptions = [
  { value: "sun", label: "SUNDAY" },
  { value: "mon", label: "MONDAY" },
  { value: "tue", label: "TUESDAY" },
  { value: "wed", label: "WEDNESDAY" },
  { value: "thurs", label: "THURSDAY" },
];

const AddSlot = () => {
  const { user } = useContext(AuthContext);
  const [availableDay, setAvailableDay] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const { data: allClassData = [] } = useQuery({
    queryKey: ["allClassData"],
    queryFn: allClass,
  });

  const handleAddTrainer = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Slot_name.value;
    const email = form.email.value;
    const slotTime = form.slot_time.value;

    const createSlot = {
      name,
      email,
      slotTime,
      availableDay: availableDay.map((option) => option.value),
      selectedClasses: selectedClasses.map((option) => option.value),
    };

    try {
      const response = await addSlot(createSlot);
      toast.success("Slot added successfully!");
      form.reset();
      setAvailableDay([]);
      setSelectedClasses([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add slot.");
    }
  };

  // Format class data for Select component
  const classOptions = allClassData.map((classItem) => ({
    value: classItem.name, // Ensure you are using the correct field name for the class ID
    label: classItem.name,
  }));

  return (
    <div>
      <form
        className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 max-w-4xl mx-auto my-9 py-[80px] px-8"
        onSubmit={handleAddTrainer}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="relative my-1">
            <input
              type="text"
              name="Slot_name"
              placeholder="Slot name"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 required"
              required
            />
            <label
              htmlFor="Slot_name"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Slot name
            </label>
          </div>
          <div className="relative my-1">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              required
              defaultValue={user?.email}
              readOnly
            />
            <label
              htmlFor="email"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Your Email
            </label>
          </div>
          <div className="relative my-1">
            <input
              type="number"
              name="slot_time"
              placeholder="Slot Time"
              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              required
            />
            <label
              htmlFor="slot_time"
              className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Slot Time
            </label>
          </div>
          <div className="relative my-1">
            <label>Available Day</label>
            <Select
              name="available_day"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={availableDayOptions}
              value={availableDay}
              onChange={(values) => setAvailableDay(values)}
            />
          </div>
          <div className="relative my-1">
            <label>Class</label>
            <Select
              name="class"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={classOptions}
              value={selectedClasses}
              onChange={(values) => setSelectedClasses(values)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Submit</span>
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddSlot;
