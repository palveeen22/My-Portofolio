import React from "react";
import { Icon } from "@iconify/react";

// export const imageData = [{ img: img1 }];

const TechStack = () => {
  return (
    <div className="paddingX paddingY bg-[#23281a] text-[#ffffff] ">
      <h1>Tech Stack</h1>
      <div className="flex flex-col justify-center gap-8">
        <h3 className="text-center">Language</h3>
        <div className="flex justify-center gap-[2rem]">
          <Icon icon="logos:javascript" width={60} />
          <Icon icon="vscode-icons:file-type-html" width={60} />
          <Icon icon="vscode-icons:file-type-css" width={60} />
          <Icon icon="devicon:typescript" width={60} />
        </div>
        <h3 className="text-center">Framework</h3>
        <div className="flex justify-center gap-[2rem]">
          <Icon icon="logos:react" width={60} />
          <Icon icon="devicon:tailwindcss" width={60} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
