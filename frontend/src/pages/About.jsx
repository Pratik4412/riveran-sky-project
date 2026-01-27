import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutOne from "../assets/aboutPage/abot-sec-1.webp";
import aboutTwo from "../assets/aboutPage/about-sec-2.webp";
import OurStory from "../components/aboutpage/OurStory";
import AminityAbout from "../components/aboutpage/AminityAbout";
import weOffer from "../assets/aboutPage/weOffer.webp";
import { faqs, seoData } from "../data/text";
import SEO from "../common/SEO";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-left > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-left",
          start: "top 80%",
        },
      });

      gsap.from(".about-img-1", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-images",
          start: "top 80%",
        },
      });

      gsap.from(".about-img-2", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-images",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <SEO
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        ogImage={seoData.about.ogImage}
        canonical={seoData.about.canonical}
        ogUrl={seoData.about.canonical}
      />
      <div>
        <section className="about-us">
          <div className="absolute bg-black/50 w-full h-[70vh]" />
          <div className="w-full h-full flex items-center justify-center relative">
            <h1 className="text-5xl lg:text-7xl font-heading font-semibold text-white text-center">
              {" "}
              ABOUT RIVER
              <span className="text-primary-600 font-normal">AN</span>
              SKY
            </h1>
          </div>
        </section>
        <section ref={sectionRef} className="bg-white">
          <div className="container mx-auto px-5 md:px-10 lg:px-20 py-14 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-14">
              {/* LEFT CONTENT */}
              <div className="about-left w-full lg:w-1/2">
                <h5 className="text-sm tracking-widest text-primary mb-4">
                  WELCOME TO RIVERANSKY
                </h5>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-dark leading-tight mb-6">
                  We Are The Best Host <br />
                  For Your Comfort
                </h2>

                <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed mb-4">
                  With a new concept of space and freedom, we have redefined the
                  idea of luxury, taking it to the highest level.
                </p>

                <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed border-l-4 border-primary pl-4">
                  Experience luxurious living in our thoughtfully designed rooms
                  and suites. From plush bedding to modern amenities, each space
                  is a haven of comfort and elegance.
                </p>
              </div>

              {/* RIGHT IMAGES */}
              <div className="about-images w-full lg:w-1/2 flex flex-col md:flex-row gap-3 md:gap-6">
                <div className="about-img-1 w-full lg:w-1/2">
                  <img
                    src={aboutOne}
                    alt="Luxury Resort"
                    className="w-full h-[420px] object-cover rounded-sm"
                  />
                </div>

                <div className="about-img-2 w-full lg:w-1/2 mt-10">
                  <img
                    src={aboutTwo}
                    alt="Luxury Interior"
                    className="w-full h-[420px] object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <OurStory />
        <AminityAbout />
        <section className="container mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20">
          <div className="flex items-center gap-10">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-white">
                The Best Summer Vacation <br className="hidden md:block" />{" "}
                Tours For Your Family
              </h1>
              <div className="w-full">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-300 py-6 cursor-pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex gap-2 items-center">
                      <span className="text-2xl font-light">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                      <h4 className="text-lg md:text-xl font-medium text-dark">
                        {faq.question}
                      </h4>
                    </div>

                    {/* ANSWER */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-600 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex items-center justify-end">
                <img src={weOffer} alt="weoffter" className="w-[400px]" />
              </div>
              <div className="absolute left-10 bottom-16 flex items-center gap-6">
                <div className="flex flex-col gap-2 justify-center items-center w-64 h-44 bg-primary-600 animate-bounce-slow">
                  <h6 className="text-lg font-body text-white ">Piople</h6>
                  <h1 className="text-5xl font-heading text-white  font-semibold">
                    120+
                  </h1>
                  <p className="text-lg font-body text-white ">Hotel Staff</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-64 h-44 bg-white animate-bounce-slow">
                  <h6 className="text-lg font-body text-primary ">
                    Wold Offices
                  </h6>
                  <h1 className="text-5xl font-heading text-dark font-semibold">
                    16+
                  </h1>
                  <p className="text-lg font-body text-dark ">Chain Hotels</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
