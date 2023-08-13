import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SavedShows = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 500;
  };

  return (
    <div>
      <h2 className="text-white font-bold md:text=xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeftonLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRightRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default SavedShows;
