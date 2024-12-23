import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto px-4 py-6 flex justify-center items-center">
        <div className="sm:text-sm xs:text-xs justify-center items-center text-center">
          <p>Handcrafted by me using React, Typescript and Tailwind CSS.</p>
          <p>Copyright © 2024. All rights are reserved</p>
        </div>
      </div>
    </footer>
  );
}
