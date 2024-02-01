import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieDetails } from "../utils/movieDetailsSlice";

const MovieCard = ({ data }) => {
  console.log(data);
  const score = data?.score;
  const { id, image, name, language, genres, summary, premiered, runtime } =
    data?.show;
  const dispatch = useDispatch();

  if (!image) return;

  return (
    <div className="w-10/12 sm:w-6/12 md:w-4/12  lg:w-3/12 xl:w-2/12   ">
      <div
        className="rounded-lg md:shadow-xl   m-2  "
        onClick={() => {
          dispatch(
            addMovieDetails({
              id:id,
              name: name,
              score: score,
              image: image,
              summary: summary,
              genres: genres,
              premiered: premiered,
              runtime: runtime,
            })
          );
        }}
      >
        <div className="rounded-t-lg">
          <img
            className="rounded-t-md w-full max-h-[25rem]  md:max-h-[16rem] shrink-0 hover:scale-95 ease-in-out duration-1000"
            src={image.original?image.original:image.medium}
            alt=""
          />
        </div>
        <div className=" px-3 py-2 ">
          <h3 className="font-bold text-2xl lg:text-xl  ">{name}</h3>

          <div className="flex gap-12 ">
            <div className="flex justify-center items-center">
              <p className="text-gray-700  text-xl lg:text-lg font-medium">{language}</p>
            </div>
          </div>
          <div className="hidden md:flex w-full  ">
            <p className="text-gray-700 text-lg font-medium  line-clamp-1 ">
              {genres.join(", ")}
            </p>
          </div>
        </div>
        <div className=" px-3 flex mt-1 md:mt-2 sm:gap-6  md:gap-14 items-center  ">
          <div className="outline-none   " onClick={() => {}}>
            <Link
              to={"/browse/" + id}
              style={{ textDecoration: "none" }}
              className="text-black hover:text-black"
            >
              <button
                className="flex   outline-none text-white  bg-[#f84464]
             hover:opacity-90 py-2.5 lg:py-1 px-12 lg:px-5 mb-3 text-md font-bold justify-center items-center  rounded-md gap-1 focus:outline-none hover:cursor-pointer"
              >
              
                <div>Explore</div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
