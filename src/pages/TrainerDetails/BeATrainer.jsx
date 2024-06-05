import React from 'react';
import { Link } from 'react-router-dom';

const BeATrainer = () => {
    return (
      <div className="flex flex-col overflow-hidden bg-white rounded  text-slate-500 shadow-slate-200 sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex-1">
          <img
            src="https://i.postimg.cc/jSJ0t5W7/pexels-photo-949126.jpg"
            alt="card image"
            className="object-cover min-h-full aspect-auto"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                Become a Certified Trainer
              </h3>
            </div>
          </header>
          <p>
            Unlock your potential and inspire others by becoming a certified
            trainer. Our comprehensive program equips you with the skills and
            knowledge to lead, motivate, and educate effectively. Join a
            community of passionate professionals dedicated to excellence in
            training. Elevate your career and make a lasting impact today.
          </p>
          <Link to="/become-trainer">
            <button className="inline-flex items-center justify-center h-8 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none mt-3">
              <span>Become a Trainer</span>
            </button>
          </Link>
        </div>
      </div>
    );
};

export default BeATrainer;