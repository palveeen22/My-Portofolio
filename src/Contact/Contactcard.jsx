import React from "react";

const Contactcard = () => {
  return (
    <section className="paddingAllEquals bg-[#23281a]">
      <div className="flex flex-col justify-center gap-10 bg-[#a79bee] rounded-xl paddingX paddingY ">
        <h3 className="text-[#FFFFFF] text-center">
          I'm on the lookout for new opportunities and would love to hear about
          any potential ones. Don't hesitate to contact me if you have any leads
          or want to talk about possible collaborations.
        </h3>
        <button className="px-6 py-4 rounded-full mx-auto bg-[#FB3E2D] text-lg  text-[#ffffff]">
          Let's connect!
        </button>
      </div>
    </section>
  );
};

export default Contactcard;
