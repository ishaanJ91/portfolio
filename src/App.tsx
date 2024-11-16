import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Layout from "./Layout";
import About from "./component/About";
import HeadAbout from "./component/HeadAbout";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import HeadProj from "./component/HeadProj";
import Contact from "./component/Contact";
import SmoothScrollWrapper from "../src/SmoothScrollWrapper";
import Footer from "./component/Footer";

const App: React.FC = () => {
  return (
    <SmoothScrollWrapper>
      <Navbar />
      <div className="bg-beige min-h-screen">
        <About />
        <HeadProj />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
};

export default App;
