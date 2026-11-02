import React from "react";
import ButtonBlue from "../buttons/ButtonBlue";

const Contact = () => {
  return (
    <div>
      <div
        id="contact"
        className="scroll-mt-20 flex flex-col items-center justify-center gap-5 px-2 pb-10 pt-28 text-center sm:px-8 sm:pt-36 lg:px-32"
      >
        <h1 className=" text-4xl font-bold">Get In Touch</h1>
        <p className="text-lg text-blue-100">
          My inbox is always open. Whether you have a question, a project idea,
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex gap-5 justify-center items-center">
          <div className=" hover:-translate-y-1">
            <a href="mailto:suhailkhaan6616@gmail.com" target="_blank">
              <ButtonBlue
                icon="ri-mail-line "
                name="Say Hello"
                className="bg-cyan-300"
              />
            </a>
          </div>
          <div className="flex gap-2 px-5 py-3 rounded-lg hover:text-[#2bd5ff] hover:border-[#2bd5ff]  text-[#dbe4e8e8] font-semibold border border-[#707b8e]">
            <i className="ri-phone-fill text-[#0891b3]"></i>
            <p className="text-md  text-[#ffffffe7]">+91 9717248186</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
