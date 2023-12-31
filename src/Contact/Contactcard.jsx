import React from "react";
import { Icon } from "@iconify/react";

export const cardItems = [
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

const Contactcard = () => {
  return (
    <section className="paddingAllEquals bg-[#202020]">
      {/* dekstop version */}
      <card className="hidden md:block lg:block">
        <div className="flex flex-col justify-center gap-10">
          <h3 className="text-center  text-[#ffffff]">Let's connect!</h3>
          <p className="text-[#FFFFFF] md:text-center text-center w-[60%] mx-auto font-light">
            I'm on the lookout for new opportunities and would love to hear
            about any potential ones. Don't hesitate to contact me if you have
            any leads or want to talk about possible collaborations.
          </p>
          <a className="flex justify-center gap-10">
            {cardItems?.map((e, index) => {
              return (
                <Icon
                  icon={e?.icon}
                  onClick={() => {
                    window.open(e?.href, "_blank");
                  }}
                  key={index}
                  color="white"
                  width={35}
                  className="transition ease-in-out delay-150 rotate-12 hover:rotate-0 hover:-translate-y-1 hover:scale-130 duration-300 cursor-pointer"
                />
              );
            })}
          </a>
        </div>
      </card>
      {/* mobile version */}
      <card className="block md:hidden lg:hidden">
        <div className="flex flex-col justify-center gap-6 bg-[#28282a] rounded-xl paddingX paddingY">
          <h3 className="text-center  text-[#ffffff]">Let's connect!</h3>
          <p className="text-[#ffffff] text-center text-xs">
            I'm on the lookout for new opportunities and would love to hear
            about any potential ones. Don't hesitate to contact me if you have
            any leads or want to talk about possible collaborations.
          </p>
          {/* <button className="px-8 py-4 rounded-full mx-auto bg-[#19191a] border text-lg  text-[#ffffff]">
            Let's connect!
          </button> */}
          <a className="flex justify-around">
            {cardItems?.map((e, index) => {
              return (
                <Icon
                  icon={e?.icon}
                  onClick={() => {
                    window.open(e?.href, "_blank");
                  }}
                  key={index}
                  color="white"
                  width={35}
                  className="transition ease-in-out delay-150 rotate-12 hover:rotate-0 hover:-translate-y-1 hover:scale-130 duration-300 cursor-pointer"
                />
              );
            })}
          </a>
        </div>
      </card>
    </section>
  );
};

export default Contactcard;
