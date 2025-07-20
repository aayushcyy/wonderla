// components/CarouselControls.jsx

export default function CarouselControls() {
  return (
    <div className="absolute -top-10 right-0 flex gap-2">
      <button className="p-2 bg-white shadow rounded hover:bg-gray-200">
        ←
      </button>
      <button className="p-2 bg-white shadow rounded hover:bg-gray-200">
        →
      </button>
    </div>
  );
}
