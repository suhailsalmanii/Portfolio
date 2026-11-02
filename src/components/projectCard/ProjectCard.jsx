import React from "react";

const ProjectCard = () => {
  return (
    <div>
      <div className="group w-full max-w-md rounded-2xl border-[0.5px] border-[#707b8e7b] hover:border-[#2bd5ff]">
        <div>
          <div className="">
            <img
              src="https://img.freepik.com/premium-photo/it-information-technology-wallpaper-hd-4k_7419-4529.jpg"
              alt=""
              className="h-48 w-full rounded-t-2xl object-cover sm:h-56"
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
                tech
              </p>
              <p className="text-xs font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">
                Skills
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-[#ffffffe7]">
              <a href="" className=" hover:text-[#2bd5ff]">
                <i class="ri-github-line"></i>
                <span className="p-2">Code</span>
              </a>
              <a href="" className=" hover:text-[#2bd5ff]">
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
