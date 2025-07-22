// components/RideCard.jsx

import Image from "next/image";

export default function RideCard({ vidLink, title, city, desc }) {
  return (
    <div className="w-64 h-[360px] text-xs font-bold rounded-2xl flex-none flex items-end justify-end relative hover:scale-105 transition-transform duration-500 select-none overflow-hidden">
      <video
        width={100}
        height={100}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={vidLink} type="video/mp4" />
      </video>
      <div className="z-20 px-3 pb-1">
        <p className="text-lg">{title}</p>
        <p className=" text-gray-400">{city}</p>
        <p className="mt-1.5 text-gray-400">{desc}</p>
        <button className="text-[12px] font-[900] cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 text-blue-700 px-6 py-3 bg-yellow-400 rounded-lg uppercase mt-2">
          Ride details
        </button>
      </div>
      <span
        className="bottom-0 w-full z-10 absolute"
        style={{
          boxShadow: "0px 0px 180px 200px #22304A",
        }}
      ></span>
    </div>
  );
}
