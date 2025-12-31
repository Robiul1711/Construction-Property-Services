import React, { useState, useRef, useEffect } from "react";
import { ImageProvider } from "../common/ImageProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ClientSays = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "The team was professional, efficient, and paid attention to every detail. From planning to execution, everything was smooth and stress-free. Highly recommended!",
      name: "Kabir Nishat",
      position: "Senior VP, Sales and Service, Blue Nile",
      image: ImageProvider.client,
    },
    {
      id: 2,
      text: "Outstanding service from start to finish. The attention to detail and commitment to quality exceeded our expectations. We couldn't be happier with the results!",
      name: "Sarah Johnson",
      position: "CEO, TechStart Innovations",
      image: ImageProvider.client1,
    },
    {
      id: 3,
      text: "Exceptional work ethic and professionalism. They delivered on time and within budget while maintaining the highest standards. I would highly recommend their services!",
      name: "Michael Chen",
      position: "Director of Operations, BuildRight Co.",
      image: ImageProvider.client2,
    },
    {
      id: 4,
      text: "Outstanding service from start to finish. The attention to detail and commitment to quality exceeded our expectations. We couldn't be happier with the results!",
      name: "Sarah Johnson",
      position: "CEO, TechStart Innovations",
      image: ImageProvider.client3,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Hear directly from our clients about their experiences with our
          renovation, construction, and property management services. We take
          pride in delivering quality, reliability, and results that exceed
          expectations
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative">
        <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="items-center flex flex-col md:flex-row gap-6">
            {/* Left Side */}
            <div className="relative">
              {/* Progress Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-2 hidden md:flex items-center">
                <div className="flex flex-col gap-4">
                  {testimonials.map((_, index) => (
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
                <p className="sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-medium mb-8 leading-relaxed max-w-5xl mx-auto">
                  {testimonials[activeIndex].text}
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeIndex].position}
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
                {testimonials.map((_, index) => (
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
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
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
