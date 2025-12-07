import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-10">
          ServiLink Pro
        </h1>

        <h2 className="text-3xl md:text-3xl font-black text-gray-300 tracking-tighter mb-10">
          Launching Soon
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 mb-18 max-w-5xl">
          All-in-one field service software: scheduling, dispatching, invoicing,
          payments, and AI phone answering — built for home service pros who
          want simplicity without compromise.
        </p>

        <p className="text-gray-500 text-sm">
          &copy; {currentYear} • ServiLink Pro
        </p>
      </div>
    </div>
  );
}
