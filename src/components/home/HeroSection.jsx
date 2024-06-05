import React, { useState } from "react";
import SearchBar from "../ui/SearchBar";
import Button from "../ui/Button";
import SVGs from "../shared/SVGs";

const HeroSection = () => {
  const [isWatchHovered, setWatchHovered] = useState(false);

  const toggleWatchButtonHovered = () => {
    setWatchHovered(!isWatchHovered);
  };
  return (
    <div className="flex flex-col min-h-screen justify-start items-center gap-10 bg-HeroSection bg-cover bg-no-repeat px-24 pt-10 pb-16">
      <div className="flex w-2/3">
        <SearchBar
          className={"w-full"}
          placeholder={"What are you looking for?"}
        />
      </div>
      <div className="flex flex-col w-full text-white gap-5">
        <div className="text-3xl font-semibold text-center">News</div>
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="h-56 w-1/3 bg-cust-black-light-active rounded-xl" />
          <div className="h-56 w-1/3 bg-cust-black-light-active rounded-xl" />
          <div className="h-56 w-1/3 bg-cust-black-light-active rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col w-full text-white gap-5">
        <div className="text-3xl font-semibold text-center">
          Report your city's problem today
        </div>
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="h-56 w-1/3 bg-cust-black-light-active rounded-xl" />
          <div className="h-56 w-1/3 bg-cust-black-light-active rounded-xl" />
          <div className="h-56 w-1/3 bg-cust-black-light-active rounded-xl" />
        </div>
      </div>
      <div
        onMouseEnter={toggleWatchButtonHovered}
        onMouseLeave={toggleWatchButtonHovered}
      >
        <Button
          className={"flex flex-row justify-center items-center gap-3"}
          type={"button"}
          variation={"primary-transparent"}
        >
          <SVGs.Camera fillColor={isWatchHovered ? "black" : "white"} />
          Watch Mention's Video
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
