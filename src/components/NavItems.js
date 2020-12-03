import React from "react";

function NavItems({ Icon, name, isActive = false }) {
  return (
    <li
      className={`flex items-center ${
        isActive && "text-blue-600"
      } hover:text-blue-600 hover:bg-blue-100 rounded-full p-2 lg:pr-5`}
    >
      <div className="text-2xl">
        <Icon />
      </div>
      <p className="text-xl font-medium px-2 hidden lg:block pl-4">{name}</p>
    </li>
  );
}

export default NavItems;
