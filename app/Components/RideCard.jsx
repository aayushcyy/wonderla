// components/RideCard.jsx

import Image from "next/image";

export default function RideCard({ ride }) {
  return (
    <div className="w-64 h-[360px] text-xs font-bold rounded-2xl flex flex-col items-start justify-end relative overflow-hidden">
      <video
        width={100}
        height={100}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://d22pimhl2qmbj7.cloudfront.net/public/Sky_Ring_480p_1749236cd3.mp4"
          type="video/mp4"
        />
      </video>
      <div className="z-20 px-3 pb-1">
        <p className="text-lg">G Fall</p>
        <p className=" text-gray-300">Hyderabad</p>
        <p className="mt-1.5">
          Brace yourself for a heart-pounding, high-speed plunge into a dizzying
          freefall!
        </p>
        <button className="text-[12px] font-[900] cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 text-blue-700 px-6 py-3 bg-yellow-400 rounded-lg uppercase mt-2">
          Ride details
        </button>
      </div>
      <span
        className="bottom-0 w-full bg-[#ff4d4d] z-10 absolute"
        style={{
          boxShadow: "0px 0px 180px 200px #22304A",
        }}
      ></span>
    </div>
  );
}
