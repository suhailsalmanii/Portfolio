import React from "react";
import PageName from "./PageName";
import TechSkills from "../techSkills/TechSkills";

const Skills = () => {
  const skillCards = [
    {
      skillName: "React.js",
      skillIcon: <i class="ri-reactjs-fill"></i>,
    },
    {
      skillName: "Javacript",
      skillIcon: <i class="ri-javascript-line"></i>,
    },
    {
      skillName: "HTML",
      skillIcon: <i class="ri-html5-line"></i>,
    },
    {
      skillName: "CSS",
      skillIcon: <i class="ri-css3-line"></i>,
    },
    {
      skillName: "Tailwind CSS",
      skillIcon: <i class="ri-tailwind-css-fill"></i>,
    },
    {
      skillName: "Git & Github",
      skillIcon: <i class="ri-github-line"></i>,
    },
    {
      skillName: "Responsive Design",
      skillIcon: <i class="ri-layout-line"></i>,
    },
  ];
  return (
    <div>
      <PageName icon="ri-terminal-line" name="Skills" />
      <div id="skills" className="scroll-mt-24 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {skillCards.map(function (elem, idx) {
          return (
            <div key={idx}>
              <TechSkills
                skillName={elem.skillName}
                skillIcon={elem.skillIcon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
