import React from "react";
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";

const data = [
  { id: 1, image: s1 },
  {
    id: 2,
    image: s2,
    title: "Commercial Services",
    desc: "Professional construction solutions that support business growth, efficiency, and long-term performance.",
  },
  { id: 3, image: s3 },
  {
    id: 4,
    image: s4,
    title: "Residential Services",
    desc: "Reliable construction and renovation solutions designed to enhance your home, comfort, and lifestyle.",
  },
];

const ServiceBanner = () => {
  return (
    <div className="section-padding-x section-padding-y mt-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-14 flex justify-end">Our services</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {data.map((item) => {
          // 2nd item → content bottom
          if (item.id === 2) {
            return (
              <div key={item.id} className="flex flex-col gap-6">
                <img src={item.image} alt={item.title} />

                <div>
                  <h1 className="text-3xl font-semibold">{item.title}</h1>
                  <p className="mt-4 text-gray-600">{item.desc}</p>
                </div>
              </div>
            );
          }

          // 4th item → content top
          if (item.id === 4) {
            return (
              <div key={item.id} className="flex flex-col gap-6">
                <div>
                  <h1 className="text-3xl font-semibold">{item.title}</h1>
                  <p className="mt-4 text-gray-600">{item.desc}</p>
                </div>

                <img src={item.image} alt={item.title} />
              </div>
            );
          }

          // Default (1st & 3rd)
          return (
            <div
              key={item.id}
              className="flex items-center justify-center"
            >
              <img src={item.image} alt="service" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceBanner;
