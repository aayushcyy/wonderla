// components/RideCard.jsx

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function RideCard({ vidLink, title, city, desc }) {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Optimized video loading
  useEffect(() => {
    if (videoRef.current && vidLink) {
      setIsLoading(true);

      const video = videoRef.current;

      // Add loading event listeners
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => setIsLoading(false);

      video.addEventListener("loadstart", handleLoadStart);
      video.addEventListener("canplay", handleCanPlay);

      // Force reload
      video.load();

      // Cleanup
      return () => {
        video.removeEventListener("loadstart", handleLoadStart);
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [vidLink]);

  return (
    <div className="w-64 h-[360px] text-xs font-bold rounded-2xl flex-none flex items-end justify-end relative hover:scale-105 transition-transform duration-500 select-none overflow-hidden">
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center z-5">
          <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        key={vidLink}
      >
        <source src={vidLink} type="video/mp4" />
      </video>

      <div className="z-20 px-3 pb-1">
        <p className="text-lg">{title}</p>
        <p className="text-gray-400">{city}</p>
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
