import React, { useEffect, useState } from "react";
import githubLogo from "../assets/github.svg";
import Globe from "./Globe";

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
          <div className="project-card w-full max-w-4xl bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
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
      <div
        id="experience"
        className="flex flex-col justify-center items-center bg-background min-w-full"
      >
        <div className="w-full max-w-4xl grid grid-cols-2 items-center justify-center gap-4 mb-8">
          <div className="project-card w-full h-full bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
            <div className="flex flex-col justify-between h-full xl:p-4 lg:p-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Tech Stack
              </h3>
              <h4 className="mt-2 sm:mt-0 text-lg sm:text-xl text-blue-400 hover:text-blue-500 transition-colors duration-300"></h4>
              <ul className="space-y-2 pt-2 mt-6"></ul>
              {/* Stack carousel */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {[
                  "python",
                  "typescript",
                  "go",
                  "cplusplus",
                  "java",
                  "javascript",
                  "fastapi",
                  "flask",
                  "mongodb",
                  "linux",
                  "aws",
                  "nextjs",
                ].map((tech) => (
                  <img
                    key={tech}
                    src={`path_to_icons/${tech}.svg`} // Replace with your actual icon path
                    alt={`${tech} icon`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="project-card w-full h-full overflow-hidden bg-project-card-bg border-[#4b5563] border-4 text-primary rounded-xl">
            <div className="flex flex-col justify-between h-full xl:p-12 lg:p-10">
              <h3 className="text-lg sm:text-md font-semibold text-white">
                Dublin, Ireland (UTC +01:00)
              </h3>
            </div>
            <Globe />
          </div>
        </div>
        <div className="project-card w-full max-w-4xl bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="px-4 py-1 bg-beige border border-[#30363d] rounded-full text-white text-sm font-semibold flex items-center space-x-2">
              <img src={githubLogo} alt="GitHub Logo" className="w-4 h-4" />
              <a
                href="https://github.com/ishaanJ91"
                target="_blank"
                className="text-gray-950"
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
      </div>
    </div>
  );
};

export default Stats;
