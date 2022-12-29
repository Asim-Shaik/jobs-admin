import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-800 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-slate-300">
              Admin
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              Control your presence
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white capitalize">
              Add, edit and delete job postings
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
