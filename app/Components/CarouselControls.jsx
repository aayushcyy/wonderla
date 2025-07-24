"use client";

import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
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

  // Memoize ride data to prevent unnecessary re-renders
  const rideData = useMemo(() => {
    switch (selectedCategory) {
      case "land":
        return landRides;
      case "water":
        return waterRides;
      case "kids":
        return kidsRides;
      default:
        return landRides;
    }
  }, [selectedCategory, landRides, waterRides, kidsRides]);

  // Reset scroll position when category changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setAutoScrollEnabled(true);
    }
  }, [selectedCategory]);

  // Memoized scroll functions
  const scrollToLeft = useCallback(() => {
    if (!scrollRef.current) return;

    setAutoScrollEnabled(false);
    scrollRef.current.style.scrollBehavior = "smooth";
    scrollRef.current.scrollLeft -= 260;

    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  }, []);

  const scrollToRight = useCallback(() => {
    if (!scrollRef.current) return;

    setAutoScrollEnabled(false);
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;

    container.style.scrollBehavior = "smooth";

    if (currentScroll >= maxScroll - 10) {
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
      container.scrollLeft += 260;
    }

    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScrollEnabled || isDragging) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
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
          setIsResetting(false);
          container.style.scrollBehavior = "smooth";
          container.scrollLeft += 260;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScrollEnabled, isDragging]);

  // Optimized mouse handlers
  const handleMouseDown = useCallback((e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollBehavior = "auto";
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !scrollRef.current) return;

      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }

    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.scrollBehavior = "smooth";
      }

      setTimeout(() => {
        setAutoScrollEnabled(true);
      }, 2000);
    }
  }, [isDragging]);

  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollBehavior = "auto";
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging || !scrollRef.current) return;

      const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }

    setTimeout(() => {
      setAutoScrollEnabled(true);
    }, 2000);
  }, []);

  return (
    <div className="w-[70%] pr-16 relative z-10 flex flex-col gap-8 pt-28 text-white">
      {/* Heading */}
      <div className="flex flex-row justify-between items-center pr-13">
        <p className="text-6xl font-extrabold uppercase">Our Iconic Rides</p>
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
          transform: "translateZ(0)", // Force hardware acceleration
          willChange: "scroll-position", // Optimize for scrolling
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
            key={`${selectedCategory}-${item.id}`} // Better key for React optimization
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
