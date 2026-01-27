import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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

const OurStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section
      id="our-story"
      style={{
        background: `radial-gradient(circle at top left, ${colors.primary[50]}, #ffffff 40%, ${colors.primary[100]} 80%)`,
        color: "#111827",
      }}
      className="relative overflow-hidden py-10 md:py-20"
    >
      {/* subtle gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 10% 0, ${colors.primary[200]} 0, transparent 55%),
                       radial-gradient(circle at 90% 100%, ${colors.primary[300]} 0, transparent 55%)`,
        }}
      />

      <div className="relative mx-auto flex flex-col gap-10  max-w-6xl px-4  md:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Left – headings & intro */}
          <div className="md:w-5/12" data-aos="fade-right">
            <p
              style={{ color: colors.primary[600] }}
              className="mb-3 inline-block rounded-full bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase shadow-sm"
            >
              RiverANSky Luxury Resorts
            </p>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl leading-tight">
              A sanctuary of{" "}
              <span style={{ color: colors.primary.DEFAULT }}>relaxation</span>{" "}
              in the heart of Nashik
            </h2>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Our story • Our mission • What we offer
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              Founded with a vision to create a sanctuary of relaxation and
              indulgence, RiverANSky Luxury Resorts stands as a testament to
              elegance and heartfelt hospitality in Nashik. Over the years, it
              has grown into a premier destination for travelers seeking luxury,
              tranquility, and memorable experiences by the river.
            </p>
          </div>

          {/* Right – cards & details */}
          <div className="md:w-7/12 space-y-8">
            {/* Our Story & Mission */}
            <div
              className="grid gap-6 md:grid-cols-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="rounded-2xl bg-white/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)] border border-gray-100 backdrop-blur">
                <h3
                  className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ color: colors.primary[600] }}
                >
                  Our Story
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  RiverANSky was envisioned as a peaceful escape where nature,
                  comfort, and refined design come together; every stay is
                  crafted to feel intimate, warm, and truly unforgettable.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  From weekend getaways to destination celebrations, the resort
                  blends scenic landscapes with bespoke hospitality in every
                  detail.
                </p>
              </div>

              <div className="rounded-2xl bg-[#1B1B1B] p-6 text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] border border-white/5">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  The mission is to offer a seamless blend of comfort, luxury,
                  and personalized service so that every guest feels cherished
                  from check‑in to checkout.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">
                  Whether visiting for a vacation, a special event, or business,
                  the focus remains on creating stays that guests remember long
                  after they leave.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* What we offer */}
        <div
          className="rounded-3xl border border-gray-100 bg-white/90 p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.07)] backdrop-blur"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">
              What we offer
            </h3>
            <span
              className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]"
              style={{
                backgroundColor: colors.primary[50],
                color: colors.primary[700],
              }}
            >
              Stay • Dine • Celebrate
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Luxurious Accommodations */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_45px_rgba(221,51,51,0.25)]">
              <div
                className="mb-3 h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-md"
                style={{ backgroundColor: colors.primary.DEFAULT }}
              >
                AC
              </div>
              <h4 className="mb-1 text-sm font-semibold text-gray-900">
                Luxurious Accommodations
              </h4>
              <p className="text-xs leading-relaxed text-gray-600">
                Deluxe AC rooms with modern amenities, warm interiors, and
                serene views of the surrounding landscapes for a restful stay.
              </p>
            </div>

            {/* Exquisite Dining */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_45px_rgba(221,51,51,0.25)]">
              <div
                className="mb-3 h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-md"
                style={{ backgroundColor: colors.primary[600] }}
              >
                🍽️
              </div>
              <h4 className="mb-1 text-sm font-semibold text-gray-900">
                Exquisite Dining
              </h4>
              <p className="text-xs leading-relaxed text-gray-600">
                A restaurant menu that celebrates both vegetarian and
                non‑vegetarian favourites, crafted using fresh ingredients and
                bold Nashik flavours.
              </p>
            </div>

            {/* World-Class Facilities */}
            <div className="group relative rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_45px_rgba(221,51,51,0.25)]">
              <div
                className="mb-3 h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-semibold shadow-md"
                style={{ backgroundColor: colors.primary[700] }}
              >
                ✨
              </div>
              <h4 className="mb-1 text-sm font-semibold text-gray-900">
                World‑Class Facilities
              </h4>
              <ul className="mt-1 space-y-1 text-xs text-gray-600">
                <li>• Swimming pool for adults and children.</li>
                <li>• Elegant banquet hall for weddings & corporate events.</li>
                <li>• Lush green lawn for outdoor celebrations.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="flex flex-wrap items-center justify-between gap-4"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <p className="text-sm text-gray-700">
            Ready to plan your next staycation, celebration, or corporate
            retreat at RiverANSky?
          </p>
          <Link
            to="/contact"
            style={{
              background: `linear-gradient(135deg, ${colors.primary.DEFAULT}, ${colors.primary[700]})`,
            }}
            className="rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_14px_30px_rgba(221,51,51,0.5)] hover:shadow-[0_18px_40px_rgba(221,51,51,0.65)] transition-shadow duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
