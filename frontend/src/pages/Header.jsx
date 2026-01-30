import React, { useState } from "react";
import { headerText } from "../data/text";
import logo from "../assets/landingPage/Logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
      <div className="px-5 md:px-10 lg:px-20 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-14 lg:h-16 w-auto"
            loading="lazy"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {headerText.map((item, index) =>
            item.type === "dropdown" ? (
              <div key={index} className="relative group">
                <span className="cursor-pointer font-medium text-gray-300 hover:text-primary">
                  {item.section}
                </span>

                <div className="absolute top-full left-0 mt-4 w-48 bg-white/90 backdrop-blur-lg shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="block px-5 py-3 text-sm text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="font-medium text-gray-300 hover:text-primary transition"
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden md:flex">
          <button className="primary-button">Book Now</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <RxCross2 size={28} /> : <RiMenu3Fill size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
          {headerText.map((item, index) =>
            item.type === "dropdown" ? (
              <div key={index}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-between w-full text-gray-200 font-medium"
                >
                  {item.section}
                  <span>{dropdownOpen ? "−" : "+"}</span>
                </button>

                {dropdownOpen && (
                  <div className="mt-3 ml-4 space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        onClick={() => setOpen(false)}
                        className="block text-gray-300 text-sm"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block text-gray-200 font-medium"
              >
                {item.name}
              </Link>
            ),
          )}

          <button className="w-full primary-button mt-4">Book Now</button>
        </div>
      )}
    </header>
  );
};

export default Header;

// src/pages/Header.jsx
// import React, { useState } from "react";
// import { headerText } from "../data/text";
// import logo from "../assets/landingPage/Logo.png";
// import { RiMenu3Fill } from "react-icons/ri";
// import { RxCross2 } from "react-icons/rx";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
//       <div className="container mx-auto px-5 md:px-10 py-4 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-3">
//           <img src={logo} alt="RiverAnSky Logo" className="h-14 w-auto" />
//         </Link>

//         <nav className="hidden md:flex items-center gap-8 ">
//           {headerText.map((item, index) =>
//             item.type === "dropdown" ? (
//               <div key={index} className="relative group">
//                 <span className="cursor-pointer font-medium text-gray-300 hover:text-primary">
//                   {item.section}
//                 </span>

//                 <div className="absolute top-full left-0 mt-4 w-48 bg-white/90 backdrop-blur-lg shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                   {item.items.map((subItem, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={subItem.path}
//                       className="block px-5 py-3 text-sm text-gray-800 hover:bg-primary/10 hover:text-primary rounded-lg"
//                     >
//                       {subItem.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className="font-medium text-gray-300 hover:text-primary transition"
//               >
//                 {item.name}
//               </Link>
//             ),
//           )}
//         </nav>

//         <div className="hidden md:flex">
//           <button className="primary-button">Book Now</button>
//         </div>

//         <button
//           className="md:hidden text-white"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? <RxCross2 size={28} /> : <RiMenu3Fill size={28} />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
//           {headerText.map((item, index) =>
//             item.type === "dropdown" ? (
//               <div key={index}>
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex justify-between w-full text-gray-200 font-medium"
//                 >
//                   {item.section}
//                   <span>{dropdownOpen ? "−" : "+"}</span>
//                 </button>

//                 {dropdownOpen && (
//                   <div className="mt-3 ml-4 space-y-2">
//                     {item.items.map((subItem, subIndex) => (
//                       <Link
//                         key={subIndex}
//                         to={subItem.path}
//                         onClick={() => setOpen(false)}
//                         className="block text-gray-300 text-sm"
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 key={index}
//                 to={item.path}
//                 onClick={() => setOpen(false)}
//                 className="block text-gray-200 font-medium"
//               >
//                 {item.name}
//               </Link>
//             ),
//           )}

//           <button className="w-full primary-button mt-4">Book Now</button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
