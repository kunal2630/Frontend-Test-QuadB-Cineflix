import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Ticketform = () => {
  const navigate = useNavigate();

  const getDate = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return String(day) + "/" + String(month) + "/" + String(year);
  };

  const date = getDate();
  const movieDetails = useSelector((store) => store.movieDetails);
  const {  image, name, genres  } = movieDetails;

  return (
    <div className="w-full flex pt-24 items-center justify-center gap-3">
      <div className="  shrink-0 hidden md:flex  hover:scale-95 ease-in-out duration-700">
        <img
          src={image.original ? image.original : image.medium}
          className="rounded-lg object-cover w-full  max-h-[30rem]  "
          alt="movieposter"
        />
      </div>
      <div class="w-full md:w-5/12  mt-10 ">
        <h2 class="mx-3     text-3xl font-bold leading-7 text-gray-900">{name}</h2>
        <p className="m-3  text-gray-700 text-lg font-medium  ">
          {genres.join(", ")}
        </p>
        <p class="m-3 my-2 text-lg leading-6 text-gray-600">{date}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Tickets successfully booked! Enjoy the show!");
            navigate("/browse");
          }}
          className="text-black rounded-2xl 
           bg-opacity-90 "
        >
          <input
            className=" text-white w-[90%] p-[13px]  mx-3 my-2 text-lg bg-[#333333] rounded-md outline-none"
            type="text"
            name=""
            id=""
            placeholder="Full Name"
            required
          />

          <input
            className=" text-white  w-[90%] p-[13px] mx-3 my-2 text-lg bg-[#333333] rounded-md outline-none"
            type="text"
            name=""
            placeholder="Email or phone number"
            required
          />

          <select
            name="seats"
            className=" text-white w-[90%] p-[13px]  mx-3 my-2 text-lg bg-[#333333] rounded-md outline-none"
          >
            <option disabled selected value="">
              Select Number of Seats
            </option>
            <option value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <button
            onClick={() => {}}
            type="submit"
            className="w-[90%] text-2xl p-2.5 py-2 m-3 mt-10 text-white bg-[#e50914] hover:bg-[#f84464]  hover:cursor-pointer rounded-lg focus:outline-none "
          >
            Book tickets
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ticketform;
