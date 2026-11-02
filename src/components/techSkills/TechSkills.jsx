import React from "react";

const TechSkills = (props) => {
  return (
    <div className="group flex min-h-28 w-full items-center justify-center rounded-2xl border-[0.5px] border-[#707b8e7b] bg-[#0f172a] transition-all hover:-translate-y-1 hover:border-[#2bd5ff] hover:bg-slate-800/50 sm:min-h-30">
      <div className="flex flex-col justify-center items-center">
        <div>
          <i class=" group-hover:text-[#2bd5ff] text-[#ffffffa4] text-3xl">
            {props.skillIcon}
          </i>
        </div>
        <div className="text-[#ffffffe7]  group-hover:text-[#2bd5ff]   font-bold text-sm mt-2">
          {props.skillName}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
