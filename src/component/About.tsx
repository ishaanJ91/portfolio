import React, { useRef } from "react";
import { useTheme } from ".//ThemeContext";

import profile from "../assets/profile.webp";
import github_black from "../assets/github-round-svgrepo-com (1).svg";
import linked_black from "../assets/linkedin-round-svgrepo-com (1).svg";
import github_white from "../assets/github_white.svg";
import linkedin_white from "../assets/linkedin_white.svg";

import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import reactLogo from "../assets/react.svg";
import pythonLogo from "../assets/python.svg";
import sass from "../assets/sass.svg";
import tailwind from "../assets/tailwind.svg";
import typescript from "../assets/typescript.svg";
import javaLogo from "../assets/javascript.svg";

export default function About() {
  const introRef = useRef<HTMLDivElement>(null);
  const { isLightMode } = useTheme();
  const githubDynamic = isLightMode ? github_white : github_black;
  const linkedinDynamic = isLightMode ? linkedin_white : linked_black;

  return (
    <div
      id="about"
      className="section md:grid md:grid-cols-3 sm:flex sm:flex-col xs:flex xs:flex-col sm:h-screen xs:h-fit justify-center items-center bg-background"
    >
      <div className="col-span-1 flex md:flex-col sm:gap-10 sm:flex-row xs:gap-0 xs:flex-col xs:mt-40 md:mt-0 md:justify-start md:items-start sm:items-center sm:justify-center xs:items-center xs:justify-center lg:pl-24 md:pl-16 xs:pl-0 w-full">
        <img
          src={profile}
          alt="profile picture"
          className="rounded-full
      lg:w-52 lg:h-52 xl:w-64 xl:h-64 md:w-44 md:h-44 sm:w-36 sm:h-36 xs:w-64 xs:h-64
      object-cover mb-4"
        />

        <div className="flex flex-col text-primary sm:items-start xs:items-center">
          <h2 className="xl:text-6xl lg:text-4xl  md:text-3xl sm:text-4xl xs:text-5xl xs:pt-2 font-bold">
            Ishaan Jain
          </h2>
          <p className="xl:text-base md:text-xs lg:text-sm sm:text-xs sm:w-60 md:w-fit sm:py-1 xs:text-base xs:w-60 xs:py-1 xs:text-center sm:text-left py-2">
            Student @ Trinity College Dublin, Ireland | Full-Stack Dev
          </p>

          <div className="flex flex-row gap-4 pt-4 md:pt-2 sm:pt-3 xs:pt-2 md:gap-3">
            <a href="https://github.com/ishaanJ91" target="_blank">
              <img
                src={githubDynamic}
                alt="GitHub"
                className="lg:w-9 lg:h-9 md:w-6 md:h-6 sm:h-6 sm:w-6 xs:h-8 xs:w-8 rounded-full"
              />
            </a>

            <a href="https://www.linkedin.com/in/ishaanj9/" target="_blank">
              <img
                src={linkedinDynamic}
                alt="LinkedIn"
                className="lg:w-9 lg:h-9 md:w-6 md:h-6 sm:h-6 sm:w-6 xs:h-8 xs:w-8"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="col-span-2 flex flex-col sm:justify-start sm:mt-8 xs:mt-24 sm:items-start xs:items-center xs:justify-center lg:px-24 py-20 md:px-16 sm:px-16 sm:py-2 xs:px-16 xs:py-2 w-full">
        <div ref={introRef} className="mb-12 md:mb-2 sm:mb-0 xs:mb-0">
          <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-3xl xs:text-center text-primary md:text-left font-semibold">
            Oh, hello there 👋
          </div>
          <div className="text-md sm:text-left xs:text-center py-4">
            <span className="xl:text-xl lg:text-base md:text-sm sm:text-base xs:text-base text-primary">
              As a 3rd-year Computer Science student at Trinity College Dublin,
              I excel in full-stack development and solving complex problems.
              With strong academic and project experience in software
              development, AI, and machine learning, I have a deep understanding
              of the field. I am committed to continuously learning new
              technologies to expand my skillset.
            </span>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col xs:my-6 sm:justify-start sm:items-start xs:justify-center xs:items-center xl:justify-between xl:items-center xl:text-center text-2xl text-center xl:gap-6 gap-5">
          <span
            className={`xl:text-2xl xl:text-center xl:items-center xl:justify-center lg:text-xl md:text-base sm:text-xl xs:text-xl text-left xl:border-r-2 xl:border-b-0 text-primary ${
              isLightMode ? `border-custom-gray` : `border-beige`
            } border-beige b-r-0 border-b-2 pr-0 pb-1 xl:pr-4 xl:pb-0 font-semibold`}
          >
            Tech Stack
          </span>
          <div className="sm:flex items-center xs:grid xs:py-6 xs:grid-cols-2 xs:justify-center xs:items-center xl:gap-8 lg:gap-6 md:gap-4 sm:gap-6 xs:gap-10">
            <div className="flex flex-row gap-3">
              <img
                src={htmlLogo}
                alt="HTML5"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
              <img
                src={cssLogo}
                alt="CSS3"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
            </div>

            <div className="flex flex-row gap-3">
              <img
                src={reactLogo}
                alt="React"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
              <img
                src={typescript}
                alt="TypeScript"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
            </div>

            <div className="flex flex-row gap-3">
              <img
                src={javaLogo}
                alt="Java"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
              <img
                src={pythonLogo}
                alt="Python"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
            </div>

            <div className="flex flex-row gap-3">
              <img
                src={tailwind}
                alt="Tailwind"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
              <img
                src={sass}
                alt="Sass"
                className="xl:w-12 xl:h-12 lg:w-11 lg:h-11 md:w-7 md:h-7 sm:w-9 sm:h-9 xs:w-12 xs:h-12 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
