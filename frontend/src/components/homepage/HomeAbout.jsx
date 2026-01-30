import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import aboutImgOne from "../../assets/landingPage/rever-one.png";
import aboutImgTwo from "../../assets/landingPage/rever-two.png";

const colors = {
  primary: {
    DEFAULT: "#DD3333",
    50: "#FBE9E9",
    100: "#F8D3D3",
    200: "#F0A8A8",
    300: "#E97C7C",
    400: "#E25050",
    600: "#AF1D1D",
    700: "#831616",
    800: "#570F0F",
    900: "#2C0707",
    950: "#160404",
  },
  dark: "#1B1B1B",
};
const HomeAbout = () => {
  return (
    <div
      // className="bg-[#f7f3ef]"
      style={{
        background: `radial-gradient(circle at top left, ${colors.primary[50]}, #ffffff 40%, ${colors.primary[100]} 80%)`,
        color: "#111827",
      }}
    >
      <section
        // ref={sectionRef}
        className="container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12 justify-center">
          <div className="w-full flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-6">
              <h4 className="text-sm md:text-base text-primary ">
                ABOUT RIVERANSKY
              </h4>
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-dark">
                Welcome to River an Sky Resort Escape to Luxury!
              </h1>
            </div>
            <div className=" w-full justify-end flex ">
              <img src={aboutImgOne} alt="aboutImgOne" loading="lazy" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div>
              <img src={aboutImgTwo} alt="aboutImgTwo" loading="lazy" />
            </div>
            <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
              Nestled in the Serene Beauty of Rajur Bahula, Nashik, RiverANSky
              Luxury Resorts Offers the Perfect Blend of Comfort, Elegance, and
              Nature. Our Deluxe AC Rooms, Exquisite Dining, Refreshing Swimming
              Pool, and Stunning Event Spaces Make Us the Ideal Destination for
              a Rejuvenating Staycation. Our Resort is a haven for those seeking
              a serene escape from the hustle and bustle of everyday life.
            </p>
            <Link
              className="text-sm text-primary font-body font-semibold"
              to={"./about-us"}
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
