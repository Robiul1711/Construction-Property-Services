import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useApiQuery } from "@/hooks/apiQuery";
import { IMG_URL } from "@/config/constant";
import { Link } from "react-router-dom";

const Leadership = () => {
  const { data, isLoading } = useApiQuery({
    queryKey: ["team-data"],
    url: "/team-data",
  });

  if (isLoading) {
    return (
      <section className="section-padding-x py-12 lg:py-20 bg-[#FBFBFC]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 rounded-3xl h-[450px]"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding-x py-12 lg:py-24 bg-[#FBFBFC]">
      {/* Header */}
      <div className="text-center mb-16 lg:mb-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8EBAE3] animate-pulse" />
          <span className="text-[#8EBAE3] text-sm font-semibold tracking-[0.2em] uppercase">
            Our Expertise
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Meet Our <span className="text-[#8EBAE3]">Leadership</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed">
          Our experienced leadership team brings decades of combined expertise
          in property management, construction, and client relations.
        </p>
      </div>

      {/* Card Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data?.data?.map((leader, index) => (
          <div
            key={index}
            className="group relative bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(142,186,227,0.25)]"
          >
            {/* Image Container with Overlay */}
            <div className="relative h-[340px] w-full overflow-hidden">
              <img
                src={IMG_URL + leader.image}
                alt={leader.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {leader.linkekdin && (
                    <Link
                      to={leader.linkekdin}
                      target="_blank"
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#8EBAE3] transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  )}
                  {leader.facebook && (
                    <Link
                      to={leader.facebook}
                      target="_blank"
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#8EBAE3] transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </Link>
                  )}
                  {leader.instagram && (
                    <Link
                      to={leader.instagram}
                      target="_blank"
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#8EBAE3] transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-[#8EBAE3] transition-colors">
                  {leader.name}
                </h3>
                <p className="text-[#8EBAE3] font-semibold text-sm uppercase tracking-widest">
                  {leader.designation}
                </p>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {leader.bio}
              </p>

              {/* Fallback Social Links (visible on mobile/small screens if hover isn't natural) */}
              <div className="mt-8 flex gap-3 lg:hidden">
                {leader.linkekdin && (
                  <Link
                    to={leader.linkekdin}
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-[#8EBAE3]/10 flex items-center justify-center text-[#8EBAE3]"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                )}
                {leader.facebook && (
                  <Link
                    to={leader.facebook}
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-[#8EBAE3]/10 flex items-center justify-center text-[#8EBAE3]"
                  >
                    <Facebook className="w-4 h-4" />
                  </Link>
                )}
                {leader.instagram && (
                  <Link
                    to={leader.instagram}
                    target="_blank"
                    className="w-8 h-8 rounded-lg bg-[#8EBAE3]/10 flex items-center justify-center text-[#8EBAE3]"
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
