"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.webp";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  MapPin,
  BadgePercent,
  FerrisWheel,
} from "lucide-react";
import { TicketIcon } from "@heroicons/react/24/solid";
import kochi from "../../public/kochi.webp";
import hyderabad from "../../public/hyderabad.webp";
import bangalore from "../../public/banglore.webp";
import bhubaneshwar from "../../public/bhubaneshwar.webp";
import food from "../../public/food.webp";
import event from "../../public/event.webp";
import isle from "../../public/isle-resort.png";
import resorts from "../../public/resorts.webp";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="flex items-center justify-between bg-white rounded-xl px-10 text-[#22304A] py-3 uppercase font-extrabold text-sm sticky">
      <div>
        <Image src={logo} alt="logo" className="w-28 h-auto" />
      </div>
      <div className="flex gap-x-8">
        <Link
          href={"#"}
          className="flex items-center group gap-0.5"
          onMouseEnter={() => setShow(true)}
        >
          <MapPin className="size-5 stroke-2 mr-2" /> Park
          <ChevronDown className="size-3 stroke-4 group-hover:rotate-180 transition-all ease-in-out duration-150" />
        </Link>
        {/* Sub menu */}
        {show && (
          <div
            className="flex flex-col rounded-2xl py-4 px-4 bg-white text-black gap-3 absolute z-50 top-20 left-64 w-72 font-bold"
            onMouseLeave={() => setShow(false)}
          >
            <div className="flex gap-4 items-center cursor-pointer">
              <Image src={kochi} alt="Kochi" className="w-12 h-12 rounded-lg" />
              <p>Kochi</p>
            </div>
            <span className="w-full h-[1px] bg-[#22304a29]"></span>
            <div className="flex justify-between items-center cursor-pointer">
              <div className="flex gap-4 items-center">
                <Image
                  src={bangalore}
                  alt="Kochi"
                  className="w-12 h-12 rounded-lg"
                />
                <p>Bangalore</p>
              </div>
              <ChevronRight className="size-4.5 stroke-3" />
            </div>
            <span className="w-full h-[1px] bg-[#22304a29]"></span>
            <div className="flex gap-4 items-center cursor-pointer">
              <Image
                src={hyderabad}
                alt="Kochi"
                className="w-12 h-12 rounded-lg"
              />
              <p>Hyderabad</p>
            </div>
            <span className="w-full h-[1px] bg-[#22304a29]"></span>
            <div className="flex gap-4 items-center cursor-pointer">
              <Image
                src={bhubaneshwar}
                alt="Kochi"
                className="w-12 h-12 rounded-lg"
              />
              <p>Bhubaneshwar</p>
            </div>
          </div>
        )}
        <Link href={"#"}>Resorts</Link>
        {/* Sub menu */}
        <div className="flex flex-col rounded-2xl py-4 px-4 bg-white text-black gap-3 absolute z-50 top-20 left-[25.5rem] w-56 font-bold">
          <p className="flex items-center text-xs capitalize text-black font-medium">
            <MapPin className="size-4 stroke-2 mr-2 text-blue-700" /> Bengalore
          </p>
          <div className="flex gap-4 items-center cursor-pointer">
            <Image src={resorts} alt="Kochi" className="w-12 h-12 rounded-lg" />
            <p>Resorts</p>
          </div>
          <span className="w-full h-[1px] bg-[#22304a29]"></span>
          <div className="flex gap-4 items-center cursor-pointer">
            <Image src={isle} alt="Kochi" className="w-12 h-12 rounded-lg" />
            <p>The Isle</p>
            <p className="bg-[#FAD600] text-black px-2 py-1 rounded-lg text-xs font-extrabold">
              New
            </p>
          </div>
        </div>
        <Link href={"#"} className="flex items-center gap-2">
          <BadgePercent className="size-4 stroke-2.5" /> Offers
        </Link>
        <Link href={"#"} className="flex items-center gap-2">
          <FerrisWheel className="size-5" />
          Rides
        </Link>
        <Link href={"#"} className="flex items-center gap-2">
          <Image src={food} className="filter invert hue-rotate-180 size-4.5" />{" "}
          Restaurants
        </Link>
        <Link href={"#"} className="flex items-center gap-2">
          <Image
            src={event}
            className="filter invert hue-rotate-180 size-4.5"
          />{" "}
          Events
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Link
          href={"#"}
          className="px-2.5 py-2.5 font-extrabold bg-[#FAD600] rounded-lg text-xs flex items-center gap-1"
        >
          Book tickets <TicketIcon className="size-3.5 -rotate-45" />
        </Link>
        <div>
          <Menu className="stroke-3 size-7" />
        </div>
      </div>
    </nav>
  );
}
