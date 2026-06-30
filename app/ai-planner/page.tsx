export default function AIPlanner() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
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

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Generate Itinerary
        </button>
      </form>
    </main>
  );
}
