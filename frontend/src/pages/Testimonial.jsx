import React, { useEffect, useState } from "react";
import { testimonials } from "../data/text";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  });

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };
  return (
    <div className="w-full py-10 md:py-20 flex justify-center bg-[#f7f3ef]">
      <div className="relative w-full max-w-2xl h-[360px]">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col gap-4 items-center text-center p-4 md:p-8 rounded-2xl bg-[#f7f3ef] text-white transition-all duration-500 ease-in-out${
              i === current
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-90 z-0"
            } `}
          >
            <img
              src={item.img}
              alt={item.name + i}
              className="w-20 h-20 rounded-full object-cover  border-2 border-white/20"
            />
            <p className="text-base md:text-xl text-dark font-heading">
              “{item.dsc}”
            </p>
            <div>
              <h6 className="text-sm md:text-lg text-dark font-body font-semibold">
                {item.name}
              </h6>
              <p className="text-sm text-dark font-body ">{item.positions}</p>
            </div>
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-6 md:static md:gap-0">
          <button
            onClick={prevSlide}
            className="
      w-10 h-10 rounded-full
      bg-primary-600 hover:bg-primary-400
      text-white flex items-center justify-center transition
      md:absolute md:left-[-48px] md:top-1/2 md:-translate-y-1/2
    "
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="
      w-10 h-10 rounded-full
      bg-primary-600 hover:bg-primary-400
      text-white flex items-center justify-center transition
      md:absolute md:right-[-48px] md:top-1/2 md:-translate-y-1/2
    "
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
