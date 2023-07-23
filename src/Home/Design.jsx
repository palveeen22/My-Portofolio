import React from "react";

// import img1 from "../assets/design1.png";
// import img2 from "../assets/design2.png";

const Design = () => {
  return (
    <section className="bg-[##E6E6E8] paddingX paddingY">
      <div className="flex gap-4">
        <img src={img1} className="border border-black rounded-xl top-0" />
        <img src={img2} className="border border-black rounded-xl" />
      </div>
    </section>
  );
};

export default Design;
