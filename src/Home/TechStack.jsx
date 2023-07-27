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

const TechStack = () => {
  return (
    <div className="paddingX paddingY bg-[#19191a] text-[#ffffff] ">
      <h1 className="font-light md:text-[7rem] text-[3rem]">Tech Stack</h1>
      <div className="flex flex-col justify-center gap-10">
        <h3 className="text-center font-extralight">Language</h3>
        <div className="flex justify-center md:gap-[5rem] gap-2">
          {languageData?.map((e) => {
            return <Icon icon={e?.icon} width={120} />;
          })}
        </div>
        <h3 className="text-center font-extralight">Framework</h3>
        <div className="flex justify-center md:gap-[3rem] gap-10">
          {frameWorkData?.map((e) => {
            return <Icon icon={e?.icon} width={120} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
