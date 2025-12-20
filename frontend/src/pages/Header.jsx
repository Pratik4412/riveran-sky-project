import React, { useState } from "react";
import { headerText } from "../data/text";
import logo from "../assets/landingPage/Logo.png";
// import { Menu, X } from "lucide-react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
      bg-white/10 backdrop-blur-xl 
      border-b border-white/10 
      shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
    >
      <div className="container mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {headerText.map((item, index) => {
            if (item.type === "dropdown") {
              return (
                <div key={index} className="relative group">
                  <span className="cursor-pointer font-medium text-gray-300 hover:text-primary font-body">
                    {item.section}
                  </span>

                  <div
                    className="absolute top-full left-0 mt-4 w-48 
                    bg-white/90 backdrop-blur-lg 
                    shadow-xl rounded-xl 
                    opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible 
                    transition-all duration-300"
                  >
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={item.path + subItem.path}
                        className="block px-5 py-3 text-sm text-gray-800 
                        hover:bg-primary/10 hover:text-primary rounded-lg"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={index}
                href={item.path}
                className="font-medium text-gray-300 hover:text-primary transition"
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <button className="primary-button shadow-lg hover:shadow-xl transition">
            Book Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <RxCross2 size={28} /> : <RiMenu3Fill size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
          {headerText.map((item, index) => {
            if (item.type === "dropdown") {
              return (
                <div key={index}>
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="flex justify-between w-full text-gray-200 font-medium"
                  >
                    {item.section}
                    <span>{dropdown ? "−" : "+"}</span>
                  </button>

                  {dropdown && (
                    <div className="mt-3 ml-4 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={item.path + subItem.path}
                          className="block text-gray-300 text-sm"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={index}
                href={item.path}
                className="block text-gray-200 font-medium"
              >
                {item.name}
              </a>
            );
          })}

          <button className="w-full primary-button mt-4">Book Now</button>
        </div>
      )}
    </header>
  );
};

export default Header;
