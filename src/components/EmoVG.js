import React from "react";

function EmoVG({ children }) {
  return (
    <div className="inline-block text-blue-500 hover:bg-blue-100 rounded-full p-2">
      {children}
    </div>
  );
}

export default EmoVG;
