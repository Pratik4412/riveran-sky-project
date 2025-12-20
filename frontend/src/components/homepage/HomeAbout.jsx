import React, { useEffect, useRef, useState } from "react";
import CustomCursor from "../../common/CustomCursor";
import { Link } from "react-router-dom";
import aboutImgOne from "../../assets/landingPage/about-one.webp";
import aboutImgTwo from "../../assets/landingPage/about-two.webp";
const HomeAbout = () => {
  const sectionRef = useRef(null);
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCursorActive(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-[#f7f3ef]">
      <CustomCursor active={cursorActive} />
      <section
        ref={sectionRef}
        className="  container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12 justify-center">
          <div className="w-full flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-6">
              <h4 className="text-sm md:text-base text-primary ">
                ABOUT SIX CLOUD
              </h4>
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-dark">
                Experience the absolute highest standards of hospitality,
                provided with utmost care.
              </h1>
            </div>
            <div className=" w-full justify-end flex ">
              <img src={aboutImgOne} alt="" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 md:gap-10">
            <div>
              <img src={aboutImgTwo} alt="" />
            </div>
            <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
              Our staff is dedicated to ensuring your stay is flawless. Expect
              personalized attention that anticipates your preferences, whether
              it's arranging reservations or fulfilling special requests.
            </p>
            <Link className="text-sm text-primary font-body font-semibold">
              More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
