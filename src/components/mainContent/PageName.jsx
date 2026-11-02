import React from "react";

const PageName = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 pb-10 pt-12 text-2xl sm:gap-3 sm:pb-14 sm:pt-15 sm:text-3xl">
      <i class={`${icon} text-[#0891b3] text-2xl`}></i>
      <h2 className="font-bold">{name}</h2>
      <div className=" border-b-[0.5px] border-[#707b8e7b] flex-1 self-center"></div>
    </div>
  );
};

export default PageName;
