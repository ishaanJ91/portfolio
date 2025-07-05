import React, { useEffect, useState } from "react";
import githubLogo from "../assets/github.svg";
import Globe from "./Globe";

import reactLogo from "../assets/react-original.svg";
import tailwindLogo from "../assets/tailwindcss-original.svg";
import mongodbLogo from "../assets/mongodb-original.svg";
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

const techIcons = {
  react: reactLogo,
  tailwindcss: tailwindLogo,
  mongodb: mongodbLogo,
  javascript: javascriptLogo,
  python: pythonLogo,
  matplotlib: matplotlibLogo,
  keras: kerasLogo,
  html5: htmlLogo,
  css3: cssLogo,
  typescript: typescriptLogo,
  firebase: firebaseLogo,
  flask: flaskLogo,
  pandas: pandas,
  tensorflow: tensorflow,
};

const Stats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://github-contributions-api.deno.dev/ishaanJ91.json"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add null check here
  if (loading || !data || !data.contributions) {
    return (
      <div className="my-20">
        <div className="flex flex-col justify-center items-center bg-background px-12 w-full">
          <div className="project-card w-full max-w-6xl bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
            <div className="flex flex-col justify-between h-full xl:p-4 lg:p-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {loading
                  ? "Loading GitHub Contributions..."
                  : "Error loading data"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const flatData = data.contributions.flat();
  const today = new Date();
  const aYearAgo = new Date(today);
  aYearAgo.setFullYear(today.getFullYear() - 1);
  const currentMonthIndex = today.getMonth();
  const filteredData = flatData.filter((day) => new Date(day.date) >= aYearAgo);

  const getIntensityClass = (level) => {
    switch (level) {
      case "NONE":
        return "bg-gray-800 hover:bg-gray-700";
      case "FIRST_QUARTILE":
        return "bg-green-900 hover:bg-green-800";
      case "SECOND_QUARTILE":
        return "bg-green-500 hover:bg-green-400";
      case "THIRD_QUARTILE":
        return "bg-green-300 hover:bg-green-200";
      case "FOURTH_QUARTILE":
        return "bg-green-300 hover:bg-green-200";
      default:
        return "bg-gray-800 hover:bg-gray-700";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const monthNames = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return (
    <div className="my-20">
      <div className="flex flex-col justify-center pt-28 items-center w-full px-10 lg:px-0">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-stretch justify-center gap-8 lg:gap-4 mb-8">
          <div className="project-card w-full h-[300px] bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
            {" "}
            <div className="flex justify-between items-center mb-4">
              <div className="px-3 py-2 bg-beige border border-[#30363d] rounded-full text-white text-sm font-semibold flex items-center space-x-2">
                <img src={githubLogo} alt="GitHub Logo" className="w-6 h-6" />
                <a
                  href="https://github.com/ishaanJ91"
                  target="_blank"
                  className="text-gray-950 text-base pl-1"
                >
                  GitHub Activity{" "}
                  <b>
                    <span>↗&#xFE0E;</span>
                  </b>
                </a>
              </div>
              {hoveredDay && (
                <p className="text-white font-medium text-sm">
                  {hoveredDay.contributionCount} contributions on{" "}
                  {new Date(hoveredDay.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
            <div className="overflow-scroll">
              <div className="flex">
                <div className="grid grid-cols-53 grid-rows-7 gap-1 grid-flow-col">
                  {filteredData.map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm cursor-pointer transition-all duration-200 ${getIntensityClass(
                        day.contributionLevel
                      )}`}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      title={`${
                        day.contributionCount
                      } contributions on ${formatDate(day.date)}`}
                    />
                  ))}
                </div>
              </div>

              {/* Tooltip */}
              {hoveredDay && (
                <div className="absolute top-6 right-6 bg-gray-900 text-white p-3 rounded-lg border border-gray-600 mt-4 mb-4 max-w-xs">
                  <p className="font-medium">
                    {hoveredDay.contributionCount} contributions
                  </p>
                  <p className="text-sm text-gray-400">
                    {formatDate(hoveredDay.date)}
                  </p>
                </div>
              )}
            </div>
            {/* Legend */}
            <div className="flex items-start justify-start gap-2 text-xs text-gray-400 mt-4">
              <span>Less</span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-gray-800 rounded-sm border border-gray-600"></div>
                <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
          <div className="project-card w-full h-[300px] overflow-hidden bg-project-card-bg border-[#4b5563] border-4 text-primary rounded-xl">
            <div className="flex flex-col justify-start h-full px-8 pt-8">
              <h3 className="text-lg sm:text-md font-semibold text-white">
                Dublin, Ireland (UTC +01:00)
              </h3>
            </div>
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
