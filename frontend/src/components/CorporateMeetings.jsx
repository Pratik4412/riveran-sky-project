// // src/pages/amenities/CorporateMeetings.jsx
// import React from "react";
// import {
//   FaProjectDiagram,
//   FaLaptop,
//   FaWifi,
//   FaChalkboardTeacher,
//   FaCoffee,
//   FaUserTie,
// } from "react-icons/fa";
// import { MdMeetingRoom, MdScreenShare } from "react-icons/md";
// import AOSWrapper from "../common/AOSWrapper";

// const CorporateMeetings = () => {
//   const facilities = [
//     {
//       icon: <MdMeetingRoom className="text-5xl text-primary" />,
//       title: "Modern Conference Rooms",
//       description:
//         "Fully-equipped conference rooms with flexible seating arrangements for 20-200 participants, perfect for meetings, seminars, and workshops.",
//     },
//     {
//       icon: <MdScreenShare className="text-5xl text-primary" />,
//       title: "Advanced AV Equipment",
//       description:
//         "High-definition projectors, LED screens, sound systems, wireless presentation tools, and video conferencing capabilities.",
//     },
//     {
//       icon: <FaWifi className="text-5xl text-primary" />,
//       title: "High-Speed Internet",
//       description:
//         "Reliable high-speed WiFi connectivity throughout the venue ensuring seamless virtual meetings and online collaboration.",
//     },
//     {
//       icon: <FaChalkboardTeacher className="text-5xl text-primary" />,
//       title: "Interactive Whiteboards",
//       description:
//         "Smart boards and digital whiteboards for interactive presentations, brainstorming sessions, and collaborative work.",
//     },
//     {
//       icon: <FaCoffee className="text-5xl text-primary" />,
//       title: "Catering Services",
//       description:
//         "Customized meal plans from working lunches to gala dinners, coffee breaks, and refreshments throughout your event.",
//     },
//     {
//       icon: <FaUserTie className="text-5xl text-primary" />,
//       title: "Dedicated Support Staff",
//       description:
//         "Professional event coordinators and technical support team available throughout your event to ensure everything runs smoothly.",
//     },
//   ];

//   const eventTypes = [
//     {
//       title: "Corporate Meetings",
//       icon: "💼",
//       description:
//         "Board meetings, annual general meetings, and executive conferences in professional settings.",
//     },
//     {
//       title: "Team Building Events",
//       icon: "🤝",
//       description:
//         "Outdoor activities, workshops, and recreational programs to strengthen team bonds.",
//     },
//     {
//       title: "Training & Workshops",
//       icon: "📚",
//       description:
//         "Educational seminars, skill development programs, and professional training sessions.",
//     },
//     {
//       title: "Product Launches",
//       icon: "🚀",
//       description:
//         "Impressive venues for unveiling new products with multimedia presentations and live demonstrations.",
//     },
//     {
//       title: "Conferences & Seminars",
//       icon: "🎤",
//       description:
//         "Large-scale conferences with multiple breakout rooms and networking areas.",
//     },
//     {
//       title: "Corporate Retreats",
//       icon: "🏖️",
//       description:
//         "Multi-day offsite meetings combining work sessions with relaxation and team bonding.",
//     },
//   ];

//   const venueSpecs = [
//     {
//       name: "Executive Boardroom",
//       capacity: "Up to 20",
//       area: "500 sq. ft.",
//       setup: "Boardroom style",
//     },
//     {
//       name: "Conference Hall A",
//       capacity: "Up to 50",
//       area: "1,200 sq. ft.",
//       setup: "Theater/Classroom",
//     },
//     {
//       name: "Conference Hall B",
//       capacity: "Up to 100",
//       area: "2,500 sq. ft.",
//       setup: "Theater/Banquet",
//     },
//     {
//       name: "Grand Convention Center",
//       capacity: "Up to 300",
//       area: "5,000 sq. ft.",
//       setup: "Flexible arrangements",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-dark via-gray-900 to-dark">
//       {/* Hero Section */}
//       <div className="about-us">
//         <div className="absolute bg-black/70 w-full h-[70vh]" />
//         <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-dark z-10" />
//           <img
//             src="/path-to-corporate-hero.jpg"
//             alt="Corporate Meetings"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
//             <AOSWrapper animation="fade-up" duration={1200}>
//               <h1 className="text-5xl md:text-7xl font-heading text-white mb-4 tracking-wide">
//                 Corporate Meetings
//               </h1>
//               <div className="w-24 h-1 bg-primary mx-auto mb-6" />
//               <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
//                 Where Business Meets Excellence
//               </p>
//             </AOSWrapper>
//           </div>
//         </div>
//       </div>

//       {/* Introduction */}
//       <div className="container mx-auto px-5 md:px-10 py-16">
//         <AOSWrapper animation="fade-up">
//           <div className="max-w-4xl mx-auto text-center mb-20">
//             <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
//               Professional <span className="text-primary">Event Spaces</span>
//             </h2>
//             <p className="text-lg text-gray-300 leading-relaxed mb-6">
//               RiverAndSky Luxury Resorts offers state-of-the-art facilities for
//               all your corporate events. Our versatile spaces, modern
//               technology, and dedicated team ensure your business events are
//               productive, seamless, and memorable.
//             </p>
//             <p className="text-lg text-gray-300 leading-relaxed">
//               From intimate board meetings to large-scale conferences, we
//               provide the perfect environment for success.
//             </p>
//           </div>
//         </AOSWrapper>

//         {/* Facilities Grid */}
//         <div className="mb-20">
//           <AOSWrapper animation="fade-up">
//             <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
//               World-Class <span className="text-primary">Facilities</span>
//             </h3>
//           </AOSWrapper>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {facilities.map((facility, index) => (
//               <AOSWrapper
//                 key={index}
//                 animation="flip-left"
//                 duration={800}
//                 delay={index * 100}
//               >
//                 <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 h-full">
//                   <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
//                     {facility.icon}
//                   </div>
//                   <h4 className="text-2xl font-heading text-white mb-4">
//                     {facility.title}
//                   </h4>
//                   <p className="text-gray-300 leading-relaxed">
//                     {facility.description}
//                   </p>
//                 </div>
//               </AOSWrapper>
//             ))}
//           </div>
//         </div>

//         {/* Event Types */}
//         <div className="mb-20">
//           <AOSWrapper animation="fade-up">
//             <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-4">
//               Events We <span className="text-primary">Host</span>
//             </h3>
//             <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
//               Our versatile spaces can be customized for any type of corporate
//               event
//             </p>
//           </AOSWrapper>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {eventTypes.map((event, index) => (
//               <AOSWrapper
//                 key={index}
//                 animation="zoom-in"
//                 duration={800}
//                 delay={index * 100}
//               >
//                 <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
//                   <div className="text-5xl mb-4">{event.icon}</div>
//                   <h4 className="text-xl font-heading text-white mb-3">
//                     {event.title}
//                   </h4>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {event.description}
//                   </p>
//                 </div>
//               </AOSWrapper>
//             ))}
//           </div>
//         </div>

//         {/* Venue Specifications */}
//         <div className="mb-20">
//           <AOSWrapper animation="fade-up">
//             <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
//               Venue <span className="text-primary">Options</span>
//             </h3>
//           </AOSWrapper>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {venueSpecs.map((venue, index) => (
//               <AOSWrapper
//                 key={index}
//                 animation={index % 2 === 0 ? "fade-right" : "fade-left"}
//                 duration={1000}
//                 delay={index * 100}
//               >
//                 <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500">
//                   <h4 className="text-2xl font-heading text-primary mb-6">
//                     {venue.name}
//                   </h4>
//                   <div className="space-y-3 text-gray-300">
//                     <div className="flex justify-between items-center pb-3 border-b border-white/10">
//                       <span>Capacity:</span>
//                       <span className="font-semibold text-white">
//                         {venue.capacity}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center pb-3 border-b border-white/10">
//                       <span>Area:</span>
//                       <span className="font-semibold text-white">
//                         {venue.area}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span>Setup Style:</span>
//                       <span className="font-semibold text-white">
//                         {venue.setup}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </AOSWrapper>
//             ))}
//           </div>
//         </div>

//         {/* Additional Services */}
//         <AOSWrapper animation="fade-up">
//           <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
//             <h3 className="text-3xl md:text-4xl font-heading text-white text-center mb-8">
//               Additional Services
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-4xl mb-3">🏨</div>
//                 <h5 className="text-lg font-semibold text-white mb-2">
//                   Accommodation
//                 </h5>
//                 <p className="text-gray-300 text-sm">
//                   Comfortable rooms for overnight guests
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="text-4xl mb-3">🚗</div>
//                 <h5 className="text-lg font-semibold text-white mb-2">
//                   Transportation
//                 </h5>
//                 <p className="text-gray-300 text-sm">
//                   Airport pickup and local transport services
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="text-4xl mb-3">📸</div>
//                 <h5 className="text-lg font-semibold text-white mb-2">
//                   Photography
//                 </h5>
//                 <p className="text-gray-300 text-sm">
//                   Professional event coverage available
//                 </p>
//               </div>

//               <div className="text-center">
//                 <div className="text-4xl mb-3">🎯</div>
//                 <h5 className="text-lg font-semibold text-white mb-2">
//                   Team Activities
//                 </h5>
//                 <p className="text-gray-300 text-sm">
//                   Outdoor and indoor team building options
//                 </p>
//               </div>
//             </div>
//           </div>
//         </AOSWrapper>
//       </div>

//       {/* Image Showcase */}
//       <div className="container mx-auto px-5 md:px-10 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <AOSWrapper animation="fade-right">
//             <div className="relative h-96 rounded-3xl overflow-hidden group">
//               <img
//                 src="/path-to-meeting-room.jpg"
//                 alt="Meeting Room"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
//                 <h4 className="text-2xl font-heading text-white">
//                   Executive Meeting Spaces
//                 </h4>
//               </div>
//             </div>
//           </AOSWrapper>

//           <AOSWrapper animation="fade-left">
//             <div className="relative h-96 rounded-3xl overflow-hidden group">
//               <img
//                 src="/path-to-conference.jpg"
//                 alt="Conference Hall"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
//                 <h4 className="text-2xl font-heading text-white">
//                   Large Conference Halls
//                 </h4>
//               </div>
//             </div>
//           </AOSWrapper>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="container mx-auto px-5 md:px-10 py-20">
//         <AOSWrapper animation="zoom-in" duration={1000}>
//           <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 text-center border border-primary/30">
//             <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
//               Plan Your Next Corporate Event
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//               Our dedicated event planning team is ready to help you create a
//               successful and memorable corporate event
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="primary-button text-lg px-10 py-4 hover:scale-105 transition-transform duration-300">
//                 Request Proposal
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-primary hover:bg-primary/10 text-lg px-10 py-4 rounded-full transition-all duration-300">
//                 Schedule Site Visit
//               </button>
//             </div>
//           </div>
//         </AOSWrapper>
//       </div>
//     </div>
//   );
// };

// export default CorporateMeetings;
// src/pages/amenities/CorporateMeetings.jsx
import React from "react";

import AOSWrapper from "../common/AOSWrapper";
import weOffer from "../assets/aboutPage/weOffer.webp";
import gall from "../assets/aboutPage/gall-4.webp";
import {
  additionalAmenities,
  heroData,
  meetingTypes,
  seoData,
  venueFeatures,
  whyChooseUs,
} from "../data/text";
import SEO from "../common/SEO";

// import corporateHero from "../assets/corporate/corporate-hero.jpg";
// import darkHall from "../assets/corporate/dark-hall.jpg";
// import meetingRoom from "../assets/corporate/meeting-room.jpg";

const CorporateMeetings = () => {
  return (
    <>
      {" "}
      <SEO
        title={seoData.corporateMeetings.title}
        description={seoData.corporateMeetings.description}
        keywords={seoData.corporateMeetings.keywords}
        ogImage={seoData.corporateMeetings.ogImage}
        canonical={seoData.corporateMeetings.canonical}
        ogUrl={seoData.corporateMeetings.canonical}
      />
      <div className="min-h-screen bg-gradient-to-b from-dark via-gray-900 to-dark">
        {/* Hero Section */}
        <div className="about-us">
          <div className="absolute bg-black/70 w-full h-[70vh]" />
          <div className="relative h-[100%]  overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <AOSWrapper animation="fade-up" duration={1200}>
                <div className="max-w-5xl mx-auto">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-6 tracking-wide leading-tight">
                    {heroData.title}
                  </h1>
                  <div className="w-32 h-1 bg-primary mx-auto mb-8" />
                  <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">
                    {heroData.subtitle}
                  </p>
                  <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                    {heroData.description}
                  </p>
                </div>
              </AOSWrapper>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-5 md:px-10 py-20">
          {/* Why Choose Section */}
          <AOSWrapper animation="fade-up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                Why Choose Our{" "}
                <span className="text-primary">Corporate Venue</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                At RiverANSky Luxury Resorts, we provide everything you need for
                a successful corporate event in an inspiring and comfortable
                setting.
              </p>
            </div>
          </AOSWrapper>

          {/* Venue Features - Two Column Layout */}
          <div className="space-y-16 mb-24">
            {venueFeatures.map((feature, index) => (
              <AOSWrapper
                key={index}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                duration={1000}
                delay={100}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-10 lg:gap-16`}
                >
                  {/* Icon Section */}
                  <div className="w-full lg:w-2/5 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                      <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary hover:scale-110 transition-transform duration-500">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-3/5 text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-heading text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AOSWrapper>
            ))}
          </div>

          {/* Ideal For Section */}
          <div className="mb-24">
            <AOSWrapper animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
                  Ideal For <span className="text-primary">Every Event</span>
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Our versatile spaces can be customized to host any type of
                  corporate gathering
                </p>
              </div>
            </AOSWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {meetingTypes.map((type, index) => (
                <AOSWrapper
                  key={index}
                  animation="zoom-in"
                  duration={800}
                  delay={index * 100}
                >
                  <div className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 h-full">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <h4 className="text-2xl font-heading text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {type.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </AOSWrapper>
              ))}
            </div>
          </div>

          {/* Why Choose Us Grid */}
          <AOSWrapper animation="fade-up">
            <div className="bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl p-12 md:p-16 border border-primary/20 mb-24">
              <h3 className="text-3xl md:text-4xl font-heading text-white text-center mb-12">
                Why Choose <span className="text-primary">RiverANSky</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xl font-bold">
                          ✓
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xl font-heading text-white mb-2">
                        {reason.title}
                      </h5>
                      <p className="text-gray-300">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AOSWrapper>

          {/* Additional Amenities */}
          <div className="mb-24">
            <AOSWrapper animation="fade-up">
              <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
                Additional <span className="text-primary">Amenities</span>
              </h3>
            </AOSWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalAmenities.map((amenity, index) => (
                <AOSWrapper
                  key={index}
                  animation="flip-left"
                  duration={800}
                  delay={index * 100}
                >
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 h-full">
                    <div className="text-5xl mb-4">{amenity.icon}</div>
                    <h5 className="text-lg font-heading text-white mb-3">
                      {amenity.title}
                    </h5>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </AOSWrapper>
              ))}
            </div>
          </div>

          {/* Image Showcase */}
          <div className="mb-24">
            <AOSWrapper animation="fade-up">
              <h3 className="text-4xl md:text-5xl font-heading text-white text-center mb-12">
                Our <span className="text-primary">Venues</span>
              </h3>
            </AOSWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AOSWrapper animation="fade-right">
                <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group cursor-pointer">
                  <img
                    src={weOffer}
                    loading="lazy"
                    alt="Shadow Suit - Dark Hall"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8">
                    <div>
                      <h4 className="text-3xl font-heading text-white mb-2">
                        Shadow Suit – Dark Hall
                      </h4>
                      <p className="text-gray-200">
                        Our premium conference venue with state-of-the-art
                        facilities
                      </p>
                    </div>
                  </div>
                </div>
              </AOSWrapper>

              <AOSWrapper animation="fade-left">
                <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden group cursor-pointer">
                  <img
                    src={gall}
                    loading="lazy"
                    alt="Private Meeting Rooms"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8">
                    <div>
                      <h4 className="text-3xl font-heading text-white mb-2">
                        Private Meeting Rooms
                      </h4>
                      <p className="text-gray-200">
                        Intimate spaces for executive meetings and discussions
                      </p>
                    </div>
                  </div>
                </div>
              </AOSWrapper>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-5 md:px-10 pb-20">
          <AOSWrapper animation="zoom-in" duration={1000}>
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 md:p-16 text-center border border-primary/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                  Book Our Shadow Suit – Dark Hall for Your Next Corporate Event
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Experience the perfect blend of professional facilities and
                  luxurious service. Contact our dedicated event planning team
                  today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="primary-button text-lg px-12 py-4 hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/30">
                    Request Proposal
                  </button>
                  <a href="/contact">
                    <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:border-primary hover:bg-primary/10 text-lg px-12 py-4 rounded-full transition-all duration-300">
                      Contact Us
                    </button>
                  </a>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
                  <div>
                    <p className="text-sm mb-1">Call us at</p>
                    <a
                      href="tel:+919325117757"
                      className="text-primary text-xl font-semibold hover:underline"
                    >
                      +91 9325117757
                    </a>
                  </div>
                  <div className="hidden sm:block text-gray-600">|</div>
                  <div>
                    <p className="text-sm mb-1">Email us at</p>
                    <a
                      href="mailto:booking@riveranskyresorts.com"
                      className="text-primary text-xl font-semibold hover:underline"
                    >
                      booking@riveranskyresorts.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AOSWrapper>
        </div>
      </div>{" "}
    </>
  );
};

export default CorporateMeetings;
