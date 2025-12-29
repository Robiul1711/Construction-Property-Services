import { ImageProvider } from "@/components/common/ImageProvider";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="section-padding-x section-padding-y text-gray-400 py-12 px-6"
      style={{ backgroundImage: `url(${ImageProvider.footer})` }}
    >
      <div className="">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product/Service Column */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">
              Website Page
            </h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-lg">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Security Column */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">Security</h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-lg">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-lg">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white hover:underline transition"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h3 className="text-white lg:text-xl font-medium mb-4">
              Subscribe to our Newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-zinc-900 border border-white rounded-full p-3 text-white placeholder-gray-500 focus:outline-none focus:border-zinc-700"
              />
              <button className="bg-white text-black px-8 py-2 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer">
                Subscribe
              </button>
            </div>
            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-4 text-white mt-4">
              <div className="border border-white rounded-full  py-2 px-2.5 cursor-pointer hover:opacity-80">
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
          <div className="font-sans font-semibold text-[120px] md:text-[180px] lg:text-[247.46px] leading-[1.28] tracking-[0.37em] text-zinc-800 text-center select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            LOGO
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center lg:text-lg text-[#C7C7C7] border-t border-zinc-900 pt-6">
          <p>© {new Date().getFullYear()} WebVortex Ltd. All Rights Reserved</p>
          <p className="mt-2 md:mt-0"> info@webvortexltd.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
