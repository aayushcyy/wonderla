"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import kochi from "../../public/kochi.webp";
import bengaluru from "../../public/banglore.webp";
import bhubaneshwar from "../../public/bhubaneshwar.webp";
import hyderabad from "../../public/hyderabad.webp";
import resorts from "../../public/resorts.webp";
import isle from "../../public/isle-resort.png";
import Link from "next/link";

export default function SideBarChild({
  heading,
  subheading,
  icon,
  showChevron = false,
  showParks = false,
  locations = [],
  showOptions = true,
  rows = "1",
  classname,
  optionMenu = ["Menu for child", "Invention of Me", "mensuration formulas"],
}) {
  const [showOptionParks, setShowOptionParks] = useState(false);
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  return (
    <div
      className={`flex flex-col border-b-[1px] border-[#8989894d] py-3 ${classname}`}
      onClick={() => {
        showParks
          ? setShowOptionParks(!showOptionParks)
          : showOptions
          ? setShowOptionMenu(!showOptionMenu)
          : "";
      }}
    >
      <div className="flex justify-between px-1 items-center cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="text-[#334DCF]">{icon}</div>
          <div className="flex flex-col gap-1 font-semibold">
            <p className="text-xl capitalize">{heading}</p>
            <p className="text-xs text-gray-500 normal-case">{subheading}</p>
          </div>
        </div>
        {showChevron && (
          <div className="flex justify-end">
            <ChevronDown className="text-[#334DCF]" />
          </div>
        )}
      </div>
      {showOptionParks && (
        <div
          className={`grid grid-cols-2 grid-rows-${rows} gap-5 capitalize text-base font-normal text-black mt-3`}
        >
          {locations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center shadow-lg rounded-lg py-5 border-[1px] border-[#b0b0b055] capitalize"
            >
              <Image
                src={
                  item === "kochi"
                    ? kochi
                    : item === "bengaluru"
                    ? bengaluru
                    : item === "bhubaneshwar"
                    ? bhubaneshwar
                    : item === "hyderabad"
                    ? hyderabad
                    : item === "resorts"
                    ? resorts
                    : item === "the isle"
                    ? isle
                    : ""
                }
                width={100}
                height={100}
                alt={item}
                className="w-12 h-12 rounded-full"
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
      {showOptionMenu && (
        <div className="flex flex-col mt-2 gap-1 ml-10 font-normal text-sm text-black capitalize">
          {optionMenu.map((item, index) => (
            <div key={index}>
              <Link href={"#"} className="font-semibold">
                {item}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
