import React from "react";
import { useSelector } from "react-redux";
import { IoMdStar } from "react-icons/io";
import { IoTicketSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const movieDetails = useSelector((store) => store.movieDetails);
  const navigate=useNavigate();
  if (!movieDetails) return;

  const { id,image, name, score, summary, premiered,genres,runtime } = movieDetails;
  const releaseDate = premiered.split("-").reverse().join("/");

  return (
    <div>
      <div className="flex pt-28 px-6 md:px-20  gap-6  mb-8 ">
        <div className="hidden md:flex w-7/12 lg:w-3/12 hover:scale-105 ease-in-out duration-300">
          <img
            src={image.original?image.original:image.medium}
            className="rounded-lg object-cover w-full"
            alt="movieposter"
          />
        </div>

        <div className="w-full lg:w-9/12">
          <div className="flex  items-center gap-10 ">
            <div className="inline  ">
              <div className="mb-1.5">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#000] ">
                  {name}
                </h1>
              </div>
            </div>

            <div className="w-[80px] shadow-xl text-lg mt-2 font-bold px-4 py-2 bg-gradient-to-r from-slate-300  rounded-md ">
              <div className="flex    text-orange-600">
                <div>
                  {" "}
                  <p className="text-2xl">{Math.round(score * 10)} </p>
                </div>
                <div>
                  <IoMdStar />
                </div>
              </div>

              <div className="flex item-center  ">
                <div className="border-b-[0.1px] border-dotted border-[#7e808c]  w-16 "></div>
              </div>

              <div className="flex  items-center text-2xl text-orange-600 ">
                <p>10</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-md font-medium text-[#000] mb-3 mt-3 text-lg">
            <div className="hidden md:inline-flex items-center justify-center">
              <p className="">{releaseDate}</p>
            </div>

            <div className="hidden  shrink-0 md:flex items-center justify-center gap-2">
              <p className=" ">• {genres.join(", ")} •</p>
            </div>

            <div className="flex  shrink-0 items-center justify-center">
              <p className="">
                {runtime} min
              </p>
            </div>
          </div>

          <div className="mt-3 mb-10">
            <p className="text-xl font-bold text-[#000] mb-3">Overview</p>
            <p className="text-justify font-medium">{summary}</p>
          </div>

          <div className=" w-full flex my-3 sm:gap-6  md:gap-14 items-center  ">
            <div className="outline-none   " onClick={() => {}}>
              <button
                className="flex   outline-none text-white  bg-[#f84464]
             hover:opacity-90 py-2.5 px-4 text-md font-bold justify-center items-center  rounded-md gap-1 focus:outline-none"
             onClick={()=>{

              navigate(`/browse/${id}/book`)

             }}
              >
                <div className="flex">
                  <IoTicketSharp />
                </div>
                <div>Book Tickets</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
