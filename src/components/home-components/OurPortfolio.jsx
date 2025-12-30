import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ImageProvider } from "../common/ImageProvider";

const OurPortfolio = () => {
  const slides = [
    { id: 1, img: ImageProvider.portfolio },
    { id: 2, img: ImageProvider.portfolio1 },
    { id: 3, img: ImageProvider.portfolio2 },
    { id: 4, img: ImageProvider.portfolio3 },
    { id: 5, img: ImageProvider.portfolio4 },
    { id: 6, img: ImageProvider.portfolio5 },
  ];

  const safeSlides = [...slides, ...slides];

  return (
    <section className="section-padding-x py-12 lg:py-20 bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 tracking-tight">
          Our Portfolio
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-500 lg:text-lg">
          Explore our portfolio to see the projects we’ve transformed. From
          renovation and construction to property management, we deliver
          quality, creativity, and excellence in every space.
        </p>
      </div>

      <div className="relative panorama-container overflow-hidden max-w-[1600px] mx-auto">
        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          loopAdditionalSlides={5}
          slidesPerView={5} // ✅ keeps desktop EXACT
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          coverflowEffect={{
            rotate: -25,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          className="!pt-10 !pb-24"
        >
          {safeSlides.map((slide, index) => (
            <SwiperSlide
              key={`${slide.id}-${index}`}
              className="transition-all duration-500 py-6"
            >
              {({ isActive }) => (
                <div
                  className={`
                    relative h-[350px] md:h-[500px]
                    rounded-[2.5rem] overflow-hidden shadow-xl
                    transition-all duration-700
                    ${isActive ? "scale-105" : "scale-90"}
                  `}
                >
                  <img
                    src={slide.img}
                    alt="Portfolio Project"
                    className="w-full h-full object-cover"
                  />
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/20 transition-opacity" />
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6 relative z-30 mb-5">
          <button className="btn-prev w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all bg-white shadow-sm active:scale-90 cursor-pointer">
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <button className="btn-next w-14 h-14 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-all shadow-xl active:scale-90 cursor-pointer">
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .panorama-container .swiper {
          perspective: 2500px !important;
          overflow: visible !important;
        }

        .swiper-slide {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .swiper-slide-active {
          z-index: 50 !important;
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          border-radius: 2.5rem;
        }
      `}</style>
    </section>
  );
};

export default OurPortfolio;
