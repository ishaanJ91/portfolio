import React, { useEffect, useState } from "react";

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
        return "bg-green-700 hover:bg-green-600";
      case "THIRD_QUARTILE":
        return "bg-green-500 hover:bg-green-400";
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
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  return (
    <div className="my-20">
      <div
        id="experience"
        className="flex flex-col justify-center items-center bg-background px-12 w-full"
      >
        <div className="grid grid-cols-2 items-center justify-center bg-background py-16 px-8 gap-12">
          <div className="project-card w-full max-w-4xl bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
            <div className="flex flex-col justify-between h-full xl:p-4 lg:p-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Tech Stack
              </h3>
              <h4 className="mt-2 sm:mt-0 text-lg sm:text-xl text-blue-400 hover:text-blue-500 transition-colors duration-300"></h4>
              <ul className="space-y-2 pt-2 mt-6"></ul>
            </div>
          </div>
          <div className="project-card w-full max-w-4xl bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
            <div className="flex flex-col justify-between h-full xl:p-4 lg:p-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Tech Stack
              </h3>
              <h4 className="mt-2 sm:mt-0 text-lg sm:text-xl text-blue-400 hover:text-blue-500 transition-colors duration-300"></h4>
              <ul className="space-y-2 pt-2 mt-6"></ul>
            </div>
          </div>
        </div>
        <div className="project-card w-full max-w-4xl bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <div className="px-4 py-1 bg-[#0d1117] border border-[#30363d] rounded-full text-white text-sm font-semibold flex items-center space-x-2">
              <svg
                className="w-4 h-4 fill-white"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M8 0C3.58..."></path>
              </svg>
              <span>GitHub activity</span>
            </div>
            {hoveredDay && (
              <p className="text-white font-medium text-sm">
                {hoveredDay.contributionCount} contributions on{" "}
                {new Date(hoveredDay.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          {/* Month labels */}
          <div className="flex justify-between text-xs text-gray-400 mb-2 ml-8">
            {Object.values(monthNames).map((month, index) => (
              <span key={index}>{month}</span>
            ))}
          </div>

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

          {/* Legend */}
          <div className="flex items-center justify-between text-xs text-gray-400 mt-4">
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
