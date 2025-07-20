// components/CategorySidebar.jsx

const categories = ["All", "Land", "Water", "Kids"];

export default function CategorySidebar({ selected, setSelected }) {
  return (
    <aside className="w-40">
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setSelected(cat)}
              className={`w-full text-left px-4 py-2 rounded ${
                selected === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
