// app/page.jsx
import Navbar from "./Components/Navbar";
import RidesSection from "./Components/RidesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#22304A] px-14 pt-10">
      <Navbar />
      <RidesSection />
    </main>
  );
}
