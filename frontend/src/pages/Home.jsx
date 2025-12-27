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
import { servicesSection } from "../data/text";
import HomeGallery from "../components/homepage/HomeGallery";
import NearPlaces from "../components/homepage/NearPlaces";
import Fooditems from "../components/homepage/Fooditems";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
const images = [hero1, hero2, hero3];

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
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
              <button className="primary-button">Book A Room</button>
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
      <section>
        <div className="  container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10">
            {servicesSection.map((service, i) => (
              <div
                className="p-6 border border-gray-200 rounded-sm flex flex-col gap-3"
                key={i}
              >
                <span>{service.icon}</span>
                <h3 className="text-3xl text-dark font-heading ">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 font-body">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <HomeGallery /> */}
      <Fooditems />
      <WhyChooseUs />
      <NearPlaces />
    </div>
  );
};

export default Home;
