// app/page.jsx
import Navbar1 from "./Components/Navbar1";
import RidesSection from "./Components/RidesSection";

export default function Home() {
  return (
    <main className="h-screen bg-[#22304A]">
      <Navbar1 />
      <RidesSection />
    </main>
  );
}
