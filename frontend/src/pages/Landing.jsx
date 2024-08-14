import Topbar from "../components/Topbar";

export default function Landing() {
  return (
    <div className="bg-black text-white h-screen">
      <HeroSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div>
      <h1 className="text-5xl">To-Do Application</h1>
    </div>
  );
}
