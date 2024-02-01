import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { API_URL } from "../const";

const MovieCardContainer = () => {
  const [movieData, setMovieData] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API_URL);
      const jsondata = await data.json();
      setMovieData(jsondata);
    };

    fetchData();
  }, []);
  return (
    <div className="w-full pl-4 mt-4 md:mt-10">
      {movieData && <h1 className=" hidden md:flex font-bold text-3xl  mt-7 mb-2">Top Shows</h1>}
      <div className="flex flex-wrap">
      {movieData &&
        movieData.length > 0 &&
        movieData.map((movie,index) => <MovieCard key={index} data={movie} />)}
        </div>
    </div>
  );
};

export default MovieCardContainer;
