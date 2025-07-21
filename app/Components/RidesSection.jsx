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
    land: { top: "top-[90px]", left: "left-[50px]" },
    water: { top: "top-[295px]", left: "left-[135px]" },
    kids: { top: "top-[480px]", left: "left-[57px]" },
  };

  return (
    <section className="w-full h-screen flex justify-between relative">
      {/* Side circle div */}
      <div className="absolute w-[600px] h-[600px] rounded-full z-0 border-[90px] border-[#E8E9F1] -left-[330px] top-[70px]"></div>

      {/* Yellow moving circle */}
      <div
        className={`w-[170px] h-[170px] bg-white border-[10px] border-yellow-400 rounded-full absolute z-10 transition-all duration-500 ease-in-out
        ${positions[selected].top} ${positions[selected].left}`}
      ></div>
      {/* Ride Icons */}
      <div className="w-[27%] relative z-20">
        {/* Land */}
        <Image
          src={landRide}
          alt="land ride"
          width={100}
          height={100}
          className={`absolute cursor-pointer transition-all duration-500 ${
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
          className={`absolute cursor-pointer transition-all duration-500 ${
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
          className={`absolute cursor-pointer transition-all duration-500 ${
            selected === "kids"
              ? "w-[90px] top-[515px] left-[95px]"
              : "w-[60px] top-[530px] left-[99px]"
          }`}
          onClick={() => setSelected("kids")}
        />
      </div>

      <div className=" w-[70%] z-10"></div>
    </section>
  );
}
