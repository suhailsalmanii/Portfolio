import React from "react";
import appImage from "../../assets/App-Image.avif";

const ProjectCard = () => {
  return (
    <div>
      <div className="group w-full max-w-md rounded-2xl border-[0.5px] border-[#707b8e7b] hover:border-[#2bd5ff]">
        <div>
          <div className="">
            <img
              src={appImage}
              alt=""
              className="h-48 w-full rounded-t-2xl object-fit sm:h-56"
            />
          </div>
          <div className=" flex flex-col gap-5 p-5 bg-[#0f172a] rounded-br-2xl rounded-bl-2xl">
            <h1 className="text-2xl font-bold group-hover:text-[#2bd5ff]">
              AI - JobFit
            </h1>
            <p className="text-sm leading-6 text-[#ffffffa4]">
              This Project will be a self-contained React component that
              features a clean, modern, and responsive UI built with Tailwind
              CSS. It includes the simulated AI analysis logic to match skills
              between a resume and a job description.
            </p>
            <div className="flex flex-wrap gap-3">
              <p className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">
                HTML & CSS
              </p>
              <p className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">
                JS
              </p>
              <p className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">
                Tailwind CSS
              </p>
              <p className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">
                React
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-[#ffffffe7]">
              <a
                href="https://github.com/suhailsalmanii/Ai-JobFit-App.git"
                target="_blank"
                className=" hover:text-[#2bd5ff]"
              >
                <i class="ri-github-line"></i>
                <span className="p-2">Code</span>
              </a>
              <a
                href="https://ai-job-fit-app.vercel.app/"
                className=" hover:text-[#2bd5ff]"
              >
                <i class="ri-eye-line"></i>
                <span className="p-2">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
