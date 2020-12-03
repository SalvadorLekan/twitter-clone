import React from "react";
import { FiSettings } from "react-icons/fi";
import EmoVG from "./EmoVG";
import TrendItem from "./TrendItem";
import WhoToFollow from "./WhoToFollow";

function Trends() {
  return (
    <div>
      <div className="shadow rounded-t-xl bg-blue-50 p-2 mt-3 flex items-center justify-between">
        <h3 className="font-bold text-xl">Trends</h3>
        <EmoVG>
          <FiSettings className="text-xl" />
        </EmoVG>
      </div>
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <div className="shadow rounded-b-xl hover:bg-gray-100 text-blue-600 bg-blue-50 p-2 mb-3">
        show more
      </div>
      <WhoToFollow />
    </div>
  );
}

export default Trends;
