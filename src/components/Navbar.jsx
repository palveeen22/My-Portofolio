import react, { useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="w-full paddingX paddingYShorter3 flex  justify-between gap-[2rem] bg-[#000000] border-b border-black text-[#ffff]">
        <h3>ALVIN</h3>
        <div className="flex justify-center gap-6">
          <a className="border border-[#ffffff] px-5 py-2 rounded-full hover:rounded-xl transition duration-600 cursor-pointer">
            Home
          </a>
          <a className="border border-[#ffffff] px-5 py-2 rounded-full hover:rounded-xl transition duration-600 cursor-pointer">
            About
          </a>
          <a className="border border-[#ffffff] px-5 py-2 rounded-full hover:rounded-xl transition duration-600 cursor-pointer">
            Project
          </a>
          <a className="border border-[#ffffff] px-5 py-2 rounded-full hover:rounded-xl transition duration-600 cursor-pointer">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
