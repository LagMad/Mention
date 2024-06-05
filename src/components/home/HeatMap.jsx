import React from "react";
import SVGs from "../shared/SVGs";

const HeatMap = () => {
  return (
    <div className="flex flex-col justify-start items-center py-16 px-24 text-white gap-4">
      <SVGs.MentionLogoWhite />
      <div className="text-2xl">
        Special Service for Reporting Problem to Improve Public Facilities in
        Malang
      </div>
      <div className="w-full h-[700px] bg-cust-black-light-active"/>
    </div>
  );
};

export default HeatMap;
