import { useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
// import logo from "./assets/surf1.png";
import { VscMenu } from "react-icons/vsc";
// import { routesData } from "../store/Routes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const handleNav = () => {
  //   setNav(!nav);
  //   if (!nav) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  // };

  // let navigate = useNavigate();
  // const location = useLocation();
  return (
    <>
      {/* mobile version  */}
      <nav className="w-full paddingX paddingYShorter3 flex  justify-end gap-[2rem] bg-[##E6E6E8] border-b border-black ">
        <a className="border border-black px-5 py-2 rounded-full hover:rounded-xl transition duration-600 cursor-pointer">
          About
        </a>
        <a className="border border-black px-5 py-2 rounded-full hover:rounded-xl transition duration-600 cursor-pointer">
          Projects
        </a>
        <a className="border border-black px-5 py-2 rounded-full hover:rounded-xl transition duration-600 cursor-pointer">
          Contact
        </a>
      </nav>

      {/* mobile version  */}
      <div className="lg:hidden md:hidden  w-full paddingX paddingYShorter2 flex justify-between gap-[2rem] bg-[##E6E6E8] border-b border-black">
        <a className="border border-black px-5 py-2 rounded-full ">
          Portofolio
        </a>
        <VscMenu size={30} className="item-center" />
      </div>
    </>
  );
};

export default Navbar;
