import React from "react";
import logo from "../assets/landingPage/Logo.png";
import { footerLinks, socialMedia } from "../data/text";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
const Footer = () => {
  return (
    <section className="bg-dark">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-10">
        <div className="flex items-start gap-7 justify-between">
          <div>
            <img src={logo} alt="footer-logo" className="w-[200px]" />
            <p className="text-gray-200 text-base font-body">
              Enjoy sweeping water views when you{" "}
              <br className="hidden md:block" /> reserve a Hudson River View
              Suite.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-base text-gray-200 font-heading font-semibold">
              Explore
            </h1>
            <div className="flex flex-col gap-2">
              {footerLinks.map((item, i) => (
                <div>
                  <Link
                    to={item.url}
                    className="text-gray-200 font-body hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-base text-gray-200 font-heading font-semibold">
              Contact
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span>
                  <MdOutlineLocationOn size={24} className="text-primary" />
                </span>
                <h5 className="text-gray-200 font-body">
                  455 West Orchard Street Kings Mountain, NC 28086
                </h5>
              </div>
              <a
                href="mailto:needhelp@gmail.com"
                className="flex items-center gap-2 text-gray-200 font-body hover:text-primary transition"
              >
                <HiOutlineMail size={22} className="text-primary" />
                <span>needhelp@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+18408412569"
                className="flex items-center gap-2 text-gray-200 font-body hover:text-primary transition"
              >
                <LuPhoneCall size={20} className="text-primary" />
                <span>+1 840 841 2569</span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-600 w-full h-[1px]"></div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h6 className="text-sm font-body text-gray-200">
              © 2026 All Right Design & Develop by{" "}
              <Link
                to="https://www.linkedin.com/in/pratik-dhere-full-stack-developer/"
                target="_blank"
                className="underline hover:text-primary"
              >
                Pratik Dhere
              </Link>
            </h6>
          </div>
          <div className="flex items-center gap-2">
            {socialMedia.map((item, i) => (
              <div className="h-10 w-10 rounded-full bg-[#3D3A38] flex items-center justify-center">
                <Link to={item.path} target="_blank">
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
