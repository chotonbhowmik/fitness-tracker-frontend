import React from 'react';

const Forum = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          {/*  <!-- Image --> */}
          <figure>
            <img
              src="https://picsum.photos/id/114/800/600"
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
                  Stairing at the sky
                </h3>
                <p className="text-sm text-slate-400">
                  By Sue Longarm, jun 3 2023
                </p>
              </div>
            </header>
            <p>
              Following the journey of history and culture, is a journey through
              the beautiful green rice paddies, and endless golden fields!
              Dotted amongst the countryside are bustling towns, with a vibrant
              atmosphere and great cafe culture.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Forum;