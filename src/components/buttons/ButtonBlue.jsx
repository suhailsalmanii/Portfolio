import React from "react";

const ButtonBlue = ({ icon, name }) => {
  return (
    <div>
      <button className="bg-[#0891b3] hover:bg-cyan-500 px-10 py-3 rounded-lg font-semibold">
        <a>
          {name} <i class={` ${icon} text-white `}></i>
        </a>
      </button>
    </div>
  );
};

export default ButtonBlue;
