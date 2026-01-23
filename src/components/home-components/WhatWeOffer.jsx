import React, { useRef, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useApiQuery } from "@/hooks/apiQuery";
import { IMG_URL } from "@/config/constant";

const WhatWeOffer = () => {
  // 1. Fetch Categories
  const { data: catData, isLoading: catLoading } = useApiQuery({
    queryKey: ["service-category"],
    url: "/service-category",
  });

  // 2. Fetch All Services
  const { data: servicesData, isLoading: servicesLoading } = useApiQuery({
    queryKey: ["service-data"],
    url: "/service-data",
  });

  // 3. State for active category ID
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  // Set default category once data loads
  React.useEffect(() => {
    if (catData?.data?.length > 0 && !activeCategoryId) {
      setActiveCategoryId(catData.data[0].id);
    }
  }, [catData, activeCategoryId]);

  // 4. Memoized filtering logic
  const filteredServices = useMemo(() => {
    if (!servicesData?.data) return [];
    // Adjust 'category_id' or 'categoryId' based on your actual API field name
    return servicesData.data.filter(
      (service) => service.category_id === activeCategoryId
    );
  }, [servicesData, activeCategoryId]);

  // GSAP Refs
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
      },
    });
  });

  if (catLoading || servicesLoading) return <div className="py-20 text-center">Loading...</div>;

  return (
    <section ref={sectionRef} className="section-padding-x py-6 bg-white">
      <div className="text-center mb-10">
        <h2 ref={titleRef} className="text-4xl lg:text-5xl font-medium mb-4">
          What We Offer
        </h2>
        <p ref={categoryRef} className="max-w-4xl mx-auto text-gray-600">
          Comprehensive services designed to build, transform, and manage properties.
        </p>
      </div>

      {/* Categories Tabs */}
      <div ref={buttonRef} className="flex flex-wrap justify-center gap-3 mb-12">
        {catData?.data?.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
            className={`px-5 py-2 rounded-full text-sm transition cursor-pointer ${
              activeCategoryId === cat.id
                ? "bg-black text-white"
                : "border border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Swiper Displaying Filtered Data */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          centeredSlides
          loop={filteredServices.length > 3} // Only loop if there are enough items
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full py-12"
        >
          {filteredServices.map((item) => (
            <SwiperSlide key={item.id} className="py-10">
              {({ isActive }) => (
                <div className={`flex flex-col items-center transition-all duration-500 ${isActive ? "scale-110" : "scale-90 opacity-60"}`}>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${isActive ? "w-64 h-64" : "w-48 h-48"}`}>
                    <img
                      src={IMG_URL + item.image} // Ensure your API returns 'image' or 'thumbnail'
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className={`mt-4 text-center ${isActive ? "font-semibold text-black" : "text-gray-500"}`}>
                    {item.title}
                  </p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="swiper-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all">
            <ChevronLeft />
          </button>
          <button className="swiper-next w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;