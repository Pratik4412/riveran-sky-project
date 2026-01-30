import React from "react";
import one from "../../assets/aboutPage/gall-1.webp";
import two from "../../assets/aboutPage/gall-2.webp";
import three from "../../assets/aboutPage/gall-3.webp";
import four from "../../assets/aboutPage/gall-4.webp";
import five from "../../assets/aboutPage/gall-5.webp";
import six from "../../assets/aboutPage/gall-6.webp";
import seven from "../../assets/aboutPage/gall-7.webp";

const HomeGallery = () => {
  return (
    <section className="">
      <div className="about-us">
        <div className="absolute bg-black/50 w-full h-[70vh]" />
        <div className="w-full h-full flex items-center justify-center relative">
          <h1 className="text-5xl lg:text-7xl font-heading font-semibold text-white text-center">
            Gallery
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-14 lg:py-24 ">
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex flex-col w-full">
            <div className="w-full">
              <img
                src={one}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full">
              <img
                src={two}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full">
              <img
                src={three}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full">
              <img
                src={four}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full">
            <img
              src={five}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full">
              <img
                src={six}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full">
              <img
                src={seven}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default HomeGallery;
