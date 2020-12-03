import React from "react";
import { FiSearch } from "react-icons/fi";
import Trends from "./Trends";

function Aside() {
  return (
    <div className="py-3 px-5 h-screen sticky top-0 hidden md:block">
      <label className="w-full flex items-center p-2 bg-gray-100 rounded-full sticky top-0">
        <FiSearch />
        <input
          placeholder="Search Twitter"
          className="rounded-full p-1 px-2 bg-gray-100 focus:bg-white mx-2"
        />
      </label>
      <Trends />
    </div>
  );
}

export default Aside;
