// import React from "react";
// import { whyChooseUsData } from "../../data/text";
// import AOSWrapper from "../../common/AOSWrapper";

// const WhyChooseUs = () => {
//   return (
//     <div className="why-choose-use ">
//       <div className="container mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-20">
//         <div className="">
//           {whyChooseUsData.map((item, i) => (
//             <AOSWrapper
//               key={i}
//               animation="fade-left"
//               delay={400}
//               duration={400}
//             >
//               <div>
//                 <div className="flex items-center gap-4 bg-primary-50">
//                   <img src={item.img} alt={item.title} />
//                   <div>
//                     <h3>{item.title}</h3>
//                     <p>{item.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             </AOSWrapper>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React from "react";
import { whyChooseUsData } from "../../data/text";
import AOSWrapper from "../../common/AOSWrapper";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us relative bg-fixed bg-center bg-cover">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-5 md:px-10lg:px-20 py-10 flex items-center flex-col lg:flex-row">
        <div className="relative flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-white">
            wehy choos us
          </h1>
          <p className="text-gray-50 font-body text-base md:text-lg leading-relaxed">
            Nestled in the serene surroundings of Rajur Bahula near Nashik, our
            resort blends modern comfort with the calm of nature to create a
            peaceful escape from the city.
          </p>
          <p className="text-gray-50 font-body text-base md:text-lg leading-relaxed">
            Spacious, well‑appointed rooms, lush lawns, and a riverside setting
            make it perfect for family vacations, romantic getaways, destination
            weddings, and corporate retreats.
          </p>
        </div>
        <div className="relative container mx-auto px-5 md:px-10 lg:px-20 py-14 md:py-24">
          <div className="max-w-5xl mx-auto grid gap-6 md:gap-8">
            {whyChooseUsData.map((item, i) => (
              <AOSWrapper
                key={i}
                animation="fade-left"
                delay={200 + i * 100}
                duration={600}
              >
                <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 md:p-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[180px] h-[180px] md:w-[150px] md:h-[150px] object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-100/90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AOSWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
