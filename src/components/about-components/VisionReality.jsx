import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const VisionReality = ({ data }) => {
  const [playVideo, setPlayVideo] = useState(false);

  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const playBtnRef = useRef(null);
  const textRef = useRef([]);

  // Helper to convert YouTube URL to Embed URL
  const getEmbedUrl = (url) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
      : url;
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(videoRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    gsap.from(textRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    if (playBtnRef.current) {
      gsap.from(playBtnRef.current, {
        scale: 0.6,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  });

  return (
    <section
      ref={sectionRef}
      className="section-padding-x bg-white py-8 lg:py-16 flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
    >
      {/* Left Side */}
      <div ref={videoRef} className="w-full lg:w-1/2 relative">
        <div
          onClick={() => !playVideo && setPlayVideo(true)}
          className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer bg-black aspect-video md:aspect-auto md:h-[450px]"
        >
          {!playVideo ? (
            <>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Modern House Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group">
                <div
                  ref={playBtnRef}
                  className="w-16 h-16 md:w-20 md:h-20 bg-blue-400/90 rounded-full flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-110 transition-transform"
                >
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <iframe
              src={getEmbedUrl(data?.about_us_video_url)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          )}
        </div>

        <div className="absolute -inset-4 border-[12px] border-gray-100 -z-10 rounded-[40px] hidden md:block"></div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2">
        <div
          ref={(el) => (textRef.current[0] = el)}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          <span className="text-gray-500 font-medium text-sm tracking-wide uppercase">
            About Us
          </span>
        </div>

        <h2
          ref={(el) => (textRef.current[1] = el)}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          {data?.about_us_title}
        </h2>

        <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
          <p ref={(el) => (textRef.current[2] = el)}>
            {data?.about_us_content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionReality;