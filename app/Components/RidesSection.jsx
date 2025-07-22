import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CategorySidebar from "./CategorySidebar";

export default function RidesSection() {
  return (
    <main className="w-full h-screen flex justify-between ">
      {/* Category Sidebar */}
      <CategorySidebar />

      <div className=" w-full z-10 flex flex-col pt-24 text-white bg-green-600">
        <div className="flex flex-row justify-between items-center pr-13">
          <p className="text-6xl font-extrabold uppercase ">Our Iconic Rides</p>
          <div className="flex gap-5">
            <button className="p-1.5 bg-[#FAD600] text-white rounded-full cursor-pointer flex items-center text-center hover:scale-110 active:scale-95 transition-all ease-in-out duration-300">
              <ChevronLeft
                className="text-[#334DCF] z-50 size-8"
                strokeWidth={2}
              />
            </button>
            <button className="p-1.5 bg-[#FAD600] text-white rounded-full cursor-pointer flex items-center text-center hover:scale-110 active:scale-95 transition-all ease-in-out duration-300">
              <ChevronRight
                className="text-[#334DCF] z-50 size-8"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
