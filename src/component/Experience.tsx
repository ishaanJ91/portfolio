import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "AnamVR",
      period: "Jan 2025 - June 2025",
      description: [
        "Engineered a seamless Unity-to-React Native integration, ensuring 100% cross-platform compatibility for VR scene rendering.",
        "Optimized app performance by migrating key UI components from 2D Unity to React Native, reducing load times by 40% and increasing user engagement by 30%.",
        "Set up and tested Firebase event logging for user interactions, enabling accurate tracking and data-driven enhancements to the native app.",
        "Redesigned and deployed AnamVR’s website with TypeScript, improving performance score by 48%, reducing LCP by 92%, and cutting blocking time by 77%.",
      ],
    },
  ];

  return (
    <div className="my-20">
      <div
        id="experience"
        className="flex justify-center items-center bg-background px-12 w-full"
      >
        <h2 className="xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl xs:text-6xl font-black text-primary">
          EXPERIENCE
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center bg-background py-16 px-8 gap-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="project-card w-full max-w-4xl bg-project-card-bg border-[#4b5563] border-4 text-primary p-8 rounded-xl"
          >
            <div className="flex flex-col justify-between h-full xl:p-4 lg:p-2">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <h4 className="mt-2 sm:mt-0 text-lg sm:text-xl text-blue-400 hover:text-blue-500 transition-colors duration-300">
                  <a
                    href={`https://www.anamvr.com/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company} ↗&#xFE0E;
                  </a>
                </h4>
                <ul className="space-y-2 pt-2 mt-6">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 text-sm sm:text-lg flex items-start"
                    >
                      <span className="mr-2 text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
