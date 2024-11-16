import React from "react";
import profile from "../assets/profile.png";

export default function HeadAbout() {
  return (
    <div className="flex h-screen flex-col justify-center items-start bg-gray-950 px-12 w-full">
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
      </div>
    </div>
  );
}
