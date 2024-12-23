import React, { useState } from "react";
import menuW from "../assets/hamburger-white.svg";
import back from "../assets/back.svg";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navTags = ["About", "Projects", "Contact"];

  const handleSetActive = (link) => {
    setActive(link);
    setIsMobileMenuOpen(false); // Close mobile menu on link click
    const element = document.getElementById(link.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navTags
        .map((tag) => document.getElementById(tag.toLowerCase()))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActive(section.id.charAt(0).toUpperCase() + section.id.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-blue-950 w-full fixed z-50">
      <div className="max-w-1400 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <span className="text-gray-200 text-xl font-medium">
            Ishaan Jain.
          </span>
          <div className="md:hidden">
            {/* Hamburger menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 focus:outline-none"
            >
              <img src={menuW} alt="Menu" className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:flex ml-10 space-x-4">
            {navTags.map((link) => (
              <a
                key={link}
                onClick={() => handleSetActive(link)}
                className={`text-lg font-medium px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 ${
                  active === link
                    ? "text-gray-200"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Animated Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-blue-900 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-gray-200"
        >
          <img src={back} alt="Back" className="w-7 h-7" />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navTags.map((link) => (
            <li key={link}>
              <a
                onClick={() => handleSetActive(link)}
                className={`block text-4xl font-medium text-gray-200 px-3 py-2 cursor-pointer`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
