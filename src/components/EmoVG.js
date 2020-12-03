import React from "react";

function EmoVG({ children, color = "blue" }) {
  return (
    <div
      className={`inline-block text-${color}-500 hover:bg-${color}-100 rounded-full p-2`}
    >
      {children}
    </div>
  );
}

export default EmoVG;
