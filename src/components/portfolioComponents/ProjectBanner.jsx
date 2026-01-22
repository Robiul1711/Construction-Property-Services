import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import mainImg from "@/assets/images/p1.png";
import leftImg from "@/assets/images/p2.png";
import rightImg from "@/assets/images/p3.png";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ProjectBanner = () => {
  const swiperRef = useRef(null);

  const sliderData = [
    { id: 1, title: "Kings Down", img: mainImg, type: "Luxury Villa" },
    { id: 2, title: "Ocean View", img: leftImg, type: "Beachfront Mall" },
    { id: 3, title: "Modern Loft", img: rightImg, type: "Urban Living" },
  ];

  return (
    <section className="section-padding-x mt-20 md:mt-32 lg:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Side: Header & Small Card */}
        <div className="lg:col-span-3 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-10 h-[2px] bg-[#8EBAE3]" />
              <span className="text-[#8EBAE3] text-sm font-bold uppercase tracking-widest">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-gray-900 leading-tight">
              Our Work, <br />
              <span className="text-[#8EBAE3]">Your Inspiration:</span>
              <br />
              <span className="text-xl sm:text-2xl font-medium text-gray-400 mt-2 block italic">
                Innovative & Timeless
              </span>
            </h2>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-lg group relative h-[200px] sm:h-[300px] lg:h-[220px]">
            <img
              src={leftImg}
              alt="Interior"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white font-bold tracking-wider uppercase text-xs">
                Architectural Detail
              </span>
            </div>
          </div>
        </div>

        {/* Center: Main Interactive Swiper */}
        <div className="lg:col-span-6 relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl group min-h-[400px] sm:min-h-[500px] lg:h-full">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full h-full"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating Content */}
                  <div className="absolute top-8 left-8 md:top-12 md:left-12">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest mb-3 border border-white/20">
                      {item.type}
                    </span>
                    <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>

                  {/* Dynamic Action Button */}
                  <button className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 w-16 h-16 bg-[#8EBAE3] text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-white hover:text-[#8EBAE3] transition-all duration-500 transform hover:rotate-12 group/btn">
                    <ArrowUpRight className="w-8 h-8 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side: Controls & Small Card */}
        <div className="lg:col-span-3 flex flex-col justify-between gap-6">
          {/* Enhanced Navigation Controls */}
          <div className="flex lg:flex-col gap-4 w-full">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex-1 py-6 md:py-8 lg:py-10 rounded-3xl bg-gray-100 hover:bg-[#8EBAE3] text-gray-900 hover:text-white flex items-center justify-center transition-all duration-500 group shadow-sm hover:shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="flex-1 py-6 md:py-8 lg:py-10 rounded-3xl bg-gray-900 border border-transparent hover:border-gray-900 hover:bg-white text-white hover:text-gray-900 flex items-center justify-center transition-all duration-500 group shadow-lg hover:shadow-2xl"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Small Card */}
          <div className="rounded-[2rem] overflow-hidden shadow-lg group relative h-[200px] sm:h-[300px] lg:h-[220px]">
            <img
              src={rightImg}
              alt="Staircase"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <span className="text-white font-bold tracking-wider uppercase text-xs">
                Exquisite Finishes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
