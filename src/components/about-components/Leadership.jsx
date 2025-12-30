import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { Linkedin } from "lucide-react";
import { ImageProvider } from "../common/ImageProvider";

import "swiper/css";

const leaders = [
  {
    name: "Michael Harrison",
    role: "CEO & Founder",
    image: ImageProvider.client,
    bio: "25+ years in property development and management. Founded PrimeProperty with a vision to transform the industry.",
  },
  {
    name: "Sarah Collins",
    role: "COO",
    image: ImageProvider.client1,
    bio: "Expert in operations and construction strategy with decades of leadership experience.",
  },
  {
    name: "Daniel Wright",
    role: "CFO",
    image: ImageProvider.client2,
    bio: "Financial strategist focused on sustainable growth and long-term value creation.",
  },
  {
    name: "Emily Turner",
    role: "Head of Client Relations",
    image: ImageProvider.client3,
    bio: "Client-focused leader ensuring excellence across every project we deliver.",
  },
  {
    name: "James Anderson",
    role: "Director of Construction",
    image: ImageProvider.client4,
    bio: "Leads complex construction projects with precision, safety, and innovation.",
  },
  {
    name: "Olivia Martin",
    role: "Head of Strategy",
    image: ImageProvider.client1,
    bio: "Drives long-term strategy and innovation to ensure sustainable company growth.",
  },
];

const Leadership = () => {
  return (
    <section className="section-padding-x py-12 lg:py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#8EBAE3]" />
          <span className="text-[#8EBAE3] text-sm font-medium uppercase">
            Our Team
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4">
          Meet Our Leadership
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500">
          Our experienced leadership team brings decades of combined expertise
          in property management, construction, and client relations.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Mousewheel]}
        grabCursor
        loop={true}
        mousewheel
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-4"
      >
        {leaders.map((leader, index) => (
          <SwiperSlide key={index} className="py-6">
            <div
              className="
                h-[520px]
                bg-white border border-gray-100 rounded-2xl
                overflow-hidden
                transition-all duration-300
                hover:shadow-xl
              "
            >
              {/* Image */}
              <div className="h-[260px] w-full overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[260px]">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {leader.name}
                  </h3>

                  <p className="text-sm text-[#8EBAE3] font-medium mb-3">
                    {leader.role}
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                {/* Social */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#8EBAE3]/15 flex items-center justify-center hover:bg-[#8EBAE3]/25 transition"
                  >
                    <Linkedin className="w-4 h-4 text-[#8EBAE3]" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Leadership;
