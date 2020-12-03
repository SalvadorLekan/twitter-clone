import React from "react";
import { BiStar } from "react-icons/bi";
import Compose from "./Compose";
import EmoVG from "./EmoVG";
import Tweet from "./Tweet";
const tweets = [
  "Hello World",
  "I tried.",
  "Praise my effort",
  "Should I add media? 🤔",
  "I'm done",
  "blah blah",
  "blah blah",
  "blah blah",
  "blah blah",
  "blah blah",
  "blah blah",
  "blah blah",
  "blah blah",
  `Final Tweet. 
May continue later. `,
].reverse();
function Main() {
  return (
    <div className="flex-grow">
      <div className="flex items-center justify-between p-4 shadow sticky top-0 bg-white">
        <h3 className="font-bold text-xl">Home</h3>
        <EmoVG>
          <BiStar />
        </EmoVG>
      </div>
      <Compose />
      {tweets.map((tweet, id) => (
        <Tweet key={id} time={id} talk={tweet} />
      ))}
    </div>
  );
}

export default Main;
