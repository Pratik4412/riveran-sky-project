import bedOne from "../assets/landingPage/bed-0ne.webp";
import bedTwo from "../assets/landingPage/bed-two.webp";
import { IoWifi } from "react-icons/io5";
import { MdOutlineRoomService } from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { MdOutlineFastfood } from "react-icons/md";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import Testi from "../assets/1743399665832.jpeg";
export const headerText = [
  { path: "/", name: "Home" },
  {
    type: "dropdown",
    section: "About Us",
    path: "/about-us",
    items: [
      { path: "/gallery", name: "Gallery" },
      { path: "/amenities", name: "Amenities" },
    ],
  },

  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];
export const rooms = [
  {
    title: "Cozy Room",
    price: "$132.0 / Night",
    image: bedOne,
  },
  {
    title: "Deluxe Room",
    price: "$132.0 / Night",
    image: bedTwo,
  },
  {
    title: "Modern Room",
    price: "$132.0 / Night",
    image: bedOne,
  },
  {
    title: "Family Suite",
    price: "$132.0 / Night",
    image: bedTwo,
  },
  {
    title: "Grand Luxury Room",
    price: "$132.0 / Night",
    image: bedOne,
  },
];

export const servicesSection = [
  {
    icon: <IoWifi size={32} className="text-primary" />,
    title: "High Speed Wifi",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <AiOutlineCar size={32} className="text-primary" />,
    title: "Pick & Drop Facility",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <MdOutlineRoomService size={32} className="text-primary" />,
    title: "Room Service",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <LiaSwimmingPoolSolid size={32} className="text-primary" />,
    title: "Swimming Pool",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <MdOutlineFastfood size={32} className="text-primary" />,
    title: "Breakfast Included",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
  {
    icon: <PiBathtub size={32} className="text-primary" />,
    title: "Shower Bathtub",
    description:
      "With our service you may enjoy the finest life in our resort.",
  },
];
export const footerLinks = [
  {
    url: "/",
    name: "About Us",
  },
  {
    url: "/",
    name: "Hotel Room",
  },
  {
    url: "/",
    name: "Our Gallery",
  },
  {
    url: "/",
    name: "Contact Us",
  },
];
export const socialMedia = [
  {
    path: "https://www.instagram.com/riveranskyresorts/",
    icon: (
      <FaInstagram size={18} className="text-gray-200 hover:text-primary" />
    ),
  },
  {
    path: "https://www.facebook.com/RiveranskyResortNashik/",
    icon: (
      <FaFacebookF size={18} className="text-gray-200 hover:text-primary" />
    ),
  },
  {
    path: "https://www.google.com/maps/place/RiverANSky+Luxury+Resorts+%26+Hotels/@19.8993408,73.6985998,17z/data=!3m1!4b1!4m9!3m8!1s0x3bdd933c08339f61:0x3a6026cc1f59c507!5m2!4m1!1i2!8m2!3d19.8993408!4d73.6985998!16s%2Fg%2F11mj__9xzm?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
    icon: (
      <MdOutlineLocationOn
        size={18}
        className="text-gray-200 hover:text-primary"
      />
    ),
  },
];

export const testimonials = [
  {
    img: Testi,
    dsc: "I also had the pleasure of dining at the hotel's restaurant, and the culinary experience was nothing short of extraordinary. The flavors, the presentation, and the ambiance all contributed to an unforgettable dining experience that I'll treasure.",
    name: "Pratik Dhere",
    positions: "CEO & Founder",
  },
  {
    img: Testi,
    dsc: "I also had the pleasure of dining at the hotel's restaurant, and the culinary experience was nothing short of extraordinary. The flavors, the presentation, and the ambiance all contributed to an unforgettable dining experience that I'll treasure.",
    name: "Satosh Dhere",
    positions: "CEO & Founder",
  },
  {
    img: Testi,
    dsc: "I also had the pleasure of dining at the hotel's restaurant, and the culinary experience was nothing short of extraordinary. The flavors, the presentation, and the ambiance all contributed to an unforgettable dining experience that I'll treasure.",
    name: "Pratik Dhere",
    positions: "CEO & Founder",
  },
  {
    img: Testi,
    dsc: "I also had the pleasure of dining at the hotel's restaurant, and the culinary experience was nothing short of extraordinary. The flavors, the presentation, and the ambiance all contributed to an unforgettable dining experience that I'll treasure.",
    name: "Santosh Dhere",
    positions: "CEO & Founder",
  },
];
