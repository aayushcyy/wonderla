"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.webp";
import { motion, AnimatePresence } from "framer-motion";
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

  // Enhanced animation variants
  const sidebarVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.3,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      x: 60,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: {
      x: 40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.2,
      },
    },
  };

  const coloredDivVariants = {
    hidden: {
      x: 80,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 25,
        duration: 0.4,
      },
    },
  };

  const rideImageVariants = {
    hidden: {
      x: 100,
      opacity: 0,
      rotate: 10,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="w-full h-screen absolute top-0">
      <div className="flex fixed w-[93%] left-14 top-9 items-center justify-between bg-white rounded-xl px-9 text-[#717D92] py-2.5 uppercase font-extrabold text-sm z-50">
        {/* Logo Image */}
        <div>
          <Image src={logo} alt="logo" className="w-28 h-auto" />
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row items-center gap-x-6">
            {/* Item 1 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="!bg-transparent text-[#717D92] !hover:bg-transparent hover:text-[#717D92] focus:text-[#717D92] active:text-[#717D92] data-[state=open]:text-[#717D92] !focus:bg-transparent !active:bg-transparent !data-[state=open]:bg-transparent shadow-none ring-0 outline-none transition-none rounded-none uppercase font-extrabold cursor-pointer px-0">
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
              <NavigationMenuTrigger className="!bg-transparent text-[#717D92] !hover:bg-transparent hover:text-[#717D92] focus:text-[#717D92] active:text-[#717D92] data-[state=open]:text-[#717D92] !focus:bg-transparent !active:bg-transparent !data-[state=open]:bg-transparent shadow-none ring-0 outline-none transition-none rounded-none uppercase font-extrabold cursor-pointer px-0">
                <MapPin className="size-5 stroke-2 mr-2" /> Resorts
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!w-72 px-1.5 py-3 rounded-2xl">
                <p className="flex items-center text-xs capitalize font-normal ml-2 mb-1">
                  <MapPin className="size-5 mr-2 text-[#717D92]" />
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
                    "invert(39%) sepia(60%) saturate(7970%) hue-rotate(231deg) brightness(97%) contrast(54%)",
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
                    "invert(39%) sepia(60%) saturate(7970%) hue-rotate(231deg) brightness(97%) contrast(54%)",
                }}
              />{" "}
              Events
            </Link>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-5">
          <p className="flex items-center gap-1.5 cursor-pointer">
            <UserIcon className="size-4 text-blue-700" />
            Login
          </p>
          <Link
            href={"#"}
            className="px-2.5 py-2.5 font-extrabold bg-[#FAD600] rounded-lg text-xs flex items-center gap-1 text-blue-700"
          >
            Book tickets <TicketIcon className="size-3.5 -rotate-45" />
          </Link>
          <div>
            <Menu
              className="size-7 cursor-pointer text-blue-700 hover:scale-110 active:scale-95 transition-all ease-in-out duration-150"
              strokeWidth={2.3}
              onClick={() => setOpenSideBar(true)}
            />
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence mode="wait">
        {openSideBar && (
          <motion.div
            key="sidebar"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="w-[480px] h-full top-0 right-0 z-50 bg-white fixed flex flex-col px-7.5 pt-8 pb-5 gap-7 overflow-y-scroll sidebar-scroll"
            ref={sidebarRef}
          >
            <motion.div
              className="flex justify-between items-center"
              variants={headerVariants}
            >
              <Image
                src={logo}
                alt="logo"
                className="w-[138px] h-auto ml-0.5"
              />
              <div
                className="border-[1px] border-[#71707055] rounded-full p-1.5 cursor-pointer z-50 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenSideBar(false)}
              >
                <X className="size-4.5" />
              </div>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <motion.div variants={menuItemVariants}>
                <SideBarChild
                  showParks={true}
                  locations={[
                    "kochi",
                    "bengaluru",
                    "bhubaneshwar",
                    "hyderabad",
                  ]}
                  showOptions={false}
                  showChevron={true}
                  heading={"Parks"}
                  rows="1"
                  subheading={"Explore Your favourite Wonderla Park"}
                  icon={<FerrisWheel className="size-7" strokeWidth={1.5} />}
                />
              </motion.div>

              <motion.div variants={menuItemVariants}>
                <SideBarChild
                  showParks={true}
                  locations={["resorts", "the isle"]}
                  rows="1"
                  showOptions={false}
                  showChevron={true}
                  heading={"Resorts"}
                  subheading={
                    "Get a rejuvenating experience at Wonderla Resort"
                  }
                  icon={<HomeModernIcon className="size-7" strokeWidth={1.5} />}
                />
              </motion.div>

              <motion.div variants={menuItemVariants}>
                <SideBarChild
                  showParks={false}
                  showOptions={false}
                  showChevron={false}
                  heading={"Offers & Combos"}
                  subheading={"Plan the perfect day with exciting offers"}
                  icon={<BadgePercent className="size-6.5" strokeWidth={1.8} />}
                />
              </motion.div>

              <motion.div variants={menuItemVariants}>
                <SideBarChild
                  showParks={false}
                  showOptions={false}
                  showChevron={false}
                  heading={"Timings and Guidelines"}
                  subheading={"Know the timings and other guidelines"}
                  icon={<ClockFading className="size-6.5" strokeWidth={1.8} />}
                />
              </motion.div>

              {/* Enhanced colored div animations */}
              <motion.div
                className="flex flex-col gap-2 py-3.5 -mb-3"
                variants={menuItemVariants}
              >
                <motion.div
                  className="flex gap-3 py-3 px-4 bg-[#FAD600] cursor-pointer rounded-lg font-normal capitalize hover:bg-[#f5d000] transition-colors duration-200"
                  variants={coloredDivVariants}
                >
                  <div>
                    <Image className="w-11" src={groupIcon} />
                  </div>
                  <div className="flex flex-col gap-1 font-semibold text-xs">
                    <p className="text-xl">Group booking</p>
                    <p>Reach out to Wonderla team</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 bg-[#717D92] px-4 rounded-lg cursor-pointer text-white py-3 font-normal capitalize hover:bg-[#2940c4] transition-colors duration-200"
                  variants={coloredDivVariants}
                >
                  <div>
                    <Image className="w-11" src={operator} />
                  </div>
                  <div className="flex flex-col gap-1 font-semibold text-xs">
                    <p className="text-xl">Tour Operator Portal</p>
                    <p>Reach out to Wonderla team</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4 py-3 px-4 bg-[#FAD600] rounded-lg cursor-pointer font-normal capitalize hover:bg-[#f5d000] transition-colors duration-200"
                  variants={coloredDivVariants}
                >
                  <div>
                    <Image className="w-11" src={reach} />
                  </div>
                  <div className="flex flex-col gap-1 font-semibold text-xs">
                    <p className="text-xl">How to reach</p>
                    <p>Direction, Route & Travel Options</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={menuItemVariants}>
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
              </motion.div>

              <motion.div variants={menuItemVariants}>
                <SideBarChild
                  showParks={false}
                  showOptions={true}
                  optionMenu={["Restaurants", "Merchandise", "Events"]}
                  showChevron={true}
                  heading={"Quick links"}
                  subheading={"Explore all other relevant information here"}
                  icon={<LinkIcon className="size-6 stroke-2" />}
                />
              </motion.div>

              <motion.div variants={menuItemVariants}>
                <SideBarChild
                  showParks={false}
                  showOptions={false}
                  showChevron={false}
                  heading={"Contact Us"}
                  subheading={"Get in touch Wonderla team"}
                  classname="mt-10"
                  icon={<Headset className="size-7" strokeWidth={1.7} />}
                />
              </motion.div>
            </motion.div>

            <motion.div variants={rideImageVariants}>
              <Image
                src={ride}
                alt=""
                width={100}
                height={100}
                className="w-52 fixed bottom-0 right-8"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
