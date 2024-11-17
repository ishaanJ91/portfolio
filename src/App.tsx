import React, { useState, useEffect } from "react";
import "./App.css";

import About from "./component/About";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import HeadProj from "./component/HeadProj";
import Contact from "./component/Contact";
import SmoothScrollWrapper from "../src/SmoothScrollWrapper";
import Footer from "./component/Footer";

const App: React.FC = () => {
  // Setting the initial state based on window width
  const [isSmallScreen, setIsSmallScreen] = useState(
    () => window.innerWidth < 1200
  );

  useEffect(() => {
    // Function to update state based on window width
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1200);
    };

    // Debounce function to optimize performance during resize
    const debounce = (func, delay) => {
      let timerId;
      return (...args) => {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    // Creating a debounced handler for resizing
    const debouncedHandleResize = debounce(checkScreenSize, 100);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div className="flex items-center flex-col justify-center min-h-screen px-20 text-center bg-beige text-gray-950 lg:text-4xl text-3xl">
        Device too small. Website still in progress. <br />
        Thank you for your patience :)
        <div className="flex flex-row w-full justify-center items-center gap-4 pt-4 text-beige">
          <div className="flex flex-row justify-center items-center gap-4">
            <a
              href="https://github.com/ishaanJ91"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-950 px-6 py-3 rounded-lg sm:px-4 sm:py-2 whitespace-nowrap"
            >
              <span className="text-lg sm:text-sm mt-1">GitHub ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ishaanj9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-950 px-6 py-3 rounded-lg sm:px-4 sm:py-2 whitespace-nowrap"
            >
              <span className="text-lg sm:text-sm mt-1">LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SmoothScrollWrapper>
      <Navbar />
      <div className="bg-beige min-h-screen">
        <div id="about">
          <About />
        </div>
        <HeadProj />
        <div id="projects">
          <Projects />
        </div>
        <div id="contacts">
          <Contact />
        </div>
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default App;
