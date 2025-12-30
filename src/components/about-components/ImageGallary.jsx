import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const ImageGallery = () => {
  const images = [
    "https://picsum.photos/id/1018/1000/700",
    "https://picsum.photos/id/1015/1000/700",
    "https://picsum.photos/id/1016/1000/700",
    "https://picsum.photos/id/1024/1000/700",
    "https://picsum.photos/id/1031/1000/700",
    "https://picsum.photos/id/1036/1000/700",
    "https://picsum.photos/id/1040/1000/700",
    "https://picsum.photos/id/1050/1000/700",
    "https://picsum.photos/id/1060/1000/700",
    "https://picsum.photos/id/1076/1000/700",
  ];

  return (
    <div className="w-full py-10 bg-white overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="py-12">
            {({ isActive }) => (
              <div
                className={`transition-all duration-500 ease-in-out rounded-[2.5rem] overflow-hidden
                  ${isActive ? "scale-105 z-10 shadow" : "scale-90 "}`}
              >
                <img
                  src={src}
                  alt={`Gallery Slide ${index}`}
                  className="w-full h-[250px] md:h-[350px] object-cover"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
