"use client";

import React, { useState } from "react";
import RideCard from "./RideCard";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";
import rides from "../Data/rides";
import horseRide from "../../public/horseRide.svg";
import waterRide from "../../public/waterRide.svg";
import landRide from "../../public/landRides.svg";
import Image from "next/image";

export default function RidesSection() {
  const [selected, setSelected] = useState("kids");

  const positions = {
    land: { top: "-top-[70px]", left: "left-[295px]" },
    water: { top: "top-[135px]", left: "left-[375px]" },
    kids: { top: "top-[320px]", left: "left-[297px]" },
  };

  return (
    <section className="w-full h-screen flex justify-between relative">
      {/* Side circle div CONTAINING 2 DIVS*/}
      <div
        className="absolute w-[600px] h-[600px] rounded-full border-[90px] bg-s border-[#E8E9F1] -left-[330px] top-[70px]"
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
        ${positions[selected].top} ${positions[selected].left}`}
          style={{
            boxShadow: "0px 0px 190px 180px #FAD600",
          }}
        ></div>
      </div>
      {/* Yellow moving circle */}
      <div
        className={`w-[170px] h-[170px] bg-white border-[10px] border-[#FAD600] rounded-full absolute z-[5] transition-all duration-500 ease-in-out
          ${
            selected === "land"
              ? "top-[91px] left-[53px]"
              : selected === "water"
              ? "top-[294px] left-[135px]"
              : selected === "kids"
              ? "top-[479px] left-[56px]"
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
            selected === "land"
              ? "w-[90px] top-[125px] left-[90px]"
              : "w-[60px] top-[135px] left-[98px]"
          }`}
          onClick={() => setSelected("land")}
        />

        {/* Water */}
        <Image
          src={waterRide}
          alt="water ride"
          width={100}
          height={100}
          className={`absolute cursor-pointer transition-all duration-500 z-20 ${
            selected === "water"
              ? "w-[90px] top-[330px] left-[180px]"
              : "w-[60px] top-[330px] left-[195px]"
          }`}
          onClick={() => setSelected("water")}
        />

        {/* Kids */}
        <Image
          src={horseRide}
          alt="horse ride"
          width={100}
          height={100}
          className={`absolute cursor-pointer transition-all duration-500 z-20 ${
            selected === "kids"
              ? "w-[90px] top-[510px] left-[93px]"
              : "w-[60px] top-[530px] left-[99px]"
          }`}
          onClick={() => setSelected("kids")}
        />
        <div className="flex absolute flex-col gap-[155px] top-32 left-[250px]">
          <div
            className="flex flex-col text-white w-24 items-start text-xl gap-0.5 cursor-pointer"
            onClick={() => setSelected("land")}
          >
            <p>Land</p>
            <p className="bg-[#788BEB] px-3 py-0.5 text-sm rounded-full">
              72 Rides
            </p>
          </div>
          <div
            className="flex flex-col text-white w-24 items-start text-xl gap-0.5 ml-[80px] cursor-pointer"
            onClick={() => setSelected("water")}
          >
            <p>Water</p>
            <p className="bg-[#788BEB] px-3 py-0.5 text-sm rounded-full">
              55 Rides
            </p>
          </div>
          <div
            className="flex flex-col text-white w-24 items-start text-xl gap-0.5 cursor-pointer"
            onClick={() => setSelected("kids")}
          >
            <p>Kids</p>
            <p className="bg-[#788BEB] px-3 py-0.5 text-sm rounded-full">
              36 Rides
            </p>
          </div>
        </div>
      </div>

      <div className=" w-[70%] z-10"></div>
    </section>
  );
}
