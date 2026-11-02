import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" border-b-[0.5px] border-[#707b8e7b] flex-1 self-center"></div>
      <div className=" flex flex-col justify-center items-center leading-8 py-5 text-sm text-[#707b8e]">
        <p>Design & Built By Suhail Salmani</p>
        <p className="text-xs">
          Built with React & Tailwind CSS. Includes Simulated AI Assistant.
        </p>
      </div>
    </div>
  );
};

export default Footer;
