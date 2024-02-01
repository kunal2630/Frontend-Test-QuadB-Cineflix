import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import bgImage from "../images/bg.jpg";

const LandingPage = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Movie", "TV Shows", "Trailer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full h-[100vh] ">
        <div className="w-full  md:w-8/12 lg:w-7/12  xl:w-6/12 flex-col  items-center justify-center  px-12 inline-block ">
          <div className=" flex-col  ">
            <p className=" text-black text-4xl md:text-5xl lg:text-6xl    font-bold mt-20 items-center">
              Watch{" "}
              <span className="text-[#f84464] ">
                {" "}
                <span ref={el} />
              </span>{" "}
            </p>
          </div>

          <p className="max-w-[35rem] text-3xl lg:text-4xl  font-bold mt-4 text-neutral-800 px-1 ">
            Your Gateway to Endless Entertainment!
          </p>

          <div className="outline-none flex mt-4  ">
            <Link
              to={"/browse"}
              style={{ textDecoration: "none" }}
              className="text-black hover:text-black"
            >
              <button
                className="flex   outline-none text-white  bg-[#f84464]
             hover:opacity-90 py-2 px-8  text-lg font-bold justify-center items-center  rounded-md  focus:outline-none hover:cursor-pointer"
              >
                <div className="flex"></div>
                <p className="text-3xl">Explore</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:w-4/12 lg:w-5/12 xl:w-6/12">
          <img
            className="  opacity-90 h-[100vh] object-cover "
            src={bgImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
