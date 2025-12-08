import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-10">
          <span className="">Serv</span>
          <span className="text-green-700">i</span>Link Pro
        </h1>

        <h2 className="text-3xl md:text-3xl font-black text-gray-300 tracking-tighter mb-10">
          Launching Soon
        </h2>

        <p className="text-gray-500 text-sm">
          &copy; {currentYear} • ServiLink Pro
        </p>
      </div>
    </div>
  );
}
