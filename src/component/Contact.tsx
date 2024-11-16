import React from "react";
import github from "../assets/github.svg";
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
    icon: github,
    title: "Projects",
    description:
      "I showcase personal projects and contribute to resolving issues on GitHub, either through code contributions or by reporting identified issues.",
    link: "https://github.com/ishaanJ91",
    linkText: "View profile ↗",
  },
  {
    icon: linkedin,
    title: "LinkedIn",
    description:
      "I share my professional journey on LinkedIn, including achievements and extracurriculars to build industry connections.",
    link: "https://www.linkedin.com/in/ishaanj9/",
    linkText: "Connect ↗",
  },
  {
    icon: substack,
    title: "Blog",
    description:
      "I write on Substack about productivity hacks, mental health tips, and a student's perspective on college life.",
    link: "https://ishaanjain91.substack.com/",
    linkText: "Read ↗",
  },
  {
    icon: google,
    title: "Gmail",
    description:
      "You can also easily reach me through Gmail for any inquiries.",
    link: "mailto:jaini@tcd.ie",
    linkText: "Email me ↗",
  },
];

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  link,
  linkText,
}) => (
  <div className="flex flex-col justify-start items-start bg-beige rounded-lg p-6 gap-1 text-left">
    <img src={icon} alt={title} className="h-10 w-10" />
    <h3 className="text-2xl text-black font-semibold pt-2">{title}</h3>
    <p className="text-lg text-gray-800 py-1">{description}</p>
    <a
      href={link}
      target="_blank"
      className="text-blue-500 text-lg mt-auto self-start hover:text-blue-600"
    >
      {linkText}
    </a>
  </div>
);

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 bg-gray-950 min-h-screen w-full">
      <div className="flex flex-col items-center text-center py-8">
        <h2 className="text-9xl font-black text-beige mb-4">CONTACT</h2>
      </div>

      <div className="py-10 grid grid-cols-2 gap-6 md:grid-cols-2 xl:grid-cols-2 w-full max-w-6xl">
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
