import React from "react";

// icons
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { VscArrowRight } from "react-icons/vsc";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <section className="bg-[#23281a] paddingX paddingY">
      <div className="flex flex-col justify-center mx-auto  gap-4 text-[#ffffff]">
        <h1 className="text-start">Front-End Developer</h1>
        <p className="w-[40%] font-extralight text-justify">
          I specialized in creating scalable, intuitive, and responsive web
          applications with engaging user interfaces that are efficient,
          maintainable, and accessible using the React library.
        </p>
        <div className="flex justify-end item-end"></div>
      </div>
    </section>
  );
};

export default Header;
