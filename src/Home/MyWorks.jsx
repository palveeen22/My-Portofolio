import React from "react";
import img1 from "../assets/belinsky.png";
import img2 from "../assets/turtang.png";

export const workData = [
  {
    img: img1,
    a: "UI DESIGN & WEB DEVELOPMENT",
    p: "Given that Belinsky is a production house and creative studio,its areas of expertise include photography production and filmmaking.It is owned by a well- known YouTuber named Turah Parthayana under the umbrella of Mantappu Corp.",
  },
  {
    img: img2,
    a: "FULL-STACK WEB APPLICATION",
    p: "  TurunTangan is a non-profit youth volunteer movement engaged in social humanity, environment, education, political education, and health with more than 70 chapters across Indonesia.",
  },
  // {
  //   img: img2,
  //   a: "FULL-STACK WEB APPLICATION",
  //   p: "  TurunTangan is a non-profit youth volunteer movement engaged in social humanity, environment, education, political education, and health with more than 70 chapters across Indonesia.",
  // },
];

const MyWorks = () => {
  return (
    <section className="paddingX paddingY bg-[#23281a]">
      <div className="flex flex-col justify-start gap-8">
        <h3 className="text-[#ffffff] text-[4rem]">MY WORKS</h3>
        <div className="flex flex-col lg:flex-row justify-start gap-8 w-full">
          {workData.map((e) => {
            return (
              <div className="flex flex-col justify-start lg:w-[30%] gap-5">
                <img
                  src={e?.img}
                  className="bg-[#fbf6f1] rounded-xl border border-black"
                />
                <a className="font-extralight text-[#ffffff]">{e?.a} </a>
                <p className="text-justify text-[#ffffff]">{e?.p}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
