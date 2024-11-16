import React, { useRef } from "react";

import profile from "../assets/profile.png";
import github_black from "../assets/github-round-svgrepo-com (1).svg";
import linked_black from "../assets/linkedin-round-svgrepo-com (1).svg";

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

  return (
    <div className="grid grid-cols-3 h-screen justify-center items-center">
      <div className="col-span-1 flex h-screen flex-col justify-center items-start bg-gray-950 px-12 w-full">
        <img
          src={profile}
          className="items-start rounded-full min-w-64 h-64 object-cover mb-4"
        />
        <div className="flex flex-col text-beige items-start">
          <h2 className="text-6xl font-bold"> Ishaan Jain </h2>
          <p className="text-md text-left py-2">
            Computer Science Student @ Trinity College Dublin, Ireland |
            Full-Stack Dev
          </p>

          <div className="flex flex-row gap-4 pt-4">
            <a href="https://github.com/ishaanJ91" target="_blank">
              <img src={github_black} alt="GitHub" className="w-9 h-9" />
            </a>

            <a href="https://www.linkedin.com/in/ishaanj9/" target="_blank">
              <img src={linked_black} alt="LinkedIn" className="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-start items-start px-24 py-20 w-full">
        <div ref={introRef} className="mb-12">
          <div className="text-4xl text-left font-semibold">
            Oh, hello there 👋
          </div>
          <div className="text-md text-left py-4">
            <span className="text-xl">
              As a 2nd-year Computer Science student at Trinity College Dublin,
              I excel in full-stack development and solving complex problems.
              With strong academic and project experience in software
              development, AI, and machine learning, I have a deep understanding
              of the field. I am committed to continuously learning new
              technologies to expand my skillset.
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center text-2xl text-center gap-6">
          <span className="text-2xl text-left border-r-2 border-black pr-4 font-semibold">
            Tech Stack
          </span>
          <div className="tech-stack flex items-center gap-8">
            <div className="flex flex-row gap-2">
              <img
                src={htmlLogo}
                alt="HTML5"
                className="w-12 h-12 rounded-md"
              />
              <img src={cssLogo} alt="CSS3" className="w-12 h-12 rounded-md" />
            </div>

            <div className="flex flex-row gap-2">
              <img
                src={reactLogo}
                alt="React"
                className="w-12 h-12 rounded-md"
              />
              <img
                src={typescript}
                alt="TypeScript"
                className="w-12 h-12 rounded-md"
              />
            </div>

            <div className="flex flex-row gap-2">
              <img src={javaLogo} alt="Java" className="w-12 h-12 rounded-md" />
              <img
                src={pythonLogo}
                alt="Python"
                className="w-12 h-12 rounded-md"
              />
            </div>

            <div className="flex flex-row gap-2">
              <img
                src={tailwind}
                alt="Tailwind"
                className="w-12 h-12 rounded-md"
              />
              <img src={sass} alt="Sass" className="w-12 h-12 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
