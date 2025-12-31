import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const generateServices = (prefix) =>
  Array.from({ length: 20 }, (_, i) => ({
    id: `${prefix}-${i}`,
    title: `${prefix} Service ${i + 1}`,
    image: `https://picsum.photos/seed/${prefix}${i}/600/600`,
  }));

const WhatWeOffer = () => {
  const categories = ["Renovation", "Property Management", "Construction"];

  const services = {
    Renovation: generateServices("Renovation"),
    "Property Management": generateServices("Property"),
    Construction: generateServices("Construction"),
  };

  const [activeCategory, setActiveCategory] = useState("Renovation");

  // 🔥 GSAP refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from([titleRef.current, categoryRef.current, buttonRef.current], {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <section ref={sectionRef} className="section-padding-x py-6 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 ref={titleRef} className="text-4xl lg:text-5xl font-medium mb-4">
          What We Offer
        </h2>
        <p ref={categoryRef} className="max-w-4xl mx-auto text-gray-600">
          Comprehensive services designed to build, transform, and manage
          properties with care and expertise.
        </p>
      </div>

      {/* Categories */}
      <div
        ref={buttonRef}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 sm:px-6 py-2 rounded-full text-sm transition cursor-pointer ${
              activeCategory === cat
                ? "bg-black text-white"
                : "border border-gray-300 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          centeredSlides
          loop
          speed={600}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.6,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full py-12 sm:py-16"
        >
          {services[activeCategory].map((item) => (
            <SwiperSlide key={item.id} className="py-10">
              {({ isActive, isPrev, isNext }) => {
                let scale = "scale-90";
                let size = "w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48";

                if (isActive) {
                  scale = "scale-110";
                  size = "w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64";
                } else if (isPrev || isNext) {
                  scale = "scale-100";
                  size = "w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56";
                }

                return (
                  <div
                    className={`flex flex-col items-center transition-all duration-500 ${scale}`}
                  >
                    <div
                      className={`rounded-2xl overflow-hidden shadow ${size}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p
                      className={`mt-4 text-sm text-center ${
                        isActive ? "font-semibold text-black" : "text-gray-500"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button className="swiper-prev w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#131313] hover:text-white transition-all cursor-pointer">
            <ChevronLeft />
          </button>
          <button className="swiper-next w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#131313] hover:text-white transition-all cursor-pointer">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
