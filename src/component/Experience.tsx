import React from "react";
import pinterestLogo from "../assets/pinterest.webp";
import hackEuropeLogo from "../assets/hackeurope.webp";
import anamvrLogo from "../assets/anamvr.webp";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Pinterest",
      logo: pinterestLogo,
      links: "",
      period: "May 2026 - Aug 2026",
      description: [
        "Designed and shipped a production MCP server for Pinterest’s Experience HQ platform that exposes 13 read-only tools for internal AI agents",
        "Architected the service on Kubernetes with OAuth 2.1 authentication via an Envoy sidecar, JWT-based identity propagation, and audit logging aligned with Pinterest’s MCP Security Standards, all backed by automated CI/CD deployment pipelines", 
        "Instrumented end-to-end observability with dashboards for latency, error rates, and per-endpoint usage, and the service has processed 3,500+ API calls in production.",
        "Led the migration of a legacy internal debugging tool from a V3 UI to a modern React and Gestalt interface, refactoring core pages, adding configurable search and filtering, and authoring a comprehensive Jest test suite."
      ],
    },
    {
      title: "Frontend Developer",
      company: "HackEurope",
      logo: hackEuropeLogo,
      links: "https://www.hackeurope.com/",
      period: "Jan 2026 - May 2026",
      description: [
        "Built core product surfaces in React/TypeScript for Europe’s largest student hackathon, serving 1,000+ applicants across Ireland, France and Sweden.",
        "Engineered the end-to-end applicant registration portal and built internal evaluation dashboards for event organizers to streamline application workflows.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "AnamVR",
      logo: anamvrLogo,
      links: "https://www.anamvr.com/",
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
                <div className="flex items-start gap-4 md:gap-6">
                  {exp.logo ? (
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded-lg"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                        {exp.title}
                      </h3>
                      <span className="text-gray-400 text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="-mt-1 text-lg sm:text-xl text-blue-400 leading-tight">
                      {exp.links ? (
                        <a
                          href={exp.links}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-500 transition-colors duration-300 inline-flex items-center gap-1"
                        >
                          <span>{exp.company}</span>
                          <span>↗&#xFE0E;</span>
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </h4>
                  </div>
                </div>

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
