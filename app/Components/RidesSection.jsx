import React from "react";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";

export default function RidesSection() {
  return (
    <main className="w-full h-screen flex justify-between relative">
      {/* Category Sidebar */}
      <CategorySidebar />
      <CarouselControls />
    </main>
  );
}
