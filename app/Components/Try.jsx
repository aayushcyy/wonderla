import { useEffect, useRef, useState } from "react";

export default function Try() {
  const scrollRef = useRef(null);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 1) {
        setIsResetting(true);
        container.scrollLeft = 0;
        setTimeout(() => setIsResetting(false), 50);
      } else {
        container.scrollLeft += 256; // One card width
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      <div
        className={`flex gap-4 overflow-x-scroll px-6 py-4 transition-all duration-300 h-[400px] cursor-grab active:cursor-grabbing ${
          isResetting ? "scroll-smooth-none" : "scroll-smooth"
        }`}
        ref={scrollRef}
      >
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="flex-none w-[256px] h-[360px] rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-xl font-semibold hover:scale-105 transition-transform"
          >
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
