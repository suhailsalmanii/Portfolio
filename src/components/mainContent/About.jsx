import React from "react";
import PageName from "./PageName";
import myProfile from "../../assets/myProfile.png";
import myResume from "../../assets/myResume.pdf";

const About = () => {
  return (
    <section className="pt-24 sm:pt-32">
      <PageName name="About Me" icon="ri-user-line" />

      <div id="about" className="scroll-mt-24 flex flex-col gap-10 md:flex-row md:items-center md:gap-12">
        <div className="flex flex-col justify-center gap-8 text-base text-[#ffffffa4] md:w-1/2">
          <div className=" flex flex-col gap-3">
            <p>
              Hi, I'm Suhail Salmani as a passionate Frontend Developer who
              enjoys turning ideas into interactive, responsive, and
              user-friendly web experiences.
            </p>
            <p>
              I have hands-on experience with HTML, CSS, JavaScript, React.js,
              and Tailwind CSS. I enjoy building modern web interfaces,
              exploring new technologies, and continuously improving my
              problem-solving and development skills.
            </p>
            <p>
              Currently, I'm looking for an opportunity as a Frontend Developer
              Intern or Junior Frontend Developer, where I can contribute my
              skills, learn from experienced developers, and grow
              professionally.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <i className="ri-map-pin-line text-[#0891b3]"></i>
              <p className="text-lg  text-[#ffffffe7]">
                New Delhi, India (Open to Remote)
              </p>
            </div>
            <div className="flex gap-2">
              <i className="ri-phone-fill text-[#0891b3]"></i>
              <p className="text-lg  text-[#ffffffe7]">9717248186</p>
            </div>
            <div className="flex gap-2">
              <i className="ri-suitcase-line text-[#0891b3]"></i>
              <p className=" text-lg text-[#ffffffe7]">Actively Interviewing</p>
            </div>
            <div className="flex gap-2">
              <i className=" ri-profile-line text-[#0891b3]"></i>
              <a
                href={myResume}
                target="_blank"
                className="break-all text-lg text-[#ffffffe7] hover:underline"
              >
                Resume.pdf
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img
            className="h-64 w-64 max-w-full rounded-full object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            src={myProfile}
            alt="Portrait of Suhail Salmani"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
