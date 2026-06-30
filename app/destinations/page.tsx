export default function Destinations() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">Top Destinations</h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Explore El Salvador’s hidden gems — beaches, volcanoes, towns, waterfalls, and cultural treasures.
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {/* Example Destination Card */}
        <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <img
            src="/beach.jpg"
            alt="El Salvador Beach"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Costa del Sol</h3>
            <p className="text-gray-600 mt-2">
              One of El Salvador’s most beautiful beaches, perfect for relaxing and enjoying sunsets.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <img
            src="/volcano.jpg"
            alt="Volcano"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Santa Ana Volcano</h3>
            <p className="text-gray-600 mt-2">
              A breathtaking hike with views of the turquoise crater lake.
            </p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <img
            src="/town.jpg"
            alt="Town"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold">Suchitoto</h3>
            <p className="text-gray-600 mt-2">
              A charming colonial town filled with culture, art, and history.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
