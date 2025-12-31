import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    // { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed  section-padding-x top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/50 backdrop-blur-xl shadow-lg "
            : `bg-transparent ${
                pathname === "/about"
                  ? "bg-white/70 backdrop-blur-xl shadow-lg"
                  : ""
              }
            ${
              pathname === "/contact"
                ? "bg-white/70 backdrop-blur-xl shadow-lg"
                : ""
            } 
            `
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            <img src={logo} alt="" className="w-32 sm:w-40" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `text-black transition ${
                      isActive
                        ? "font-semibold text-[17px] hover:opacity-80"
                        : "font-normal hover:opacity-80"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-black">
            <FaFacebookF className="p-2 border rounded-full text-4xl cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110" />

            <AiFillInstagram className="p-2 border rounded-full text-4xl cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white hover:border-transparent hover:scale-110" />

            <FaYoutube className="p-2 border rounded-full text-4xl cursor-pointer transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-110" />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 h-screen w-[280px] bg-[#81B4E2] z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="px-6 py-6">
          {/* Logo */}
          {/* <Link
            to="/"
            className="text-white text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            LOGO
          </Link> */}

          {/* Nav Links */}
          <ul className="mt-2 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-white text-lg transition ${
                      isActive ? "font-semibold" : "font-normal"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social Icons (Desktop) */}
          <div className="flex items-center gap-4 text-black mt-6">
            <FaFacebookF className="p-2 border rounded-full text-4xl cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110" />

            <AiFillInstagram className="p-2 border rounded-full text-4xl cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white hover:border-transparent hover:scale-110" />

            <FaYoutube className="p-2 border rounded-full text-4xl cursor-pointer transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-110" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
