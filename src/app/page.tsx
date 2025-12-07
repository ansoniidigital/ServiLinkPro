// src/app/page.tsx   ← replace everything with this
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="text-center">
        {/* Logo / Name */}
        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-4">
          ServiLink Pro
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-5xl">
          All-in-one field service software: scheduling, dispatching, invoicing,
          payments, and AI phone answering — built for home service pros who
          want simplicity without compromise.
        </p>

        {/* Email capture (optional – delete if you don’t want it yet) */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
          <input
            type="email"
            placeholder="Email"
            className="px-6 py-4 bg-gray-900 text-white border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-md"
          />
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg text-md transition w-100">
            Get Notified
          </button>
        </div>

        {/* Final line */}
        <p className="text-gray-500 text-sm">
          Launching Soon • First 100 seats at special discount forever
        </p>
      </div>
    </div>
  );
}
