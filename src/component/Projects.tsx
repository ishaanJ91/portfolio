import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import landsat from "../assets/landsat.gif";
import bitcoin_pred from "../assets/rf_cnn_lstm_price_prediction.png";
import airbnb from "../assets/airbnb.png";
import crypto from "../assets/crypto.png";
import pomodoro from "../assets/pomodoro.png";

import reactLogo from "../assets/react-original.svg";
import nodeLogo from "../assets/nodejs-original.svg";
import tailwindLogo from "../assets/tailwindcss-original.svg";
import mongodbLogo from "../assets/mongodb-original.svg";
import githubLogo from "../assets/github.svg";
import javascriptLogo from "../assets/javascript-original.svg";
import pythonLogo from "../assets/python-original.svg";
import matplotlibLogo from "../assets/matplotlib-original.svg";
import kerasLogo from "../assets/keras-original.svg";
import chartjsLogo from "../assets/chartjs-original.svg";
import htmlLogo from "../assets/html5-plain.svg";
import cssLogo from "../assets/css3-original.svg";

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
    id: 1,
    title: "LandStat,",
    description:
      "a MERN stack application that visualizes NDVI data, allowing users to examine global vegetation health.",
    image: landsat,
    languages: [reactLogo, tailwindLogo, mongodbLogo],
    deployed: "Deployed • October 2024",
    github: "https://github.com/ishaanJ91/landsat",
  },
  {
    id: 2,
    title: "Bitcoin Price Prediction,",
    description:
      "uses a hybrid model to predict Bitcoin prices based on 5 years of historical data",
    image: bitcoin_pred,
    languages: [pythonLogo, matplotlibLogo, kerasLogo],
    deployed: "Deployed • August 2024",
    github: "https://github.com/ishaanJ91/bitcoin-prediction",
  },
  {
    id: 3,
    title: "AirBnb Clone,",
    description:
      "is a MERN stack clone that replicates Airbnb's key features, allowing users to search, book, and manage accommodations.",
    image: airbnb,
    languages: [reactLogo, tailwindLogo, mongodbLogo],
    deployed: "Deployed • August 2024",
    github: "https://github.com/ishaanJ91/airdnd-clone",
  },
  {
    id: 4,
    title: "CryptoTrack,",
    description:
      "is a web application that leverages public apis to provide details, comparisons, and historical data on cryptocurrencies.",
    image: crypto,
    languages: [reactLogo, javascriptLogo, cssLogo],
    deployed: "Deployed • July 2024",
    github: "https://github.com/ishaanJ91/Crypto-tracker",
  },
  {
    id: 5,
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

  useEffect(() => {
    const updateScrollWidth = () => {
      const containerWidth =
        containerRef.current?.offsetWidth || window.innerWidth;
      const cardWidth =
        containerWidth >= 666 ? containerWidth * 0.51 : containerWidth * 0.899;
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
          markers: false,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".project-inner-container", {
        x: -totalScrollWidth,
        ease: "none",
      });
    };

    updateScrollWidth();
    window.addEventListener("resize", updateScrollWidth);

    document.addEventListener(
      "touchmove",
      (event) => {
        event.preventDefault();
      },
      { passive: false }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updateScrollWidth);
    };
  }, []);

  return (
    <>
      <div className="my-20">
        <div
          id="projects"
          className="flex justify-center items-center bg-gray-950 px-12 w-full"
        >
          <h2 className="xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl xs:text-6xl font-black text-beige">
            PROJECTS
          </h2>
        </div>
        <div
          ref={containerRef}
          className="project-container bg-gray-950 h-screen overflow-hidden"
        >
          <div className="flex items-center justify-between h-full">
            <div
              className="project-inner-container flex"
              style={{ paddingLeft: "5vw", paddingTop: "10vh", gap: "10vw" }}
            >
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="project-card flex-shrink-0 bg-gray-300 bg-opacity-10 border-gray-600 border-4 text-beige p-8 rounded-xl 
                  xl:w-[50vw] xl:h-[80vh] lg:w-[50vw] lg:h-[80vh] md:w-[50vw] md:h-[60vh] xs:w-[90vw] xs:h-[60vh]"
                >
                  <div className="flex flex-col justify-between h-full xl:p-8 lg:p-4">
                    <div className="flex flex-col gap-4">
                      <span className="xs:text-lg md:text-xl lg:text-2xl text-gray-400 font-bold">
                        <b className="text-white"> {project.title} </b>{" "}
                        {project.description}
                      </span>

                      <div className="flex flex-row justify-between px-1">
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
                        <div className="flex xs:w-fit lg:mt-4 xl:mt-0 gap-4 py-2 bg-beige px-4 rounded-full">
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
                              Github <b>↗</b>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg flex-shrink-0">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full rounded-md"
                        style={{ maxHeight: "30vh" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
