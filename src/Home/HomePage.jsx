import React from "react";
import { Icon } from "@iconify/react";
import img from "../assets/Alvin1.png";
import img2 from "../assets/alvin2.jpg";

export const dataBar = [
  { h3: "Tech Stack", href: "http://" },
  { h3: "Projects", href: "http://" },
  { h3: "Contact", href: "http://" },
];

const HomePage = () => {
  return (
    <section className="bg-[#202020] paddingXShorter paddingYShorter">
      {/* dekstop version */}
      <div className="hidden md:block lg:block">
        <header className="flex flex-col md:flex-row lg:flex-row justify-start gap-5 paddingBottomShorter3">
          <div className="bg-[#28282a] rounded-lg flex flex-col md:w-[70%] w-full paddingX paddingYLonger gap-8">
            <h1
              className="text-[#ffffff] font-light md:text-[5rem] text-[3rem] text-start tracking-wide
"
            >
              Hello! <br /> I'm - Alvin <br />
              Frontend Developer
            </h1>
            <p className="font-extralight text-start text-[#ffffff]">
              I specialized in creating scalable, intuitive, and responsive web
              applications with engaging user interfaces that are efficient,
              maintainable, and accessible using the React library.
            </p>
          </div>
          <div className="md:w-[30%] w-full">
            <img src={img} className="rounded-lg object-cover" />
          </div>
        </header>

        <div className="bg-[#c4f040] rounded-lg flex justify-around paddingXShorter paddingYShorter2">
          {dataBar?.map((e) => {
            return <h3 className="text-[#000000] font-light">{e?.h3}</h3>;
          })}
        </div>
      </div>

      {/* mobile version */}
      <div className="block md:hidden lg:hidden">
        {" "}
        <header className="bg-[#28282a] flex flex-col justify-start gap-5 paddingBottomLonger rounded-lg ">
          <div className="flex flex-col md:w-[70%] w-full paddingX paddingYLonger gap-8">
            <h1
              className="text-[#ffffff] font-light md:text-[5rem] text-[2.5rem] text-start tracking-wide
"
            >
              Hello! <br /> I'm - Alvin <br />
              Frontend Developer
            </h1>
            <p className="font-extralight text-start text-[#ffffff]">
              I specialized in creating scalable, intuitive, and responsive web
              applications with engaging user interfaces that are efficient,
              maintainable, and accessible using the React library.
            </p>
          </div>
          <div className="relative mx-auto px-5">
            <img src={img2} className="rounded-3xl object-cover" />
            {/* <button
              class="absolute bottom-6 right-10  mt-8 lg:mt-0 btn text-sm hover:bg-[#19191a] normal-case font-normal rounded-full border-none bg-[#19191a] text-[#ffffff] w-40 group 
 inline-flex items-center overflow-hidden"
            >
              Connect with me!
              <span class="right-0 duration-300 transform translate-y-full group-hover:translate-y-0 ease absolute flex items-center justify-end w-10 h-10">
                <Icon
                  icon="mdi:rocket-launch"
                  color="#ffffff"
                  width="30"
                  height="24"
                />
              </span>
            </button> */}
          </div>
        </header>
      </div>
    </section>
  );
};

export default HomePage;
