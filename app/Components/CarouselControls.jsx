"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RideCard from "./RideCard";
import rides from "../Data/rides.js";

export default function CarouselControls({ selectedCategory }) {
  const scrollRef = useRef(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const { landRides, waterRides, kidsRides } = rides;

  // Manual navigation functions
  const scrollToLeft = () => {
    if (!scrollRef.current) return;

    setAutoScrollEnabled(false);
    scrollRef.current.style.scrollBehavior = "smooth";
    scrollRef.current.scrollLeft -= 260;

    // Re-enable auto-scroll after a delay
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  };

  const scrollToRight = () => {
    if (!scrollRef.current) return;

    setAutoScrollEnabled(false);
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;

    container.style.scrollBehavior = "smooth";

    if (currentScroll >= maxScroll - 10) {
      // If at the end, reset to start
      setIsResetting(true);
      container.style.scrollBehavior = "auto";
      container.scrollLeft = 0;

      setTimeout(() => {
        setIsResetting(false);
        if (container) {
          container.style.scrollBehavior = "smooth";
        }
      }, 100);
    } else {
      // Scroll by 260px to the right
      container.scrollLeft += 260;
    }

    // Re-enable auto-scroll after a delay
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScrollEnabled || isDragging) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
          // Reset to start when reaching the end
          setIsResetting(true);
          container.style.scrollBehavior = "auto";
          container.scrollLeft = 0;

          setTimeout(() => {
            setIsResetting(false);
            if (container) {
              container.style.scrollBehavior = "smooth";
            }
          }, 100);
        } else {
          // Scroll by 260px to the right
          setIsResetting(false);
          container.style.scrollBehavior = "smooth";
          container.scrollLeft += 260;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScrollEnabled, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }

    // Re-enable auto-scroll after a delay
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.scrollBehavior = "smooth";
      }

      // Re-enable auto-scroll after a delay
      setTimeout(() => {
        setAutoScrollEnabled(true);
      }, 2000);
    }
  };

  // Touch drag handlers for mobile
  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollBehavior = "auto";
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return;

    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }

    // Re-enable auto-scroll after a delay
    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  };

  const getRides = () => {
    switch (selectedCategory) {
      case "land":
        return landRides;
      case "water":
        return waterRides;
      case "kids":
        return kidsRides;
      default:
        return [];
    }
  };
  const rideData = getRides();

  return (
    <div className="w-[70%] pr-16 relative z-10 flex flex-col gap-8 pt-28 text-white">
      {/* Heading */}
      <div className="flex flex-row justify-between items-center pr-13">
        <p className="text-6xl font-extrabold uppercase ">Our Iconic Rides</p>
        <div className="flex gap-5">
          <button
            onClick={scrollToLeft}
            className="p-1.5 bg-[#FAD600] text-white rounded-full cursor-pointer flex items-center text-center hover:scale-110 active:scale-95 transition-all ease-in-out duration-300"
          >
            <ChevronLeft
              className="text-[#334DCF] z-50 size-8"
              strokeWidth={2}
            />
          </button>
          <button
            onClick={scrollToRight}
            className="p-1.5 bg-[#FAD600] text-white rounded-full cursor-pointer flex items-center text-center hover:scale-110 active:scale-95 transition-all ease-in-out duration-300"
          >
            <ChevronRight
              className="text-[#334DCF] z-50 size-8"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
      {/* Ride Carousels */}
      <div
        className={`flex gap-4 overflow-x-auto px-6 py-4 transition-all duration-300 h-[400px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } ${isResetting ? "" : "scroll-smooth"}`}
        style={{
          scrollBehavior: isResetting ? "auto" : "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {rideData.map((item, index) => (
          <RideCard
            key={index}
            title={item.title}
            desc={item.description}
            city={item.location}
            vidLink={item.vid}
          />
        ))}
      </div>
      {/* Button */}
      <div className="w-full flex justify-start mt-10">
        <button className="px-24 cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out duration-200 py-3.5 text-base rounded-full font-extrabold bg-[#FAD600] text-[#334DCF]">
          Explore All Rides!
        </button>
      </div>
    </div>
  );
}
