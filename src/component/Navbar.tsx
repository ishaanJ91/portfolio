import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const navTags = ["About", "Projects", "Contact"];

  const handleSetActive = (link) => {
    setActive(link);
  };

  return (
    <nav className="bg-blue-950 w-full fixed z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <span className="text-gray-200 text-xl font-medium">
            Ishaan Jain.
          </span>
          <div className="flex items-center">
            <div className="hidden md:flex ml-10 flex items-baseline space-x-4">
              {navTags.map((link) => (
                <a
                  key={link}
                  onClick={() => handleSetActive(link)}
                  className={`text-lg font-medium px-3 py-2 rounded-md cursor-pointer ${
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="mobile-menu-button p-2 rounded-md inline-flex items-center justify-center">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
