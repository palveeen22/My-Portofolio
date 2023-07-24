import React from "react";

import img from "../assets/Alvin1.png";
// icons
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { VscArrowRight } from "react-icons/vsc";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <section className="bg-[#23281a] paddingX paddingY">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col justify-center md:w-[50%] w-full gap-4 text-[#ffffff]">
          <h1 className="text-start">Front-End Developer</h1>
          <p className="font-extralight">
            I specialized in creating scalable, intuitive, and responsive web
            applications with engaging user interfaces that are efficient,
            maintainable, and accessible using the React library.
          </p>
        </div>
        <div className="w-[30%] self-center">
          <img src={img} className="rounded-full h-[40%]" />
        </div>
      </div>
    </section>
  );
};

export default Header;
