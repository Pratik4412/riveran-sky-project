import React from "react";
import { nearPlaces } from "../../data/text";
import { Link } from "react-router-dom";
import { TbLocation } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AOSWrapper from "../../common/AOSWrapper";
const NearPlaces = () => {
  return (
    <div>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col gap-6">
        <div className="w-full flex flex-col gap-3 sm:justify-center sm:items-center">
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-dark">
            Nearby Places To Visit
          </h1>
          <p className="text-dark font-body text-base md:text-lg leading-relaxed sm:text-center">
            Discover the charm of Nashik and its surroundings during your stay
            at RiverANSky Luxury Resorts. Our <br className="md:block hidden" />{" "}
            prime location in Rajur Bahula, Nashik, places you within easy reach
            of some of the region’s most <br className="md:block hidden" />{" "}
            fascinating attractions. Here are a few must-visit spots to explore.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 scrollbar-hide">
          {nearPlaces.map((item, i) => (
            <div className="relative group overflow-hidden rounded-xl min-w-[80%] sm:min-w-[60%] md:min-w-0">
              <AOSWrapper
                key={item.title + i}
                animation="fade-left"
                delay={100 + i * 100}
                duration={600}
              >
                <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <div className="w-full flex flex-col gap-2 md:gap-3 justify-center items-center bg-white/20 backdrop-blur-md border border-white/20 rounded-xl md:px-6 md:py-5 px-3 py-2 shadow-lg ">
                    <h1 className="text-white text-base md:text-xl font-semibold font-heading">
                      {item.title}
                    </h1>
                    <div className="flex items-center gap-2 w-full justify-between">
                      <h6 className="text-gray-200 text-base font-body flex items-center gap-2">
                        <HiOutlineLocationMarker className="text-primary-400" />{" "}
                        {item.desc}
                      </h6>
                      <Link
                        to={item.mapUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-md py-1 px-3 text-white bg-primary-600 "
                      >
                        View <TbLocation />
                      </Link>
                    </div>
                  </div>
                </div>
              </AOSWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearPlaces;
