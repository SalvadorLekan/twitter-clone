import React from "react";
import WTFL from "./WTFL";

function WhoToFollow() {
  return (
    <div>
      <div className="shadow rounded-t-xl bg-blue-50 p-2 mt-3 flex items-center justify-between">
        <h3 className="font-bold text-xl">Who To Follow</h3>
      </div>
      <WTFL />
      <div className="shadow sticky top-3/4 rounded-b-xl hover:bg-gray-100 text-blue-600 bg-blue-50 p-2 mb-3">
        show more
      </div>
    </div>
  );
}

export default WhoToFollow;
