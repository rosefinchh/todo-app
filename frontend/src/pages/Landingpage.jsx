import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="bg-black text-white">
      <Topbar />
      <HeroSection />
    </div>
  );
}

function Topbar() {
  return (
    <div className="h-fit py-10 mb-10 text-center border-b">
      <h1 className="font-semibold text-6xl">Simple Todo Application</h1>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-screen pb-5 mx-3 text-center">
      <h2 className="text-5xl font-bold">Create and manage your Todos</h2>
      <p className="text-2xl font-bold mt-4">
        It&apos;s now so easy to create and manage your todos
      </p>

      <div className="mt-10">
        <button className="border p-2 mr-7 rounded-md hover:bg-purple-950 active:bg-purple-700">
          <Link to={"/signup"}>Signup</Link>
        </button>
        <button className="border p-2 rounded-md hover:bg-purple-950 active:bg-purple-700">
          <Link to={"/signin"}>Signin</Link>
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
