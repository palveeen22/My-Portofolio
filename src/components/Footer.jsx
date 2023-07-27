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
    <footer className="bg-[#000000] relative mt-auto p-5 md:p-10">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 gap-5">
        <p className="text-center text-gray-300 text-sm">
          © 2023 Alvin Macaronnie
        </p>
        <div className="hidden md:block lg:block">
          <a className="flex justify-center gap-4">
            {footerItems?.map((e, index) => {
              return (
                <Icon
                  icon={e?.icon}
                  onClick={() => {
                    window.open(e?.href, "_blank");
                  }}
                  key={index}
                  color="white"
                  width={35}
                  className="transition ease-in-out delay-150 rotate-12 hover:rotate-0 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                />
              );
            })}
          </a>
        </div>
        <p className="text-center self-center text-white text-md">
          CODING NEVER ALONE{" "}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
