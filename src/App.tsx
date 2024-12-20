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
  return (
    <>
      <Navbar />
      <div className="bg-gray-950 min-h-screen max-w-1400 mx-auto">
        <About />
        {/* <HeadProj /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
