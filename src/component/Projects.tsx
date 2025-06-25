import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import landsat from "../assets/landsat.gif";
import bitcoin_pred from "../assets/rf_cnn_lstm_price_prediction.png";
import airbnb from "../assets/airbnb.png";
import crypto from "../assets/crypto.png";
import pomodoro from "../assets/pomodoro.png";
import spotify from "../assets/spotify.png";
import niteout from "../assets/niteout.png";
import nltk from "../assets/nltk.png";

import reactLogo from "../assets/react-original.svg";
import tailwindLogo from "../assets/tailwindcss-original.svg";
import mongodbLogo from "../assets/mongodb-original.svg";
import githubLogo from "../assets/github.svg";
import javascriptLogo from "../assets/javascript-original.svg";
import pythonLogo from "../assets/python-original.svg";
import matplotlibLogo from "../assets/matplotlib-original.svg";
import kerasLogo from "../assets/keras-original.svg";
import htmlLogo from "../assets/html5-plain.svg";
import cssLogo from "../assets/css3-original.svg";
import typescriptLogo from "../assets/typescript.svg";
import firebaseLogo from "../assets/firebase.svg";
import flaskLogo from "../assets/flask.svg";
import pandas from "../assets/pandas.svg";
import tensorflow from "../assets/tensorflow.svg";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  languages: string[];
  deployed: string;
  github: string;
}

const projectsData: Project[] = [
  {
    id: 0,
    title: "Sentiment Analysis,",
    description:
      "compares sentiment results using different models on Amazon product reviews",
    image: nltk,
    languages: [pythonLogo, matplotlibLogo, tensorflow, pandas],
    deployed: "Deployed • June 2025",
    github: "https://github.com/ishaanJ91/amazon-sentiment-analysis",
  },
  {
    id: 1,
    title: "NiteOut,",
    description:
      "is a mobile app that helps users find, host, and join pub games in their area. In partnership with Amazon",
    image: niteout,
    languages: [reactLogo, pythonLogo, firebaseLogo, flaskLogo],
    deployed: "Deployed • April 2025",
    github: "https://github.com/ishaanJ91/NiteOut",
  },
  {
    id: 2,
    title: "Spotify Higher-Lower,",
    description:
      "a React-based game that challenges players to guess which songs have higher stream counts on Spotify",
    image: spotify,
    languages: [reactLogo, typescriptLogo, tailwindLogo],
    deployed: "Deployed • Jan 2025",
    github: "https://github.com/ishaanJ91/spotify-higher-lower/tree/main",
  },
  {
    id: 3,
    title: "LandStat,",
    description:
      "a MERN stack application that visualizes NDVI data, allowing users to examine global vegetation health.",
    image: landsat,
    languages: [reactLogo, tailwindLogo, mongodbLogo],
    deployed: "Deployed • October 2024",
    github: "https://github.com/ishaanJ91/landsat",
  },
  {
    id: 4,
    title: "Bitcoin Price Prediction,",
    description:
      "uses a hybrid model to predict Bitcoin prices based on 5 years of historical data",
    image: bitcoin_pred,
    languages: [pythonLogo, matplotlibLogo, kerasLogo],
    deployed: "Deployed • August 2024",
    github: "https://github.com/ishaanJ91/bitcoin-prediction",
  },
  {
    id: 5,
    title: "AirBnb Clone,",
    description:
      "is a MERN stack clone that replicates Airbnb's key features, allowing users to search, book, and manage accommodations.",
    image: airbnb,
    languages: [reactLogo, tailwindLogo, mongodbLogo],
    deployed: "Deployed • August 2024",
    github: "https://github.com/ishaanJ91/airdnd-clone",
  },
  {
    id: 6,
    title: "CryptoTrack,",
    description:
      "is a web application that leverages public apis to provide details, comparisons, and historical data on cryptocurrencies.",
    image: crypto,
    languages: [reactLogo, javascriptLogo, cssLogo],
    deployed: "Deployed • July 2024",
    github: "https://github.com/ishaanJ91/Crypto-tracker",
  },
  {
    id: 7,
    title: "Minimalist-Pomodoro,",
    description:
      "is a Pomodoro timer website that enhances productivity by structuring work into intervals with short and long breaks.",
    image: pomodoro,
    languages: [htmlLogo, cssLogo, javascriptLogo],
    deployed: "Deployed • May 2024",
    github: "https://github.com/ishaanJ91/Pomodoro-Minimalist",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to handle screen resizing
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 850);
  };

  useEffect(() => {
    // Initial screen size check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    if (!isMobileView) {
      // Horizontal scroll animation setup for larger screens
      const updateScrollWidth = () => {
        const containerWidth =
          containerRef.current?.offsetWidth || window.innerWidth;
        const cardWidth =
          containerWidth >= 666
            ? containerWidth * 0.51
            : containerWidth * 0.899;
        const gap = containerWidth * 0.1;
        const totalScrollWidth =
          projectsData.length * (cardWidth + gap) - containerWidth;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${totalScrollWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline.to(".project-inner-container", {
          x: -totalScrollWidth,
          ease: "none",
        });
      };

      updateScrollWidth();

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    } else {
      // Cleanup GSAP for small screens
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileView]);

  return (
    <div className="my-20">
      <div
        id="projects"
        className="flex justify-center items-center bg-background px-12 w-full"
      >
        <h2 className="xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl xs:text-6xl font-black text-primary">
          PROJECTS
        </h2>
      </div>

      <div
        ref={containerRef}
        className={`project-container bg-background ${
          isMobileView
            ? "flex flex-col gap-8 justify-center items-center"
            : "h-screen overflow-hidden"
        }`}
      >
        <div
          className={`project-inner-container ${
            isMobileView ? "flex flex-col " : "flex"
          }`}
          style={{
            paddingLeft: isMobileView ? "" : "5vw",
            paddingTop: isMobileView ? "15vh" : "15vh",
            gap: isMobileView ? "10vw" : "10vw",
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-card flex-shrink-0 bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl 
              ${
                isMobileView
                  ? "md:w-[70vw] md:h-[70vh] xs:w-[75vw] xs:h-[73vh]"
                  : "w-[45vw] h-[80vh] xl:w-[45vw] xl:h-[80vh]"
              }`}
              style={
                window.innerWidth > 1500
                  ? {
                      width: "675px",
                      height: "80vh",
                    }
                  : undefined
              }
            >
              <div className="flex flex-col justify-between h-full xl:p-8 lg:p-4">
                <div className="flex flex-col gap-4">
                  <span className="xs:text-xl lg:text-2xl text-gray-400 font-bold">
                    <b className="text-white">{project.title}</b>{" "}
                    {project.description}
                  </span>

                  <div
                    className={`flex flex-row justify-between px-1 ${
                      isMobileView ? "flex-col gap-3" : ""
                    }`}
                  >
                    <div className="languages-list flex gap-4 py-2">
                      {project.languages.map((lang, index) => (
                        <img
                          key={index}
                          src={lang}
                          alt={`${project.title} language ${index}`}
                          className="xl:w-7 xl:h-7 lg:w-6 lg:h-6 md:w-6 md:h-6 xs:w-6 xs:h-6 object-contain"
                        />
                      ))}
                    </div>
                    <div className="flex xs:w-fit lg:mt-0 xl:mt-0 gap-4 py-2 bg-beige px-4 rounded-full">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <img
                          src={githubLogo}
                          alt={`${project.title} github`}
                          className="lg:w-6 lg:h-6 md:w-5 md:h-5 xs:w-5 xs:h-5 object-contain"
                        />
                        <span className="text-gray-950 lg:text-base md:text-sm xs:text-sm">
                          Github{" "}
                          <b>
                            <span>↗&#xFE0E;</span>
                          </b>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg flex-shrink-0">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full rounded-md object-contain"
                    style={{ maxHeight: "30vh" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
