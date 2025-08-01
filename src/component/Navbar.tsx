import React from "react";
import { useTheme } from ".//ThemeContext";
import menuW from "../assets/hamburger-white.svg";
import back from "../assets/back.svg";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

export default function Navbar() {
  const { isLightMode, toggleTheme } = useTheme();
  const [active, setActive] = React.useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navTags = ["About", "Projects", "Contact"];

  const handleSetActive = (link: string) => {
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
    <nav className="bg-dark-blue-ps w-full fixed z-50">
      <div className="max-w-1400 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <span className="text-xl font-medium text-beige">Ishaan Jain.</span>
          <div className="flex items-center">
            {/* Hamburger menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none md:hidden"
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
                    ? "text-beige"
                    : "text-gray-400 hover:text-beige"
                }`}
              >
                {link}
              </a>
            ))}
            {/* Theme toggle button */}
            <button onClick={toggleTheme} className="mr-4 focus:outline-none">
              <img
                src={isLightMode ? dark : light}
                alt="Toggle Theme"
                className="w-5 h-5 opacity-60 hover:opacity-100"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Animated Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-background transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          id="close-menu"
          className="absolute top-6 right-6 focus:outline-none"
        >
          <img
            src={back}
            className="bg-gray-950 rounded-full w-7 h-7"
            alt="go back"
          />
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navTags.map((link) => (
            <li key={link}>
              <a
                onClick={() => handleSetActive(link)}
                className={`block text-4xl font-medium cursor-pointer ${
                  active === link
                    ? isLightMode
                      ? "text-black"
                      : "text-beige"
                    : isLightMode
                    ? "text-gray-700 hover:text-black"
                    : "text-gray-400 hover:text-beige"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
          {/* Theme toggle button for mobile */}
          <li>
            <button
              onClick={toggleTheme}
              className="mt-4 bg-gray-950 rounded-full p-3 focus:outline-none"
            >
              <img
                src={isLightMode ? dark : light}
                alt="Toggle Theme"
                className="w-7 h-7 opacity-60  hover:opacity-100"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
