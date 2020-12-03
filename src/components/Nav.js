import React from "react";
import EmoVG from "./EmoVG";
import {
  RiTwitterFill,
  RiHome7Fill,
  RiNotification2Line,
  RiFileList2Line,
  RiUser3Line,
} from "react-icons/ri";
import { FiHash, FiMail, FiBookmark } from "react-icons/fi";
import { HiChevronDown, HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import NavItems from "./NavItems";

function Nav() {
  return (
    <nav className="p-1 hidden sm:flex flex-col justify-between h-screen sticky top-0">
      <div className="">
        <EmoVG>
          <RiTwitterFill className="text-4xl" />
        </EmoVG>
        <ul className="list-none pr-0">
          <NavItems Icon={RiHome7Fill} name="Home" />
          <NavItems Icon={FiHash} name="Explore" />
          <NavItems Icon={RiNotification2Line} name="Notifications" />
          <NavItems Icon={FiMail} name="Messages" />
          <NavItems Icon={FiBookmark} name="Bookmarks" />
          <NavItems Icon={RiFileList2Line} name="Lists" />
          <NavItems Icon={RiUser3Line} name="Profile" />
          <NavItems Icon={HiOutlineDotsCircleHorizontal} name="More" />
        </ul>
        <button
          type="submit"
          disabled
          className="bg-blue-500 w-full hover:bg-blue-600 hidden lg:block text-white py-3 my-3 rounded-full font-semibold ml-2"
        >
          Tweet
        </button>
      </div>
      <div className="flex items-center w-full my-3 hover:bg-blue-100 rounded-full p-3">
        <div className="w-10">
          <img
            src="https://pbs.twimg.com/profile_images/1299442551058034690/8KxS7I57_400x400.jpg"
            alt="profile"
            className="rounded-full hover:opacity-80"
          />
        </div>
        <div className="text-sm px-2 hidden lg:block">
          <h4 className="font-medium"> Salvador #EndSARS</h4>
          <p className="text-gray-500">@SalvadorLekan</p>
        </div>
        <HiChevronDown className="text-3xl text-blue-500 hidden lg:block" />
      </div>
    </nav>
  );
}

export default Nav;
