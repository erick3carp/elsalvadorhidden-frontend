import type { Metadata } from "next";
import Link from "next/link";
import DestinationExplorer from "@/components/DestinationExplorer";
import {
  getPublishedDestinations,
  getUnpublishedDestinations,
} from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Discover beaches, volcanoes, historic towns, nature, and authentic travel experiences across El Salvador.",
};

export default function DestinationsPage() {
  const destinations = getPublishedDestinations();
  const unpublishedDestinations = getUnpublishedDestinations();

  return (
    <main>
      {/* Hero */}
      <section className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Explore El Salvador
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              Discover unforgettable destinations
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-emerald-50">
              Browse beaches, volcanoes, colonial towns, hidden gems,
              and natural wonders. Search and filter destinations to
              find your next adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Explorer */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <DestinationExplorer destinations={destinations} />
        </div>
      </section>

      {unpublishedDestinations.length > 0 && (
        <section className="border-t border-emerald-100 bg-emerald-50">
          <div className="mx-auto max-w-4xl px-6 py-12 text-center lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Guide in progress
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
              More destinations coming soon
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              We are preparing photography and travel details for additional
              destination guides across El Salvador.
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            Looking for personalized recommendations?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Our AI Planner will soon help you build personalized
            itineraries based on your interests, travel style,
            and available time.
          </p>

          <Link
            href="/ai-planner"
            className="mt-8 inline-block rounded-md bg-emerald-700 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
          >
            Explore AI Planner
          </Link>
        </div>
      </section>
    </main>
  );
}
