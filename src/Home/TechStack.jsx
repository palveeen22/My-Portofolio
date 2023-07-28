import React from "react";
import { Icon } from "@iconify/react";

export const languageData = [
  { icon: "logos:javascript" },
  { icon: "vscode-icons:file-type-html" },
  { icon: "vscode-icons:file-type-css" },
  { icon: "devicon:typescript" },
];

export const frameWorkData = [
  { icon: "logos:react" },
  { icon: "devicon:tailwindcss" },
];

export const caruselData = [
  { icon: "logos:javascript" },
  { icon: "vscode-icons:file-type-html" },
  { icon: "vscode-icons:file-type-css" },
  { icon: "devicon:typescript" },
  { icon: "logos:react" },
  { icon: "devicon:tailwindcss" },
];

const TechStack = () => {
  return (
    <div className="paddingX paddingY bg-[#202020] text-[#ffffff] ">
      <h1 className="font-light md:text-[5rem] text-[2rem] text-center paddingBottom">
        Tech Stack
      </h1>
      {/* dekstop */}
      <div className="hidden md:block lg:block">
        <div className="flex flex-col justify-center gap-10">
          <h3 className="text-start font-extralight">Language</h3>
          <div className="flex justify-center md:gap-[5rem] gap-2">
            {languageData?.map((e) => {
              return <Icon icon={e?.icon} width={120} />;
            })}
          </div>
          <h3 className="text-start font-extralight">Framework</h3>
          <div className="flex justify-center md:gap-[3rem] gap-10">
            {frameWorkData?.map((e) => {
              return <Icon icon={e?.icon} width={120} />;
            })}
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="block md:hidden lg:hidden paddingXShorter2">
        <div className="carousel carousel-center bg-neutral max-w-xs p-4 space-x-6 rounded-box">
          {caruselData?.map((e) => {
            return (
              <div className="carousel-item">
                <Icon icon={e?.icon} width={80} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
