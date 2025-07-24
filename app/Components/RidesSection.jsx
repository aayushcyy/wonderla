"use client";

import React, { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";

export default function RidesSection() {
  const [selectedCategory, setSelectedCategory] = useState("land");
  return (
    <main className="w-full min-h-screen flex justify-between relative">
      {/* Category Sidebar */}
      <CategorySidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CarouselControls selectedCategory={selectedCategory} />
    </main>
  );
}
