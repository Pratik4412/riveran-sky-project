import React from "react";
import rec_1 from "../../assets/rec-1.webp";
import rec_2 from "../../assets/rec-2.webp";
import rec_3 from "../../assets/rec-3.webp";

const Fooditems = () => {
  return (
    <section className="bg-primary-50">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-dark">
                Our Delicious Food Items
              </h1>

              <span className="w-20 h-1 bg-red-600"></span>
            </div>

            <p className="text-dark font-body text-base md:text-lg leading-relaxed">
              At RiverANSky Luxury Resorts, we take pride in offering a diverse
              and delectable culinary experience. Our restaurant features an
              extensive menu that caters to both vegetarian and non-vegetarian
              palates, crafted by our talented chefs using the freshest
              ingredients. Here’s a glimpse of what you can expect.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Top Images */}
            <div className="flex gap-4 sm:flex-row flex-col">
              <img
                src={rec_1}
                alt="Food item"
                className="sm:w-1/2 h-[220px] object-cover rounded-xl"
              />
              <img
                src={rec_2}
                alt="Food item"
                className="sm:w-1/2 h-[220px] object-cover rounded-xl"
              />
            </div>

            {/* Bottom Image */}
            <img
              src={rec_3}
              alt="Food item"
              className="w-full h-[260px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fooditems;
