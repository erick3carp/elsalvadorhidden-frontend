import Image from "next/image";

export default function AIPlanner() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">AI Trip Planner</h1>
          <p className="mt-4 text-gray-600">
            Build your perfect itinerary using our AI-powered travel planner. Enter your preferences and let the AI design your trip.
          </p>

          <form className="mt-10 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Travel Dates</label>
          <input
            type="text"
            placeholder="e.g., July 10 - July 15"
            className="mt-2 w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Interests</label>
          <input
            type="text"
            placeholder="Beaches, volcanoes, food, culture..."
            className="mt-2 w-full border rounded-lg px-4 py-3"
          />
        </div>

            <button className="rounded-lg bg-emerald-700 px-6 py-3 text-white shadow transition hover:bg-emerald-800">
              Generate Itinerary
            </button>
          </form>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:mt-2">
          <Image
            src="/images/site/home/binaes.JPEG"
            alt="Illuminated BINAES library and colorful San Salvador sign at night"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
