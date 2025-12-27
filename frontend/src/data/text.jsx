import bedOne from "../assets/landingPage/bed-0ne.webp";
import bedTwo from "../assets/landingPage/bed-two.webp";
import bedthree from "../assets/landingPage/bed-1.webp";
import bedfour from "../assets/landingPage/bed-2.webp";
import bedfive from "../assets/landingPage/bed-3.webp";
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
import place_1 from "../assets/bhandardara.webp";
import place_2 from "../assets/jain-temple.webp";
import place_3 from "../assets/pandav-leni.webp";
import place_4 from "../assets/ramkund.webp";
import place_5 from "../assets/sula-vine.webp";
import place_6 from "../assets/trambkeshvar.webp";
import place_7 from "../assets/Nasik-Road-railway.webp";
import place_8 from "../assets/mahamarg.webp";
import place_9 from "../assets/kasara-railaway.webp";
import place_10 from "../assets/igatpuri.webp";
import place_11 from "../assets/igarpuri-railway.webp";
import place_12 from "../assets/dwarka-circle.webp";
import place_13 from "../assets/airport.webp";
import place from "../assets/landingPage/Prime-Location.webp";
import ervice from "../assets/landingPage/Exceptional-ervice.webp";
import team from "../assets/landingPage/Tailored-Experiences.webp";
export const headerText = [
  { path: "/", name: "Home" },
  {
    type: "dropdown",
    section: "All Info",
    items: [
      { path: "/about-us", name: "About Us" },
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
    image: bedfive,
  },
  {
    title: "Modern Room",
    price: "$132.0 / Night",
    image: bedTwo,
  },
  {
    title: "Deluxe Room",
    price: "$132.0 / Night",
    image: bedthree,
  },
  {
    title: "Family Suite",
    price: "$132.0 / Night",
    image: bedfour,
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
export const nearPlaces = [
  {
    img: place_1,
    title: "BHANDARDARA WATERFALL",
    desc: " 30 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_2,
    title: "JAIN TEMPLE VILHOLI",
    desc: "2 KM",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_3,
    title: "PANDAV LENI CAVES",
    desc: " 5 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_4,
    title: "RAMKUND PANCHAVATI",
    desc: " 13 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_5,
    title: "SULA VINEYARDS",
    desc: " 10 KM Away",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_6,
    title: "TRIMBAKESHWAR",
    desc: " 12 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_7,
    title: "RAILWAY STATION",
    desc: " 20 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_8,
    title: "MAHAMARG BUS DEPO",
    desc: " 15 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_9,
    title: "KASARA RAILWAY STATION",
    desc: " 47 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_10,
    title: "IGATPURI",
    desc: " 30 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_11,
    title: "IGATPURI RAILWAY STATION",
    desc: " 28 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_12,
    title: "DWARKA CIRCLE",
    desc: " 10 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
  {
    img: place_13,
    title: "AIRPORT",
    desc: " 25 KM ",
    mapUrl:
      "https://www.google.com/maps/place/Umbrella+Fall,+Bhandardara/@19.5322818,73.7491162,14z/data=!4m7!3m6!1s0x3bdd75da916f4281:0xdb03c80f41d87c67!8m2!3d19.5477399!4d73.7620273!15sChViaGFuZGFyZGFyYSB3YXRlcmZhbGxaFyIVYmhhbmRhcmRhcmEgd2F0ZXJmYWxskgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xT0hSMllrWlJFQUXgAQA!16s%2Fg%2F1tfr8nbj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD",
  },
];
export const whyChooseUsData = [
  {
    img: place,
    title: "Prime Location",
    desc: "Nestled in the serene surroundings of Rajur Bahula, our resort offers easy access to Nashik's famous attractions and natural beauty.",
  },
  {
    img: ervice,
    title: "Exceptional Service",
    desc: "Our dedicated team is always ready to assist you, ensuring that your stay with us is comfortable and hassle-free.",
  },
  {
    img: team,
    title: "Tailored Experiences",
    desc: "We offer personalized services and experiences that cater to your specific needs and preferences.",
  },
];
