import React from "react";
import Layout from "../Layout";
import HeadAbout from "./HeadAbout";
import About from "./About";
import HeadProj from "./HeadProj";
import Projects from "./Projects";

const Home: React.FC = () => {
  return (
    <>
      <Layout SidebarComponent={<HeadAbout />} MainComponent={<About />} />;
    </>
  );
};

export default Home;
