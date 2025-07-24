"use client";

import React from "react";
import horseRide from "../../public/horseRide.svg";
import waterRide from "../../public/waterRide.svg";
import landRide from "../../public/landRides.svg";
import Image from "next/image";

export default function CategorySidebar({
  selectedCategory,
  setSelectedCategory,
}) {
  const positions = {
    land: { top: "-top-[70px]", left: "left-[295px]" },
    water: { top: "top-[135px]", left: "left-[375px]" },
    kids: { top: "top-[320px]", left: "left-[297px]" },
  };

  return (
    <div className="w-[43%] h-screen relative pt-10">
      <div
        className="absolute w-[600px] h-[600px] rounded-full border-[90px] bg-s border-[#E8E9F1] -left-[330px] top-[110px]"
        style={{
          WebkitMaskImage: "linear-gradient(white, white)",
          maskImage: "linear-gradient(white, white)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        <div className="absolute w-[421px] h-[421px] left-[0px] top-[0px] bg-[#22304A] rounded-full z-[6]"></div>
        {/* Shadow Circle */}
        <div
          className={`w-[170px] h-[170px] bg-transparent border-[10px] border-[#FAD600] rounded-full absolute z-[5] transition-all duration-500 ease-in-out
        ${positions[selectedCategory].top} ${positions[selectedCategory].left}`}
          style={{
            boxShadow: "0px 0px 190px 180px #FAD600",
          }}
        ></div>
      </div>
      {/* Yellow moving circle */}
      <div
        className={`w-[170px] h-[170px] bg-white border-[10px] border-[#FAD600] rounded-full absolute z-[5] transition-all duration-500 ease-in-out
          ${
            selectedCategory === "land"
              ? "top-[131px] left-[50px]"
              : selectedCategory === "water"
              ? "top-[335px] left-[135px]"
              : selectedCategory === "kids"
              ? "top-[514px] left-[56px]"
              : ""
          }`}
      ></div>
      {/* Ride Icons */}
      <div className="w-[27%] relative z-20">
        {/* Land */}
        <Image
          src={landRide}
          alt="land ride"
          width={100}
          height={100}
          className={`absolute cursor-pointer transition-all duration-500 z-20 ${
            selectedCategory === "land"
              ? "w-[90px] top-[125px] left-[90px]"
              : "w-[60px] top-[135px] left-[98px]"
          }`}
          onClick={() => setSelectedCategory("land")}
        />

        {/* Water */}
        <Image
          src={waterRide}
          alt="water ride"
          width={100}
          height={100}
          className={`absolute cursor-pointer transition-all duration-500 z-20 ${
            selectedCategory === "water"
              ? "w-[90px] top-[330px] left-[180px]"
              : "w-[60px] top-[330px] left-[195px]"
          }`}
          onClick={() => setSelectedCategory("water")}
        />

        {/* Kids */}
        <Image
          src={horseRide}
          alt="horse ride"
          width={100}
          height={100}
          className={`absolute cursor-pointer transition-all duration-500 z-20 ${
            selectedCategory === "kids"
              ? "w-[90px] top-[510px] left-[93px]"
              : "w-[60px] top-[530px] left-[99px]"
          }`}
          onClick={() => setSelectedCategory("kids")}
        />
        <div className="flex absolute flex-col gap-[155px] top-32 left-[250px]">
          <div
            className="flex flex-col text-white w-24 items-start text-xl gap-0.5 cursor-pointer"
            onClick={() => setSelectedCategory("land")}
          >
            <p>Land</p>
            <p className="bg-[#788BEB] px-3 py-0.5 text-sm rounded-full">
              72 Rides
            </p>
          </div>
          <div
            className="flex flex-col text-white w-24 items-start text-xl gap-0.5 ml-[80px] cursor-pointer"
            onClick={() => setSelectedCategory("water")}
          >
            <p>Water</p>
            <p className="bg-[#788BEB] px-3 py-0.5 text-sm rounded-full">
              55 Rides
            </p>
          </div>
          <div
            className="flex flex-col text-white w-24 items-start text-xl gap-0.5 cursor-pointer"
            onClick={() => setSelectedCategory("kids")}
          >
            <p>Kids</p>
            <p className="bg-[#788BEB] px-3 py-0.5 text-sm rounded-full">
              36 Rides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
