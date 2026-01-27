import React from "react";
import { Link } from "react-router-dom";

const AminityAbout = () => {
  return (
    <section className="aminityImage">
      <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center flex-col gap-6 justify-center">
        <div className="flex flex-col gap-3 md:gap-6 text-center justify-center items-center">
          <h4 className="text-sm md:text-base text-primary-400 font-semibold">
            AMENITIES
          </h4>
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-white">
            The Best Summer Vacation <br className="hidden md:block" /> Tours
            For Your Family
          </h1>
          <Link to="/contact" className="primary-button">
            Our Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AminityAbout;
