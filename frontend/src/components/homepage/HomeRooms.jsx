import React from "react";
import { Link } from "react-router-dom";
import { rooms } from "../../data/text";

const HomeRooms = () => {
  return (
    <div className="bg-dark">
      <section className="w-full container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col gap-3 md:gap-6">
        <div className="flex md:items-center flex-col md:flex-row justify-between gap-3 md:gap-6">
          <div>
            <div className="flex flex-col gap-3 md:gap-6">
              <h4 className="text-sm md:text-base text-primary ">
                ACCOMODATION
              </h4>
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-white">
                Room / Suits
              </h1>
            </div>
          </div>
          <div>
            <p className="text-gray-300 font-body text-base md:text-lg leading-relaxed">
              Our hotel offers 30 double, and 5 single rooms{" "}
              <br className="hidden md:block" /> as well as 36 suites and junior
              suites.
            </p>
            <Link className="text-sm text-primary font-body font-semibold">
              View All Rooms
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {rooms.map((room, index) => {
            let colSpan =
              index < 3
                ? "lg:col-span-4"
                : index === 3
                ? "lg:col-span-4"
                : "lg:col-span-8";

            return (
              <div
                key={index}
                className={`w-full relative group overflow-hidden rounded-xl shadow-lg 
          col-span-12 md:col-span-6 ${colSpan}`}
              >
                {/* IMAGE */}
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-xl font-heading font-semibold">
                    {room.title}
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    Price from {room.price}
                  </p>

                  <Link
                    to="/booking"
                    className="inline-block mt-4 bg-primary px-5 py-2 text-sm font-semibold rounded-md hover:bg-primary/90 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeRooms;
