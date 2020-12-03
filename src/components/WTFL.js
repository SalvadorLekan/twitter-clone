import React from "react";

function WTFL() {
  return (
    <div>
      <div className="flex shadow hover:bg-gray-100 bg-blue-50 p-2">
        <a href="/" className="w-12 block">
          <img
            src="https://pbs.twimg.com/profile_images/1299442551058034690/8KxS7I57_400x400.jpg"
            alt="profile"
            className="rounded-full hover:opacity-80"
          />
        </a>
        <div className="flex-grow flex justify-between items-center">
          <div className="text-sm px-2">
            <h4 className="font-medium"> Salvador #EndSARS</h4>
            <p className="text-gray-500">@SalvadorLekan</p>
          </div>
          <button
            type="button"
            className="py-2 leading-none px-4 border-2 border-blue-500 hover:bg-blue-100 rounded-full"
          >
            follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default WTFL;
