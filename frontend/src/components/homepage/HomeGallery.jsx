import React from "react";
import one from "../../assets/landingPage/two.webp";
import two from "../../assets/landingPage/four.webp";
import three from "../../assets/landingPage/two.webp";
import four from "../../assets/landingPage/four.webp";
import five from "../../assets/landingPage/five.webp";
import six from "../../assets/landingPage/two.webp";
import seven from "../../assets/landingPage/four.webp";

const HomeGallery = () => {
  return (
    <div className="flex flex-col md:flex-row p-5 w-full md:h-screen">
      <div className="flex flex-col w-full">
        <div className="w-full h-full md:h-[30%]">
          <img src={one} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full">
          <img src={two} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full">
          <img src={three} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full md:h-[30%]">
          <img src={four} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full h-full">
        <img src={five} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col w-full">
        <div className="w-full">
          <img src={six} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full md:h-[30%]">
          <img src={seven} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
