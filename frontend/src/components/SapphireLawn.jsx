// src/pages/amenities/SapphireLawn.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOSWrapper from "../common/AOSWrapper";
import { features, seoData } from "../data/text";
import SEO from "../common/SEO";

const SapphireLawn = () => {
  return (
    <>
      <SEO
        title={seoData.sapphireLawn.title}
        description={seoData.sapphireLawn.description}
        keywords={seoData.sapphireLawn.keywords}
        ogImage={seoData.sapphireLawn.ogImage}
        canonical={seoData.sapphireLawn.canonical}
        ogUrl={seoData.sapphireLawn.canonical}
      />
      <div className="min-h-screen bg-gradient-to-b from-dark via-gray-900 to-dark">
        {/* Hero Section */}
        <div className="about-us">
          <div className="absolute bg-black/70 w-full h-[70vh]" />
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-dark z-10" />
            <img
              src="/path-to-sapphire-lawn-hero.jpg"
              alt="Sapphire Lawn"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <AOSWrapper animation="zoom-in" duration={1200}>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-4 tracking-wide">
                  Sapphire Lawn
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                  Experience the beauty and versatility of our Sapphire Lawn
                </p>
              </AOSWrapper>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="container mx-auto px-5 md:px-10 py-16">
          <AOSWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Why You'll Love Our{" "}
                <span className="text-primary">Sapphire Lawn</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Make your next event truly special by hosting it on our
                beautiful green lawns at RiverAndSky Luxury Resorts. Our
                commitment to excellence and attention to detail will ensure a
                memorable and enjoyable experience for you and your guests.
              </p>
            </div>
          </AOSWrapper>

          {/* Features Grid */}
          <div className="space-y-10 md:space-y-20">
            {features.map((feature, index) => (
              <AOSWrapper
                key={index}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                duration={1000}
                delay={index * 100}
              >
                {/* <div className="  md:flex-row"> */}
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-10 bg-white/5 flex justify-center  backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20`}
                >
                  {/* Icon/Image Section */}
                  <div className="w-full md:w-1/3 flex justify-center">
                    {/* <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-7xl md:text-8xl hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div> */}
                    <img
                      src={feature.icon}
                      alt=""
                      className=" rounded-xl bg-gradient-to-br from-primary/20 to-primary/5   text-7xl md:text-8xl hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  {/* <div className=""> */}
                  <div className="w-full md:w-2/3 ">
                    <h3 className="text-3xl md:text-4xl font-heading text-white mb-6 flex items-center gap-3">
                      <span className="text-primary">{feature.title}</span>
                    </h3>
                    <ul className="space-y-4">
                      {feature.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <FaCheckCircle className="text-primary mt-1 flex-shrink-0 text-xl" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AOSWrapper>
            ))}
          </div>
        </div>

        {/* Image Gallery Section */}
        {/* <div className="container mx-auto px-5 md:px-10 py-16">
        <AOSWrapper animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
            Gallery
          </h2>
        </AOSWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <AOSWrapper
              key={index}
              animation="zoom-in"
              duration={800}
              delay={index * 100}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={`/path-to-gallery-image-${item}.jpg`}
                  alt={`Sapphire Lawn ${item}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AOSWrapper>
          ))}
        </div>
      </div> */}

        {/* CTA Section */}
        <div className="container mx-auto px-5 md:px-10 py-20">
          <AOSWrapper animation="fade-up" duration={1000}>
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 text-center border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Book Our Sapphire Lawn for Your Next Event
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the perfect blend of natural beauty and luxurious
                service at RiverAndSky Luxury Resorts. Book our Green lawns
                today and create unforgettable memories in our stunning outdoor
                setting.
              </p>
              <button className="primary-button text-lg px-10 py-4 hover:scale-105 transition-transform duration-300">
                Book Now
              </button>
            </div>
          </AOSWrapper>
        </div>
      </div>
    </>
  );
};

export default SapphireLawn;
