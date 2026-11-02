import React from "react";
import ButtonBlue from "../buttons/ButtonBlue";
import ButtonGrey from "../buttons/ButtonGrey";

const Home = () => {
  return (
    <section id="home" className="scroll-mt-20 flex flex-col pt-16 sm:pt-20">
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Available for Work
      </div>
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">Hi, I'm Suhail Developer.</h1>
      <h2 className="text-4xl font-bold leading-tight text-blue-200 opacity-50 sm:text-5xl lg:text-7xl">
        I build for the web
      </h2>
      <p className="whitespace-pre-line pt-5 text-base text-[#ffffffa4] sm:text-xl">
        I am a{" "}
        <span className=" font-bold opacity-100 text-white px-1 ">
          Fresher Developer
        </span>
        passionate about creating beautiful,{" "}
        functional & user-centered digital expereinces
      </p>
      <div className="flex flex-wrap gap-3 pt-8 sm:gap-5">
        <a href="#project">
          <ButtonBlue name="View Project" icon="ri-arrow-right-s-line" />
        </a>
        <ButtonGrey />
      </div>
    </section>
  );
};

export default Home;
