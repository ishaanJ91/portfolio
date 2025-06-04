import React from "react";
import { useTheme } from "./ThemeContext"; // Corrected path
import githubB from "../assets/github.svg";
import githubW from "../assets/white-github.svg";
import linkedin from "../assets/linkedin-original.svg";
import substack from "../assets/substack-icon.svg";
import google from "../assets/google-original.svg";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const cardData: CardProps[] = [
  {
    icon: githubB,
    title: "Projects",
    description:
      "I showcase personal projects and contribute to resolving issues on GitHub, either through code contributions or by reporting identified issues.",
    link: "https://github.com/ishaanJ91",
    linkText: "View profile",
  },
  {
    icon: linkedin,
    title: "LinkedIn",
    description:
      "I share my professional journey on LinkedIn, including achievements and extracurriculars to build industry connections.",
    link: "https://www.linkedin.com/in/ishaanj9/",
    linkText: "Connect",
  },
  {
    icon: substack,
    title: "Blog",
    description:
      "I write on Substack about productivity hacks, mental health tips, and a student's perspective on college life.",
    link: "https://ishaanjain91.substack.com/",
    linkText: "Read",
  },
  {
    icon: google,
    title: "Gmail",
    description:
      "You can also easily reach me through Gmail for any inquiries.",
    link: "mailto:jaini@tcd.ie",
    linkText: "Email me",
  },
];

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  link,
  linkText,
}) => {
  const { isLightMode } = useTheme();

  const dynamicIcon =
    title === "Projects" ? (isLightMode ? githubW : githubB) : icon;

  return (
    <div className="flex flex-col justify-start items-start bg-contact-card rounded-lg p-6 gap-1 text-left shadow-lg">
      <img src={dynamicIcon} alt={title} className="h-10 w-10" />
      <h3 className="text-2xl text-card-heading font-semibold pt-2">{title}</h3>
      <p className="text-lg text-card-description py-1">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 xs:mt-4 lg:mt-0 text-lg mt-auto self-start hover:text-blue-600"
      >
        {linkText} <span className="text-sm">↗&#xFE0E;</span>
      </a>
    </div>
  );
};

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center pt-32 bg-contact min-h-screen w-full"
    >
      <div className="flex flex-col items-center text-center py-8">
        <h2 className="xl:text-9xl lg:text-8xl md:text-8xl sm:text-7xl xs:text-6xl font-black text-primary mb-4">
          CONTACT
        </h2>
      </div>

      <div className="py-10 grid gap-6 xl:w-full md:grid-cols-2 md:w-3/4 xs:grid-cols-1 xs:w-3/4 xl:grid-cols-2 max-w-6xl">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
            linkText={card.linkText}
          />
        ))}
      </div>
    </div>
  );
}
