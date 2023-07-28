import React from "react";
import Modal from "./Modal";
import { workData } from "../components/Constants";

const MyWorks = () => {
  return (
    <section className="paddingX paddingY bg-[#202020]">
      <div className="flex flex-col justify-start gap-6">
        <h1 className="font-light md:text-[5rem] text-[2rem] text-center text-[#ffffff]">
          Projects
        </h1>
        <div className="flex flex-col lg:flex-row justify-start gap-8 w-full">
          {workData.map((e) => {
            return (
              <div className="flex flex-col justify-start lg:w-[30%] gap-5">
                <img
                  src={e?.img}
                  className="bg-[#fbf6f1] rounded-xl border border-black"
                />
                {/* <a className="font-extralight text-[#ffffff]">{e?.a} </a>
                <p className="text-justify text-[#ffffff]">{e?.p}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
