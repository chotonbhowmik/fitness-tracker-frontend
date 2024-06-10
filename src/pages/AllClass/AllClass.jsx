import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { allClass } from "../../Api/Api";
const AllClass = () => {
    const { data: allClassData = [] } = useQuery({
      queryKey: ["allClassData"],
      queryFn: allClass,
    });
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto my-5 gap-4">
        {allClassData?.map((allclass, index) => (
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
                <p className="text-sm text-slate-400">
                  {allclass.details}
                </p>
              </header>

              <div className="flex justify-center p-6 pt-0 mt-4">
               
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default AllClass;