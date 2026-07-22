import type { Metadata } from "next";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import { getPublishedDestinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore beaches, volcanoes, historic towns, cultural places, and authentic destinations across El Salvador.",
};

export default function DestinationsPage() {
  const destinations = getPublishedDestinations();

  return (
    <main>
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Explore El Salvador
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Destinations worth discovering
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
            Explore authentic destinations across El Salvador, including
            volcanoes, beaches, historic towns, cultural landmarks, and natural
            places beyond the typical travel itinerary.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Travel guide
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
                Browse all destinations
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Select a destination to learn about its location, highlights,
                travel interests, and practical visitor information.
              </p>
            </div>

            <p className="text-sm font-semibold text-gray-600">
              {destinations.length}{" "}
              {destinations.length === 1 ? "destination" : "destinations"}
            </p>
          </div>

          <div className="mt-10">
            <DestinationGrid destinations={destinations} />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-emerald-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            More destinations are coming
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-700">
            El Salvador Hidden is still growing. New places, travel tips,
            photography, and local recommendations will be added as the
            platform develops.
          </p>
        </div>
      </section>
    </main>
  );
}