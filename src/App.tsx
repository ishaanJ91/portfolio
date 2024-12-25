import React from "react";
import "./App.css";

import { ThemeProvider } from "./component/ThemeContext";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="bg-background text-primary min-h-screen max-w-1500 mx-auto">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
