import bedOne from "../assets/landingPage/bed/bed-1.webp";
import bedTwo from "../assets/landingPage/bed/bed-2.webp";
import bedthree from "../assets/landingPage/bed/bed-3.webp";
import bedfour from "../assets/landingPage/bed/bed-4.webp";
import bedfive from "../assets/landingPage/bed/bed-5.webp";
import { IoWifi } from "react-icons/io5";
import {
  FaLeaf,
  FaSwimmingPool,
  FaRing,
  FaBriefcase,
  FaInstagram,
  FaFacebookF,
  FaHeart,
  FaCamera,
  FaMusic,
  FaUtensils,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { FaChalkboardTeacher, FaCoffee, FaUserTie } from "react-icons/fa";
import { MdMeetingRoom, MdScreenShare, MdGroups } from "react-icons/md";
import { BsProjector, BsPeopleFill } from "react-icons/bs";
import { IoMdWifi } from "react-icons/io";
import { GiTeamIdea } from "react-icons/gi";
import { SiFirewalla } from "react-icons/si";
import { FaGlassWater } from "react-icons/fa6";
import { GiFlowers } from "react-icons/gi";
import {
  MdOutlineRoomService,
  MdOutlineFastfood,
  MdOutlineLocationOn,
  MdFamilyRestroom,
} from "react-icons/md";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
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
import servicesOne from "../assets/landingPage/servivces.webp";
import servicesTwo from "../assets/landingPage/servivces.webp";
import servicesThree from "../assets/landingPage/servivces.webp";
import swiming from "../assets/swiming-pool.webp";
import green from "../assets/green.jpg";
import Weddings from "../assets/why-choose-us-bg.webp";
import meeting from "../assets/bg-1.webp";
import greenImg1 from "../assets/aboutPage/greenImg1.jpg";
import greenImg2 from "../assets/aboutPage/greenImg2.jpg";
import greenImg3 from "../assets/aboutPage/greenImg3.jpg";
// import meeting from "../assets/bg-1.webp";
// import meeting from "../assets/bg-1.webp";
// import meeting from "../assets/bg-1.webp";

export const headerText = [
  { path: "/", name: "Home" },
  {
    type: "dropdown",
    section: "All Info",
    items: [
      { path: "/about-us", name: "About Us" },
      { path: "/gallery", name: "Gallery" },
      {
        path: "/amenities",
        name: "Amenities",
        submenu: [
          { path: "/sapphire-lawn", name: "Sapphire Lawn" },
          { path: "/swimming-pool", name: "Swimming Pool" },
          {
            path: "/destination-weddings",
            name: "/Destination Weddings",
          },
          { path: "corporate-meetings", name: "Corporate Meetings" },
        ],
      },

      { path: "/rooms", name: "Rooms" },
      // { path: "/custome-pricing", name: "Custome Pricing" },
      { path: "/ourFacilify", name: "Our Facilities" },
    ],
  },

  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];
export const rooms = [
  {
    title: "Deluxe Room",
    price: "15000 / Night",
    image: bedOne,
  },
  {
    title: "Deluxe Room",
    price: "9000 / Night",
    image: bedTwo,
  },
  {
    title: "Deluxe Room",
    price: "15000 / Night",
    image: bedthree,
  },
  {
    title: "Deluxe Room",
    price: "8000 / Night",
    image: bedfour,
  },
  {
    title: "Deluxe Room",
    price: "10000 / Night",
    image: bedfive,
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
export const faqs = [
  {
    question: "How can I make bookings?",
    answer:
      "You can easily make bookings through our website, by calling our reception desk, or by contacting us via email. Our team will assist you throughout the process.",
  },
  {
    question: "What is the check-in and check-out policy?",
    answer:
      "Check-in time is from 2:00 PM and check-out time is until 11:00 AM. Early check-in and late check-out are subject to availability.",
  },
  {
    question: "Do you have a cancellation policy?",
    answer:
      "Yes, cancellations made 48 hours prior to check-in are fully refundable. Late cancellations may incur charges.",
  },
];
export const sectionOne = [
  {
    img: servicesTwo,
    heading: "BEST FOOD",
    title: "The Restaurant",
    para: "Well-trained restaurant staff collaborate harmoniously to  orchestrate these elements, culminating in a memorable  and satisfying dining venture.",
  },
  {
    img: servicesOne,
    heading: "RELAXATION",
    title: "Spa Center",
    para: "Spa centers are designed to create a serene and soothing atmosphere. They often have calming decor, soft lighting, tranquil music, and aromatic scents to enhance relaxation.",
  },
  {
    img: servicesThree,
    heading: "HEALTH",
    title: "Fitness Center",
    para: "Fitness centers often have personal trainers available for one-on-one sessions. These trainers provide customized workout plans",
  },
];
export const ourFacility = [
  {
    icon: "",
    title: "High Speed Wifi",
    disc: "",
  },
  {
    icon: "",
    title: "Pick & Drop Facility",
    disc: "",
  },
  {
    icon: "Room Service",
    title: "",
    disc: "",
  },
  {
    icon: "",
    title: "Swimming Pool",
    disc: "",
  },
  {
    icon: "",
    title: "Breakfast Included",
    disc: "",
  },

  {
    icon: "",
    title: "Shower Bathtub",
    disc: "",
  },
];
export const amenitiesList = [
  {
    id: 1,
    icon: <FaLeaf className="text-6xl" />,
    title: "Sapphire Lawn",
    description:
      "Experience the beauty and versatility of our expansive Sapphire Lawn, perfect for weddings, corporate events, and social gatherings in a stunning outdoor setting.",
    image: green,
    path: "/amenities/sapphire-lawn",
    color: "from-green-500/20 to-emerald-500/20",
    hoverColor: "hover:shadow-green-500/30",
  },
  {
    id: 2,
    icon: <FaSwimmingPool className="text-6xl" />,
    title: "Swimming Pool",
    description:
      "Dive into luxury with our crystal-clear swimming pool featuring modern facilities, poolside cabanas, and a dedicated kids' splash zone.",
    image: swiming,
    path: "swimming-pool",
    color: "from-blue-500/20 to-cyan-500/20",
    hoverColor: "hover:shadow-blue-500/30",
  },
  {
    id: 3,
    icon: <FaRing className="text-6xl" />,
    title: "Destination Weddings",
    description:
      "Create magical moments with our comprehensive destination wedding services, featuring breathtaking venues, expert planning, and unforgettable experiences.",
    image: Weddings,
    path: "/amenities/destination-weddings",
    color: "from-pink-500/20 to-rose-500/20",
    hoverColor: "hover:shadow-pink-500/30",
  },
  {
    id: 4,
    icon: <FaBriefcase className="text-6xl" />,
    title: "Corporate Meetings",
    description:
      "Host productive corporate events with state-of-the-art meeting facilities, modern technology, and professional services tailored to your business needs.",
    image: meeting,
    path: "/amenities/corporate-meetings",
    color: "from-orange-500/20 to-amber-500/20",
    hoverColor: "hover:shadow-orange-500/30",
  },
];
export const features = [
  {
    title: "Vast and Versatile Spaces",
    icon: greenImg1,
    points: [
      "Our Sapphire expansive lawn offers plenty of décor, seating room places for hosting large gatherings, weddings, parties, and corporate events",
      "Flexible Layout: The space can be arranged to suit your specific requirements, from elegant weddings to lively garden parties",
    ],
  },
  {
    title: "Beautiful Surroundings",
    icon: green,
    points: [
      "Lush Greenery: Enjoy the natural beauty of our well-maintained lawns, surrounded by nature's flowers and trees that create a picturesque setting",
      "Scenic Views: The Sapphire Lawn offers stunning views of the surrounding landscape, enhancing the ambiance of any event or activity",
    ],
  },
  {
    title: "Ideal for Events and Activities",
    icon: Weddings,
    points: [
      "Weddings and Receptions: Celebrate your special day in a beautiful outdoor setting, with ample space for ceremonies, receptions, and photos",
      "Corporate Events: Host productive and inspiring corporate events, team-building activities, seminars, and outdoor meetings",
      "Social Gatherings: Our lawns are perfect for birthday parties, family reunions, and other social events, offering a relaxed and enjoyable atmosphere for guests to mingle and enjoy",
    ],
  },
  {
    title: "Recreational Use",
    icon: greenImg2,
    points: [
      "Leisurely Afternoons: Spend a relaxing afternoon on the lawn, enjoying activities like yoga, reading, or simply soaking in the sun",
      "Children's Play Area: Our lawns provide a safe and spacious area for children to run, play, and enjoy outdoor games",
    ],
  },
  {
    title: "Additional Features",
    icon: greenImg3,
    points: [
      "Professional Event Support: Our dedicated event planning team is on hand to assist with every detail, ensuring your event is flawlessly executed",
      "On-site Amenities: Access to amenities such as seating arrangements, décor setup, lighting, and sound systems to enhance your event experience",
    ],
  },
];
export const poolFeatures = [
  {
    icon: <FaSwimmingPool className="text-5xl text-primary" />,
    title: "Crystal Clear Waters",
    description:
      "Dive into our pristine swimming pool with crystal-clear water maintained at the perfect temperature year-round.",
  },
  {
    icon: <MdFamilyRestroom className="text-5xl text-primary" />,
    title: "Family Friendly",
    description:
      "Separate sections for adults and children with trained lifeguards on duty ensuring everyone's safety.",
  },
  {
    icon: <FaUmbrellaBeach className="text-5xl text-primary" />,
    title: "Poolside Relaxation",
    description:
      "Comfortable loungers, cabanas, and umbrellas for the ultimate relaxation experience by the poolside.",
  },
  {
    icon: <FaGlassWater className="text-5xl text-primary" />,
    title: "Refreshments Available",
    description:
      "Enjoy refreshing beverages and light snacks from our poolside bar and café.",
  },
];
export const weddingServices = [
  {
    icon: <FaHeart className="text-5xl text-primary" />,
    title: "Wedding Planning",
    description:
      "Our expert wedding planners work with you every step of the way to create your dream wedding, handling all details from concept to execution.",
  },
  {
    icon: <GiFlowers className="text-5xl text-primary" />,
    title: "Décor & Styling",
    description:
      "Transform your venue with stunning floral arrangements, elegant drapery, and custom décor that reflects your unique style and vision.",
  },
  {
    icon: <FaUtensils className="text-5xl text-primary" />,
    title: "Catering Excellence",
    description:
      "Delight your guests with exquisite cuisine crafted by our award-winning chefs, featuring diverse menus from traditional to contemporary.",
  },
  {
    icon: <FaMusic className="text-5xl text-primary" />,
    title: "Entertainment",
    description:
      "Create the perfect ambiance with live bands, DJs, traditional performers, and custom entertainment tailored to your celebration.",
  },
  {
    icon: <FaCamera className="text-5xl text-primary" />,
    title: "Photography & Videography",
    description:
      "Capture every precious moment with professional photography and cinematic videography services to cherish for a lifetime.",
  },
  {
    icon: <SiFirewalla className="text-5xl text-primary" />,
    title: "Special Effects",
    description:
      "Add magic to your celebration with spectacular fireworks, LED displays, fog effects, and dramatic lighting arrangements.",
  },
];
export const weddingPackages = [
  {
    title: "Intimate Celebration",
    guests: "Up to 100 Guests",
    features: [
      "Sapphire Lawn or poolside venue",
      "Basic décor package",
      "3-course meal",
      "DJ services",
      "Basic photography (6 hours)",
      "Wedding coordinator",
    ],
  },
  {
    title: "Grand Celebration",
    guests: "100-300 Guests",
    features: [
      "Multiple venue options",
      "Premium décor & floral arrangements",
      "5-course gourmet meal",
      "Live band & DJ",
      "Professional photo & video coverage",
      "Dedicated wedding planning team",
      "Guest accommodation packages",
    ],
    popular: true,
  },
  {
    title: "Royal Wedding",
    guests: "300+ Guests",
    features: [
      "Exclusive resort access",
      "Luxury custom décor",
      "Multi-cuisine buffet & live counters",
      "Celebrity entertainment options",
      "Full-day photo & cinematic video",
      "Complete wedding management",
      "Spa & wellness packages",
      "Fireworks & special effects",
    ],
  },
];
export const heroData = {
  title: "Corporate Meetings at Shadow Suit – Dark Hall",
  subtitle: "Elevate Your Business Gatherings",
  description:
    "At RiverANSky Luxury Resorts, we understand the importance of creating the perfect environment for your corporate meetings and events. Our Shadow Suit – Dark Hall offers a sophisticated and versatile space designed to meet all your business needs.",
};

export const venueFeatures = [
  {
    icon: <MdMeetingRoom className="text-5xl" />,
    title: "State-of-the-Art Conference Halls",
    description:
      "Our spacious conference halls are equipped with the latest technology to support presentations, video conferences, and interactive sessions. The halls are designed to accommodate various group sizes, from intimate board meetings to large-scale conferences.",
  },
  {
    icon: <MdGroups className="text-5xl" />,
    title: "Private Meeting Rooms",
    description:
      "For more intimate gatherings or executive meetings, our private rooms offer a quiet and focused environment. These spaces are perfect for strategic planning sessions, one-on-one meetings, or small team discussions.",
  },
  {
    icon: <BsProjector className="text-5xl" />,
    title: "Advanced Audio-Visual Equipment",
    description:
      "We provide cutting-edge AV equipment, including high-definition projectors, large screens, sound systems, and wireless presentation tools. Our technical team is on hand to ensure seamless operation throughout your event.",
  },
  {
    icon: <IoMdWifi className="text-5xl" />,
    title: "High-Speed Internet Connectivity",
    description:
      "Stay connected with our reliable high-speed Wi-Fi, ensuring that your team can collaborate efficiently and conduct virtual meetings without interruption.",
  },
  {
    icon: <FaCoffee className="text-5xl" />,
    title: "Customized Catering Services",
    description:
      "Choose from a variety of catering options, from working lunches to gala dinners. Our culinary team can create menus tailored to your preferences and dietary requirements, ensuring your guests are well taken care of.",
  },
  {
    icon: <FaUserTie className="text-5xl" />,
    title: "Professional Event Support",
    description:
      "Our dedicated event coordinators work closely with you to plan and execute your meeting or event flawlessly. From setup to breakdown, we handle all the details so you can focus on your agenda.",
  },
];

export const meetingTypes = [
  {
    icon: "💼",
    title: "Corporate Meetings & Conferences",
    description:
      "Host board meetings, annual general meetings, and executive conferences in a professional and well-equipped environment.",
  },
  {
    icon: "🎓",
    title: "Training Sessions & Workshops",
    description:
      "Conduct educational seminars, skill development programs, and professional training in our interactive spaces.",
  },
  {
    icon: "🤝",
    title: "Team Building Events",
    description:
      "Strengthen team bonds with outdoor activities, workshops, and recreational programs in our beautiful resort setting.",
  },
  {
    icon: "🚀",
    title: "Product Launches",
    description:
      "Make a lasting impression with impressive venues perfect for unveiling new products with multimedia presentations.",
  },
  {
    icon: "🎤",
    title: "Seminars & Presentations",
    description:
      "Leverage our advanced AV equipment and comfortable seating for impactful presentations and large-scale seminars.",
  },
  {
    icon: "🏖️",
    title: "Corporate Retreats",
    description:
      "Combine productive work sessions with relaxation and team bonding in our luxurious resort environment.",
  },
];

export const additionalAmenities = [
  {
    icon: "🏨",
    title: "Accommodation",
    description:
      "Comfortable and well-appointed rooms for overnight stays, ensuring your team is well-rested and ready for the next day.",
  },
  {
    icon: "🚗",
    title: "Transportation Services",
    description:
      "We can arrange transportation for your attendees, including airport transfers and local transport.",
  },
  {
    icon: "🎯",
    title: "Team-Building Activities",
    description:
      "Enhance your corporate retreat with our range of team-building activities, both indoor and outdoor.",
  },
  {
    icon: "🍽️",
    title: "Dining Options",
    description:
      "Enjoy delicious meals at our on-site restaurant, or opt for customized dining experiences in our banquet areas.",
  },
];

export const whyChooseUs = [
  {
    title: "Versatile Spaces",
    description:
      "Our venues can be configured to suit any type of corporate event, from small meetings to large conferences.",
  },
  {
    title: "Modern Technology",
    description:
      "State-of-the-art AV equipment and high-speed internet ensure your event runs smoothly.",
  },
  {
    title: "Professional Service",
    description:
      "Our experienced team is dedicated to providing exceptional service and support.",
  },
  {
    title: "Scenic Location",
    description:
      "Located in the picturesque surroundings of Nashik, our resort offers a refreshing escape from the city.",
  },
];
export const seoData = {
  home: {
    title:
      "RiverAnSky Luxury Resorts Nashik | Best Resort in Nashik, Maharashtra",
    description:
      "Experience luxury at RiverAnSky Resorts in Nashik. Premium rooms, swimming pool, sapphire lawn for weddings, corporate meetings & events. Book your stay at the best luxury resort in Nashik, Maharashtra.",
    keywords:
      "luxury resort nashik, best resort in nashik, riveransky resorts, nashik resorts, wedding venues nashik, corporate events nashik, destination wedding nashik, luxury hotels nashik, resorts near nashik, weekend getaway nashik",
    ogImage: "/images/og/home-og.jpg",
    canonical: "https://riveranskyresorts.com/",
  },

  about: {
    title:
      "About RiverAnSky Luxury Resorts | Premium Resort in Nashik, Maharashtra",
    description:
      "Discover RiverAnSky Luxury Resorts - a premier destination in Nashik offering world-class amenities, exceptional hospitality, and unforgettable experiences. Learn about our commitment to excellence and guest satisfaction.",
    keywords:
      "about riveransky resorts, luxury resort nashik, best resort nashik maharashtra, nashik resort facilities, premium hospitality nashik, resort story nashik, luxury accommodation nashik",
    ogImage: "/images/og/about-og.jpg",
    canonical: "https://riveranskyresorts.com/about-us",
  },

  services: {
    title:
      "Our Services | RiverAnSky Luxury Resorts - Wedding, Events & Hospitality",
    description:
      "Explore premium services at RiverAnSky Resorts Nashik including destination weddings, corporate events, luxury accommodation, fine dining, spa services, and recreational activities. Professional event planning and management.",
    keywords:
      "resort services nashik, wedding services nashik, corporate event services, luxury accommodation services, event planning nashik, catering services nashik, spa services nashik, resort amenities nashik",
    ogImage: "/images/og/services-og.jpg",
    canonical: "https://riveranskyresorts.com/services",
  },

  amenities: {
    title:
      "Resort Amenities | Swimming Pool, Lawn, Meeting Halls - RiverAnSky Nashik",
    description:
      "Discover world-class amenities at RiverAnSky Resorts: Sapphire Lawn for events, crystal-clear swimming pool, modern conference halls, and premium facilities for weddings, corporate meetings, and leisure in Nashik.",
    keywords:
      "resort amenities nashik, swimming pool resort nashik, event lawn nashik, conference hall nashik, wedding venue amenities, corporate meeting facilities nashik, luxury resort facilities",
    ogImage: "/images/og/amenities-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities",
  },

  sapphireLawn: {
    title:
      "Sapphire Lawn | Outdoor Wedding & Event Venue - RiverAnSky Resorts Nashik",
    description:
      "Host unforgettable events at our expansive Sapphire Lawn in Nashik. Perfect for weddings, corporate events, and celebrations with beautiful surroundings, professional event support, and customizable setups.",
    keywords:
      "sapphire lawn nashik, outdoor wedding venue nashik, event lawn nashik, wedding lawn nashik, corporate event lawn, outdoor venue nashik, garden wedding nashik, lawn booking nashik",
    ogImage: "/images/og/sapphire-lawn-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/sapphire-lawn",
  },

  swimmingPool: {
    title:
      "Swimming Pool | Premium Pool Facilities - RiverAnSky Luxury Resorts Nashik",
    description:
      "Dive into luxury at RiverAnSky's premium swimming pool in Nashik. Crystal-clear waters, poolside cabanas, kids splash zone, and professional lifeguards. Perfect for family fun and relaxation.",
    keywords:
      "swimming pool nashik, resort pool nashik, luxury pool facilities, family pool nashik, poolside resort nashik, swimming facilities nashik, pool resort maharashtra",
    ogImage: "/images/og/swimming-pool-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/swimming-pool",
  },

  destinationWeddings: {
    title:
      "Destination Weddings in Nashik | RiverAnSky - Premier Wedding Venue",
    description:
      "Plan your dream destination wedding at RiverAnSky Resorts Nashik. Stunning venues, expert planning, customized packages, professional photography, catering, and décor. Create magical memories in Maharashtra's finest wedding destination.",
    keywords:
      "destination wedding nashik, wedding venue nashik, marriage hall nashik, wedding resort nashik, wedding packages nashik, outdoor wedding nashik, luxury wedding venue maharashtra, wedding planning nashik",
    ogImage: "/images/og/destination-wedding-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/destination-weddings",
  },

  corporateMeetings: {
    title:
      "Corporate Meetings & Events | Conference Hall - RiverAnSky Resorts Nashik",
    description:
      "Host successful corporate events at RiverAnSky Nashik. State-of-the-art conference halls, modern AV equipment, high-speed WiFi, professional event support, and team building activities. Perfect for meetings, seminars & conferences.",
    keywords:
      "corporate meetings nashik, conference hall nashik, corporate events nashik, business meeting venue, seminar hall nashik, corporate retreat nashik, training venue nashik, business conference nashik",
    ogImage: "/images/og/corporate-og.jpg",
    canonical: "https://riveranskyresorts.com/amenities/corporate-meetings",
  },

  rooms: {
    title:
      "Luxury Rooms & Suites | Premium Accommodation - RiverAnSky Resorts Nashik",
    description:
      "Experience luxury accommodation at RiverAnSky Resorts Nashik. Elegant rooms and suites with modern amenities, stunning views, comfortable beds, and premium facilities. Book your perfect stay in Nashik, Maharashtra.",
    keywords:
      "luxury rooms nashik, resort rooms nashik, hotel accommodation nashik, premium suites nashik, deluxe rooms nashik, resort booking nashik, best rooms nashik, luxury accommodation maharashtra",
    ogImage: "/images/og/rooms-og.jpg",
    canonical: "https://riveranskyresorts.com/rooms",
  },

  facilities: {
    title: "Resort Facilities | Dining, Spa & Recreation - RiverAnSky Nashik",
    description:
      "Explore comprehensive facilities at RiverAnSky Resorts: Fine dining restaurant, spa & wellness center, recreational activities, indoor games, outdoor sports, gym, and 24/7 services for an unforgettable stay in Nashik.",
    keywords:
      "resort facilities nashik, dining facilities nashik, spa nashik, recreational activities nashik, resort amenities, wellness center nashik, restaurant nashik resort, sports facilities nashik",
    ogImage: "/images/og/facilities-og.jpg",
    canonical: "https://riveranskyresorts.com/ourFacility",
  },

  gallery: {
    title: "Photo Gallery | RiverAnSky Luxury Resorts Nashik - Images & Videos",
    description:
      "Browse our photo gallery showcasing the beauty of RiverAnSky Resorts Nashik. View images of our rooms, amenities, events, weddings, swimming pool, lawns, and facilities. Visualize your perfect stay or event.",
    keywords:
      "resort gallery nashik, riveransky photos, resort images nashik, wedding photos nashik, event gallery, resort pictures, nashik resort photos, luxury resort gallery",
    ogImage: "/images/og/gallery-og.jpg",
    canonical: "https://riveranskyresorts.com/gallery",
  },

  contact: {
    title:
      "Contact Us | RiverAnSky Resorts Nashik - Bookings & Enquiries +91 9325117757",
    description:
      "Contact RiverAnSky Luxury Resorts for bookings and enquiries. Call +91 9325117757 or email booking@riveranskyresorts.com. Located in Rajur Bahula, Nashik, Maharashtra. Get directions, prices, and availability.",
    keywords:
      "contact riveransky resorts, nashik resort contact, resort booking nashik, enquiry nashik resort, riveransky phone number, resort address nashik, booking contact nashik",
    ogImage: "/images/og/contact-og.jpg",
    canonical: "https://riveranskyresorts.com/contact",
  },
};
