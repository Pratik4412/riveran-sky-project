// src/pages/amenities/SwimmingPool.jsx
import React from "react";
import AOSWrapper from "../common/AOSWrapper";
import { poolFeatures, seoData } from "../data/text";
import swiming from "../assets/swiming-pool.webp";
import SEO from "../common/SEO";
const SwimmingPool = () => {
  return (
    <>
      <SEO
        title={seoData.swimmingPool.title}
        description={seoData.swimmingPool.description}
        keywords={seoData.swimmingPool.keywords}
        ogImage={seoData.swimmingPool.ogImage}
        canonical={seoData.swimmingPool.canonical}
        ogUrl={seoData.swimmingPool.canonical}
      />

      <div className="min-h-screen bg-gradient-to-b from-dark via-gray-900 to-dark">
        {/* Hero Section */}
        <div className="about-us">
          <div className="absolute bg-black/70 w-full h-[70vh]" />
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-dark z-10" />
            <img
              src="/path-to-pool-hero.jpg"
              alt="Swimming Pool"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <AOSWrapper animation="fade-down" duration={1200}>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-4 tracking-wide">
                  Swimming Pool
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                  Refresh, Relax, and Rejuvenate
                </p>
              </AOSWrapper>
            </div>
          </div>{" "}
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-5 md:px-10 py-16">
          <AOSWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Dive Into <span className="text-primary">Luxury</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our state-of-the-art swimming pool offers the perfect escape
                from the hustle and bustle of daily life. Whether you're looking
                to swim laps, play with family, or simply lounge by the water,
                our pool area provides the ideal setting.
              </p>
            </div>
          </AOSWrapper>

          {/* Features Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {poolFeatures.map((feature, index) => (
              <AOSWrapper
                key={index}
                animation="flip-left"
                duration={1000}
                delay={index * 150}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-heading text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AOSWrapper>
            ))}
          </div>

          {/* Additional Info with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AOSWrapper animation="fade-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={swiming}
                  alt="Pool Details"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AOSWrapper>

            <AOSWrapper animation="fade-left">
              <div>
                <h3 className="text-4xl font-heading text-white mb-6">
                  More Than Just a <span className="text-primary">Pool</span>
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Olympic-size pool for serious swimmers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Separate kids' splash zone with water features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Modern changing rooms and shower facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Professional swimming instructors available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Pool parties and events can be organized</span>
                  </li>
                </ul>
              </div>
            </AOSWrapper>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-5 md:px-10 py-20">
          <AOSWrapper animation="zoom-in" duration={1000}>
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 text-center border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Ready to Make a Splash?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Book your stay and enjoy unlimited access to our luxurious
                swimming pool facilities.
              </p>
              <button className="primary-button text-lg px-10 py-4 hover:scale-105 transition-transform duration-300">
                Reserve Now
              </button>
            </div>
          </AOSWrapper>
        </div>
      </div>
    </>
  );
};

export default SwimmingPool;
