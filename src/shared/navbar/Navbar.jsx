import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { ImageProvider } from "@/components/common/ImageProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];
 const [scrolled, setScrolled] = useState(false);

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
            ? "bg-black/40 backdrop-blur-xl shadow-lg "
            : "bg-black/40"
        }`}
    >
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            <img src={ImageProvider.logo} alt="" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `text-white transition ${
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
          <div className="hidden md:flex items-center gap-4 text-white">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-[#81B4E2] z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="px-6 py-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-white text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            LOGO
          </Link>

          {/* Nav Links */}
          <ul className="mt-8 flex flex-col gap-4">
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

          {/* Social Icons */}
          <div className="flex gap-5 mt-10 text-white">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
