import React from "react";
import rec_1 from "../../assets/rec-1.webp";
import rec_2 from "../../assets/rec-2.webp";
import rec_3 from "../../assets/rec-3.webp";

const Fooditems = () => {
  const foodImages = [
    {
      src: rec_1,
      alt: "Delicious vegetarian food at RiverAnSky Luxury Resorts Nashik - Multi-cuisine restaurant",
      title: "Vegetarian Cuisine - RiverAnSky Resorts",
    },
    {
      src: rec_2,
      alt: "Premium non-vegetarian dishes at RiverAnSky Restaurant Nashik - Fine dining experience",
      title: "Non-Vegetarian Delicacies - RiverAnSky Resorts",
    },
    {
      src: rec_3,
      alt: "Multi-cuisine restaurant food at RiverAnSky Luxury Resorts Nashik - Best dining in Maharashtra",
      title: "Multi-Cuisine Restaurant - RiverAnSky Resorts",
    },
  ];
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-white">
                Our Delicious Food Items
              </h1>

              <span className="w-20 h-1 bg-red-600"></span>
            </div>

            <p className="text-white font-body text-base md:text-lg leading-relaxed">
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
              <figure className="sm:w-1/2">
                <img
                  src={foodImages[0].src}
                  alt={foodImages[0].alt}
                  title={foodImages[0].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[220px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <figure className="sm:w-1/2">
                <img
                  src={foodImages[1].src}
                  alt={foodImages[1].alt}
                  title={foodImages[1].title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[220px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </figure>
            </div>
            {/* Bottom Image */}
            <figure className="w-full">
              <img
                src={foodImages[2].src}
                alt={foodImages[2].alt}
                title={foodImages[2].title}
                loading="lazy"
                decoding="async"
                className="w-full h-[260px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fooditems;
