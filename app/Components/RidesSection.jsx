// components/RidesSection.jsx
"use client";

import { useState } from "react";
import RideCard from "./RideCard";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";
import rides from "../Data/rides";

export default function RidesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Our Rides</h2>

      <div className="flex gap-6">
        <CategorySidebar
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />

        <div className="relative flex-1">
          {/* Carousel controls */}
          <CarouselControls />

          {/* Ride cards */}
          <div className="flex gap-4 overflow-x-auto py-4">
            {/* Filter and map rides */}
            {rides
              .filter(
                (ride) =>
                  selectedCategory === "All" ||
                  ride.category === selectedCategory
              )
              .map((ride) => (
                <RideCard key={ride.id} ride={ride} />
              ))}
          </div>

          {/* Explore All Rides button */}
          {/* <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition">
              Explore All Rides!
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
