export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-5xl font-extrabold text-gray-900">
        ElSalvadorHidden
      </h1>

      <p className="mt-4 text-xl text-gray-600 text-center max-w-xl">
        Discover hidden gems, local culture, and unforgettable experiences in El Salvador.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="#destinations"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Destinations
        </a>

        <a
          href="#ai-planner"
          className="px-6 py-3 border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition"
        >
          AI Trip Planner
        </a>
      </div>
    </main>
  );
}
