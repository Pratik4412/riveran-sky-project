// src/pages/amenities/DestinationWeddings.jsx
import React from "react";
import AOSWrapper from "../common/AOSWrapper";
import { seoData, weddingPackages, weddingServices } from "../data/text";
import web_1 from "../assets/aboutPage/wed-1.jpg";
import web_2 from "../assets/aboutPage/web-2.jpg";
import din_1 from "../assets/aboutPage/dining-1.jpg";
import din_2 from "../assets/aboutPage/dinig-2.png";
import SEO from "../common/SEO";
const DestinationWeddings = () => {
  return (
    <>
      <SEO
        title={seoData.destinationWeddings.title}
        description={seoData.destinationWeddings.description}
        keywords={seoData.destinationWeddings.keywords}
        ogImage={seoData.destinationWeddings.ogImage}
        canonical={seoData.destinationWeddings.canonical}
        ogUrl={seoData.destinationWeddings.canonical}
      />
      <div className="min-h-screen bg-gradient-to-b from-dark via-gray-900 to-dark">
        {/* Hero Section */}
        <div className="about-us">
          <div className="absolute bg-black/70 w-full h-[70vh]" />
          <div className="relative h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-dark z-10" />
            <img
              src="/path-to-wedding-hero.jpg"
              alt="Destination Wedding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <AOSWrapper animation="fade-down" duration={1200}>
                <h1 className="text-5xl md:text-7xl font-heading text-white mb-4 tracking-wide">
                  Destination Weddings
                </h1>
                <div className="w-24 h-1 bg-primary mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                  Where Dreams Meet Reality
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
                Celebrate Your <span className="text-primary">Special Day</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At RiverAndSky Luxury Resorts, we understand that your wedding
                is one of the most important days of your life. Our stunning
                venues, impeccable service, and attention to detail ensure your
                destination wedding is nothing short of magical.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From intimate ceremonies to grand celebrations, we offer
                customizable wedding packages that cater to your unique vision
                and preferences.
              </p>
            </div>
          </AOSWrapper>

          {/* Wedding Services */}
          <div className="mb-20">
            <AOSWrapper animation="fade-up">
              <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
                Comprehensive{" "}
                <span className="text-primary">Wedding Services</span>
              </h3>
            </AOSWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weddingServices.map((service, index) => (
                <AOSWrapper
                  key={index}
                  animation="zoom-in"
                  duration={800}
                  delay={index * 100}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 h-full">
                    <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-heading text-white mb-4">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </AOSWrapper>
              ))}
            </div>
          </div>

          {/* Wedding Packages */}
          <div className="mb-20">
            <AOSWrapper animation="fade-up">
              <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-4">
                Wedding <span className="text-primary">Packages</span>
              </h3>
              <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                Choose from our curated packages or let us create a custom plan
                tailored to your dreams
              </p>
            </AOSWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {weddingPackages.map((pkg, index) => (
                <AOSWrapper
                  key={index}
                  animation="fade-up"
                  duration={1000}
                  delay={index * 150}
                >
                  <div
                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border ${
                      pkg.popular
                        ? "border-primary/70 shadow-2xl shadow-primary/30 scale-105"
                        : "border-white/10"
                    } hover:border-primary/50 transition-all duration-500 h-full`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h4 className="text-3xl font-heading text-white mb-3">
                        {pkg.title}
                      </h4>
                      <p className="text-primary text-lg font-semibold">
                        {pkg.guests}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-primary text-xl mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full primary-button hover:scale-105 transition-transform duration-300">
                      Get Quote
                    </button>
                  </div>
                </AOSWrapper>
              ))}
            </div>
          </div>

          {/* Venue Showcase */}
          <div className="mb-20">
            <AOSWrapper animation="fade-up">
              <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
                Stunning <span className="text-primary">Venues</span>
              </h3>
            </AOSWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AOSWrapper animation="fade-right">
                <div className="relative h-96 rounded-3xl overflow-hidden group">
                  <img
                    src={web_1}
                    alt="Outdoor Wedding Venue"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </AOSWrapper>

              <AOSWrapper animation="fade-left">
                <div className="relative h-96 rounded-3xl overflow-hidden group">
                  <img
                    src={web_2}
                    alt="Indoor Wedding Venue"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </AOSWrapper>
            </div>
          </div>
          <div className="mb-20">
            <AOSWrapper animation="fade-up">
              <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
                Exquisite <span className="text-primary">Dining</span>
              </h3>
            </AOSWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AOSWrapper animation="fade-right">
                <div className="relative h-96 rounded-3xl overflow-hidden group">
                  <img
                    src={din_1}
                    alt="Outdoor Wedding Venue"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </AOSWrapper>

              <AOSWrapper animation="fade-left">
                <div className="relative h-96 rounded-3xl overflow-hidden group">
                  <img
                    src={din_2}
                    alt="Indoor Wedding Venue"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </AOSWrapper>
            </div>
          </div>

          {/* Testimonials */}
          <AOSWrapper animation="fade-up">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
              <h3 className="text-3xl md:text-4xl font-heading text-white text-center mb-12">
                What Our Couples Say
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-gray-300 italic mb-4">
                    "RiverAndSky made our wedding absolutely magical! Every
                    detail was perfect, and the team went above and beyond to
                    ensure our special day was unforgettable."
                  </p>
                  <p className="text-primary font-semibold">
                    - Priya & Rahul, December 2025
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <p className="text-gray-300 italic mb-4">
                    "The stunning venue, exceptional service, and attention to
                    detail exceeded all our expectations. Our guests are still
                    talking about it!"
                  </p>
                  <p className="text-primary font-semibold">
                    - Sneha & Arjun, November 2025
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
                Start Planning Your Dream Wedding
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our expert wedding planners bring your vision to life.
                Contact us today for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="primary-button text-lg px-10 py-4 hover:scale-105 transition-transform duration-300">
                  Schedule Consultation
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-primary hover:bg-primary/10 text-lg px-10 py-4 rounded-full transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </AOSWrapper>
        </div>
      </div>
    </>
  );
};

export default DestinationWeddings;
