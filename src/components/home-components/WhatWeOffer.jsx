import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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

  return (
    <section className="section-padding-x py-6 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-medium mb-4">What We Offer</h2>
        <p className="max-w-4xl mx-auto text-gray-600">
          Comprehensive services designed to build, transform, and manage
          properties with care and expertise.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm transition cursor-pointer ${
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
          slidesPerView={5}
          centeredSlides
          loop
          speed={600}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="w-full py-16"
        >
          {services[activeCategory].map((item) => (
            <SwiperSlide key={item.id} className="py-12">
              {({ isActive, isPrev, isNext }) => {
                let scale = "scale-90 opacity-60";
                let size = "w-48 h-48";

                if (isActive) {
                  scale = "scale-110 opacity-100";
                  size = "w-64 h-64";
                } else if (isPrev || isNext) {
                  scale = "scale-100 opacity-80";
                  size = "w-56 h-56";
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
        <div className="flex justify-center items-center gap-4">
          <button className="swiper-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#131313] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
            <ChevronLeft />
          </button>
          <button className="swiper-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#131313] hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
