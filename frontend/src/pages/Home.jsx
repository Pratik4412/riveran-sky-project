import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import hero1 from "../assets/landingPage/hero-1.webp";
import hero2 from "../assets/landingPage/hero-2.webp";
import hero3 from "../assets/landingPage/hero-3.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeAbout from "../components/homepage/HomeAbout";
import HomeRooms from "../components/homepage/HomeRooms";
import video from "../assets/landingPage/rever-hotel-vedio.mp4";
import { seoData, servicesSection } from "../data/text";
import NearPlaces from "../components/homepage/NearPlaces";
import Fooditems from "../components/homepage/Fooditems";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
import BookPopUp from "../common/BookPopUp";
import SEO from "../common/SEO";
const images = [hero1, hero2, hero3];

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
const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <>
      <SEO
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        ogImage={seoData.home.ogImage}
        canonical={seoData.home.canonical}
        ogUrl={seoData.home.canonical}
      />
      <div>
        <div className="relative w-full h-[97vh] mx-auto">
          <div>
            <button
              ref={prevRef}
              className="absolute z-40 top-1/2 left-6 -translate-y-1/2
        bg-black/40 hover:bg-black/60 text-white
        w-12 h-12 rounded-full flex items-center justify-center
        transition-all"
            >
              ❮
            </button>
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-[rgba(0,0,0,0.4)]">
              <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-white text-5xl text-center font-heading md:text-7xl font-bold">
                  Enjoy A Luxury <br className="hidden md:block" /> Experience.
                </h1>
                <button
                  onClick={() => setOpenBooking(true)}
                  className="bg-primary text-white px-6 py-3 rounded-lg"
                >
                  Book A Room
                </button>
              </div>
            </div>

            <button
              ref={nextRef}
              className="absolute z-40 top-1/2 right-6 -translate-y-1/2
        bg-black/40 hover:bg-black/60 text-white
        w-12 h-12 rounded-full flex items-center justify-center
        transition-all"
            >
              ❯
            </button>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`slide-${index}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <HomeAbout />
        <HomeRooms />
        <section className="relative w-full h-[70vh] overflow-hidden bg-black">
          {/* VIDEO */}
          <video
            ref={videoRef}
            src={video}
            playsInline
            muted
            preload="metadata"
            controls={playing}
            className="
          w-full h-full object-cover
          filter-[contrast(1.15)_saturate(1.3)_brightness(1.05)]
        "
          />

          {/* OVERLAY (ONLY WHEN NOT PLAYING) */}
          {!playing && (
            <>
              {/* Gradient overlay for clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent z-10" />

              {/* Play Card */}
              <div
                onClick={handlePlay}
                className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
              >
                <div className="flex items-center flex-col md:flex-row md:bg-white shadow-2xl overflow-hidden">
                  {/* Play Icon */}
                  <div className="bg-primary p-8 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="px-10 py-6">
                    <h2 className="text-2xl md:text-3xl font-heading md:text-black text-white">
                      Take a tour inside our hotel
                    </h2>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
        <section
          style={{
            background: `radial-gradient(circle at top left, ${colors.primary[50]}, #ffffff 40%, ${colors.primary[100]} 80%)`,
            color: "#111827",
          }}
        >
          <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col gap-6">
            <div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h4 className="text-sm md:text-base text-primary ">
                  OUR SERVICES
                </h4>
                <h1 className="text-3xl md:text-4xl font-heading font-semibold text-dark">
                  Hotel Facilities
                </h1>
              </div>
            </div>
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
          </div>
        </section>

        <Fooditems />

        <WhyChooseUs />
        <NearPlaces />
        <BookPopUp isOpen={openBooking} onClose={() => setOpenBooking(false)} />
      </div>
    </>
  );
};

export default Home;
