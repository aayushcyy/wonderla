// app/page.jsx
import Navbar1 from "./Components/Navbar1";
import RidesSection from "./Components/RidesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#22304A] pt-10">
      <Navbar1 />
      <RidesSection />
    </main>
  );
}
