import React from "react";
import "./App.css";

import { ThemeProvider } from "./component/ThemeContext";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import { Analytics } from "@vercel/analytics/react";
import Experience from "./component/Experience";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="bg-background text-primary min-h-screen max-w-1500 mx-auto">
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
