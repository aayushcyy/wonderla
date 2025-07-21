"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.webp";
import {
  Menu,
  Headset,
  MapPin,
  BadgePercent,
  FerrisWheel,
  X,
  ClockFading,
  MessageCircleWarning,
} from "lucide-react";
import { TicketIcon, UserIcon } from "@heroicons/react/24/solid";
import { HomeModernIcon, LinkIcon } from "@heroicons/react/24/outline";
import kochi from "../../public/kochi.webp";
import hyderabad from "../../public/hyderabad.webp";
import bangalore from "../../public/banglore.webp";
import bhubaneshwar from "../../public/bhubaneshwar.webp";
import food from "../../public/food.webp";
import event from "../../public/event.webp";
import ride from "../../public/ride.png";
import groupIcon from "../../public/group.webp";
import reach from "../../public/reach.webp";
import operator from "../../public/operator.webp";
import resorts from "../../public/resorts.webp";
import isle from "../../public/isle.webp";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SideBarChild from "./SideBarChild";

export default function Navbar1() {
  const [open, setOpen] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSideBar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenSideBar]);

  return (
    <div className="flex items-center justify-between bg-white rounded-xl px-10 text-[#334DCF] py-3 uppercase font-extrabold text-sm">
      {/* Logo Image */}
      <div>
        <Image src={logo} alt="logo" className="w-28 h-auto" />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-row items-center gap-x-6">
          {/* Item 1 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="!bg-transparent text-[#334DCF] !hover:bg-transparent hover:text-[#334DCF] focus:text-[#334DCF] active:text-[#334DCF] data-[state=open]:text-[#334DCF] !focus:bg-transparent !active:bg-transparent !data-[state=open]:bg-transparent shadow-none ring-0 outline-none transition-none rounded-none uppercase font-extrabold cursor-pointer px-0">
              {" "}
              <MapPin className="size-5 stroke-2 mr-2" />
              Park
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-72">
              <NavigationMenuLink className="flex flex-row gap-4 items-center cursor-pointer">
                <Image
                  src={kochi}
                  alt="Kochi"
                  className="w-12 h-12 rounded-lg"
                />
                <p>Kochi</p>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex flex-row gap-4 items-center cursor-pointer">
                <Image
                  src={bangalore}
                  alt="Bangalore"
                  className="w-12 h-12 rounded-lg"
                />
                <p>Bangalore</p>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex flex-row gap-4 items-center cursor-pointer">
                <Image
                  src={hyderabad}
                  alt="Hyderabad"
                  className="w-12 h-12 rounded-lg"
                />
                <p>Hyderabad</p>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex flex-row gap-4 items-center cursor-pointer">
                <Image
                  src={bhubaneshwar}
                  alt="Bhubaneshwar"
                  className="w-12 h-12 rounded-lg"
                />
                <p>Bhubaneshwar</p>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Item 1 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="!bg-transparent text-[#334DCF] !hover:bg-transparent hover:text-[#334DCF] focus:text-[#334DCF] active:text-[#334DCF] data-[state=open]:text-[#334DCF] !focus:bg-transparent !active:bg-transparent !data-[state=open]:bg-transparent shadow-none ring-0 outline-none transition-none rounded-none uppercase font-extrabold cursor-pointer px-0">
              <MapPin className="size-5 stroke-2 mr-2" /> Resorts
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-72 px-1.5 py-3 rounded-2xl">
              <p className="flex items-center text-xs capitalize font-normal ml-2 mb-1">
                <MapPin className="size-5 mr-2 text-[#334DCF]" />
                <span>Bengaluru</span>
              </p>
              <NavigationMenuLink className="flex flex-row gap-4 items-center cursor-pointer">
                <Image
                  src={resorts}
                  alt="Kochi"
                  className="w-12 h-12 rounded-lg"
                />
                <p>Resorts</p>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex flex-row gap-4 items-center cursor-pointer">
                <Image
                  src={isle}
                  alt="Bangalore"
                  className="w-12 h-12 rounded-lg"
                />
                <p>The Isle</p>
                <p className="text-xs font-extrabold bg-[#FAD600] px-2 py-1 rounded-xl">
                  New
                </p>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Item 2 */}
          <Link href={"#"} className="flex items-center gap-2">
            <BadgePercent className="size-4.5 stroke-2.5" />
            Offers
          </Link>
          <Link href={"#"} className="flex items-center gap-2">
            <FerrisWheel className="size-5" />
            Rides
          </Link>
          <Link href={"#"} className="flex items-center gap-2">
            <Image
              src={food}
              className="size-4.5"
              style={{
                filter:
                  "invert(39%) sepia(90%) saturate(6970%) hue-rotate(231deg) brightness(82%) contrast(84%)",
              }}
            />{" "}
            Restaurants
          </Link>
          <Link href={"#"} className="flex items-center gap-2">
            <Image
              src={event}
              className=" size-4.5"
              style={{
                filter:
                  "invert(39%) sepia(90%) saturate(6970%) hue-rotate(231deg) brightness(87%) contrast(84%)",
              }}
            />{" "}
            Events
          </Link>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-5">
        <p className="flex items-center gap-1.5">
          <UserIcon className="size-4" />
          Login
        </p>
        <Link
          href={"#"}
          className="px-2.5 py-2.5 font-extrabold bg-[#FAD600] rounded-lg text-xs flex items-center gap-1"
        >
          Book tickets <TicketIcon className="size-3.5 -rotate-45" />
        </Link>
        <div>
          <Menu
            className="size-7 cursor-pointer"
            strokeWidth={2.3}
            onClick={() => setOpenSideBar(true)}
          />
        </div>
      </div>
      {/* Side Bar */}
      {openSideBar && (
        <div
          className="w-[480px] h-screen top-0 right-0 z-20 bg-white absolute flex flex-col px-7.5 pt-8 pb-5 gap-7 overflow-y-scroll sidebar-scroll"
          ref={sidebarRef}
        >
          <div className="flex justify-between items-center">
            <Image src={logo} alt="logo" className="w-[138px] h-auto ml-0.5" />
            <div
              className="border-[1px] border-[#71707055] rounded-full p-1.5 cursor-pointer z-50"
              onClick={() => setOpenSideBar(false)}
            >
              <X className="size-4.5" />
            </div>
          </div>
          <div>
            <SideBarChild
              showParks={true}
              locations={["kochi", "bengaluru", "bhubaneshwar", "hyderabad"]}
              showOptions={false}
              showChevron={true}
              heading={"Parks"}
              rows="1"
              subheading={"Explore Your favourite Wonderla Park"}
              icon={<FerrisWheel className="size-7" strokeWidth={1.5} />}
            />
            <SideBarChild
              showParks={true}
              locations={["resorts", "the isle"]}
              rows="1"
              showOptions={false}
              showChevron={true}
              heading={"Resorts"}
              subheading={"Get a rejuvenating experience at Wonderla Resort"}
              icon={<HomeModernIcon className="size-7" strokeWidth={1.5} />}
            />
            <SideBarChild
              showParks={false}
              showOptions={false}
              showChevron={false}
              heading={"Offers & Combos"}
              subheading={"Plan the perfect day with exciting offers"}
              icon={<BadgePercent className="size-6.5" strokeWidth={1.8} />}
            />
            <SideBarChild
              showParks={false}
              showOptions={false}
              showChevron={false}
              heading={"Timings and Guidelines"}
              subheading={"Know the timings and other guidelines"}
              icon={<ClockFading className="size-6.5" strokeWidth={1.8} />}
            />
            {/* colored div */}
            <div className="flex flex-col gap-2 py-3.5 -mb-3">
              <div className="flex gap-3 py-3 px-4 bg-[#FAD600] cursor-pointer rounded-lg font-normal capitalize">
                <div>
                  <Image className="w-11" src={groupIcon} />
                </div>
                <div className="flex flex-col gap-1 font-semibold text-xs">
                  <p className="text-xl">Group booking</p>
                  <p>Reach out to Wonderla team</p>
                </div>
              </div>
              <div className="flex gap-4 bg-[#334DCF] px-4 rounded-lg cursor-pointer text-white py-3 font-normal capitalize">
                <div>
                  <Image className="w-11" src={operator} />
                </div>
                <div className="flex flex-col gap-1 font-semibold text-xs">
                  <p className="text-xl">Tour Operator Portal</p>
                  <p>Reach out to Wonderla team</p>
                </div>
              </div>
              <div className="flex gap-4 py-3 px-4 bg-[#FAD600] rounded-lg cursor-pointer font-normal capitalize">
                <div>
                  <Image className="w-11" src={reach} />
                </div>
                <div className="flex flex-col gap-1 font-semibold text-xs">
                  <p className="text-xl">How to reach</p>
                  <p>Direction, Route & Travel Options</p>
                </div>
              </div>
            </div>
            <SideBarChild
              showParks={false}
              showOptions={false}
              showChevron={false}
              heading={"About Us"}
              subheading={"Know all about Wonderla"}
              icon={
                <MessageCircleWarning
                  className="size-7 transform rotate-y-180"
                  strokeWidth={1.6}
                />
              }
            />
            <SideBarChild
              showParks={false}
              showOptions={true}
              optionMenu={["Restaurants", "Merchandise", "Events"]}
              showChevron={true}
              heading={"Quick links"}
              subheading={"Explore all other relevant information here"}
              icon={<LinkIcon className="size-6 stroke-2" />}
            />
            <SideBarChild
              showParks={false}
              showOptions={false}
              showChevron={false}
              heading={"Contact Us"}
              subheading={"Get in touch Wonderla team"}
              classname="mt-10"
              icon={<Headset className="size-7" strokeWidth={1.7} />}
            />
          </div>
          <Image
            src={ride}
            alt=""
            width={100}
            height={100}
            className="w-52 fixed bottom-0 right-8"
          />
        </div>
      )}
    </div>
  );
}
