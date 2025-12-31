import React, { useRef } from "react";
import { ImageProvider } from "../common/ImageProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ReadyProject = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const birdRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Content animation
    gsap.from(contentRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // Bird animation (desktop only)
    if (birdRef.current) {
      gsap.from(birdRef.current, {
        y: -20,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  });

  return (
    <div
      ref={sectionRef}
      className="section-padding-x relative min-h-[70vh] sm:min-h-screen w-full overflow-hidden bg-gradient-to-b from-transparent to-[#cad7e4] -mb-10 -z-30"
    >
      <div>
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-cover"
          src={ImageProvider.ready}
          alt="banner"
        />

        {/* Bird Image */}
        <div
          ref={birdRef}
          className="absolute top-6 right-4 sm:right-6 lg:right-10 hidden lg:block"
        >
          <img src={ImageProvider.bird} alt="bird" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex mt-6">
          <div ref={contentRef} className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium my-4">
              Ready to Start Your Project?
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#131313] mb-6 mt-6 leading-relaxed max-w-lg">
              Whether you’re planning a renovation, new construction, or need
              reliable property management, our team is ready to help. Contact
              us today to discuss your ideas and let’s turn your vision into
              reality.
            </p>

            <button className="bg-[#131313] text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-600 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyProject;
