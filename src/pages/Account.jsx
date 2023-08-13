import React from "react";
import SavedShows from "../components/SavedShows";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const Account = () => {
  return (
    <div className="w-full text-white">
      <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/947b8846-5378-478b-8e68-b85e7dfe855e/EG-en-20230731-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className=" text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedShows />
    </div>
  );
};

export default Account;
