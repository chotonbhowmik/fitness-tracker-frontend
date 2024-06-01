
import axios from "axios";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { colourOptions } from "../data";
const animatedComponents = makeAnimated();
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const availableTimeOptions = [
  { value: "10.30am", label: "10.30am" },
  { value: "12.30pm", label: "12.30pm" },
  { value: "3.00pm", label: "3.00pm" },
];

const availableDayOptions = [
  { value: "sun", label: "SUNDAY" },
  { value: "mon", label: "MONDAY" },
  { value: "tue", label: "TUESDAY" },
];
const BecomeTrainer = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [availableTime, setavailableTime] = useState([]);
    const [availableDay, setavailableDay] = useState([]);
    const handleAddTrainer = async (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.full_name.value;
      const email = form.email.value;
      const age = form.age.value;
      const image = form.image.value;
      
      const createTrainer = {
        name,
        email,
        age,
        image,
        selectedSpecialties: selectedValues.map((option) => option.value),
        availableTime: availableTime.map((option) => option.value),
        availableDay: availableDay.map((option) => option.value),
      };
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/addtrainer`,
          createTrainer
        );
         toast.success("Assignment Added successful!");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div>
        <form
          className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 max-w-4xl mx-auto my-6 p-5"
          onSubmit={handleAddTrainer}
        >
          {/*  <!-- Body--> */}
          <div className="grid grid-cols-2 gap-4 ">
            <div className="relative my-6">
              <input
                type="text"
                name="full_name"
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-01"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your name
              </label>
            </div>
            <div className="relative my-6">
              <input
                type="email"
                name="email"
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-01"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your Email
              </label>
            </div>
            <div className="relative my-6">
              <input
                type="number"
                name="age"
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-01"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your Age
              </label>
            </div>
            <div className="relative my-6">
              <input
                type="text"
                name="image"
                placeholder="your name"
                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="id-01"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Your Image
              </label>
            </div>
            <div className="relative my-6">
              <Select
                name="select_field"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                value={selectedValues}
                onChange={(values) => setSelectedValues(values)}
              />
            </div>
            <div className="relative my-6">
              <Select
                name="available_time"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={availableTimeOptions}
                value={availableTime}
                onChange={(values) => setavailableTime(values)}
              />
            </div>

            <div className="relative my-6">
              <Select
                name="available_day"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={availableDayOptions}
                value={availableDay}
                onChange={(values) => setavailableDay(values)}
              />
            </div>
          </div>
          {/*  <!-- Action base sized basic button --> */}
          <div className="flex justify-end p-6 ">
            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Submit</span>
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    );
};

export default BecomeTrainer;