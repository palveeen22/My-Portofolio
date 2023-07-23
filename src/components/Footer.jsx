import React from "react";

// icon
import { Icon } from "@iconify/react";

export const footerItems = [
  {
    icon: "ic:outline-email",
    href: "mailto:alvinprtm22@gmail.com",
  },
  {
    icon: "iconoir:telegram",
    href: "https://github.com/",
  },
  {
    icon: "ic:outline-whatsapp",
    href: "https://github.com/",
  },
  {
    icon: "ant-design:linkedin-outlined",
    href: "https://github.com/",
  },
  {
    icon: "mingcute:github-line",
    href: "https://github.com/",
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#000000] relative mt-auto p-10">
      <div className="flex justify-between max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <p className="text-center text-gray-300 text-sm">
          © 2023 My Company. All rights reserved.
        </p>
        <a className="flex justify-start gap-4">
          {footerItems?.map((e, index) => {
            return (
              <Icon
                icon={e?.icon}
                onClick={() => openInNewTab(e?.href)}
                key={index}
                color="white"
                width={35}
                className="transition ease-in-out delay-150 rotate-12 hover:rotate-0 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              />
            );
          })}
        </a>
        <p className="text-center self-center text-white text-md">
          CODING NEVER ALONE{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
