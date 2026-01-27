// import React from "react";
// import { servicesSection } from "../data/text";
// const colors = {
//   primary: {
//     DEFAULT: "#DD3333",
//     50: "#FBE9E9",
//     100: "#F8D3D3",
//     200: "#F0A8A8",
//     300: "#E97C7C",
//     400: "#E25050",
//     600: "#AF1D1D",
//     700: "#831616",
//     800: "#570F0F",
//     900: "#2C0707",
//     950: "#160404",
//   },
//   dark: "#1B1B1B",
// };
// const OurFacility = () => {
//   return (
//     <div>
//       <section className="about-us">
//         <div className="absolute bg-black/50 w-full h-[70vh]" />
//         <div className="w-full h-full flex items-center justify-center relative">
//           <h1 className="text-5xl lg:text-7xl font-heading font-semibold text-white text-center">
//             Our Facilities
//           </h1>
//         </div>
//       </section>
//       <section
//         style={{
//           background: `radial-gradient(circle at top left, ${colors.primary[50]}, #ffffff 40%, ${colors.primary[100]} 80%)`,
//           color: "#111827",
//         }}
//       >
//         <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20">
//           <div>
//             <div className="flex flex-col gap-3 md:gap-6">
//               <h4 className="text-sm md:text-base text-primary ">
//                 OUR SERVICES
//               </h4>
//               <h1 className="text-3xl md:text-4xl font-heading font-semibold text-dark">
//                 Hotel Facilities
//               </h1>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 ">
//             {servicesSection.map((service, i) => (
//               <div
//                 className="p-6 border border-gray-200 rounded-xl flex flex-col gap-3 shadow-lg "
//                 key={i}
//               >
//                 <span>{service.icon}</span>
//                 <h3 className="text-3xl text-dark font-heading ">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 font-body">
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurFacility;
import React from "react";
import { seoData, servicesSection } from "../data/text";
import { FaChargingStation, FaChild, FaBolt, FaCar } from "react-icons/fa";
import SEO from "../common/SEO";

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

// Add these new services to your existing servicesSection array
const evAndFamilyServices = [
  {
    title: "EV Charging Station",
    description:
      "Electric vehicle and bike charging facilities available 24/7 for our eco-conscious guests.",
    icon: <FaChargingStation className="text-4xl text-primary" />,
    gradient: "from-green-50 to-emerald-50",
  },
  {
    title: "Kids Play Area",
    description:
      "Safe and engaging play zone with fun activities for children while parents relax.",
    icon: <FaChild className="text-4xl text-primary" />,
    gradient: "from-orange-50 to-amber-50",
  },
];

const OurFacility = () => {
  return (
    <>
      {" "}
      <SEO
        title={seoData.facilities.title}
        description={seoData.facilities.description}
        keywords={seoData.facilities.keywords}
        ogImage={seoData.facilities.ogImage}
        canonical={seoData.facilities.canonical}
        ogUrl={seoData.facilities.canonical}
      />
      <div>
        {/* Hero Section with Enhanced Overlay */}
        <section className="about-us relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-4">
            <h1 className="text-5xl lg:text-7xl font-heading font-semibold text-white text-center mb-4 animate-fade-in">
              Our Facilities
            </h1>
            <p className="text-lg lg:text-xl text-white/90 text-center max-w-2xl font-body">
              Experience luxury and comfort with our premium amenities
            </p>
          </div>
        </section>

        {/* Services Section with Modern Design */}
        <section
          style={{
            background: `radial-gradient(circle at top left, ${colors.primary[50]}, #ffffff 40%, ${colors.primary[100]} 80%)`,
            color: "#111827",
          }}
        >
          <div className="container mx-auto px-5 md:px-10 lg:px-20 py-16 lg:py-24">
            {/* Section Header */}
            <div className="text-center mb-12 lg:mb-16">
              <h4 className="text-sm md:text-base text-primary font-semibold tracking-wider uppercase mb-3">
                OUR SERVICES
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-dark mb-4">
                Hotel Facilities
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {servicesSection.map((service, i) => (
                <div
                  className="group relative p-8 border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm 
                           hover:shadow-2xl hover:scale-105 hover:border-primary/30 
                           transition-all duration-300 ease-in-out overflow-hidden"
                  key={i}
                >
                  {/* Decorative Background Element */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full 
                                group-hover:scale-150 transition-transform duration-500"
                  />

                  {/* Icon Container */}
                  <div
                    className="relative mb-5 w-16 h-16 flex items-center justify-center 
                                bg-primary/10 rounded-xl group-hover:bg-primary/20 
                                transition-colors duration-300"
                  >
                    <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl lg:text-3xl text-dark font-heading font-semibold mb-3 
                               group-hover:text-primary transition-colors duration-300"
                  >
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-600 font-body leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom Border Animation */}
                  <div
                    className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-400 
                                group-hover:w-full transition-all duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Featured Eco & Family Services */}
            <div className="mt-12 lg:mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-dark inline-flex items-center gap-3">
                  <FaBolt className="text-primary" />
                  Eco-Friendly & Family Services
                  <FaBolt className="text-primary" />
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                {evAndFamilyServices.map((service, i) => (
                  <div
                    key={i}
                    className={`relative p-8 rounded-2xl bg-gradient-to-br ${service.gradient} 
                             border-2 border-white shadow-lg hover:shadow-2xl 
                             hover:scale-105 transition-all duration-300 overflow-hidden group`}
                  >
                    {/* Animated Background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div className="relative z-10">
                      {/* Icon with Pulse Animation */}
                      <div
                        className="mb-5 inline-flex p-4 bg-white rounded-xl shadow-md 
                                    group-hover:animate-bounce-slow"
                      >
                        {service.icon}
                      </div>

                      <h3 className="text-2xl lg:text-3xl text-dark font-heading font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-base text-gray-700 font-body leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div
                      className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/20 
                                  rounded-full group-hover:scale-150 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Optional CTA Button */}
            {/* <div className="mt-12 lg:mt-16 text-center">
            <button
              className="primary-button text-lg px-8 py-4 rounded-lg shadow-lg 
                             hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore All Amenities
            </button>
          </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default OurFacility;
