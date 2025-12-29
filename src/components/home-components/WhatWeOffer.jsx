import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const WhatWeOffer = () => {
  const categories = ["Renovation", "Property Management", "Construction"];

  const services = {
    Renovation: [
      {
        id: 1,
        title: "Structural & Custom Work",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      },
      {
        id: 2,
        title: "Interior & Finishing Work",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
      },
      {
        id: 3,
        title: "Home & Space Renovation",
        image:
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&q=80",
      },
      {
        id: 4,
        title: "Utility & Technical Services",
        image:
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
      },
      {
        id: 5,
        title: "Commercial Renovation",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      },
    ],
    "Property Management": [
      {
        id: 6,
        title: "Property Maintenance",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      },
      {
        id: 7,
        title: "Tenant Services",
        image:
          "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
      },
      {
        id: 8,
        title: "Property Inspection",
        image:
          "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80",
      },
      {
        id: 9,
        title: "Lease Management",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
      },
      {
        id: 10,
        title: "Property Marketing",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      },
    ],
    Construction: [
      {
        id: 11,
        title: "New Construction",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      },
      {
        id: 12,
        title: "Foundation Work",
        image:
          "https://images.unsplash.com/photo-1590856029620-23a996ce7dcb?w=600&q=80",
      },
      {
        id: 13,
        title: "Framing & Structure",
        image:
          "https://images.unsplash.com/photo-1572722235111-4c37e3a850d9?w=600&q=80",
      },
      {
        id: 14,
        title: "Roofing Services",
        image:
          "https://images.unsplash.com/photo-1632679505704-e5e1c7930e8f?w=600&q=80",
      },
      {
        id: 15,
        title: "HVAC Installation",
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Renovation");

  return (
    <section className="section-padding-x  bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
          What We Offer
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600">
          Comprehensive services designed to build, transform, and manage
          properties with care and expertise.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "border border-gray-300 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Swiper Container */}
      <div className="relative px-4">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={5}
          loop={true}
          grabCursor={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -50,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          className="h-[480px] w-full"
          initialSlide={2}
        >
          {services[activeCategory].map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive, isNext, isPrev }) => {
                let sizeClass = "scale-75";
                let widthClass = "w-48";
                let opacityClass = "opacity-60";
                let zIndexClass = "z-10";

                if (isActive) {
                  sizeClass = "scale-110";
                  widthClass = "w-72";
                  opacityClass = "opacity-100";
                  zIndexClass = "z-30";
                } else if (isNext || isPrev) {
                  sizeClass = "scale-90";
                  widthClass = "w-56";
                  opacityClass = "opacity-80";
                  zIndexClass = "z-20";
                } else {
                  sizeClass = "scale-75";
                  widthClass = "w-48";
                  opacityClass = "opacity-60";
                  zIndexClass = "z-10";
                }

                return (
                  <div
                    className={`flex flex-col items-center transition-all duration-300 ${sizeClass} ${zIndexClass}`}
                  >
                    <div
                      className={`${widthClass} aspect-square rounded-2xl overflow-hidden bg-white shadow-xl transition-all duration-300 ${opacityClass}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p
                      className={`mt-4 text-sm font-medium text-center transition-all duration-300 ${
                        isActive ? "text-black font-semibold" : "text-gray-600"
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
          <button className="swiper-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="swiper-next w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
