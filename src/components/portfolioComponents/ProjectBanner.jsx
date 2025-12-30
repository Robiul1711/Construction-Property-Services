import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import mainImg from "@/assets/images/p1.png";
import leftImg from "@/assets/images/p2.png";
import rightImg from "@/assets/images/p3.png";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectBanner = () => {
  // Use a ref to control swiper from your custom external buttons
  const swiperRef = useRef(null);

  // Example data for the slider
  const sliderData = [
    { id: 1, title: "Kings Down", img: mainImg },
    { id: 2, title: "Ocean View", img: leftImg },
    { id: 3, title: "Modern Loft", img: rightImg },
  ];

  return (
    <section className="section-padding-x  mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Text */}
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-3xl font-semibold leading-snug">
            Our Work, Your Inspiration:
            <br />
            <span className="font-bold">Innovative & Timeless Projects</span>
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={leftImg}
              alt="Interior"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>

        {/* Center Main Card (Swiper) */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl group">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            autoplay={{ delay: 5000 }}
            className="w-full h-[500px]"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full h-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Title */}
                  <h3 className="absolute top-6 left-6 text-white text-3xl font-semibold">
                    {item.title}
                  </h3>

                  {/* Arrow Button */}
                  <button className="absolute top-6 right-6 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                    <ArrowUpRight className="text-black" />
                  </button>

                  {/* Dot (Optional: can be replaced by actual Swiper pagination) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-80" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Controls */}
        <div className="lg:col-span-3 flex flex-col items-center gap-3">
          
          {/* Nav Buttons linked to Swiper Ref */}
          <div className="flex flex-col w-full gap-3">
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="w-full h-22 py-8 rounded-xl bg-black text-white flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronRight />
            </button>
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-full h-22 py-8 rounded-xl bg-blue-100 text-black flex items-center justify-center hover:scale-105 transition"
            >
              <ChevronLeft />
            </button>
          </div>

          {/* Right Small Card */}
          <div className="rounded-2xl overflow-hidden shadow-md w-full">
            <img
              src={rightImg}
              alt="Staircase"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectBanner;