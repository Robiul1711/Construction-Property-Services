import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Heart,
  Users,
  Target,
} from "lucide-react";

import "swiper/css";
import { useApiQuery } from "@/hooks/apiQuery";
import { IMG_URL } from "@/config/constant";

const values = [
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in every project, ensuring exceptional results.",
    icon: Award,
  },
  {
    title: "Reliability",
    desc: "Our clients trust us to deliver consistently, on time, and with complete transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    desc: "We embrace modern technologies and methods to deliver smarter solutions.",
    icon: Lightbulb,
  },
  {
    title: "Client Focus",
    desc: "Your success is our success. We tailor solutions to your unique needs.",
    icon: Heart,
  },
  {
    title: "Collaboration",
    desc: "We believe strong partnerships create stronger outcomes.",
    icon: Users,
  },
  {
    title: "Purpose Driven",
    desc: "Every decision we make is guided by long-term value and integrity.",
    icon: Target,
  },
];

const DrivesUs = () => {
  const { data, isLoading } = useApiQuery({
    queryKey: ["about-value"], // Just the base key
    url: "/about-value",
  
  });
  console.log(data?.data);
  return (
    <section className="section-padding-x py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#8EBAE3]" />
          <span className="text-[#8EBAE3] text-sm font-medium uppercase">
            Our Values
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          What Drives Us
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500">
          Our core values guide every decision we make and every project we
          undertake.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Mousewheel]}
        grabCursor
        mousewheel
        spaceBetween={20}
        loop={true}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-4"
      >
        {data?.data?.map((item, index) => {
          // const Icon = item.icon;
          return (
            <SwiperSlide key={index} className="py-4">
<div className="h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
  <div className="w-full mx-auto flex justify-center">

  {/* Icon Container - Fixed for Perfect Centering */}
  <div className="w-12 h-12 bg-[#8EBAE3] rounded-lg flex items-center justify-center mb-6 overflow-hidden">
    <img 
      src={IMG_URL + item.image} 
      alt={item.title} 
      className="max-w-[70%] max-h-[70%] object-contain block mx-auto group-hover:scale-110 transition-transform duration-300" 
    />
  </div>
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
    {item.title}
  </h3>

  {/* Description */}
  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 text-center">
    {item.content}
  </p>
</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default DrivesUs;
