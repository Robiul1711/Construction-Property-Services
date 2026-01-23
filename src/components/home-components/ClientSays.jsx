import React, { useState, useRef, useEffect } from "react";
import { ImageProvider } from "../common/ImageProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useApiQuery } from "@/hooks/apiQuery";
import { IMG_URL } from "@/config/constant";

gsap.registerPlugin(ScrollTrigger);

const ClientSays = ({data}) => {

  const { data: testimonialData, isLoading } = useApiQuery({
    queryKey: ["testimonials-data"], // Just the base key
    url: "/testimonials-data",
  
  });
  // console.log(data?.data);
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);


  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? data?.data?.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === data?.data?.length - 1 ? 0 : prev + 1));
  };

  // 🔥 Scroll animation for header
  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  });

  // 🔥 Animate content on testimonial change
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0.6 },
      { opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [activeIndex]);

  return (
    <div ref={sectionRef} className="section-padding-x py-6 md:py-12">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
         {data?.client_title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
      {data?.client_content}
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative">
        <div className="bg-[#F9F9F9] rounded-2xl p-4 sm:p-8 md:p-12 lg:p-16">
          <div className="items-center flex flex-col md:flex-row gap-6 justify-between">
            {/* Left Side */}
            <div className="relative">
              {/* Progress Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 hidden md:flex items-center">
                <div className="flex flex-col gap-4">
                  {testimonialData?.data?.map((_, index) => (
                    <span
                      key={index}
                      className={`w-2 h-12 rounded-full transition-all duration-300 ${
                        index <= activeIndex ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div ref={contentRef} className="md:pl-8 lg:pl-12">
                {testimonialData?.data?.title &&
                  
                <p className="sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-medium mb-8 leading-relaxed max-w-5xl mx-auto">
                  { testimonialData?.data?.[activeIndex].title}
                </p>
                }

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonialData?.data?.[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonialData?.data?.[activeIndex].designation}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#131313] hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#131313] hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>

              {/* Mobile Dots */}
              <div className="flex gap-2 mt-6 md:hidden justify-center">
                {testimonialData?.data?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "w-8 bg-black" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full md:w-1/3">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200">
                <img
                  ref={imageRef}
                  src={IMG_URL + testimonialData?.data?.[activeIndex].image}
                  alt={testimonialData?.data?.[activeIndex].name}
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSays;
