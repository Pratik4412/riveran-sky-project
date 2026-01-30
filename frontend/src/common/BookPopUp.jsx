import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const BookPopUp = ({ isOpen, onClose }) => {
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBookingChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };
  // const handleBookingSubmit = (e) => {
  //   e.preventDefault();

  //   if (!bookingData.checkIn || !bookingData.checkOut) {
  //     alert("Please select check-in and check-out dates");
  //     return;
  //   }

  //   if (bookingData.checkOut <= bookingData.checkIn) {
  //     alert("Check-out date must be after check-in date");
  //     return;
  //   }

  //   const hotelId = "30335"; // real eGlobe hotel ID

  //   const bookingUrl =
  //     `https://booking.eglobe-solutions.com/?` +
  //     `hotelId=${hotelId}` +
  //     `&checkIn=${bookingData.checkIn}` +
  //     `&checkOut=${bookingData.checkOut}` +
  //     `&adults=${Number(bookingData.adults)}` +
  //     `&children=${Number(bookingData.children)}`;

  //   window.open(bookingUrl, "_blank"); // better UX than same tab
  // };

  // const handleBookingSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const response = await fetch("http://localhost:8000/api/get-in-tech", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         ...bookingData,
  //         adults: Number(bookingData.adults),
  //         children: Number(bookingData.children),
  //       }),
  //     });

  //     const data = await response.json();
  //     if (!response.ok) throw new Error(data.message || "Booking failed");

  //     alert("Booking request sent successfully!");
  //     onClose(); // close popup after success
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/get-in-tech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: bookingData.firstName,
          lastName: bookingData.lastName,
          email: bookingData.email,
          phone: bookingData.phone,
          checkIn: bookingData.checkIn,
          checkOut: bookingData.checkOut,
          adults: Number(bookingData.adults),
          children: Number(bookingData.children),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      alert("Booking request sent successfully!");

      setBookingData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        adults: "2",
        children: "0",
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-10 w-full max-w-xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-3xl font-heading font-semibold text-dark mb-6">
            Book A Room
          </h3>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
          >
            ×
          </button>
          <form onSubmit={handleBookingSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={bookingData.firstName}
                  onChange={handleBookingChange}
                  required
                  placeholder="Enter Your First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={bookingData.lastName}
                  onChange={handleBookingChange}
                  required
                  placeholder="Enter Your Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleBookingChange}
                required
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleBookingChange}
                required
                placeholder="Enter Your Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Check In */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                  Check In *
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={bookingData.checkIn}
                  onChange={handleBookingChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                />
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                  Check Out *
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={bookingData.checkOut}
                  onChange={handleBookingChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                />
              </div>
            </div>

            {/* Adults and Children */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                  Adults
                </label>
                <select
                  name="adults"
                  value={bookingData.adults}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-body">
                  Children
                </label>
                <select
                  name="children"
                  value={bookingData.children}
                  onChange={handleBookingChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-body"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform font-body mt-6
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-primary-600 hover:bg-primary hover:scale-[1.02] hover:shadow-lg"
    }
  `}
            >
              {loading ? "Checking..." : "Check Availability"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookPopUp;



