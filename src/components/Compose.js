import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { GrScheduleNew, GrImage } from "react-icons/gr";
import { AiOutlineGif, AiOutlineSmile } from "react-icons/ai";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import EmoVG from "./EmoVG";

function Compose() {
  const [close, setClose] = useState(true);
  const [tweet, settweet] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    event.stopPropagation();
    settweet((tweet) => tweet + emojiObject.emoji);
  };
  return (
    <div className="flex p-2 shadow items-start mb-3">
      <a href="/" className="w-12 block">
        <img
          src="https://pbs.twimg.com/profile_images/1299442551058034690/8KxS7I57_400x400.jpg"
          alt="profile"
          className="rounded-full hover:opacity-80"
        />
      </a>
      <form className="flex-grow p-2">
        <input
          placeholder="What's happening?"
          className="focus:outline-none text-lg p-2"
          value={tweet}
          onInput={(e) => settweet(e.target.value)}
        />
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex pt-2 text-2xl">
            <EmoVG>
              <GrImage />
            </EmoVG>
            <EmoVG>
              <AiOutlineGif />
            </EmoVG>
            <EmoVG>
              <RiBarChartHorizontalFill />
            </EmoVG>
            <EmoVG>
              <AiOutlineSmile onClick={() => setClose(false)} />
            </EmoVG>
            <EmoVG>
              <GrScheduleNew />
            </EmoVG>
          </div>
          <button
            type="submit"
            disabled
            className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded-full font-semibold"
          >
            Tweet
          </button>
        </div>
      </form>
      <div
        onClick={() => setClose(true)}
        className={`${
          close ? "hidden" : "flex"
        } justify-center items-center w-screen h-screen bg-transparent fixed top-0`}
      >
        <Picker onEmojiClick={onEmojiClick} />
      </div>
    </div>
  );
}

export default Compose;
