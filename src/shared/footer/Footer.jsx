import { ImageProvider } from "@/components/common/ImageProvider";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="
        section-padding-x 
        text-gray-400 
        py-10 sm:py-12 lg:pt-28 
        px-4 sm:px-6 
        z-20
        relative
        bg-no-repeat 
        bg-cover
        bg-center
        lg:bg-top
      "
      style={{
        backgroundImage: `url(${ImageProvider.footer})`,
      }}
    >
      <div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Website Page */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">
              Website Page
            </h3>
            <ul className="space-y-2 text-[#FFFFFF99]">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm hover:text-white hover:underline transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">Security</h3>
            <ul className="space-y-2 text-[#FFFFFF99]">
              {["FAQ", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-white hover:underline transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-[#FFFFFF99]">
              {[
                "Contact",
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-white hover:underline transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">
              Subscribe to our Newsletter
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-zinc-900 border border-white rounded-full p-3 text-white placeholder-gray-500 focus:outline-none focus:border-zinc-700"
              />
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>

            {/* Social Icons (Desktop Only) */}
            <div className="hidden md:flex items-center gap-4 text-white mt-4">
              <div className="border border-white rounded-full py-2 px-2.5 cursor-pointer hover:opacity-80">
                <img src={ImageProvider.facebook} alt="facebook" />
              </div>
              <div className="border border-white rounded-full p-1.5 cursor-pointer hover:opacity-80">
                <img src={ImageProvider.instagram} alt="instagram" />
              </div>
              <div className="border border-white rounded-full p-1.5 cursor-pointer hover:opacity-80">
                <img src={ImageProvider.youtube} alt="youtube" />
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center mb-12">
          <div className="font-sans font-semibold text-[72px] sm:text-[120px] md:text-[180px] lg:text-[247.46px] leading-[1.1] tracking-[0.25em] md:tracking-[0.37em] text-zinc-800 text-center select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            LOGO
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center text-sm lg:text-lg text-[#C7C7C7] border-t border-zinc-900 pt-6">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} WebVortex Ltd. All Rights Reserved
          </p>
          <p className="text-center md:text-right">info@webvortexltd.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
