import React, { useState } from "react";
import { BiDotsHorizontal, BiMessageRounded } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import EmoVG from "./EmoVG";

function Tweet({ time, talk }) {
  const [liked, setliked] = useState(false);
  const [retweeted, setretweeted] = useState(false);
  return (
    <div className="shadow flex p-2 items-start">
      <a href="/" className="w-12 block">
        <img
          src="https://pbs.twimg.com/profile_images/1299442551058034690/8KxS7I57_400x400.jpg"
          alt="profile"
          className="rounded-full hover:opacity-80"
        />
      </a>
      <div className="flex-grow">
        <div className="flex-grow flex justify-between w-full items-center">
          <div className="text-sm flex px-2">
            <h4 className="font-medium"> Salvador #EndSARS</h4>
            <p className="text-gray-900 font-light px-2">@SalvadorLekan </p>
            {"  "}. {time}m
          </div>
          <EmoVG>
            <BiDotsHorizontal className="text-2xl" />
          </EmoVG>
        </div>
        <div className="px-2">{talk}</div>
        <div className="grid p-2 grid-cols-4 text-xl text-gray-500">
          <div>
            <EmoVG>
              <BiMessageRounded />
            </EmoVG>
          </div>
          <div>
            <EmoVG color="green">
              <AiOutlineRetweet
                className={!retweeted && "text-gray-500"}
                onClick={() => setretweeted((t) => !t)}
              />
            </EmoVG>
          </div>
          <div>
            <EmoVG color="red">
              {liked ? (
                <AiFillHeart onClick={() => setliked(false)} />
              ) : (
                <AiOutlineHeart onClick={() => setliked(true)} />
              )}
            </EmoVG>
          </div>
          <div>
            <EmoVG>
              <BsUpload />
            </EmoVG>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
