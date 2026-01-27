// src/pages/Amenities.jsx
import React from "react";
import { Link } from "react-router-dom";
import AOSWrapper from "../common/AOSWrapper";
import { amenitiesList, seoData } from "../data/text";
import SEO from "../common/SEO";

const Amenities = () => {
  return (
    <>
      <SEO
        title={seoData.amenities.title}
        description={seoData.amenities.description}
        keywords={seoData.amenities.keywords}
        ogImage={seoData.amenities.ogImage}
        canonical={seoData.amenities.canonical}
        ogUrl={seoData.amenities.canonical}
      />
      <div className="min-h-screen bg-gradient-to-b from-dark via-gray-900 to-dark">
        {/* Hero Section */}
        <div className="about-us">
          <div className="absolute bg-black/70 w-full h-[70vh]" />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" /> */}
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
            <img
              src="/path-to-amenities-hero.jpg"
              alt="Amenities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <AOSWrapper animation="zoom-in" duration={1200}>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-4 tracking-wide">
                  Our Amenities
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                  Discover world-class facilities designed for your comfort and
                  enjoyment
                </p>
              </AOSWrapper>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-5 md:px-10 py-16">
          <AOSWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Experience <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At RiverAndSky Luxury Resorts, we pride ourselves on offering
                exceptional amenities that cater to every occasion. From
                intimate celebrations to grand corporate events, our world-class
                facilities ensure unforgettable experiences.
              </p>
            </div>
          </AOSWrapper>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {amenitiesList.map((amenity, index) => (
              <AOSWrapper
                key={amenity.id}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                duration={1000}
                delay={index * 100}
                offset={200}
              >
                <Link to={amenity.path}>
                  <div
                    className={`group relative h-[500px] rounded-3xl overflow-hidden border border-white/10 ${amenity.hoverColor} hover:shadow-2xl transition-all duration-500 cursor-pointer`}
                  >
                    {/* Background Image */}
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10`}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-500">
                        {amenity.icon}
                      </div>

                      <h3 className="text-3xl md:text-4xl font-heading text-white mb-4 group-hover:text-primary transition-colors duration-300">
                        {amenity.title}
                      </h3>

                      <p className="text-gray-200 leading-relaxed mb-6">
                        {amenity.description}
                      </p>

                      <div className="flex items-center text-primary font-semibold group-hover:gap-4 gap-2 transition-all duration-300">
                        <span>Explore More</span>
                        <span className="text-2xl">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AOSWrapper>
            ))}
          </div>

          {/* Additional Features Section */}
          <AOSWrapper animation="fade-up">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl md:text-4xl font-heading text-white text-center mb-12">
                What Makes Us <span className="text-primary">Special</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h4 className="text-xl font-heading text-white mb-3">
                    Award-Winning Service
                  </h4>
                  <p className="text-gray-300">
                    Recognized for excellence in hospitality and event
                    management
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-5xl mb-4">👨‍💼</div>
                  <h4 className="text-xl font-heading text-white mb-3">
                    Expert Team
                  </h4>
                  <p className="text-gray-300">
                    Dedicated professionals committed to making your event
                    perfect
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-5xl mb-4">✨</div>
                  <h4 className="text-xl font-heading text-white mb-3">
                    Premium Quality
                  </h4>
                  <p className="text-gray-300">
                    Top-tier facilities and services that exceed expectations
                  </p>
                </div>
              </div>
            </div>
          </AOSWrapper>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-5 md:px-10 py-20">
          <AOSWrapper animation="zoom-in" duration={1000}>
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 text-center border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Ready to Plan Your Event?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our team help you create an unforgettable experience at
                RiverAndSky Luxury Resorts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="primary-button text-lg px-10 py-4 hover:scale-105 transition-transform duration-300">
                  Book Now
                </button>
                <Link to="/contact">
                  <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-primary hover:bg-primary/10 text-lg px-10 py-4 rounded-full transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </AOSWrapper>
        </div>
      </div>{" "}
    </>
  );
};

export default Amenities;
