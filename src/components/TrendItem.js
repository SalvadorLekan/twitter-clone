import React from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import EmoVG from "./EmoVG";

function TrendItem({
  trendTitle = "Trend",
  id = 1,
  trendWord = "#Salvador",
  number = "1k",
}) {
  return (
    <div className="shadow hover:bg-gray-100 bg-blue-50 p-2">
      <div className="flex items-center justify-between text-gray-500">
        <small>
          {" "}
          {id} . {trendTitle}{" "}
        </small>
        <EmoVG>
          <BiDotsHorizontal className="text-2xl" />
        </EmoVG>
      </div>
      <p className="font-medium">{trendWord}</p>
      <small className="text-gray-500">{number} tweets</small>
    </div>
  );
}

export default TrendItem;
