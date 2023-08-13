import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Movie from "./Movie";
const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text=xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
