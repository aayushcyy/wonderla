"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RideCard from "./RideCard";
import Try from "./Try";

export default function CarouselControls() {
  return (
    <div className="w-[70%] bg-violet-400 pr-16 relative z-10 flex flex-col gap-8 pt-28 text-white">
      {/* Heading */}
      <div className="flex flex-row justify-between items-center pr-13">
        <p className="text-6xl font-extrabold uppercase ">Our Iconic Rides</p>
        <div className="flex gap-5">
          <button className="p-1.5 bg-[#FAD600] text-white rounded-full cursor-pointer flex items-center text-center hover:scale-110 active:scale-95 transition-all ease-in-out duration-300">
            <ChevronLeft
              className="text-[#334DCF] z-50 size-8"
              strokeWidth={2}
            />
          </button>
          <button className="p-1.5 bg-[#FAD600] text-white rounded-full cursor-pointer flex items-center text-center hover:scale-110 active:scale-95 transition-all ease-in-out duration-300">
            <ChevronRight
              className="text-[#334DCF] z-50 size-8"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
      {/* Ride Carousels */}
      <div className="w-full bg-green-400 gap-5 overflow-x-hidden flex">
        <div className="w-full relative z-50 flex">
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
        </div>
      </div>
      <Try />
    </div>
  );
}
