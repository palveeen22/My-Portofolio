import React from "react";
import img1 from "../assets/cocos.png";
import img2 from "../assets/svg4.png";
import img3 from "../assets/svg5.png";

// icons
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { VscArrowRight } from "react-icons/vsc";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <section className="relative bg-[##E6E6E8] paddingX paddingY item-center min-h-screen">
      <img src={img2} className="absolute left-[10rem] -top-[8rem]" />
      <div className="flex flex-col item-end justify-center mx-auto lg:w-[50%] gap-4">
        <h1 className="font-light text-center">Designer</h1>
        <h1 className="font-light text-center">Front-End Developer</h1>
        <p className="w-full font-extralight text-justify">
          a passionate Junior frontend developer and designer. with strong
          fundamentals in JavaScript and specialize in using React.js and
          Tailwind CSS. Experience using Figma and Adobe Creative Suite to
          design and prototype interfaces, as well as creating 3D animations
          using Blender. My goal is to create innovative designs that are both
          functional and visually appealing.
        </p>
        <div className="flex justify-end item-end">
          <button
            className="mt-4 lg:mt-0   gap-2 border rounded-full bg-[#1E5BFF] text-[#FEFEFE] px-5 py-3 hover:px-8  hover:rounded-xl transition duration-600 group 
relative inline-flex items-center overflow-hidden"
          >
            See More!
            <span className="right-0 duration-300 transform translate-y-full group-hover:translate-y-0 ease absolute flex items-center justify-start w-10 h-10">
              <Icon
                icon="mdi:rocket-launch"
                color="#ffffff"
                width="24"
                height="24"
              />
            </span>
          </button>
        </div>
      </div>
      <img src={img3} className="absolute bottom-[10rem] right-[20rem]" />
      <div className="absolute bottom-[5rem] right-[5rem] flex justify-end">
        <p className="text-justify w-[50%]">
          In September 2022, I joined a free programming course taught by my
          Indonesian friend in his apartment in Kazan, Russia. Along with other
          students, we learned the basics of JavaScript and eventually formed a
          software house startup called faoTech in January 2023. As I developed
          my skills, I discovered a passion for frontend development and decided
          to specialize in this field.
        </p>
      </div>
      {/* <button
        className="mt-4 lg:mt-0 btn text-sm lg:text-base  hover:bg-white normal-case font-semibold rounded-lg border-none bg-white text-[#4C6BDC] w-40 group 
relative inline-flex items-center overflow-hidden"
      >
        Go!
        <span className="right-0 duration-300 transform translate-y-full group-hover:translate-y-0 ease absolute flex items-center justify-start w-10 h-10">
          <Icon
            icon="mdi:rocket-launch"
            color="#4c6bdc"
            width="24"
            height="24"
          />
        </span>
      </button> */}
    </section>
  );
};

export default Header;
