import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className=" w-full flex justify-between border-1  border-white shadow-md fixed
         top-0 z-10
     bg-[#ffffff] px-4 pr-8"
    >
      <div className=" py-2 pl-4 ">
        <Link to="/" className=" md:p-2.4">
          <img className=" p-2 w-12 h-12 object-cover  " src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex  items-center justify-center   ">
        <Link to="/browse" style={{ textDecoration: "none" }}>
          <p className="font-medium  cursor-pointer hover:text-[#f84464]  text-[22px]">
            Browse
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
